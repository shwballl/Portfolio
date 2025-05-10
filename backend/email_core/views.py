from rest_framework.response import Response
from rest_framework.views import APIView
from django.views.decorators.csrf import csrf_exempt
from .utils import send_email

class SendEmailAPIView(APIView):
    def post(self, request):
        name = request.data.get('name')
        email = request.data.get('email')
        message = request.data.get('message')
        try:
            print(f"Received: {name}, {email}, {message}")
            send_email(name, email, message)
        except Exception as e:
            print(f"Error sending email: {e}")
            return Response({'error': str(e)}, status=500)
        return Response({'message': 'Email sent successfully'}, status=200)
