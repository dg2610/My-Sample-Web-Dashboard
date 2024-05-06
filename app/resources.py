from import_export import resources
from app.models import CovidData

class CovidDataResource(resources.ModelResource):
    class Meta:
        model = CovidData
        fields = (
            'date', 'cases_new', 'cases_import', 'cases_recovered', 'cases_active',
            'cases_cluster', 'cases_unvax', 'cases_pvax', 'cases_fvax', 'cases_boost',
            'cases_child', 'cases_adolescent', 'cases_adult', 'cases_elderly',
            'cases_0_4', 'cases_5_11', 'cases_12_17', 'cases_18_29', 'cases_30_39',
            'cases_40_49', 'cases_50_59', 'cases_60_69', 'cases_70_79', 'cases_80',
            'cluster_import', 'cluster_religious', 'cluster_community', 'cluster_highRisk',
            'cluster_education', 'cluster_detentionCentre', 'cluster_workplace'
        )