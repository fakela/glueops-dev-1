---
id: glueops-cluster-domain
title: Cluster Domains
type: tutorial
---


# GlueOps Cluster Domains

GlueOps utilizes a deterministic DNS naming convention for your clusters and associated applications, providing a structured and organized way to access your deployed services. 

:::info
The cluster domain is automatically provided by GlueOps as part of its service.
:::

Let's break down the components of a GlueOps cluster domain using an example:

```
order-api.nonprod.antoniostacos.onglueops.com
```

The domain consists of the following parts:

1. **Subdomain for the Application or Service (`order-api`):** This is the unique subdomain specific to a single application deployment. You can fully customize this name, making it easier to identify both applications and environments.

2. **Cluster Identifier (`nonprod`):** This part represents the identifier of the cluster to which the application is deployed. In a typical setup, you might have both production and non-production (nonprod) clusters. For instance, a staging deployment of the `order-api` to a non-production cluster could look like `order-api-staging.nonprod.antoniostacos.onglueops.com`. Similarly, a production deployment of the same application to a production cluster would start with `order-api.prod.antoniostacos.onglueops.com`.

3. **Organization Subdomain (`antoniostacos`):** This component identifies your organization and remains common to all clusters deployed on the GlueOps platform.

4. **Core Domain for GlueOps Tenant Service (`onglueops.com`):** This is the primary domain for the GlueOps tenant service, providing a standardized endpoint for accessing your applications and services.

The deterministic DNS naming convention ensures consistency and clarity in accessing your applications across different environments and clusters within the GlueOps platform. This organized approach simplifies application management and facilitates seamless communication between services.