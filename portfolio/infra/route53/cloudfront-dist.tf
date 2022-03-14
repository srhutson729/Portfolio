resource "aws_cloudfront_origin_access_identity" "scott_hutson" {
  comment = "scott_hutson"
}

resource "aws_cloudfront_distribution" "scott_hutson" {
  enabled             = true
  is_ipv6_enabled     = true
  comment             = "scott_hutson"
  default_root_object = "index.html"
  price_class         = "PriceClass_100"
  wait_for_deployment = false
  aliases             = ["${local.public_domain}"]

  origin {
    domain_name = data.aws_s3_bucket.scott_hutson.bucket_regional_domain_name
    origin_id   = "scott_hutson"

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.scott_hutson.cloudfront_access_identity_path
    }
  }

  custom_error_response {
    error_caching_min_ttl = 300
    error_code            = 404
    response_code         = 200
    response_page_path    = "/index.html"
  }

  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "scott_hutson"

    forwarded_values {
      query_string = true

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 60
    max_ttl                = 600
  }

  restrictions {
    geo_restriction {
      restriction_type = "whitelist"
      locations        = ["US", "CA"]
    }
  }

  viewer_certificate {
    acm_certificate_arn = aws_acm_certificate.scott_hutson.arn
    ssl_support_method  = "sni-only"
  }
}
