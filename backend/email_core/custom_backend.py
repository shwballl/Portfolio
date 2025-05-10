from django.core.mail.backends.smtp import EmailBackend
import ssl
import certifi

class CertifiEmailBackend(EmailBackend):
    def open(self):
        if self.connection:
            return False

        try:
            if self.use_ssl:
                self.connection = self.connection_class(self.host, self.port,
                                                        timeout=self.timeout,
                                                        context=ssl.create_default_context(cafile=certifi.where()))
            else:
                self.connection = self.connection_class(self.host, self.port, timeout=self.timeout)
                self.connection.ehlo()
                if self.use_tls:
                    self.connection.starttls(context=ssl.create_default_context(cafile=certifi.where()))
                    self.connection.ehlo()
            if self.username and self.password:
                self.connection.login(self.username, self.password)
            return True
        except Exception:
            if self.fail_silently:
                return False
            raise
