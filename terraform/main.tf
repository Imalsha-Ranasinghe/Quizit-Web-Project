provider "aws" {
  region = "us-east-1" # Change this if using a different AWS region
}

# Create a Key Pair (Use your existing key if available)
resource "aws_key_pair" "quizit_key" {
  key_name   = "quizit-app"
  public_key = file("~/.ssh/id_rsa.pub") # Ensure you have this SSH key
}

# Define Security Group
resource "aws_security_group" "quizit_sg" {
  name        = "quizit-security-group"
  description = "Security group for QuizIt project"

  # Allow SSH (Port 22)
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Allow HTTP (Port 80)
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Allow HTTPS (Port 443)
  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Allow Application Traffic (Port 8080)
  ingress {
    from_port   = 8080
    to_port     = 8080
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Allow Backend API (Port 5000)
  ingress {
    from_port   = 5000
    to_port     = 5000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Allow Frontend Dev Server (Port 5173)
  ingress {
    from_port   = 5173
    to_port     = 5173
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Allow all outbound traffic
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "QuizIt-SG"
  }
}

# Create EC2 Instance
resource "aws_instance" "quizit_app_server" {
  ami           = "ami-0c55b159cbfafe1f0" # Replace with latest AMI ID
  instance_type = "t2.micro" # Change if you need more power
  key_name      = aws_key_pair.quizit_app.key_name
  security_groups = [aws_security_group.quizit_sg.name]

  tags = {
    Name = "QuizIt-App-Server"
  }
}

# Output EC2 Public IP
output "instance_public_ip" {
  value = aws_instance.quizit_app_server.public_ip
}
