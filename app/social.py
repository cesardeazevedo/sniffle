import json
import requests
from django.conf import settings
from django.http import HttpResponse, HttpResponseNotFound, Http404
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import View

class social(View):

    @csrf_exempt
    def callback(self, request, *args, **kwargs):
        print request.POST
        return HttpResponse(json.dumps({}))
