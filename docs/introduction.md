---
id: introduction
title: GlueOps Platform Overview
type: explainer
---


GlueOps offers powerful platforms that enable a seamless, GitOps-driven workflow for deploying applications in production and nonprod environments. GlueOps provides both DevOps and DataOps solutions that are a centralized orchestration point for managing the deployment and infrastructure of applications, streamlining the development process and improving collaboration between developers and operations teams. With the GlueOps Platform, developers can easily manage application deployments, create ephemeral preview environments, and ensure the smooth transition of changes to production.

## Platform Components

The GlueOps DevOps Platform consists of several key components that work together to facilitate efficient and automated application deployments. These components include:

1. **GlueOps Platform**: The central orchestration point of all GlueOps services. The Platform utilizes webhooks to monitor repository activity and automatically updates application deployments and infrastructure based on changes within repositories.

2. **Repositories**: Application deployments are managed through repositories. The GlueOps Platform supports two main types of repositories:

   - **Deployment Configurations Repository**: A central repository that configures both production and non-production deployments within the GlueOps Platform. It defines the infrastructure, environments, and dependencies required for application deployments. Additionally, it generates ephemeral preview environments that allow developers to explore and validate their applications before merging changes or deploying to production.
   
   - **Application Repositories**: These repositories contain the actual application code, configurations, and Dockerfiles. Each application repository must include a Dockerfile, which defines the build process for creating the application's container image. Application repositories enable developers to manage and version control their applications independently, allowing for flexibility in deploying and scaling different applications.

3. **Container Registry**: The Container Registry serves as the central repository for storing and distributing container images. When changes are pushed to application repositories, the GlueOps Platform automatically builds new container images based on the Dockerfile specifications and publishes them to the container registry. This ensures that the correct versions of applications are deployed consistently across different environments.

4. **Encrypted Secret Store**: The GlueOps Platform provides an encrypted secret store for securely storing secret values. It can be integrated with common secret store options, such as AWS Secrets Manager, or provide its own encrypted secret store with automated backups. The encrypted secret store ensures that sensitive information, such as API keys or database credentials, is stored securely and accessible only to authorized applications.

5. **Kubernetes Clusters**: The GlueOps Platform manages Kubernetes clusters to deploy applications and services. It supports an arbitrary number of clusters, but GlueOps recommends separating workloads by deploying production and non-prod applications to different clusters. Kubernetes provides container orchestration capabilities, ensuring scalability, reliability, and easy management of application deployments.

6. **Metrics, Logs, and Alerts**: The GlueOps Platform automatically collects logs from Kubernetes and deployed applications, offering centralized access and visibility into application performance. It also provides dashboards for monitoring various services, enabling developers and operations teams to track metrics and identify any potential issues. Custom alerts can be provisioned to notify stakeholders about aberrant service behavior that requires attention or remediation.

The GlueOps Platform's comprehensive set of components simplifies the deployment process, enables efficient collaboration, and promotes best practices in DevOps and DataOps. By leveraging these components, developers and operations teams can accelerate application development, ensure consistent deployments, and achieve higher levels of productivity and reliability.