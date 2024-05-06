from django.db import models

class CovidData(models.Model):
    date = models.DateField()
    cases_new = models.IntegerField()
    cases_import = models.IntegerField()
    cases_recovered = models.IntegerField()
    cases_active = models.IntegerField()
    cases_cluster = models.IntegerField()
    cases_unvax = models.IntegerField()
    cases_pvax = models.IntegerField()
    cases_fvax = models.IntegerField()
    cases_boost = models.IntegerField()
    cases_child = models.IntegerField()
    cases_adolescent = models.IntegerField()
    cases_adult = models.IntegerField()
    cases_elderly = models.IntegerField()
    cases_0_4 = models.IntegerField()
    cases_5_11 = models.IntegerField()
    cases_12_17 = models.IntegerField()
    cases_18_29 = models.IntegerField()
    cases_30_39 = models.IntegerField()
    cases_40_49 = models.IntegerField()
    cases_50_59 = models.IntegerField()
    cases_60_69 = models.IntegerField()
    cases_70_79 = models.IntegerField()
    cases_80 = models.IntegerField()
    cluster_import = models.IntegerField()
    cluster_religious = models.IntegerField()
    cluster_community = models.IntegerField()
    cluster_highRisk = models.IntegerField()
    cluster_education = models.IntegerField()
    cluster_detentionCentre = models.IntegerField()
    cluster_workplace = models.IntegerField()


    class Meta:
        db_table = 'cases_malaysia.csv'