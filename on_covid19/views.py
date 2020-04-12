from rest_framework.decorators import api_view, renderer_classes
from rest_framework.response import Response
from rest_framework import status
from .estimator import estimator
import json
# from .serializers import EstimatorSerializer
from rest_framework.views import APIView
from rest_framework.renderers import JSONRenderer, StaticHTMLRenderer
from rest_framework_xml.renderers import XMLRenderer
from rest_framework_tracking.mixins import LoggingMixin
from rest_framework_tracking.models import APIRequestLog
from .Renderer import PlainTextRenderer


def load_and_dump_data(data):
    loaded_data = json.dumps(data)
    return json.loads(loaded_data)


class EstimatorView(LoggingMixin, APIView):
    renderer_classes = [JSONRenderer]

    def post(self, request, format=None):
        # serializer = EstimatorSerializer(data=request.data)
        # if serializer.is_valid():
        # data = serializer.validated_data

        data = load_and_dump_data(request.data)
        response_data = estimator(data)
        return Response(response_data)
        # else:
        #     return Response(status=status.HTTP_400_BAD_REQUEST)


class EstimatorViewXML(LoggingMixin, APIView):
    renderer_classes = [XMLRenderer]

    def post(self, request, format=None):
        data = load_and_dump_data(request.data)
        response_data = estimator(data)
        return Response(response_data)
        # else:
        #     return Response(status=status.HTTP_400_BAD_REQUEST)


class Logs(APIView):
    renderer_classes = [PlainTextRenderer]

    def get(self, request, format=None):
        logs = [f"{log.method}\t\t{log.path}\t\t{log.status_code}{log.response_ms} ms \n" for log in APIRequestLog.objects.all()]
        logs = ''.join(logs)
        return Response(logs, content_type='text/plain')

        # return Response(status=status.HTTP_400_BAD_REQUEST)
