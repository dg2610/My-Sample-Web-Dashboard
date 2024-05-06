from django.urls import path
from . import views


urlpatterns = [
    path("", views.index, name="app-index"),
    path('api/load_data', views.load_data, name='load_data'),
]