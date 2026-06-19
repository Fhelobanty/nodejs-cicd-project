# CloudFlow Jenkins Remoting Project

## Overview

This project demonstrates Jenkins Remoting by configuring a Jenkins Controller and a Remote Jenkins Agent on separate AWS EC2 instances. The project automates building, containerizing, and deploying a Node.js application using Jenkins and Docker.

The objective is to showcase secure remote build execution, workload distribution, node isolation, and automated deployment.

---

## Project Architecture

```text
                    ┌─────────────────────┐
                    │  GitHub Repository  │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ Jenkins Controller  │
                    │   (EC2 Instance)    │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ Jenkins Agent Node  │
                    │   (EC2 Instance)    │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   Docker Build      │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ Docker Container    │
                    │  cloudflow:v1       │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ CloudFlow Web App   │
                    │ Port 3000           │
                    └─────────────────────┘
```


---

## Technologies Used

* AWS EC2
* Ubuntu 24.04
* Jenkins LTS
* Jenkins Remoting (agent.jar)
* Node.js 18
* Docker
* Git
* GitHub
* PM2 (initial deployment phase)

---

## Infrastructure

### Jenkins Controller

Responsibilities:

* Manage Jenkins jobs
* Schedule builds
* Distribute workloads to agents

### Jenkins Remote Agent

Responsibilities:

* Receive build instructions
* Execute build jobs
* Build Docker images
* Deploy application containers

---

## Jenkins Remoting Setup

The remote agent was configured using Jenkins Remoting with:

* agent.jar
* WebSocket connection
* Dedicated workspace
* Secure secret key authentication

The controller communicates with the remote agent and delegates build tasks.

---

## CI/CD Workflow

1. Developer pushes code to GitHub.
2. Jenkins fetches latest source code.
3. Build executes on the remote Jenkins agent.
4. Node.js dependencies are installed.
5. Docker image is built.
6. Existing container is stopped and removed.
7. New container is deployed automatically.
8. Application becomes available on port 3000.

---

## Docker Deployment

Dockerfile:

* Uses Node.js 18 image
* Installs project dependencies
* Copies application files
* Exposes port 3000
* Starts application using Node.js

Build Command:

docker build -t cloudflow:v1 .

Run Command:

docker run -d --name cloudflow-container -p 3000:3000 cloudflow:v1

---

## Verification

Successful verification included:

* Remote agent connected and online.
* Builds executed on the remote node.
* Docker image created successfully.
* Docker container deployed successfully.
* CloudFlow application accessible through browser.

---

## Learning Outcomes

Through this project, the following objectives were achieved:

* Jenkins Remoting configuration
* Remote node management
* Distributed build execution
* Node isolation for improved security
* Docker-based deployment automation
* CI/CD pipeline implementation

---

## Screenshots

### Architecture
<img width="1275" height="706" alt="image" src="https://github.com/user-attachments/assets/62ca2c31-f1f7-42b2-92c2-6df6dede95c6" />


### Jenkins Agent Online

<img width="1920" height="514" alt="Node jenkins" src="https://github.com/user-attachments/assets/5b32e687-bb0c-4e1e-bdbb-ebc78200f132" />
<img width="1920" height="739" alt="Agent connected" src="https://github.com/user-attachments/assets/ce88ef21-ce29-49b3-9307-1f160d153f77" />



### Successful Build

<img width="1898" height="909" alt="build success" src="https://github.com/user-attachments/assets/93644938-f5f2-489a-8dd0-0726a8b8278a" />

### Docker Container Running

<img width="843" height="292" alt="docker ps" src="https://github.com/user-attachments/assets/8809c6da-1f9e-4820-ba38-f599d827c820" />


### CloudFlow Application
<img width="1920" height="797" alt="Node js Dashboard" src="https://github.com/user-attachments/assets/92d391d0-f096-452d-9575-ac5a9cca910c" />


## Author

Atoyebi Micheal
CodeAlpha DevOps Inernship Project
