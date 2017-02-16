from django.shortcuts import render
from django.http import HttpResponseRedirect, HttpResponse
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.models import User
from django.http import JsonResponse
import json
# Create your views here.

def log_in(request):   
    if ('username' in request.POST) and ('password' in request.POST):
        print '___est________'
        username = request.POST['username']
        password = request.POST['password']
        print '____'
        print username
        print password
        print '____'
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            r = {}
            r['first_name'] = user.first_name
            r['last_name'] = user.last_name
            r['is_active'] = user.is_active
            r['id'] = user.id
            print r
            res = json.dumps(r)
            return HttpResponse(res)
        else:
            r = {}
            r['error'] = True
            res = json.dumps(r)
            return HttpResponse(res)


def log_out(request):  
    logout(request)
    res = json.dumps({})
    return HttpResponse(res)

def registration(request):
    if ('name' in request.POST) and ('email' in request.POST) and ('password' in request.POST):
        user = User.objects.create_user(username = request.POST['name'], first_name = request.POST['first_name'], last_name = request.POST['last_name'], email = request.POST['email'], password = request.POST['password'])
        print '_________user has created_____'
        r = {}
        r['error'] = False 
        res = json.dumps(r)
        return HttpResponse(res)
    else:
        r = {}
        r['error'] = True
        res = json.dumps(r)
        return HttpResponse(res)

