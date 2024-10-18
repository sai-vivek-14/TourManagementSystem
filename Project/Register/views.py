from django.shortcuts import render
from django.http import JsonResponse
from Database.models import User,Login
import json
# Create your views here.
def Register(request):
    if request.method=='POST':
        data=json.loads(request.body)
        mName=data.get("name")
        un=data.get("username")
        pasw=data.get("password")
        if un and pasw:
            user=User.objects.create(username=un,name=mName)
            Login.objects.create(username=user,password=pasw)
            return JsonResponse("Successfull",status=201,safe=False)
        return JsonResponse("Unsuccessfull",status=400,safe=False)
    if request.method=='GET':
        users=User.objects.all().values('name','username')
        users=list(users)
        for user in users:
           password=Login.objects.filter(username=user['username']).values('password')
           user['password']=password[0]['password']
        if users:
         return JsonResponse(users,safe=False)
        return JsonResponse({"message": "No users found"})