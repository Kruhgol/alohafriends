# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2017-02-08 17:19
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0005_marker'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comment_text', models.TextField()),
                ('comment_article', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='blog.Article')),
            ],
            options={
                'db_table': 'comment',
            },
        ),
        migrations.AlterField(
            model_name='marker',
            name='marker_latitude',
            field=models.CharField(help_text='\u0448\u0438\u0440\u043e\u0442\u0430', max_length=50),
        ),
        migrations.AlterField(
            model_name='marker',
            name='marker_longitude',
            field=models.CharField(help_text='\u0434\u043e\u043b\u0433\u043e\u0442\u0430', max_length=50),
        ),
    ]
