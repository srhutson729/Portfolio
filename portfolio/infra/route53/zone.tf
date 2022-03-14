#
# Note: when this builds, aws will assign nameservers to this zone.
# In order for the certificate to issue, you must add those nameservers to the registrar site (godaddy, etc)
#

resource "aws_route53_zone" "scott_hutson" {
  name = local.public_domain
}
