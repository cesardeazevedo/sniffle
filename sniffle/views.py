from app.models import User
from django.shortcuts import render
from django.template import RequestContext

def index(request):
    template_name = 'index.html'
    return render(request, template_name)
