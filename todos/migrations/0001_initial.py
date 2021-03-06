# Generated by Django 3.1.5 on 2021-01-20 15:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('priorities', '0001_initial'),
        ('categories', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Todo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=100, null=True)),
                ('complete', models.BooleanField(default=False)),
                ('due_date', models.DateTimeField()),
                ('notes', models.TextField()),
                ('category_id', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='category', to='categories.category', verbose_name='todo_category')),
                ('priority_id', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='priority', to='priorities.priority', verbose_name='todo_priority')),
            ],
        ),
    ]
