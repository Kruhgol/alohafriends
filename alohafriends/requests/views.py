from django.shortcuts import render
from blog.models import Country, Article, Album, Photo, Mark
from django.http import HttpResponse
import json
# Create your views here.

def marks(request):
    marks = Mark.objects.all()
    r = []
    for m in marks:
        o = {}
        o['name'] = m.mark_name
        o['link'] = m.mark_article.get().article_title
        r.append(o)

    print '_________'
    print r 
    res = json.dumps(r)
    print '_ _ _ _ _ _ _ _ _'
    print res
    return HttpResponse(res)
