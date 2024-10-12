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
        users=User.objects.values('name','username')
        passwords=Login.objects.values('password','username')
        passwords=list(passwords)
        users=list(users)
        data2={'users':users,'passwords':passwords}
        data1 = [{"name": u['name'], "password": p['password']} for u, p in zip(users, passwords)]
        data=[{'data1':data1,'data2':data2}]
        if data:
         return JsonResponse(data,safe=False)
        return JsonResponse({"message": "No users found"})