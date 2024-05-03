import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "apis/rest/5.0/reference/saviynt-enterprise-identity-cloud-api-reference",
    },
    {
      type: "category",
      label: "Authentication",
      link: {
        type: "doc",
        id: "apis/rest/5.0/reference/auth",
      },
      items: [
        {
          type: "doc",
          id: "apis/rest/5.0/reference/get-authorization-token",
          label: "Get Authorization Token",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/refresh-authorization-token",
          label: "Refresh Authorization Token",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/authenticate-user",
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
        id: "apis/rest/5.0/reference/users",
      },
      items: [
        {
          type: "doc",
          id: "apis/rest/5.0/reference/create-user",
          label: "Create User",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/update-user",
          label: "Update User",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/get-user-details",
          label: "Get User Details",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/get-list-of-users",
          label: "Get List of Users",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/validate-user-data",
          label: "Validate User Data",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/change-user-password",
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
        id: "apis/rest/5.0/reference/accounts",
      },
      items: [
        {
          type: "doc",
          id: "apis/rest/5.0/reference/get-account-details",
          label: "Get Account Details",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/export-account",
          label: "Export Account",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/create-account",
          label: "Create Account",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/update-account",
          label: "Update Account",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/assign-account-to-user",
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
        id: "apis/rest/5.0/reference/access",
      },
      items: [
        {
          type: "doc",
          id: "apis/rest/5.0/reference/get-access-details-for-user",
          label: "Get Access Details For User",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/get-flat-response-entitlement-details-for-user",
          label: "Get Flat Response Entitlement Details For User",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/assign-entitlement-to-account",
          label: "Assign Entitlement to Account",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/remove-entitlement-from-account",
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
        id: "apis/rest/5.0/reference/entitlements",
      },
      items: [
        {
          type: "doc",
          id: "apis/rest/5.0/reference/get-entitlements",
          label: "Get Entitlements",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/get-child-entitlements",
          label: "Get Child Entitlements",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/create-update-entitlement",
          label: "Create/Update Entitlement",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/get-entitlement-values-for-endpoint",
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
        id: "apis/rest/5.0/reference/privileges",
      },
      items: [
        {
          type: "doc",
          id: "apis/rest/5.0/reference/create-privilege",
          label: "Create Privilege",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/update-privilege",
          label: "Update Privilege",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/delete-privilege",
          label: "Delete Privilege",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/get-list-of-privileges-for-entitlement-type",
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
        id: "apis/rest/5.0/reference/roles",
      },
      items: [
        {
          type: "doc",
          id: "apis/rest/5.0/reference/remove-entitlement-from-role",
          label: "Remove Entitlement From Role",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/add-role",
          label: "Add Role",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/get-role-details-for-user",
          label: "Get Role Details for user",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/get-firefighter-role-details",
          label: "Get FireFighter Role Details",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/remove-role",
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
        id: "apis/rest/5.0/reference/groups",
      },
      items: [
        {
          type: "doc",
          id: "apis/rest/5.0/reference/create-update-usergroup",
          label: "Create/Update UserGroup",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/add-remove-user-from-usergroup",
          label: "Add/Remove User From UserGroup",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/delete-usergroup",
          label: "Delete UserGroup",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/get-list-of-usergroups",
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
        id: "apis/rest/5.0/reference/systems",
      },
      items: [
        {
          type: "doc",
          id: "apis/rest/5.0/reference/create-security-system",
          label: "Create Security System",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/update-security-system",
          label: "Update Security System",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/get-list-of-security-systems",
          label: "Get List of Security Systems",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/delete-security-system",
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
        id: "apis/rest/5.0/reference/endpoints",
      },
      items: [
        {
          type: "doc",
          id: "apis/rest/5.0/reference/create-endpoint",
          label: "Create Endpoint",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/update-endpoint",
          label: "Update Endpoint",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/get-list-of-endpoints",
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
        id: "apis/rest/5.0/reference/connections",
      },
      items: [
        {
          type: "doc",
          id: "apis/rest/5.0/reference/get-list-of-connections",
          label: "Get List of Connections",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/get-connections-details",
          label: "Get Connections Details",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/delete-connections",
          label: "Delete Connections",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/test-connection",
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
        id: "apis/rest/5.0/reference/entitlement-types",
      },
      items: [
        {
          type: "doc",
          id: "apis/rest/5.0/reference/create-entitlement-type",
          label: "Create Entitlement Type",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/update-entitlement-type",
          label: "Update Entitlement Type",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/get-list-of-entitlement-types",
          label: "Get List of Entitlement Types",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/delete-entitlement-types",
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
        id: "apis/rest/5.0/reference/dynamic-attributes",
      },
      items: [
        {
          type: "doc",
          id: "apis/rest/5.0/reference/create-dynamic-attribute",
          label: "Create Dynamic Attribute",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/update-dynamic-attribute",
          label: "Update Dynamic Attribute",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/fetch-dynamic-attributes",
          label: "Fetch Dynamic Attributes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/delete-dynamic-attribute",
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
        id: "apis/rest/5.0/reference/organizations",
      },
      items: [
        {
          type: "doc",
          id: "apis/rest/5.0/reference/create-organization",
          label: "Create Organization",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/update-organization",
          label: "Update Organization",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/get-organization",
          label: "Get Organization",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/delete-organization",
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
        id: "apis/rest/5.0/reference/analytics",
      },
      items: [
        {
          type: "doc",
          id: "apis/rest/5.0/reference/fetch-list-of-analytics",
          label: "Fetch List of Analytics",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/fetch-analytics-details",
          label: "Fetch Analytics Details",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/run-analytics-controls",
          label: "Run Analytics Controls",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/fetch-runtime-controls-data",
          label: "Fetch Runtime Controls Data",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/fetch-runtime-controls-data-v-2",
          label: "Fetch Runtime Controls Data V2",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/fetch-list-of-analytics-es",
          label: "Fetch List of Analytics ES",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/fetch-control-attributes",
          label: "Fetch Control Attributes",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/fetch-control-details-es",
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
        id: "apis/rest/5.0/reference/access-recommendations",
      },
      items: [
        {
          type: "doc",
          id: "apis/rest/5.0/reference/get-access-recommendations",
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
        id: "apis/rest/5.0/reference/dashboards",
      },
      items: [
        {
          type: "doc",
          id: "apis/rest/5.0/reference/retrieve-dashboard-tiles-data",
          label: "Retrieve Dashboard Tiles Data",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/retrieve-dashboard-account-data",
          label: "Retrieve Dashboard Account Data",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/retrieve-dashboard-data",
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
        id: "apis/rest/5.0/reference/request-access",
      },
      items: [
        {
          type: "doc",
          id: "apis/rest/5.0/reference/get-user-requestable-entitlements",
          label: "Get User Requestable Entitlements",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/validate-entitlement-request-data",
          label: "Validate Entitlement Request Data",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/request-to-create-entitlement-based-role",
          label: "Request to Create Entitlement Based Role",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/create-auto-approved-request",
          label: "Create Auto-approved Request",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/create-birthright-request",
          label: "Create Birthright Request",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/add-approver-to-existing-request",
          label: "Add Approver to existing Request",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/cancel-pending-request",
          label: "Cancel Pending Request",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/get-list-of-pending-requests-for-approver",
          label: "Get List of Pending Requests for Approver",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/fetch-request-approval-details",
          label: "Fetch Request Approval Details",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/fetch-request-access-attributes",
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
        id: "apis/rest/5.0/reference/request-history",
      },
      items: [
        {
          type: "doc",
          id: "apis/rest/5.0/reference/fetch-request-history-my-pending-requests",
          label: "Fetch Request History (my pending requests)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/fetch-request-history-details",
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
        id: "apis/rest/5.0/reference/request-approval",
      },
      items: [
        {
          type: "doc",
          id: "apis/rest/5.0/reference/approve-reject-each-line-item-in-a-request",
          label: "Approve/Reject each line item in a request",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/get-pending-approvals",
          label: "Get Pending Approvals",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/approve-reject-entire-request",
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
        id: "apis/rest/5.0/reference/request-user",
      },
      items: [
        {
          type: "doc",
          id: "apis/rest/5.0/reference/create-user-request",
          label: "Create User Request",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/bulk-upload-users",
          label: "Bulk Upload Users",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/update-user-request",
          label: "Update User Request",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/get-requestable-users",
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
        id: "apis/rest/5.0/reference/request-role",
      },
      items: [
        {
          type: "doc",
          id: "apis/rest/5.0/reference/create-role-request",
          label: "Create Role Request",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/update-role-request",
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
        id: "apis/rest/5.0/reference/request-organization",
      },
      items: [
        {
          type: "doc",
          id: "apis/rest/5.0/reference/create-organization-request",
          label: "Create Organization Request",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/update-organization-request",
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
        id: "apis/rest/5.0/reference/arstasks",
      },
      items: [
        {
          type: "doc",
          id: "apis/rest/5.0/reference/create-task-remove-entitlement",
          label: "Create Task - Remove Entitlement",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/complete-single-task",
          label: "Complete Single Task",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/update-tasks",
          label: "Update Tasks",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/discontinue-tasks",
          label: "Discontinue Tasks",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/discontinue-all-pending-tasks",
          label: "Discontinue All Pending Tasks",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/fetch-task-details",
          label: "Fetch Task Details",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/check-task-status",
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
        id: "apis/rest/5.0/reference/delegates",
      },
      items: [
        {
          type: "doc",
          id: "apis/rest/5.0/reference/get-delegate-user-list",
          label: "Get Delegate User List",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/create-delegate",
          label: "Create Delegate",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/fetch-existing-delegates-list",
          label: "Fetch Existing Delegates List",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/edit-delegate",
          label: "Edit Delegate",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/delete-delegate",
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
        id: "apis/rest/5.0/reference/attestations",
      },
      items: [
        {
          type: "doc",
          id: "apis/rest/5.0/reference/fetch-attestation-list",
          label: "Fetch Attestation List",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/fetch-attestation-details",
          label: "Fetch Attestation Details",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/certify-usermanager-requests",
          label: "Certify UserManager Requests",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/fetch-attestation-account-entitlement-details",
          label: "Fetch Attestation Account Entitlement Details",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/approve-reject-attestation-account-details",
          label: "Approve Reject Attestation Account Details",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/lock-attestation",
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
        id: "apis/rest/5.0/reference/campaigns",
      },
      items: [
        {
          type: "doc",
          id: "apis/rest/5.0/reference/fetch-campaign-list",
          label: "Fetch Campaign List",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/fetch-campaign-details",
          label: "Fetch Campaign Details",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/lock-campaign",
          label: "Lock Campaign",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/fetch-certification-list",
          label: "Fetch Certification List",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/discontinue-campaigns-and-certifications",
          label: "Discontinue Campaigns and Certifications",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/reassign-certification",
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
        id: "apis/rest/5.0/reference/campaigns-user-manager",
      },
      items: [
        {
          type: "doc",
          id: "apis/rest/5.0/reference/certify-user-manager-for-campaign",
          label: "Certify User Manager for Campaign",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/fetch-account-entitlement-details",
          label: "Fetch Account Entitlement Details",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/approve-reject-campaign-account-entitlement-details",
          label: "Approve Reject Campaign Account Entitlement Details",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/reassign-usermanager-step-1-for-campaign",
          label: "Reassign UserManager Step 1 for Campaign",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/consult-campaign-account-entitlement-details",
          label: "Consult Campaign Account Entitlement Details",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/reassign-certification-at-account-and-entitlement-level-copy",
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
        id: "apis/rest/5.0/reference/campaigns-entitlement-owner",
      },
      items: [
        {
          type: "doc",
          id: "apis/rest/5.0/reference/consult-entitlementowner-step-1-for-campaign",
          label: "Consult EntitlementOwner Step 1 for Campaign",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/consult-entitlementowner-step-2-for-campaign",
          label: "Consult EntitlementOwner Step 2 for Campaign",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/fetch-account-entitlement-details-1",
          label: "Fetch Account Entitlement Details",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/fetch-entitlement-owner-campaign-details",
          label: "Fetch Entitlement Owner Campaign Details",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/fetch-flat-response-entitlement-owner-campaign-details",
          label: "Fetch Flat Response Entitlement Owner Campaign Details",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/lock-campaign-1",
          label: "Lock Campaign",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/approve-reject-account-entitlement-details",
          label: "Approve Reject Account Entitlement Details",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/certify-entitlement-owner-for-campaign",
          label: "Certify Entitlement Owner for Campaign",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/reassign-entitlement-owner-for-campaign",
          label: "Reassign Entitlement Owner for Campaign",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/reassign-certification-at-account-level",
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
        id: "apis/rest/5.0/reference/campaigns-application-owner",
      },
      items: [
        {
          type: "doc",
          id: "apis/rest/5.0/reference/fetch-account-entitlement-details-2",
          label: "Fetch Account Entitlement Details",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/approve-reject-account-entitlement-details-1",
          label: "Approve Reject Account Entitlement Details",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/lock-campaign-2",
          label: "Lock Campaign",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/consult-appowner-account-entitlement-details",
          label: "Consult AppOwner Account Entitlement Details",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/reassign-application-owner-for-campaign",
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
        id: "apis/rest/5.0/reference/sod",
      },
      items: [
        {
          type: "doc",
          id: "apis/rest/5.0/reference/sod-evaluation-for-sap-functions",
          label: "SoD Evaluation for SAP Functions",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/sod-evaluation-for-non-sap-functions",
          label: "SoD Evaluation for Non - SAP Functions",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/add-mitigating-control-risk-account",
          label: "Add Mitigating Control Risk Account",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/upload-sod-ruleset",
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
        id: "apis/rest/5.0/reference/security",
      },
      items: [
        {
          type: "doc",
          id: "apis/rest/5.0/reference/fetch-security-questions",
          label: "Fetch Security Questions",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/fetch-user-security-questions",
          label: "Fetch User Security Questions",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/validate-user-security-answers",
          label: "Validate User Security Answers",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/create-security-questions",
          label: "Create Security Questions",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/create-password-policy",
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
        id: "apis/rest/5.0/reference/utils",
      },
      items: [
        {
          type: "doc",
          id: "apis/rest/5.0/reference/upload-new-file",
          label: "Upload New File",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/import-application-data",
          label: "Import Application Data",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/send-email",
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
        id: "apis/rest/5.0/reference/jobs",
      },
      items: [
        {
          type: "doc",
          id: "apis/rest/5.0/reference/create-and-update-trigger",
          label: "Create and Update Trigger",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/check-job-status",
          label: "Check Job Status",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/delete-trigger",
          label: "Delete Trigger",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/run-job-trigger",
          label: "Run Job Trigger",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/fetch-job-metadata",
          label: "Fetch Job Metadata",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/createtrigger",
          label: "createTrigger",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/resumepausejobs",
          label: "resumePauseJobs",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/check-import-status",
          label: "Check Import Status",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/force-complete",
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
        id: "apis/rest/5.0/reference/transport",
      },
      items: [
        {
          type: "doc",
          id: "apis/rest/5.0/reference/export-package",
          label: "Export Package",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/import-package",
          label: "Import Package",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/transport-status",
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
        id: "apis/rest/5.0/reference/policies",
      },
      items: [
        {
          type: "doc",
          id: "apis/rest/5.0/reference/fetch-technical-rules",
          label: "Fetch Technical Rules",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/update-technical-rules",
          label: "Update Technical Rules",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/create-technical-rules",
          label: "Create Technical Rules",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/delete-technical-rules",
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
        id: "apis/rest/5.0/reference/datasets",
      },
      items: [
        {
          type: "doc",
          id: "apis/rest/5.0/reference/createdataset",
          label: "createDataset",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/getdatasetvalues",
          label: "getDatasetValues",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/updatedatasetvalues",
          label: "updateDatasetValues",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/deletedataset",
          label: "deleteDataset",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/uploaddatasetcsv",
          label: "uploadDatasetCSV",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/updatedataset",
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
        id: "apis/rest/5.0/reference/role-membership",
      },
      items: [
        {
          type: "doc",
          id: "apis/rest/5.0/reference/add-remove-user-from-sav-role",
          label: "Add/Remove User from SAV ROLE",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/rest/5.0/reference/get-flat-response-role-details-for-user",
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
        id: "apis/rest/5.0/reference/sav-roles",
      },
      items: [
        {
          type: "doc",
          id: "apis/rest/5.0/reference/get-savroles",
          label: "Get SavRoles",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "campaign-user-manager",
      items: [
        {
          type: "doc",
          id: "apis/rest/5.0/reference/consult-usermanager-step-1-for-campaign",
          label: "Consult UserManager Step 1 for Campaign",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
