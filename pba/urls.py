from django.contrib import admin
from django.urls import path, include, re_path
from django.views.static import serve
from django.conf import settings
from .views import home, inscricao

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'),
    path('inscricao/', inscricao, name='inscricao'),
    re_path(r'^static/(?P<path>.*)$', serve, {'document_root': settings.STATIC_ROOT}),
]
