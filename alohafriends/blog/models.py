# -*- coding: utf-8 -*-

from __future__ import unicode_literals

from django.db import models

# Create your models here.
# class Welcome(models.Model):
#     class Meta:
#         db_table = "welcome"
#     welcome_title = models.CharField(max_length=200)
#     welcome_picture = models.ImageField(null=True, upload_to='images', verbose_name='photo')

#     def __unicode__(self):
#         return self.country_title    

class Country(models.Model):
    class Meta:
        db_table = "country"
    country_title = models.CharField(max_length=200)
    #add english
    country_title_eng = models.CharField(max_length=200)

    country_url = models.CharField(max_length=50, help_text='name for URL. exemple - name_of_url')
    country_picture = models.ImageField(null=True, upload_to='images', verbose_name='photo')

    def __unicode__(self):
        return self.country_title

class Album(models.Model):
    class Meta:
        db_table = "album"
    album_title = models.CharField(max_length=200)

    def __unicode__(self):
        return self.album_title

class Photo(models.Model):
    class Meta:
        db_table = "photo"
    photo_place = models.ImageField(null=True, upload_to='images', verbose_name='photo')
    photo_album = models.ForeignKey(Album, null=True)

class Author(models.Model):
    class Meta:
        db_table = "author"
    article_author = models.CharField(max_length=200)
    #add english
    article_author_eng = models.CharField(max_length=200)

    article_authorUrl = models.CharField(max_length=200, help_text='exemple - name_of_url')  
    def __unicode__(self):
        return self.article_author 

class Article(models.Model):
    class Meta:
        db_table = "artice"
    article_title = models.CharField(max_length=200)

    article_title_eng = models.CharField(max_length=200)

    article_url = models.CharField(max_length=50, help_text='exemple - name_of_url')
    article_text = models.TextField()

    article_text_eng = models.TextField()

    article_anatation = models.TextField(null=True, help_text='краткое описание')

    article_anatation_eng = models.TextField(null=True, help_text='short describtion')

    article_date = models.DateTimeField()
    article_album = models.ForeignKey(Album, null=True)
    article_country = models.ForeignKey(Country, null=True)
    article_picture = models.ImageField(null=True, upload_to='images', verbose_name='photo')
    article_author = models.ForeignKey(Author, null=True)
    article_pictureSoc = models.ImageField(null=True, upload_to='images', verbose_name='photo for Soc')

    def __unicode__(self):
        return self.article_title

class Comment(models.Model):
    class Meta:
        db_table = "comment"
    comment_article = models.ForeignKey(Article, null=True)
    comment_text = models.TextField()
    comment_user_first_name = models.CharField(max_length=50)
    comment_user_last_name = models.CharField(max_length=50)
    comment_user_link = models.CharField(max_length=150)
    comment_user_picture = models.CharField(max_length=150)


class Mark(models.Model):
    class Meta:
        db_table = "mark"
    mark_name = models.CharField(max_length=200)

    mark_name_eng = models.CharField(max_length=200)

    mark_url = models.CharField(max_length=50, help_text='exemple - name_of_url')
    mark_article = models.ManyToManyField(Article)

    def __unicode__(self):
        return self.mark_name

class Video(models.Model):
    class Meta:
        db_table = "video"
    video_title = models.CharField(max_length=50)
    video_url = models.CharField(max_length=50, help_text='Название на английском')
    video_iframe = models.CharField(max_length=200, help_text='с ютуба src___')
    video_text = models.TextField()
    video_country = models.ForeignKey(Country, null=True)
    
class Marker(models.Model):
    class Meta:
        db_table = "marker"
    marker_title = models.CharField(max_length=50)
    marker_latitude = models.CharField(max_length=50, help_text='широта')
    marker_longitude = models.CharField(max_length=50, help_text='долгота')
    
    def __unicode__(self):
        return self.marker_title  

class Map(models.Model):
    class Meta:
        db_table = "map"
    map_date = models.CharField(max_length=50)
    map_text = models.CharField(max_length=200)
    map_text_eng = models.CharField(max_length=200)

    def __unicode__(self):
        return self.map_date  