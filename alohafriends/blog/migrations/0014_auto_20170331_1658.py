# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2017-03-31 13:58
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0013_auto_20170331_1656'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Information',
            new_name='VisitorInformation',
        ),
        migrations.AlterModelTable(
            name='visitorinformation',
            table='VisitorInformation',
        ),
    ]
