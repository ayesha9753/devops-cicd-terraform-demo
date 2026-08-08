output "instance_public_ip" {
  description = "Public IP of the deployed app server"
  value       = aws_instance.app_server.public_ip
}

output "app_url" {
  description = "URL to access the deployed app"
  value       = "http://${aws_instance.app_server.public_ip}:${var.app_port}/health"
}
