from django.db import models

# Create your models here.
class User(models.Model):
    username=models.EmailField(primary_key=True)
    name=models.CharField(max_length=30)

class Login(models.Model):
    username=models.ForeignKey(User,on_delete=models.CASCADE,to_field='username')
    password=models.CharField(max_length=20)
