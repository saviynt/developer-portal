import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "reference/ecf/saviynt-external-connector-framework-api-specification",
    },
    {
      type: "category",
      label: "User Import",
      link: {
        type: "doc",
        id: "reference/ecf/user-import",
      },
      items: [
        {
          type: "doc",
          id: "reference/ecf/post-users",
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
        id: "reference/ecf/account-import",
      },
      items: [
        {
          type: "doc",
          id: "reference/ecf/post-accounts",
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
        id: "reference/ecf/access-and-access-membership-import",
      },
      items: [
        {
          type: "doc",
          id: "reference/ecf/post-entitlements-groups",
          label: "This API returns the list of group type entitlements",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/ecf/post-entitlements-roles",
          label: "This API returns the list of role type entitlements",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/ecf/get-accounts-group-memberships",
          label: "This API returns the list of account entitlement association for entitlement type group",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "reference/ecf/get-accounts-role-memberships",
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
        id: "reference/ecf/user-provisioning",
      },
      items: [
        {
          type: "doc",
          id: "reference/ecf/patch-update-user",
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
        id: "reference/ecf/account-provisioning",
      },
      items: [
        {
          type: "doc",
          id: "reference/ecf/post-create-account",
          label: "This API creates an account",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/ecf/patch-update-account",
          label: "This API updates an account",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "reference/ecf/delete-remove-account",
          label: "This API deletes an account",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "reference/ecf/put-change-password",
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
        id: "reference/ecf/access-provisioning",
      },
      items: [
        {
          type: "doc",
          id: "reference/ecf/put-entitlementgroups",
          label: "This API grants group access to an account",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "reference/ecf/this-api-grants-role-access-to-an-account",
          label: "This API grants role access to an account",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "reference/ecf/this-api-removes-group-access-from-an-account",
          label: "This API removes group access from an account",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "reference/ecf/this-api-removes-role-access-from-an-account",
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
          id: "reference/ecf/schemas/users",
          label: "users",
        },
        {
          type: "doc",
          id: "reference/ecf/schemas/accounts",
          label: "accounts",
        },
        {
          type: "doc",
          id: "reference/ecf/schemas/roles",
          label: "roles",
        },
        {
          type: "doc",
          id: "reference/ecf/schemas/groups",
          label: "groups",
        },
        {
          type: "doc",
          id: "reference/ecf/schemas/groupsmembership",
          label: "groupsmembership",
        },
        {
          type: "doc",
          id: "reference/ecf/schemas/rolesmembership",
          label: "rolesmembership",
        },
        {
          type: "doc",
          id: "reference/ecf/schemas/createaccount",
          label: "createaccount",
        },
        {
          type: "doc",
          id: "reference/ecf/schemas/updateuser",
          label: "updateuser",
        },
        {
          type: "doc",
          id: "reference/ecf/schemas/updateaccount",
          label: "updateaccount",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
