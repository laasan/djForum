from django.shortcuts import render, get_list_or_404
from .models import Author, Category, Post


def home(request):
    return render(request, "forums.html", {})


def detail(request, slug):
    post = get_list_or_404(Post, slug=slug)
    context = {
        "post": post
    }
    return render(request, "detail.html", context)


def posts(request):
    return render(request, "posts.html", {})
