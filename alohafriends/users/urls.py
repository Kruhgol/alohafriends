"""alohafriends URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
import views
from django.contrib.auth.views import login, logout


urlpatterns = [
    url(r'^login/',  views.log_in),
    url(r'^logout/', views.log_out),
    url(r'^registration/', views.registration),
]


# urlpatterns = [
#     url(r'^marks/', views.marks),
#     url(r'^header/', views.header),
#     url(r'^countries/', views.country),
#     url(r'^country/(?P<country>[^/]+)', views.country),
#     url(r'^articles/(?P<country>[^/]+)', views.articles),
#     url(r'^article/(?P<article>[^/]+)', views.article),
#     url(r'^mark/(?P<mark>[^/]+)', views.mark),
#     url(r'^video', views.video),
#     url(r'^map', views.map),
#     url(r'^(?P<article>[^/]+)/addcomment/', views.addComment),
# ]