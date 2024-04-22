import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "reference/rest/5.0/saviynt-enterprise-identity-cloud-api-reference",
    },
    {
      type: "category",
      label: "Authentication",
      link: {
        type: "doc",
        id: "reference/rest/5.0/auth",
      },
      items: [
        {
          type: "doc",
          id: "reference/rest/5.0/get-authorization-token",
          label: "Get Authorization Token",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/refresh-authorization-token",
          label: "Refresh Authorization Token",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/authenticate-user",
          label: "Authenticate User",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Users",
      link: {
        type: "doc",
        id: "reference/rest/5.0/users",
      },
      items: [
        {
          type: "doc",
          id: "reference/rest/5.0/create-user",
          label: "Create User",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/update-user",
          label: "Update User",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/get-user-details",
          label: "Get User Details",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/get-list-of-users",
          label: "Get List of Users",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/validate-user-data",
          label: "Validate User Data",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/change-user-password",
          label: "Change User Password",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Accounts",
      link: {
        type: "doc",
        id: "reference/rest/5.0/accounts",
      },
      items: [
        {
          type: "doc",
          id: "reference/rest/5.0/get-account-details",
          label: "Get Account Details",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/export-account",
          label: "Export Account",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/create-account",
          label: "Create Account",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/update-account",
          label: "Update Account",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/assign-account-to-user",
          label: "Assign Account to User",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Access",
      link: {
        type: "doc",
        id: "reference/rest/5.0/access",
      },
      items: [
        {
          type: "doc",
          id: "reference/rest/5.0/get-access-details-for-user",
          label: "Get Access Details For User",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/get-flat-response-entitlement-details-for-user",
          label: "Get Flat Response Entitlement Details For User",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/assign-entitlement-to-account",
          label: "Assign Entitlement to Account",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/remove-entitlement-from-account",
          label: "Remove Entitlement from Account",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Entitlements",
      link: {
        type: "doc",
        id: "reference/rest/5.0/entitlements",
      },
      items: [
        {
          type: "doc",
          id: "reference/rest/5.0/get-entitlements",
          label: "Get Entitlements",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/get-child-entitlements",
          label: "Get Child Entitlements",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/create-update-entitlement",
          label: "Create/Update Entitlement",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/get-entitlement-values-for-endpoint",
          label: "Get Entitlement Values For Endpoint",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Privileges",
      link: {
        type: "doc",
        id: "reference/rest/5.0/privileges",
      },
      items: [
        {
          type: "doc",
          id: "reference/rest/5.0/create-privilege",
          label: "Create Privilege",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/update-privilege",
          label: "Update Privilege",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/delete-privilege",
          label: "Delete Privilege",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/get-list-of-privileges-for-entitlement-type",
          label: "Get List of Privileges for Entitlement Type",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Roles",
      link: {
        type: "doc",
        id: "reference/rest/5.0/roles",
      },
      items: [
        {
          type: "doc",
          id: "reference/rest/5.0/remove-entitlement-from-role",
          label: "Remove Entitlement From Role",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/add-role",
          label: "Add Role",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/get-role-details-for-user",
          label: "Get Role Details for user",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/get-firefighter-role-details",
          label: "Get FireFighter Role Details",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/remove-role",
          label: "Remove Role",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "User Groups",
      link: {
        type: "doc",
        id: "reference/rest/5.0/groups",
      },
      items: [
        {
          type: "doc",
          id: "reference/rest/5.0/create-update-usergroup",
          label: "Create/Update UserGroup",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/add-remove-user-from-usergroup",
          label: "Add/Remove User From UserGroup",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/delete-usergroup",
          label: "Delete UserGroup",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/get-list-of-usergroups",
          label: "Get List of UserGroups",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Security Systems",
      link: {
        type: "doc",
        id: "reference/rest/5.0/systems",
      },
      items: [
        {
          type: "doc",
          id: "reference/rest/5.0/create-security-system",
          label: "Create Security System",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/update-security-system",
          label: "Update Security System",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/get-list-of-security-systems",
          label: "Get List of Security Systems",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/delete-security-system",
          label: "Delete Security System",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Endpoints",
      link: {
        type: "doc",
        id: "reference/rest/5.0/endpoints",
      },
      items: [
        {
          type: "doc",
          id: "reference/rest/5.0/create-endpoint",
          label: "Create Endpoint",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/update-endpoint",
          label: "Update Endpoint",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/get-list-of-endpoints",
          label: "Get List of Endpoints",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Connections",
      link: {
        type: "doc",
        id: "reference/rest/5.0/connections",
      },
      items: [
        {
          type: "doc",
          id: "reference/rest/5.0/get-list-of-connections",
          label: "Get List of Connections",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/get-connections-details",
          label: "Get Connections Details",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/delete-connections",
          label: "Delete Connections",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/test-connection",
          label: "Test Connection",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Entitlement Types",
      link: {
        type: "doc",
        id: "reference/rest/5.0/entitlement-types",
      },
      items: [
        {
          type: "doc",
          id: "reference/rest/5.0/create-entitlement-type",
          label: "Create Entitlement Type",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/update-entitlement-type",
          label: "Update Entitlement Type",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/get-list-of-entitlement-types",
          label: "Get List of Entitlement Types",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/delete-entitlement-types",
          label: "Delete Entitlement Types",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Dynamic Attributes",
      link: {
        type: "doc",
        id: "reference/rest/5.0/dynamic-attributes",
      },
      items: [
        {
          type: "doc",
          id: "reference/rest/5.0/create-dynamic-attribute",
          label: "Create Dynamic Attribute",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/update-dynamic-attribute",
          label: "Update Dynamic Attribute",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/fetch-dynamic-attributes",
          label: "Fetch Dynamic Attributes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/delete-dynamic-attribute",
          label: "Delete Dynamic Attribute",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Organizations",
      link: {
        type: "doc",
        id: "reference/rest/5.0/organizations",
      },
      items: [
        {
          type: "doc",
          id: "reference/rest/5.0/create-organization",
          label: "Create Organization",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/update-organization",
          label: "Update Organization",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/get-organization",
          label: "Get Organization",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/delete-organization",
          label: "Delete Organization",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Analytics",
      link: {
        type: "doc",
        id: "reference/rest/5.0/analytics",
      },
      items: [
        {
          type: "doc",
          id: "reference/rest/5.0/fetch-list-of-analytics",
          label: "Fetch List of Analytics",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/fetch-analytics-details",
          label: "Fetch Analytics Details",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/run-analytics-controls",
          label: "Run Analytics Controls",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/fetch-runtime-controls-data",
          label: "Fetch Runtime Controls Data",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/fetch-runtime-controls-data-v-2",
          label: "Fetch Runtime Controls Data V2",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/fetch-list-of-analytics-es",
          label: "Fetch List of Analytics ES",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/fetch-control-attributes",
          label: "Fetch Control Attributes",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/fetch-control-details-es",
          label: "Fetch Control Details ES",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Access Recommendations",
      link: {
        type: "doc",
        id: "reference/rest/5.0/access-recommendations",
      },
      items: [
        {
          type: "doc",
          id: "reference/rest/5.0/get-access-recommendations",
          label: "Get Access Recommendations",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Dashboards",
      link: {
        type: "doc",
        id: "reference/rest/5.0/dashboards",
      },
      items: [
        {
          type: "doc",
          id: "reference/rest/5.0/retrieve-dashboard-tiles-data",
          label: "Retrieve Dashboard Tiles Data",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/retrieve-dashboard-account-data",
          label: "Retrieve Dashboard Account Data",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/retrieve-dashboard-data",
          label: "Retrieve Dashboard Data",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Request Access",
      link: {
        type: "doc",
        id: "reference/rest/5.0/request-access",
      },
      items: [
        {
          type: "doc",
          id: "reference/rest/5.0/get-user-requestable-entitlements",
          label: "Get User Requestable Entitlements",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/validate-entitlement-request-data",
          label: "Validate Entitlement Request Data",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/request-to-create-entitlement-based-role",
          label: "Request to Create Entitlement Based Role",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/create-auto-approved-request",
          label: "Create Auto-approved Request",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/create-birthright-request",
          label: "Create Birthright Request",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/add-approver-to-existing-request",
          label: "Add Approver to existing Request",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/cancel-pending-request",
          label: "Cancel Pending Request",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/get-list-of-pending-requests-for-approver",
          label: "Get List of Pending Requests for Approver",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/fetch-request-approval-details",
          label: "Fetch Request Approval Details",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/fetch-request-access-attributes",
          label: "Fetch Request Access Attributes",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Request History",
      link: {
        type: "doc",
        id: "reference/rest/5.0/request-history",
      },
      items: [
        {
          type: "doc",
          id: "reference/rest/5.0/fetch-request-history-my-pending-requests",
          label: "Fetch Request History (my pending requests)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/fetch-request-history-details",
          label: "Fetch Request History Details",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Request Approval",
      link: {
        type: "doc",
        id: "reference/rest/5.0/request-approval",
      },
      items: [
        {
          type: "doc",
          id: "reference/rest/5.0/approve-reject-each-line-item-in-a-request",
          label: "Approve/Reject each line item in a request",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/get-pending-approvals",
          label: "Get Pending Approvals",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/approve-reject-entire-request",
          label: "Approve/Reject entire request",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Request User",
      link: {
        type: "doc",
        id: "reference/rest/5.0/request-user",
      },
      items: [
        {
          type: "doc",
          id: "reference/rest/5.0/create-user-request",
          label: "Create User Request",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/bulk-upload-users",
          label: "Bulk Upload Users",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/update-user-request",
          label: "Update User Request",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/get-requestable-users",
          label: "Get Requestable Users",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Request Role",
      link: {
        type: "doc",
        id: "reference/rest/5.0/request-role",
      },
      items: [
        {
          type: "doc",
          id: "reference/rest/5.0/create-role-request",
          label: "Create Role Request",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/update-role-request",
          label: "Update Role Request",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Request Organization",
      link: {
        type: "doc",
        id: "reference/rest/5.0/request-organization",
      },
      items: [
        {
          type: "doc",
          id: "reference/rest/5.0/create-organization-request",
          label: "Create Organization Request",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/update-organization-request",
          label: "Update Organization Request",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Tasks",
      link: {
        type: "doc",
        id: "reference/rest/5.0/arstasks",
      },
      items: [
        {
          type: "doc",
          id: "reference/rest/5.0/create-task-remove-entitlement",
          label: "Create Task - Remove Entitlement",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/complete-single-task",
          label: "Complete Single Task",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/update-tasks",
          label: "Update Tasks",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/discontinue-tasks",
          label: "Discontinue Tasks",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/discontinue-all-pending-tasks",
          label: "Discontinue All Pending Tasks",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/fetch-task-details",
          label: "Fetch Task Details",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/check-task-status",
          label: "Check Task Status",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "User Delegation",
      link: {
        type: "doc",
        id: "reference/rest/5.0/delegates",
      },
      items: [
        {
          type: "doc",
          id: "reference/rest/5.0/get-delegate-user-list",
          label: "Get Delegate User List",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/create-delegate",
          label: "Create Delegate",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/fetch-existing-delegates-list",
          label: "Fetch Existing Delegates List",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/edit-delegate",
          label: "Edit Delegate",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/delete-delegate",
          label: "Delete Delegate",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Attestations",
      link: {
        type: "doc",
        id: "reference/rest/5.0/attestations",
      },
      items: [
        {
          type: "doc",
          id: "reference/rest/5.0/fetch-attestation-list",
          label: "Fetch Attestation List",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/fetch-attestation-details",
          label: "Fetch Attestation Details",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/certify-usermanager-requests",
          label: "Certify UserManager Requests",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/fetch-attestation-account-entitlement-details",
          label: "Fetch Attestation Account Entitlement Details",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/approve-reject-attestation-account-details",
          label: "Approve Reject Attestation Account Details",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/lock-attestation",
          label: "Lock Attestation",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Campaigns",
      link: {
        type: "doc",
        id: "reference/rest/5.0/campaigns",
      },
      items: [
        {
          type: "doc",
          id: "reference/rest/5.0/fetch-campaign-list",
          label: "Fetch Campaign List",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/fetch-campaign-details",
          label: "Fetch Campaign Details",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/lock-campaign",
          label: "Lock Campaign",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/fetch-certification-list",
          label: "Fetch Certification List",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/discontinue-campaigns-and-certifications",
          label: "Discontinue Campaigns and Certifications",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/reassign-certification",
          label: "Reassign Certification",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "User Manager Campaigns",
      link: {
        type: "doc",
        id: "reference/rest/5.0/campaigns-user-manager",
      },
      items: [
        {
          type: "doc",
          id: "reference/rest/5.0/certify-user-manager-for-campaign",
          label: "Certify User Manager for Campaign",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/fetch-account-entitlement-details",
          label: "Fetch Account Entitlement Details",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/approve-reject-campaign-account-entitlement-details",
          label: "Approve Reject Campaign Account Entitlement Details",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/reassign-usermanager-step-1-for-campaign",
          label: "Reassign UserManager Step 1 for Campaign",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/consult-campaign-account-entitlement-details",
          label: "Consult Campaign Account Entitlement Details",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/reassign-certification-at-account-and-entitlement-level-copy",
          label: "Reassign Certification at Account and Entitlement Level Copy",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Entitlement Owner Campaigns",
      link: {
        type: "doc",
        id: "reference/rest/5.0/campaigns-entitlement-owner",
      },
      items: [
        {
          type: "doc",
          id: "reference/rest/5.0/consult-entitlementowner-step-1-for-campaign",
          label: "Consult EntitlementOwner Step 1 for Campaign",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/consult-entitlementowner-step-2-for-campaign",
          label: "Consult EntitlementOwner Step 2 for Campaign",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/fetch-account-entitlement-details-1",
          label: "Fetch Account Entitlement Details",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/fetch-entitlement-owner-campaign-details",
          label: "Fetch Entitlement Owner Campaign Details",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/fetch-flat-response-entitlement-owner-campaign-details",
          label: "Fetch Flat Response Entitlement Owner Campaign Details",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/lock-campaign-1",
          label: "Lock Campaign",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/approve-reject-account-entitlement-details",
          label: "Approve Reject Account Entitlement Details",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/certify-entitlement-owner-for-campaign",
          label: "Certify Entitlement Owner for Campaign",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/reassign-entitlement-owner-for-campaign",
          label: "Reassign Entitlement Owner for Campaign",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/reassign-certification-at-account-level",
          label: "Reassign Certification at Account Level",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Application Owner Campaigns",
      link: {
        type: "doc",
        id: "reference/rest/5.0/campaigns-application-owner",
      },
      items: [
        {
          type: "doc",
          id: "reference/rest/5.0/fetch-account-entitlement-details-2",
          label: "Fetch Account Entitlement Details",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/approve-reject-account-entitlement-details-1",
          label: "Approve Reject Account Entitlement Details",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/lock-campaign-2",
          label: "Lock Campaign",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/consult-appowner-account-entitlement-details",
          label: "Consult AppOwner Account Entitlement Details",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/reassign-application-owner-for-campaign",
          label: "Reassign Application Owner for Campaign",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Segregation of Duties",
      link: {
        type: "doc",
        id: "reference/rest/5.0/sod",
      },
      items: [
        {
          type: "doc",
          id: "reference/rest/5.0/sod-evaluation-for-sap-functions",
          label: "SoD Evaluation for SAP Functions",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/sod-evaluation-for-non-sap-functions",
          label: "SoD Evaluation for Non - SAP Functions",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/add-mitigating-control-risk-account",
          label: "Add Mitigating Control Risk Account",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/upload-sod-ruleset",
          label: "Upload SOD Ruleset",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Security",
      link: {
        type: "doc",
        id: "reference/rest/5.0/security",
      },
      items: [
        {
          type: "doc",
          id: "reference/rest/5.0/fetch-security-questions",
          label: "Fetch Security Questions",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/fetch-user-security-questions",
          label: "Fetch User Security Questions",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/validate-user-security-answers",
          label: "Validate User Security Answers",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/create-security-questions",
          label: "Create Security Questions",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/create-password-policy",
          label: "Create Password Policy",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Common Utilities",
      link: {
        type: "doc",
        id: "reference/rest/5.0/utils",
      },
      items: [
        {
          type: "doc",
          id: "reference/rest/5.0/upload-new-file",
          label: "Upload New File",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/import-application-data",
          label: "Import Application Data",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/send-email",
          label: "Send Email",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Job Management",
      link: {
        type: "doc",
        id: "reference/rest/5.0/jobs",
      },
      items: [
        {
          type: "doc",
          id: "reference/rest/5.0/create-and-update-trigger",
          label: "Create and Update Trigger",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/check-job-status",
          label: "Check Job Status",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/delete-trigger",
          label: "Delete Trigger",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/run-job-trigger",
          label: "Run Job Trigger",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/fetch-job-metadata",
          label: "Fetch Job Metadata",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/createtrigger",
          label: "createTrigger",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/resumepausejobs",
          label: "resumePauseJobs",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/check-import-status",
          label: "Check Import Status",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/force-complete",
          label: "Force Complete",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Transport",
      link: {
        type: "doc",
        id: "reference/rest/5.0/transport",
      },
      items: [
        {
          type: "doc",
          id: "reference/rest/5.0/export-package",
          label: "Export Package",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/import-package",
          label: "Import Package",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/transport-status",
          label: "Transport Status",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Provisioning Policies",
      link: {
        type: "doc",
        id: "reference/rest/5.0/policies",
      },
      items: [
        {
          type: "doc",
          id: "reference/rest/5.0/fetch-technical-rules",
          label: "Fetch Technical Rules",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/update-technical-rules",
          label: "Update Technical Rules",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/create-technical-rules",
          label: "Create Technical Rules",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/delete-technical-rules",
          label: "Delete Technical Rules",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Datasets",
      link: {
        type: "doc",
        id: "reference/rest/5.0/datasets",
      },
      items: [
        {
          type: "doc",
          id: "reference/rest/5.0/createdataset",
          label: "createDataset",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/getdatasetvalues",
          label: "getDatasetValues",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/updatedatasetvalues",
          label: "updateDatasetValues",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/deletedataset",
          label: "deleteDataset",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/uploaddatasetcsv",
          label: "uploadDatasetCSV",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/updatedataset",
          label: "updateDataset",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Role Membership",
      link: {
        type: "doc",
        id: "reference/rest/5.0/role-membership",
      },
      items: [
        {
          type: "doc",
          id: "reference/rest/5.0/add-remove-user-from-sav-role",
          label: "Add/Remove User from SAV ROLE",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/rest/5.0/get-flat-response-role-details-for-user",
          label: "Get Flat Response Role Details For User",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Sav Roles",
      link: {
        type: "doc",
        id: "reference/rest/5.0/sav-roles",
      },
      items: [
        {
          type: "doc",
          id: "reference/rest/5.0/get-savroles",
          label: "Get SavRoles",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
