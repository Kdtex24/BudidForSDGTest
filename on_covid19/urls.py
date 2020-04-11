from django.urls import path

from django.contrib import admin
from . import views

from rest_framework.urlpatterns import format_suffix_patterns


urlpatterns = [
    path('on-covid-19', views.EstimatorView.as_view(), name='estimator'),
    path('on-covid-19/xml', views.EstimatorViewXML.as_view(), name='estimator-xml'),
    path('on-covid-19/json', views.EstimatorView.as_view(), name='estimator-json'),
    path('on-covid-19/logs', views.Logs.as_view(), name='logger'),


]
# urlpatterns = format_suffix_patterns(urlpatterns, allowed=['json', 'html'])
