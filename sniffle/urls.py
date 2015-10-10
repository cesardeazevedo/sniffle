from django.conf.urls import patterns, url
from sniffle.views    import IndexView
from app.social import social

social = social()

urlpatterns = patterns(
    '',
    url(r'^auth/facebook/callback/$', social.callback),
    url(r'^.*$', IndexView.as_view()),
)
