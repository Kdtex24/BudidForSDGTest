from rest_framework import serializers


class EstimatorSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=50, required=True)
    avgAge = serializers.FloatField( required=True)
    avgDailyIncomeInUSD = serializers.FloatField( required=True)
    avgDailyIncomePopulation = serializers.FloatField( required=True)
    periodType = serializers.CharField(max_length=50, required=True)
    timeToElapse = serializers.IntegerField(required=True)
    reportedCases = serializers.IntegerField(required=True)
    population = serializers.IntegerField(required=True)
    totalHospitalBeds = serializers.IntegerField(required=True,)
