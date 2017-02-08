from django.contrib import admin

# Register your models here.
from blog.models import Album, Photo, Article, Country, Mark, Video, Marker

class ArticleAdmin(admin.ModelAdmin):
    fields = ['article_title', 'article_url', 'article_text', 'article_anatation', 'article_date', 'article_album', 'article_country']

class PhotoAdmin(admin.ModelAdmin):
    fields = ['photo_album', 'photo_place']

class PhotoInline(admin.StackedInline):
    model = Photo
    extra = 1

class AlbumAdmin(admin.ModelAdmin):
    fields = ['album_title']
    inlines = [PhotoInline]

class CountryAdmin(admin.ModelAdmin):
    fields = ['country_title', 'country_url','country_picture']

class MarkAdmin(admin.ModelAdmin):
    fields = ['mark_name', 'mark_url', 'mark_article']

class VideoAdmin(admin.ModelAdmin):
    fields = ['video_title', 'video_url', 'video_iframe', 'video_text', 'video_country']

class MarkerAdmin(admin.ModelAdmin):
    fields = ['marker_title','marker_latitude','marker_longitude']

admin.site.register(Article, ArticleAdmin)
admin.site.register(Photo, PhotoAdmin)
admin.site.register(Album, AlbumAdmin)
admin.site.register(Country, CountryAdmin)
admin.site.register(Mark, MarkAdmin)
admin.site.register(Video, VideoAdmin)
admin.site.register(Marker, MarkerAdmin)