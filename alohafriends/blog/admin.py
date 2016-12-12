from django.contrib import admin

# Register your models here.
from blog.models import Album, Photo, Article

class ArticleAdmin(admin.ModelAdmin):
    fields = ['article_title', 'article_text', 'article_date', 'article_album']

class PhotoAdmin(admin.ModelAdmin):
    fields = ['photo_title', 'photo_album', 'photo_place']

class AlbumAdmin(admin.ModelAdmin):
    fields = ['album_title']

admin.site.register(Article, ArticleAdmin)
admin.site.register(Photo, PhotoAdmin)
admin.site.register(Album, AlbumAdmin)