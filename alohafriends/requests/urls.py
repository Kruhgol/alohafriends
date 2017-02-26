from django.conf.urls import url, include
import views


urlpatterns = [
    url(r'^sicret/', views.sicret),
    url(r'^marks/', views.marks),
    url(r'^header/', views.header),
    url(r'^countries/', views.country),
    url(r'^country/(?P<country>[^/]+)', views.country),
    url(r'^articles/(?P<country>[^/]+)', views.articles),
    url(r'^article/(?P<article>[^/]+)', views.article),
    url(r'^comments/(?P<article>[^/]+)', views.comments),
    url(r'^mark/(?P<mark>[^/]+)', views.mark),
    url(r'^author/(?P<author>[^/]+)', views.author),
    url(r'^searchMark/', views.searchMark),
    url(r'^video', views.video),
    url(r'^map', views.map),
    url(r'^(?P<article>[^/]+)/addcomment/', views.addComment),
]