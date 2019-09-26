provider "aws" {
  profile = "default"
  region = "us-east-2"
}

resource "aws_s3_bucket" "aws-terraform-bucket" {
  bucket = "vanbujm-aws-terraform-bucket"
  acl = "public-read"

  website {
    index_document = "index.html"
    error_document = "error.html"
  }
}
