from django.conf.urls import patterns, url
from app.social import social

social = social()

urlpatterns = patterns(
    '',
    url(r'^me/$', social.me),
    url(r'^auth/facebook/callback/$', social.callback),
    url(r'^.*$', 'sniffle.views.index', name='index'),
)
