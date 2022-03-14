locals {
  s3_domain = "${var.environment}.${var.domain_name}"
}


resource "null_resource" "scott_hutson" {
  depends_on = []

  triggers = {
    uuid = "${uuid()}"
  }

  provisioner "local-exec" {
    command = <<EOF
     aws s3 rm s3://${local.s3_domain}/ --recursive && aws s3 cp ${path.module}/../../build/ s3://${local.s3_domain}/ --recursive
   EOF
  }
}
