from django.shortcuts import render


def home(request):
    return render(request, "forums.html", {})


def detail(request):
    return render(request, "detail.html", {})


def posts(request):
    return render(request, "posts.html", {})
