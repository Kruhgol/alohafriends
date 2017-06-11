from django.contrib import admin

# Register your models here.
from blog.models import Album, Photo, Article, Country, Mark, Video, Marker, Comment, Author, Map

class CommentAdmin(admin.ModelAdmin):
    fields = ['comment_article', 'comment_text']

class CommentInline(admin.StackedInline):
    model = Comment
    extra = 1

class ArticleAdmin(admin.ModelAdmin):
    fields = [  'article_title',
                'article_title_eng', 
                'article_url', 
                'article_text',
                'article_text_eng', 
                'article_anatation',
                'article_anatation_eng', 
                'article_date', 
                'article_album', 
                'article_country', 
                'article_picture',
                'article_pictureSoc', 
                'article_author'
            ]
    inlines = [CommentInline]

class PhotoAdmin(admin.ModelAdmin):
    fields = ['photo_album', 'photo_place']

class PhotoInline(admin.StackedInline):
    model = Photo
    extra = 1

class AlbumAdmin(admin.ModelAdmin):
    fields = ['album_title']
    inlines = [PhotoInline]

class CountryAdmin(admin.ModelAdmin):
    fields = ['country_title', 'country_title_eng', 'country_url','country_picture']

class MarkAdmin(admin.ModelAdmin):
    fields = ['mark_name', 'mark_name_eng', 'mark_url', 'mark_article']

class VideoAdmin(admin.ModelAdmin):
    fields = ['video_title', 'video_url', 'video_iframe', 'video_text', 'video_country']

class MarkerAdmin(admin.ModelAdmin):
    fields = ['marker_title','marker_latitude','marker_longitude']

class AuthorAdmin(admin.ModelAdmin):
    fields = ['article_author', 'article_author_eng', 'article_authorUrl']

class MapAdmin(admin.ModelAdmin):
    fields = ['map_date', 'map_text', 'map_text_eng']

admin.site.register(Article, ArticleAdmin)
admin.site.register(Photo, PhotoAdmin)
admin.site.register(Album, AlbumAdmin)
admin.site.register(Country, CountryAdmin)
admin.site.register(Mark, MarkAdmin)
admin.site.register(Video, VideoAdmin)
admin.site.register(Marker, MarkerAdmin)
admin.site.register(Comment, CommentAdmin)
admin.site.register(Author, AuthorAdmin)
admin.site.register(Map, MapAdmin)