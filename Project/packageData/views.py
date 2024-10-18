from django.http import JsonResponse
from Database.models import Package,FamousPlaces,Itenarary
import json
# Create your views here.
def Card(request):
    if request.method=='GET':
        data=Package.objects.all().values('id','name','stay','price')
        data=list(data)
        if data:
            return JsonResponse(data,safe=False)
        return JsonResponse({"message":"Nothing here"},safe=False)
def PackagePage(request):
    if request.method=='GET':
       
        packages=Package.objects.all().values('id','name','stay','price','duration','guideDetails','accomodationDetails','transferDetails')
        packages=list(packages)
        famousplaces=[]
        itenarary=[]
        for package in packages:
            package_id=package['id']
            famousplaces=list(FamousPlaces.objects.filter(pid=package_id).values('name','image','details'))
            itenarary=list(Itenarary.objects.filter(pid=package_id).values('day'))
            package['FamousPlaces']=famousplaces
            package['Itinerary']=itenarary
        if packages:
            return JsonResponse(packages,safe=False)
        return JsonResponse({"message":"Nothing here"},safe=False)
    if request.method=='POST':
        data=json.loads(request.body)
        id=data.get('id')
        pkg=Package.objects.filter(id=id).values('id','name','stay','price','duration','guideDetails','accomodationDetails','transferDetails')
        pkg=list(pkg)
        pkg=pkg[0]
        p_id=pkg['id']
        fp=FamousPlaces.objects.filter(pid=p_id).values('name','details','image')
        it=Itenarary.objects.filter(pid=p_id).values('day')
        pkg['FamousPlaces']=list(fp)
        pkg['itinerary']=list(it)
        if pkg:
            return JsonResponse(pkg,safe=False)
        return JsonResponse({"message":"Not available"},safe=False)