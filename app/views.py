from django.shortcuts import render
from django.http import JsonResponse
from .models import CovidData

def index(request):
    return render(request, "index.html")

def load_data(request):
    # Query your database to fetch the data
    queryset = CovidData.objects.all()

    # Serialize the queryset into JSON format
    data = list(queryset.values())

    # Return JSON response
    return JsonResponse(data, safe=False)
