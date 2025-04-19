from django.urls import path

from backend.email_core.views import SendEmailAPIView

urlpatterns = [
    path('send-email/', SendEmailAPIView.as_view(), name='send-email'),
]
