provider "aws" {
  region = "eu-north-1"
}

resource "aws_security_group" "allow_custom_ports" {
  name        = "allow_custom_ports"
  description = "Allow inbound traffic for custom ports"

  // Allow SSH access
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  // Allow HTTP access (port 80)
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  // Allow custom port 5000
  ingress {
    from_port   = 5000
    to_port     = 5000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  // Allow custom port 5173
  ingress {
    from_port   = 5173
    to_port     = 5173
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  // Allow HTTPS access (port 443)
  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  // Allow other ports as needed (e.g., 8080)
  ingress {
    from_port   = 8080
    to_port     = 8080
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  // Egress rule to allow all outbound traffic
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1" # -1 means all protocols
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "mern_app" {
  ami                    = "ami-011e54f70c1c91e17" # Example Ubuntu AMI
  instance_type          = "t3.micro"
  key_name               = "quizit_key" # Replace with your key pair name
  vpc_security_group_ids = [aws_security_group.allow_custom_ports.id]
  tags = {
    Name = "MERN-App-Server"
  }

  user_data = <<-EOF
              #!/bin/bash
              sudo apt update -y
              sudo apt install -y docker.io docker-compose
              sudo systemctl enable docker
              sudo systemctl start docker
              sudo apt install -y ansible
              EOF

  connection {
    type        = "ssh"
    user        = "ubuntu"
    private_key = file("D:/6th sem/DevOps/quizit_key.pem")
    host        = self.public_ip
  }
}

output "instance_ip" {
  value = aws_instance.mern_app.public_ip
}