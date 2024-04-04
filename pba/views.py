from django.shortcuts import render


def home(request):
    return render(request, 'index.html')

def inscricao(request):
    return render(request, 'inscricao.html')