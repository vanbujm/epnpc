provider "aws" {
  profile = "default"
  region = var.region
}

data "aws_iam_policy_document" "aws-terraform-bucket-policy-document" {
  statement {
    sid = "1"

    actions = [
      "s3:GetObject"
    ]

    resources = [
      "arn:aws:s3:::${var.bucket_name}/*",
    ]
  }
}

resource "aws_iam_policy" "aws-terraform-bucket-policy" {
  name   = "aws-terraform-bucket-policy"
  path   = "/"
  policy = data.aws_iam_policy_document.aws-terraform-bucket-policy-document.json
}


resource "aws_s3_bucket" "aws-terraform-bucket" {
  bucket = var.bucket_name
  acl = "public-read"
  policy = data.aws_iam_policy_document.aws-terraform-bucket-policy-document.json

  website {
    index_document = "index.html"
    error_document = "error.html"
  }
}
