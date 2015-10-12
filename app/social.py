import json
import requests
import jwt
from datetime import datetime, timedelta
from app.models import User
from django.conf import settings
from django.http import HttpResponse, HttpResponseBadRequest, Http404
from django.views.generic import View

class social(View):

    def create_token(self, user):
        payload = {
            'sub': user.id,
            'iat': datetime.utcnow(),
            'exp': datetime.utcnow() + timedelta(days=14)
        }
        token = jwt.encode(payload, settings.TOKEN_SECRET)
        return token.decode('unicode_escape')

    def parse_token(req):
        token = req.META.get('HTTP_AUTHORIZATION').split()[1]
        return jwt.decode(token, settings.TOKEN_SECRET)

    def callback(self, request, *args, **kwargs):

        access_token_url = 'https://graph.facebook.com/v2.3/oauth/access_token'
        graph_api_url = 'https://graph.facebook.com/v2.3/me?fields=name,email'

        params = json.loads(request.body)

        params = {
            'client_id': params['clientId'],
            'redirect_uri': params['redirectUri'],
            'client_secret': settings.FACEBOOK_SECRET,
            'code': params['code'],
        }

        r = requests.post(access_token_url, params)
        access_token = json.loads(r.text)

        # GET => https://graph.facebook.com/v2.3/me
        # to get user profile (email, first_name, last_name, gender, id)
        r = requests.get(graph_api_url, params=access_token)
        profile = json.loads(r.text)

        if request.META.get('HTTP_AUTHORIZATION'):

            user = User.objects.filter(fb_id=profile['id']).first()

            if user:
                return HttpResponseBadRequest

            payload = parse_token(request)

            user = User.objects.filter(fb_id=payload['sub']).first()
            if not user:
                return HttpResponseBadRequest


            user = User(fb_id = profile['id'],
                        name  = profile['name'],
                        email = profile['email'])
            user.save()
            token = self.create_token(user)
            return HttpResponse(json.dumps({ 'token': token }))

        user = User.objects.filter(fb_id=profile['id']).first()
        if user:
            token = self.create_token(user)
            return HttpResponse(json.dumps({ 'token': token }))

        user = User(fb_id = profile['id'],
                    name  = profile['name'],
                    email = profile['email'])
        user.save()

        token = self.create_token(user)
        return HttpResponse(json.dumps({ 'token': token }))

