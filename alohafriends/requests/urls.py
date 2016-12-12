from django.conf.urls import url, include
import views


urlpatterns = [
    url(r'^marks/', views.marks),

]