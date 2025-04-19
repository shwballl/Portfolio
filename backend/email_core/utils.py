from django.core.mail import EmailMultiAlternatives

def send_email(name, email, message):
    subject = 'New message from Portfolio website from {name} {email}'
    from_email = 'trivial6@gmail.com'
    to_email = "kyzyanazar@gmail.com"

    html_content = f"""
        <html>
        <body>
            <p>{message}</p>
        </body>
        </html>
    """
    text_content = f"New message from Portfolio website from {email}: {message}"

    # Construct message
    msg = EmailMultiAlternatives(subject, text_content, from_email, [to_email])
    msg.attach_alternative(html_content, "text/html")
    msg.send()