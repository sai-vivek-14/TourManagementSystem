from django.http import JsonResponse
import json
from django.core import serializers
from Database.models import User,Login
# Create your views here.

def Check(request):
    if request.method=='POST':
        data=json.loads(request.body)
        un=data.get("username")
        login_data=Login.objects.get(username=un)
        if login_data:
            return JsonResponse({'password':login_data.password},safe=False)
        return JsonResponse({"Error":"Username does not exist"},safe=False)
