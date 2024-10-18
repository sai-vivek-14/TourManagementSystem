from django.db import models

# Create your models here.
class User(models.Model):
    username=models.EmailField(primary_key=True)
    name=models.CharField(max_length=30)

class Login(models.Model):
    username=models.ForeignKey(User,on_delete=models.CASCADE,to_field='username')
    password=models.CharField(max_length=20)

class Package(models.Model):
    name=models.CharField(max_length=50)
    price=models.IntegerField()
    stay=models.CharField(max_length=100)
    duration=models.CharField(max_length=100,default="Within a week")
    guideDetails = models.TextField(default="A local guide will be assigned")
    accomodationDetails = models.TextField(default="Standard accommodation") 
    transferDetails = models.TextField(default="A Local transport will be arranged.Currently working on finding one.Will update you as soon as we find one")
class FamousPlaces(models.Model):
    pid=models.ForeignKey(Package,to_field="id",on_delete=models.CASCADE)
    image=models.CharField(max_length=100,default="")
    name=models.CharField(max_length=30)
    details=models.CharField(max_length=1000)

class Itenarary(models.Model):
    pid=models.ForeignKey(Package,to_field="id",on_delete=models.CASCADE)
    day=models.CharField(max_length=1000)
    