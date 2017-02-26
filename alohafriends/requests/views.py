from django.shortcuts import render
from blog.models import Country, Article, Album, Photo, Mark, Video, Marker, Comment, Author
from django.http import HttpResponse
import json
from django.http import JsonResponse


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
    print 'hello'

def searchMark(request):
    if 'text' in request.POST:
        print request.POST['text']
    r = {}
    if Mark.objects.all().filter(mark_name = request.POST['text']):
        r['status'] = True
        r['mark'] = Mark.objects.get(mark_name = request.POST['text']).mark_url
    else:
        r['status'] = False
    res = json.dumps(r)
    return HttpResponse(res)

def addComment(request, article):
    a = Article.objects.get(article_url = article)
    print a.article_url
    print request.POST
    print request.POST['text']
    if 'text' in request.POST:
        print '_____est______'
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
    print '_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*'
    m = Mark.objects.get(mark_url = mark)
    print 'mark ' + mark
    print m
    a = m.mark_article.all()
    print a
    r = {}
    r['mark_name'] = m.mark_name
    r['mark_url'] = m.mark_url
    r['articles'] = []
    for i in a:
        o = {}
        o['title'] = i.article_title
        o['url'] = i.article_url
        o['text'] = i.article_text
        o['anatation'] = i.article_anatation
        o['picture'] = i.article_album.photo_set.all()[0].photo_place.url
        o['author'] = i.article_author.article_author
        o['authorUrl'] = i.article_author.article_authorUrl
        if i.mark_set.all() :
            arr=[]
            for j in i.mark_set.all():
                obj = {}
                obj['name'] = j.mark_name
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
    r['author'] = m.article_author
    r['authorUrl'] = m.article_authorUrl
    r['articles'] = []
    for i in a:
        o = {}
        o['title'] = i.article_title
        o['url'] = i.article_url
        o['text'] = i.article_text
        o['anatation'] = i.article_anatation
        o['picture'] = i.article_album.photo_set.all()[0].photo_place.url
        o['author'] = i.article_author.article_author
        o['authorUrl'] = i.article_author.article_authorUrl
        if i.mark_set.all() :
            arr=[]
            for j in i.mark_set.all():
                obj = {}
                obj['name'] = j.mark_name
                obj['url'] = j.mark_url
                arr.append(obj)
            o['marks'] = arr
        r['articles'].append(o)     
    res = json.dumps(r)
    return HttpResponse(res)

def map(request):
    m = Marker.objects.all()
    m = list(m)
    r = []
    for i in m:
        o = {}
        o['title'] = i.marker_title
        o['Lat'] = i.marker_latitude
        o['Lng'] = i.marker_longitude
        r.append(o)
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
    print res
    return HttpResponse(res);

def article(request,article):
    a = Article.objects.get(article_url = article)
    author = a.article_author
    r = {}
    r['title'] = a.article_title
    r['url'] = a.article_url
    r['text'] = a.article_text
    r['anatation'] = a.article_anatation
    r['picture'] = a.article_picture.url
    r['data'] = json.dumps(a.article_date.strftime("%Y-%m-%d %H:%M:%S"))
    r['author'] = author.article_author
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
    r['title'] = c.country_title
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
        o['title'] = i.article_title
        o['url'] = i.article_url
        o['text'] = i.article_text
        o['anatation'] = i.article_anatation
        o['picture'] = i.article_album.photo_set.all()[0].photo_place.url
        o['author'] = i.article_author.article_author
        o['authorUrl'] = i.article_author.article_authorUrl
        if i.mark_set.all() :
            arr=[]
            for j in i.mark_set.all():
                obj = {}
                obj['name'] = j.mark_name
                obj['url'] = j.mark_url
                arr.append(obj)
            o['marks'] = arr
        #o['date'] = i.article_date
        r.append(o)       
    res = json.dumps(r)
    return HttpResponse(res)


def countries(request):
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
        # o['link'] = m.mark_article.get().article_url
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
        r.append(o)
    res = json.dumps(r)
    return HttpResponse(res)