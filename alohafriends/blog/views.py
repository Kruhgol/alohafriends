from django.shortcuts import render, render_to_response, redirect
from django.http.response import HttpResponse, Http404

# Create your views here.


def index(request):
    return render(request, 'index.html')