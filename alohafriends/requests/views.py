from django.shortcuts import render
from blog.models import Country, Article, Album, Photo, Mark, Video, Marker, Comment, Author, Map
from django.http import HttpResponse
import json
from django.http import JsonResponse
from random import random


# Create your views here.

# def header(request):
#     print '**********************************'
#     c = Country.objects.all()
#     r = []
#     for i in c:
#         o = {}
#         o['title'] = i.country_title
#         o['url'] = i.country_url
#     res = json.dumps(r)
#     return HttpResponse(res)
def sicret(request):
    return 'ok'

def randomArticle(request):
    articles = Article.objects.all();
    r = []
    for i in range(3):
        randomNumber =  int(random()*(len(articles)));
        article = articles[randomNumber]
        o = {}
        o['ru']={}
        o['eng']={}
        o['ru']['title'] = article.article_title
        o['eng']['title'] = article.article_title_eng
        o['url'] = article.article_url
        o['picture'] = article.article_album.photo_set.all()[0].photo_place.url
        o['date'] = json.dumps(article.article_date.strftime("%Y-%m-%d %H:%M:%S"))
        o['ru']['country'] = article.article_country.country_title
        o['eng']['country'] = article.article_country.country_title_eng
        o['random'] = randomNumber
        r.append(o)
    res = json.dumps(r)
    return HttpResponse(res)

def addComment(request, article):
    a = Article.objects.get(article_url = article)
    if 'text' in request.POST:
        text = request.POST['text']
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        link = request.POST['link']
        picture = request.POST['picture']
        a = Article.objects.get(article_url = article)
        c = Comment.objects.create(comment_article = a, comment_text = text, comment_user_first_name = first_name, comment_user_last_name = last_name, comment_user_link = link, comment_user_picture = picture)
    comments = list(a.comment_set.all())
    r = {}
    r['comments'] = []
    for i in comments:
        co = {}
        co['text'] = i.comment_text
        co['first_name'] = i.comment_user_first_name
        co['last_name'] = i.comment_user_last_name
        co['link'] = i.comment_user_link
        co['picture'] = i.comment_user_picture
        r['comments'].append(co)
    res = json.dumps(r)
    return HttpResponse(res)         

    # print request.GET['text']
    
    # if 'text' in request.GET:
    #     print 'urrrra'
        # print request.GET.aaa['text']
        # text = request.GET['comment-text']
        # a = Article.objects.get(article_url = article)
        # c = Comment.objects.create(comment_article = a, comment_text = text)
        # print '______________________create new comment_______________'

def mark(request,mark):
    m = Mark.objects.get(mark_url = mark)
    a = m.mark_article.all()
    r = {}
    r['ru'] = {}
    r['eng'] = {}
    r['ru']['mark_name'] = m.mark_name
    r['eng']['mark_name'] = m.mark_name_eng
    r['mark_url'] = m.mark_url
    r['articles'] = []
    for i in a:
        o = {}
        o['ru'] = {}
        o['eng'] = {}
        o['ru']['title'] = i.article_title
        o['eng']['title'] = i.article_title_eng
        o['url'] = i.article_url
        o['ru']['text'] = i.article_text
        o['eng']['text'] = i.article_text_eng
        o['ru']['anatation'] = i.article_anatation
        o['eng']['anatation'] = i.article_anatation_eng
        o['picture'] = i.article_album.photo_set.all()[0].photo_place.url
        o['ru']['author'] = i.article_author.article_author
        o['eng']['author'] = i.article_author.article_author_eng
        o['authorUrl'] = i.article_author.article_authorUrl
        if i.mark_set.all() :
            arr=[]
            for j in i.mark_set.all():
                obj = {}
                obj['ru'] = {}
                obj['eng'] = {}
                obj['ru']['name'] = j.mark_name
                obj['eng']['name'] = j.mark_name_eng
                obj['url'] = j.mark_url
                arr.append(obj)
            o['marks'] = arr
        r['articles'].append(o)     
    res = json.dumps(r)
    return HttpResponse(res)

def author(request,author):
    m = Author.objects.get(article_authorUrl = author)
    a = m.article_set.all()     #ischet vse svyazannire s nim obiekti
    r = {}
    r['ru'] = {}
    r['eng'] = {}
    r['ru']['author'] = m.article_author
    r['ru']['author'] = m.article_author_eng
    r['authorUrl'] = m.article_authorUrl
    r['articles'] = []
    for i in a:
        o = {}
        o['ru'] = {}
        o['eng'] = {}
        o['ru']['title'] = i.article_title
        o['eng']['title'] = i.article_title_eng
        o['url'] = i.article_url
        o['ru']['text'] = i.article_text
        o['eng']['text'] = i.article_text_eng
        o['ru']['anatation'] = i.article_anatation
        o['eng']['anatation'] = i.article_anatation_eng
        o['picture'] = i.article_album.photo_set.all()[0].photo_place.url
        o['ru']['author'] = i.article_author.article_author
        o['eng']['author'] = i.article_author.article_author_eng
        o['authorUrl'] = i.article_author.article_authorUrl
        if i.mark_set.all() :
            arr=[]
            for j in i.mark_set.all():
                obj = {}
                obj['ru'] = {}
                obj['eng'] = {}
                obj['ru']['name'] = j.mark_name
                obj['eng']['name'] = j.mark_name_eng
                obj['url'] = j.mark_url
                arr.append(obj)
            o['marks'] = arr
        r['articles'].append(o)     
    res = json.dumps(r)
    return HttpResponse(res)

