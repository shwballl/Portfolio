import os
from dotenv import load_dotenv
from django.core.mail import EmailMultiAlternatives

load_dotenv()


def send_email(name, email, message):
    try:
        subject = f'New message from Portfolio website from {name} <{email}>'
        from_email = 'trivialapp6@gmail.com' 
        to_email = os.getenv("TO_EMAIL", "")

        html_content = f"""
            <html>
            <body>
                <h2>{message}</h2>
            </body>
            </html>
        """
        text_content = f"New message from Portfolio website from <h1>{email}</h1>: {message}"

        msg = EmailMultiAlternatives(subject, text_content, from_email, [to_email])
        msg.attach_alternative(html_content, "text/html")
        msg.send()
    except Exception as e:
        raise