variable "aws_region" {
  description = "AWS region to deploy into"
  type        = string
  default     = "us-east-1"
}

variable "project_name" {
  description = "Name prefix used for tagging resources"
  type        = string
  default     = "devops-portfolio"
}

variable "environment" {
  description = "Deployment environment"
  type        = string
  default     = "dev"
}

variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t2.micro"
}

variable "ami_id" {
  description = "AMI ID for the EC2 instance (Amazon Linux 2 recommended)"
  type        = string
}

variable "key_pair_name" {
  description = "Existing EC2 key pair name for SSH access"
  type        = string
}

variable "allowed_ssh_cidr" {
  description = "CIDR block allowed to SSH into the instance (restrict this to your IP)"
  type        = string
  default     = "0.0.0.0/0"
}

variable "app_port" {
  description = "Port the app is exposed on"
  type        = number
  default     = 3000
}

variable "docker_image" {
  description = "Docker image to run on the instance (e.g. yourdockerhub/devops-portfolio-api:latest)"
  type        = string
}
