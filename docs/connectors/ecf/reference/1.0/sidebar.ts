import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "connectors/ecf/reference/1.0/saviynt-external-connector-framework-api-specification",
    },
    {
      type: "category",
      label: "User Import",
      link: {
        type: "doc",
        id: "connectors/ecf/reference/1.0/user-import",
      },
      items: [
        {
          type: "doc",
          id: "connectors/ecf/reference/1.0/post-users",
          label: "This API returns the list of users",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Account Import",
      link: {
        type: "doc",
        id: "connectors/ecf/reference/1.0/account-import",
      },
      items: [
        {
          type: "doc",
          id: "connectors/ecf/reference/1.0/post-accounts",
          label: "This API returns the list of accounts",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Access and Access Membership Import",
      link: {
        type: "doc",
        id: "connectors/ecf/reference/1.0/access-and-access-membership-import",
      },
      items: [
        {
          type: "doc",
          id: "connectors/ecf/reference/1.0/post-entitlements-groups",
          label: "This API returns the list of group type entitlements",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "connectors/ecf/reference/1.0/post-entitlements-roles",
          label: "This API returns the list of role type entitlements",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "connectors/ecf/reference/1.0/get-accounts-group-memberships",
          label: "This API returns the list of account entitlement association for entitlement type group",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "connectors/ecf/reference/1.0/get-accounts-role-memberships",
          label: "This API returns the list of account entitlement association for entitlement type role",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "User Provisioning",
      link: {
        type: "doc",
        id: "connectors/ecf/reference/1.0/user-provisioning",
      },
      items: [
        {
          type: "doc",
          id: "connectors/ecf/reference/1.0/patch-update-user",
          label: "This API updates a user",
          className: "api-method patch",
        },
      ],
    },
    {
      type: "category",
      label: "Account Provisioning",
      link: {
        type: "doc",
        id: "connectors/ecf/reference/1.0/account-provisioning",
      },
      items: [
        {
          type: "doc",
          id: "connectors/ecf/reference/1.0/post-create-account",
          label: "This API creates an account",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "connectors/ecf/reference/1.0/patch-update-account",
          label: "This API updates an account",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "connectors/ecf/reference/1.0/delete-remove-account",
          label: "This API deletes an account",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "connectors/ecf/reference/1.0/put-change-password",
          label: "This API can be used to change password of an account",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Access Provisioning",
      link: {
        type: "doc",
        id: "connectors/ecf/reference/1.0/access-provisioning",
      },
      items: [
        {
          type: "doc",
          id: "connectors/ecf/reference/1.0/put-entitlementgroups",
          label: "This API grants group access to an account",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "connectors/ecf/reference/1.0/this-api-grants-role-access-to-an-account",
          label: "This API grants role access to an account",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "connectors/ecf/reference/1.0/this-api-removes-group-access-from-an-account",
          label: "This API removes group access from an account",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "connectors/ecf/reference/1.0/this-api-removes-role-access-from-an-account",
          label: "This API removes role access from an account",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Schemas",
      items: [
        {
          type: "doc",
          id: "connectors/ecf/reference/1.0/schemas/users",
          label: "users",
        },
        {
          type: "doc",
          id: "connectors/ecf/reference/1.0/schemas/accounts",
          label: "accounts",
        },
        {
          type: "doc",
          id: "connectors/ecf/reference/1.0/schemas/roles",
          label: "roles",
        },
        {
          type: "doc",
          id: "connectors/ecf/reference/1.0/schemas/groups",
          label: "groups",
        },
        {
          type: "doc",
          id: "connectors/ecf/reference/1.0/schemas/groupsmembership",
          label: "groupsmembership",
        },
        {
          type: "doc",
          id: "connectors/ecf/reference/1.0/schemas/rolesmembership",
          label: "rolesmembership",
        },
        {
          type: "doc",
          id: "connectors/ecf/reference/1.0/schemas/createaccount",
          label: "createaccount",
        },
        {
          type: "doc",
          id: "connectors/ecf/reference/1.0/schemas/updateuser",
          label: "updateuser",
        },
        {
          type: "doc",
          id: "connectors/ecf/reference/1.0/schemas/updateaccount",
          label: "updateaccount",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
