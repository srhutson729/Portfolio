resource "aws_s3_bucket" "scott_hutson_assets" {
  bucket = "scott-hutson-assets-${var.environment}"
}
