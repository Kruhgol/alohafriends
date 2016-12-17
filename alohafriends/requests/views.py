from django.shortcuts import render
from blog.models import Country, Article, Album, Photo, Mark
from django.http import HttpResponse
import json
from django.http import JsonResponse
# Create your views here.

def article(request,article):
    a = Article.objects.get(article_title = article)
    r = {}
    r['title'] = a.article_title
    r['text'] = a.article_text
    r['photos'] = []
    print "********"
    print a.article_album.photo_set.all()
    l = list(a.article_album.photo_set.all())
    for i in l:
        print "__**__**__"
        print a.article_album.photo_set.all()[0].photo_place.url
        r['photos'].append(i.photo_place.url)
        #r['photos'].append(a.article_album.photo_set.all()[i].photo_place.url)
    res = json.dumps(r)
    return HttpResponse(res)


def articles(request, country):
    c = Country.objects.get(country_title = country)
    articles = c.article_set.all()
    r = []
    for i in articles:
        o={}
        o['title'] = i.article_title
        o['text'] = i.article_text
        o['picture'] = i.article_album.photo_set.all()[0].photo_place.url
        if i.mark_set.all() :
            arr=[]
            for j in i.mark_set.all():
                arr.append(j.mark_name)
            o['marks'] = arr
        #o['date'] = i.article_date
        r.append(o)       
    res = json.dumps(r)
    return HttpResponse(res)


def country(request):
    coun = Country.objects.all()
    r = []
    for c in coun:
        o = {}
        o['title'] = c.country_title
        o['picture'] = c.country_picture.url
        r.append(o)
    res = json.dumps(r)
    return HttpResponse(res)

def marks(request):
    marks = Mark.objects.all()
    r = []
    for m in marks:
        o = {}
        o['name'] = m.mark_name
        o['link'] = m.mark_article.get().article_title
        r.append(o)

    res = json.dumps(r)
    return HttpResponse(res)

def header(requests):
    coun = Country.objects.all()
    r = []
    for c in coun:
        o = {}
        o['title'] = c.country_title
        o['picture'] = c.country_picture.url
        r.append(o)
    res = json.dumps(r)
    return HttpResponse(res)