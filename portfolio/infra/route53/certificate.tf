resource "aws_acm_certificate" "scott_hutson" {
  domain_name               = "*.${local.public_domain}"
  validation_method         = "DNS"
  subject_alternative_names = ["${local.public_domain}"]
}

resource "aws_route53_record" "scott_hutson_cert_validation" {
  name    = aws_acm_certificate.scott_hutson.domain_validation_options.0.resource_record_name
  type    = aws_acm_certificate.scott_hutson.domain_validation_options.0.resource_record_type
  zone_id = aws_route53_zone.scott_hutson.id
  records = ["${aws_acm_certificate.scott_hutson.domain_validation_options.0.resource_record_value}"]
  ttl     = 60
}

resource "aws_acm_certificate_validation" "scott_hutson" {
  certificate_arn         = aws_acm_certificate.scott_hutson.arn
  validation_record_fqdns = ["${aws_route53_record.scott_hutson_cert_validation.fqdn}"]
}
