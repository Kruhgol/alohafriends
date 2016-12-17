from django.conf.urls import url, include
import views


urlpatterns = [
    url(r'^marks/', views.marks),
    url(r'^header/', views.header),
    url(r'^country/', views.country),
    url(r'^articles/(?P<country>[^/]+)', views.articles),
    url(r'^article/(?P<article>[^/]+)', views.article),
]