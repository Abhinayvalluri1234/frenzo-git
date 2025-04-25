# Hello World Kubernetes Deployment

This repository demonstrates how to deploy a simple "Hello World" app using **NGINX** on a local **Kubernetes cluster** created with **Kind**. The app is served via a Docker container, and a NodePort Service is used to expose it. Optionally, Argo CD can be integrated for GitOps-based CI/CD.

## Objective

Deploy a basic web app with **NGINX** in a Kubernetes cluster. The app will display a "Hello, World from Kubernetes!" message in the browser. This guide includes setting up the Kubernetes cluster, building a Docker image, deploying the app, and optionally using **Argo CD** for continuous delivery.

## Prerequisites

- **Docker**: Install Docker on your local machine. [Docker Installation Guide](https://docs.docker.com/get-docker/)
- **Kind**: Install Kind to create a local Kubernetes cluster. [Kind Installation Guide](https://kind.sigs.k8s.io/docs/user/quick-start/)
- **kubectl**: Install kubectl to interact with the Kubernetes cluster. [kubectl Installation Guide](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
- **Argo CD** (Optional): If using Argo CD for GitOps-based CI/CD.

## Steps to Reproduce

### 1. Create the Application

**Create the HTML content**:
```html
<!-- app/index.html -->
<h1>Hello, World from Kubernetes!</h1>
