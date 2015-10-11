from django.db import models

class User(models.Model):
    id = models.AutoField(primary_key=True)
    fb_id = models.CharField(max_length=150)
    name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    token = models.CharField(max_length=250)
    created_at = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return self.name

