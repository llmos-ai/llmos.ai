---
sidebar_position: 1
title: Users
---

LLMOS provides a simple way to manage users and their permissions through the **Users & Authentication** pages.
On bootstrap, LLMOS will create a default admin user `admin`, you can change the default password or adding new admin users if needed.

- There are two types of users: **Admin** and **Standard User** comes as default.
    - **Admin** have full access to the cluster and can create new users and assign them different roles.
    - **Standard User** can only access the LLMOS dashboard with basic permissions and manage resources within assigned namespaces.
- **Admin** users can also create and manage role permissions through the **[Role Templates](./role-template.md)** page.

![Users](/img/docs/user-list.png)

## Create a New User

For admin users, you can create a new user by clicking on the **Create** button.
1. Specify the **Username** and **Password**.
1. *(Optional)* Specify the **Display Name** and **Description** for the user.
1. Check the **Activate** box if you want the user to be active after creation.
1. On the **Global Permissions** section, select the roles that you want to assign to the user.
   - A user can have multiple roles assigned to them.
   - Custom roles can be created by the admins through the **[Role Templates](./role-template.md)** page.

![Create User](/img/docs/user-create-new-user.png)

:::note
- Admin users will have access to the resources in all namespaces.
- Standard users will only have access to limited system resources and **llmos-public** namespace, admin users can help to [assign namespaced-roles](./role-template.md#assigning-namespace-role-to-the-user) to standard users.
:::

## Change Password
For admin users, you can change the password directly from the **Users** page by clicking on the **Edit Config** dropdown menu. 

For standard users, you can change the password by clicking on the **User Avatar > Account & API Keys** from the top right corner. 

1. Click **Change Password** button.
1. Enter the current password.
1. Enter the new and confirm password.
1. Click `Apply` to save the changes.

![Change Password](/img/docs/user-change-password.png)


## Delete a User
For admin users, you can delete a user by clicking on the **Delete** button.
However, admin users can't delete or deactivate themselves from the dashboard.