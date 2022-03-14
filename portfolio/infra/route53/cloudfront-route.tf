resource "aws_route53_record" "scott_hutson_cloudfront" {
  zone_id = aws_route53_zone.scott_hutson.zone_id
  name    = local.public_domain
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.scott_hutson.domain_name
    zone_id                = aws_cloudfront_distribution.scott_hutson.hosted_zone_id
    evaluate_target_health = false
  }
}
