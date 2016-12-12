from django.contrib import admin

# Register your models here.
from blog.models import Album, Photo, Article, Country, Mark

class ArticleAdmin(admin.ModelAdmin):
    fields = ['article_title', 'article_text', 'article_date', 'article_album']

class PhotoAdmin(admin.ModelAdmin):
    fields = ['photo_title', 'photo_album', 'photo_place']

class AlbumAdmin(admin.ModelAdmin):
    fields = ['album_title']

class CountryAdmin(admin.ModelAdmin):
    fields = ['country_title']

class MarkAdmin(admin.ModelAdmin):
    fields = ['mark_name', 'mark_article']

admin.site.register(Article, ArticleAdmin)
admin.site.register(Photo, PhotoAdmin)
admin.site.register(Album, AlbumAdmin)
admin.site.register(Country, CountryAdmin)
admin.site.register(Mark, MarkAdmin)