def map(request):
    m = Map.objects.all()
    r = {}
    r['eng'] = []
    r['ru'] = []
    if m:
        for i in m:
            ru = {}
            eng = {}
            eng['date'] = i.map_date
            eng['text'] = i.map_text_eng
            ru['date'] = i.map_date
            ru['text'] = i.map_text
            r['eng'].append(eng)
            r['ru'].append(ru)
    res = json.dumps(r)
    return HttpResponse(res)


def video(request):
    v = Video.objects.all()
    v = list(v)
    r = []
    for i in v:
        o = {}
        o['title'] = i.video_title
        o['text'] = i.video_text
        o['iframe'] = i.video_iframe
        r.append(o)
    res = json.dumps(r)
    return HttpResponse(res);


def article(request,article):
    a = Article.objects.get(article_url = article)
    author = a.article_author
    r = {}
    r['ru'] = {}
    r['eng'] = {}
    r['ru']['title'] = a.article_title
    r['eng']['title'] = a.article_title_eng
    r['url'] = a.article_url
    r['ru']['text'] = a.article_text
    r['eng']['text'] = a.article_text_eng
    r['ru']['anatation'] = a.article_anatation
    r['eng']['anatation'] = a.article_anatation_eng
    r['picture'] = a.article_picture.url
    r['data'] = json.dumps(a.article_date.strftime("%Y-%m-%d %H:%M:%S"))
    r['ru']['author'] = author.article_author
    r['eng']['author'] = author.article_author_eng
    r['authorUrl'] = author.article_authorUrl
    r['photos'] = []
    l = list(a.article_album.photo_set.all())
    for i in l:
        r['photos'].append(i.photo_place.url)
    res = json.dumps(r)
    return HttpResponse(res)

def comments(request, article):
    a = Article.objects.get(article_url = article)
    comments = list(a.comment_set.all())
    r = {}
    r['comments'] = []
    for i in comments:
        co = {}
        co['text'] = i.comment_text
        co['first_name'] = i.comment_user_first_name
        co['last_name'] = i.comment_user_last_name
        co['link'] = i.comment_user_link
        co['picture'] = i.comment_user_picture
        r['comments'].append(co)
    res = json.dumps(r)
    return HttpResponse(res)

def country(request, country):
    c = Country.objects.get(country_url = country)
    r = {}
    r['ru'] = {}
    r['eng'] = {}
    r['ru']['title'] = c.country_title
    r['eng']['title'] = c.country_title_eng
    r['url'] = c.country_url
    r['picture'] = c.country_picture.url
    res = json.dumps(r)
    return HttpResponse(res)

def articles(request, country):
    c = Country.objects.get(country_url = country)
    articles = c.article_set.all()
    r = []
    for i in articles:
        o={}
        o['ru'] = {}
        o['eng'] = {}
        o['ru']['title'] = i.article_title
        o['eng']['title'] = i.article_title_eng
        o['url'] = i.article_url
        o['ru']['text'] = i.article_text
        o['eng']['text'] = i.article_text_eng
        o['ru']['anatation'] = i.article_anatation
        o['eng']['anatation'] = i.article_anatation_eng
        o['picture'] = i.article_album.photo_set.all()[0].photo_place.url
        o['ru']['author'] = i.article_author.article_author
        o['eng']['author'] = i.article_author.article_author_eng
        o['authorUrl'] = i.article_author.article_authorUrl
        if i.mark_set.all() :
            arr=[]
            for j in i.mark_set.all():
                obj = {}
                obj['ru'] = {}
                obj['eng'] = {}
                obj['ru']['name'] = j.mark_name
                obj['eng']['name'] = j.mark_name_eng
                obj['url'] = j.mark_url
                arr.append(obj)
            o['marks'] = arr
        #o['date'] = i.article_date
        r.append(o)       
    res = json.dumps(r)
    return HttpResponse(res)


# def countries(request):
#     print "______country___________"
#     coun = Country.objects.all()
#     r = []
#     for c in coun:
#         o = {}
#         o['title'] = c.country_title
#         o['url'] = c.country_url
#         o['picture'] = c.country_picture.url
#         r.append(o)
#     res = json.dumps(r)
#     print res
#     return HttpResponse(res)

def marks(request):
    marks = Mark.objects.all()
    r = []
    for m in marks:
        o = {}
        o['ru'] = {}
        o['eng'] = {}
        o['ru']['name'] = m.mark_name
        o['eng']['name'] = m.mark_name_eng
        o['url'] = m.mark_url
        # o['link'] = m.mark_article.get().article_url
        r.append(o)

    res = json.dumps(r)
    return HttpResponse(res)

def header(requests):
    coun = Country.objects.all()
    r = []
    for c in coun:
        o = {}
        o['ru'] = {}
        o['eng'] = {}
        o['ru']['title'] = c.country_title
        o['eng']['title'] = c.country_title_eng
        o['url'] = c.country_url
        r.append(o)
    res = json.dumps(r)
    return HttpResponse(res)





def searchMark(request):
    r = {}
    if Mark.objects.all().filter(mark_name = request.POST['text']):
        r['status'] = True
        r['mark'] = Mark.objects.get(mark_name = request.POST['text']).mark_url
    if Mark.objects.all().filter(mark_name_eng = request.POST['text']):
        r['status'] = True
        r['mark'] = Mark.objects.get(mark_name_eng = request.POST['text']).mark_url
    else:
        r['status'] = False
    res = json.dumps(r)
    return HttpResponse(res)