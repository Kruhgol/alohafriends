# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2016-12-12 20:34
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_mark'),
    ]

    operations = [
        migrations.AddField(
            model_name='mark',
            name='mark_article',
            field=models.ManyToManyField(to='blog.Article'),
        ),
    ]
