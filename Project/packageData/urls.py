from django.urls import path
from . import views

urlpatterns=[
    path('card',views.Card),
    path('package',views.PackagePage),
]