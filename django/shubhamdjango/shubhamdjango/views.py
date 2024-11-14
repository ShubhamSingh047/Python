from django.http import HttpResponse
from django.shortcuts import render

def home(request):
    # return HttpResponse("hello, world. You are at shubham Home page!");
    return render(request, 'website/index.html')


def about(request):
    return HttpResponse("hello, world. You are at shubham About page");

def contact(request):
    return HttpResponse("hello, world. You are at Django Contact page");