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
    photo_title = models.CharField(max_length=200)
    photo_place = models.ImageField(null=True, upload_to='images', verbose_name='photo')
    photo_album = models.ManyToManyField(Album)

    def __unicode__(self):
        return self.photo_title

class Article(models.Model):
    class Meta:
        db_table = "artice"
    article_title = models.CharField(max_length=200)
    article_text = models.TextField()
    article_date = models.DateTimeField()
    article_album = models.ForeignKey(Album, null=True)
    article_country = models.ForeignKey(Country, null=True)

    def __unicode__(self):
        return self.article_title

class Mark(models.Model):
    class Meta:
        db_table = "mark"
    mark_name = models.CharField(max_length=200)
    mark_article = models.ManyToManyField(Article)

    def __unicode__(self):
        return self.mark_name