from django.shortcuts import render
from blog.models import Country, Article, Album, Photo, Mark
from django.http import HttpResponse
import json
from django.http import JsonResponse
# Create your views here.

def article(request,article):
    a = Article.objects.get(article_url = article)
    r = {}
    r['title'] = a.article_title
    r['url'] = a.article_url
    r['text'] = a.article_text
    r['anatation'] = a.article_anatation
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
    c = Country.objects.get(country_url = country)
    articles = c.article_set.all()
    r = []
    for i in articles:
        o={}
        o['title'] = i.article_title
        o['url'] = i.article_url
        o['text'] = i.article_text
        o['anatation'] = i.article_anatation
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
    print "______country___________"
    coun = Country.objects.all()
    r = []
    for c in coun:
        o = {}
        o['title'] = c.country_title
        o['url'] = c.country_url
        o['picture'] = c.country_picture.url
        r.append(o)
    res = json.dumps(r)
    print res
    return HttpResponse(res)

def marks(request):
    marks = Mark.objects.all()
    r = []
    for m in marks:
        o = {}
        o['name'] = m.mark_name
        o['url'] = m.mark_url
        o['link'] = m.mark_article.get().article_url
        r.append(o)

    res = json.dumps(r)
    return HttpResponse(res)

def header(requests):
    coun = Country.objects.all()
    r = []
    for c in coun:
        o = {}
        o['title'] = c.country_title
        o['url'] = c.country_url
        o['picture'] = c.country_picture.url
        r.append(o)
    res = json.dumps(r)
    return HttpResponse(res)