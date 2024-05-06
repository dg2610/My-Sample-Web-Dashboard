from django.contrib import admin
from import_export.admin import ImportExportModelAdmin
from app.models import CovidData
from app.resources import CovidDataResource

@admin.register(CovidData)
class CovidDataAdmin(ImportExportModelAdmin):
    resource_class = CovidDataResource