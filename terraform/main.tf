provider "aws" {
  region = "eu-north-1"  # Updated to your region
}

resource "aws_vpc" "main_vpc" {
  # Use your existing VPC ID
  id = "vpc-06aac4cda7ff94b9c"
}

resource "aws_subnet" "public_subnet" {
  vpc_id            = aws_vpc.main_vpc.id
  cidr_block        = "10.0.1.0/24"
  map_public_ip_on_launch = true
  availability_zone = "eu-north-1a"  # Updated to match your region
}

resource "aws_security_group" "load_balancer_sg" {
  vpc_id = aws_vpc.main_vpc.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_lb" "app_lb" {
  name               = "quizit-lb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.load_balancer_sg.id]
  subnets            = [aws_subnet.public_subnet.id]

  enable_deletion_protection = false
}

output "load_balancer_dns" {
  value = aws_lb.app_lb.dns_name
}