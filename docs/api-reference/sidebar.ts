import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "Identity Repository",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "api-reference/saviynt-enterprise-identity-cloud-api-reference",
        },
        {
          type: "category",
          label: "Authentication",
          link: {
            type: "generated-index",
            title: "Authentication",
            slug: "/category/api-reference/v-5-0/authentication",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-authorization-token",
              label: "Get Authorization Token",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/refresh-authorization-token",
              label: "Refresh Authorization Token",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Users",
          link: {
            type: "generated-index",
            title: "Users",
            slug: "/category/api-reference/v-5-0/users",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-user",
              label: "Create User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-user",
              label: "Update User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-user-details",
              label: "Get User Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-users",
              label: "Get List of Users",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/authenticate-user",
              label: "Authenticate User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/validate-user-data",
              label: "Validate User Data",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Accounts",
          link: {
            type: "generated-index",
            title: "Accounts",
            slug: "/category/api-reference/v-5-0/accounts",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-account-details",
              label: "Get Account Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/export-account",
              label: "Export Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/create-account",
              label: "Create Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-account",
              label: "Update Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/assign-account-to-user",
              label: "Assign Account to User",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Access",
          link: {
            type: "generated-index",
            title: "Access",
            slug: "/category/api-reference/v-5-0/access",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-access-details-for-user",
              label: "Get Access Details For User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-flat-response-entitlement-details-for-user",
              label: "Get Flat Response Entitlement Details For User",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/assign-entitlement-to-account",
              label: "Assign Entitlement to Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/remove-entitlement-from-account",
              label: "Remove Entitlement from Account",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Groups",
          link: {
            type: "generated-index",
            title: "User Groups",
            slug: "/category/api-reference/v-5-0/user-groups",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-update-usergroup",
              label: "Create/Update UserGroup",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/add-remove-user-from-usergroup",
              label: "Add/Remove User From UserGroup",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/delete-usergroup",
              label: "Delete UserGroup",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-usergroups",
              label: "Get List of UserGroups",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Organization",
          link: {
            type: "generated-index",
            title: "Organization",
            slug: "/category/api-reference/v-5-0/organization",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-organization",
              label: "Create Organization",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-organization",
              label: "Update Organization",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-organization",
              label: "Get Organization",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/delete-organization",
              label: "Delete Organization",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Users Request",
          link: {
            type: "generated-index",
            title: "Users Request",
            slug: "/category/api-reference/v-5-0/users-request",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/bulk-upload-users",
              label: "Bulk Upload Users",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Role Membership",
          link: {
            type: "generated-index",
            title: "Role Membership",
            slug: "/category/api-reference/v-5-0/role-membership",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/add-remove-user-from-sav-role",
              label: "Add/Remove User from SAV ROLE",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-flat-response-role-details-for-user",
              label: "Get Flat Response Role Details For User",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Sav Roles",
          link: {
            type: "generated-index",
            title: "Sav Roles",
            slug: "/category/api-reference/v-5-0/sav-roles",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-savroles",
              label: "Get SavRoles",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Privileges",
          link: {
            type: "generated-index",
            title: "Privileges",
            slug: "/category/api-reference/v-5-0/privileges",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-privilege",
              label: "Create Privilege",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/update-privilege",
              label: "Update Privilege",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/delete-privilege",
              label: "Delete Privilege",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-privileges-for-entitlement-type",
              label: "Get List of Privileges for Entitlement Type",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Entitlements",
          link: {
            type: "generated-index",
            title: "Entitlements",
            slug: "/category/api-reference/v-5-0/entitlements",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-entitlements",
              label: "Get Entitlements",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-child-entitlements",
              label: "Get Child Entitlements",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/create-update-entitlement",
              label: "Create/Update Entitlement",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-entitlement-values-for-endpoint",
              label: "Get Entitlement Values For Endpoint",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Roles",
          link: {
            type: "generated-index",
            title: "Roles",
            slug: "/category/api-reference/v-5-0/roles",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/remove-entitlement-from-role",
              label: "Remove Entitlement From Role",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/add-role",
              label: "Add Role",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-role-details-for-user",
              label: "Get Role Details for user",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-firefighter-role-details",
              label: "Get FireFighter Role Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/remove-role",
              label: "Remove Role",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Endpoints",
          link: {
            type: "generated-index",
            title: "Endpoints",
            slug: "/category/api-reference/v-5-0/endpoints",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-endpoint",
              label: "Create Endpoint",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-endpoint",
              label: "Update Endpoint",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-endpoints",
              label: "Get List of Endpoints",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Entitlement Types",
          link: {
            type: "generated-index",
            title: "Entitlement Types",
            slug: "/category/api-reference/v-5-0/entitlement-types",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-entitlement-type",
              label: "Create Entitlement Type",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-entitlement-type",
              label: "Update Entitlement Type",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-entitlement-types",
              label: "Get List of Entitlement Types",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/delete-entitlement-types",
              label: "Delete Entitlement Types",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Dynamic Attributes",
          link: {
            type: "generated-index",
            title: "Dynamic Attributes",
            slug: "/category/api-reference/v-5-0/dynamic-attributes",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-dynamic-attribute",
              label: "Create Dynamic Attribute",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-dynamic-attribute",
              label: "Update Dynamic Attribute",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/fetch-dynamic-attributes",
              label: "Fetch Dynamic Attributes",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/delete-dynamic-attribute",
              label: "Delete Dynamic Attribute",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Security Systems",
          link: {
            type: "generated-index",
            title: "Security Systems",
            slug: "/category/api-reference/v-5-0/security-systems",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-security-system",
              label: "Create Security System",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-security-system",
              label: "Update Security System",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-security-systems",
              label: "Get List of Security Systems",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/delete-security-system",
              label: "Delete Security System",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Connections",
          link: {
            type: "generated-index",
            title: "Connections",
            slug: "/category/api-reference/v-5-0/connections",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-list-of-connections",
              label: "Get List of Connections",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-connections-details",
              label: "Get Connections Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/delete-connections",
              label: "Delete Connections",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Dataset",
          link: {
            type: "generated-index",
            title: "Dataset",
            slug: "/category/api-reference/v-5-0/dataset",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/createdataset",
              label: "createDataset",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/getdatasetvalues",
              label: "getDatasetValues",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/updatedatasetvalues",
              label: "updateDatasetValues",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/deletedataset",
              label: "deleteDataset",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/uploaddatasetcsv",
              label: "uploadDatasetCSV",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/updatedataset",
              label: "updateDataset",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Analytics",
          link: {
            type: "generated-index",
            title: "Analytics",
            slug: "/category/api-reference/v-5-0/analytics",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-list-of-analytics",
              label: "Fetch List of Analytics",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-analytics-details",
              label: "Fetch Analytics Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/run-analytics-controls",
              label: "Run Analytics Controls",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-runtime-controls-data",
              label: "Fetch Runtime Controls Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-runtime-controls-data-v-2",
              label: "Fetch Runtime Controls Data V2",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-list-of-analytics-es",
              label: "Fetch List of Analytics ES",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/fetch-control-attributes",
              label: "Fetch Control Attributes",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-control-details-es",
              label: "Fetch Control Details ES",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Request",
          link: {
            type: "generated-index",
            title: "User Request",
            slug: "/category/api-reference/v-5-0/user-request",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-user-request",
              label: "Create User Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-user-request",
              label: "Update User Request",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-requestable-users",
              label: "Get Requestable Users",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Role Request",
          link: {
            type: "generated-index",
            title: "Role Request",
            slug: "/category/api-reference/v-5-0/role-request",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-role-request",
              label: "Create Role Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-role-request",
              label: "Update Role Request",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Access Request",
          link: {
            type: "generated-index",
            title: "Access Request",
            slug: "/category/api-reference/v-5-0/access-request",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-user-requestable-entitlements",
              label: "Get User Requestable Entitlements",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/validate-entitlement-request-data",
              label: "Validate Entitlement Request Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/request-to-create-entitlement-based-role",
              label: "Request to Create Entitlement Based Role",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/create-auto-approved-request",
              label: "Create Auto-approved Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/create-birthright-request",
              label: "Create Birthright Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/add-approver-to-existing-request",
              label: "Add Approver to existing Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/cancel-pending-request",
              label: "Cancel Pending Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-pending-requests-for-approver",
              label: "Get List of Pending Requests for Approver",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-request-approval-details",
              label: "Fetch Request Approval Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-request-access-attributes",
              label: "Fetch Request Access Attributes",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Organization Request",
          link: {
            type: "generated-index",
            title: "Organization Request",
            slug: "/category/api-reference/v-5-0/organization-request",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-organization-request",
              label: "Create Organization Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-organization-request",
              label: "Update Organization Request",
              className: "api-method put",
            },
          ],
        },
        {
          type: "category",
          label: "Request History",
          link: {
            type: "generated-index",
            title: "Request History",
            slug: "/category/api-reference/v-5-0/request-history",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-request-history-my-pending-requests",
              label: "Fetch Request History (my pending requests)",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-request-history-details",
              label: "Fetch Request History Details",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Request Approval",
          link: {
            type: "generated-index",
            title: "Request Approval",
            slug: "/category/api-reference/v-5-0/request-approval",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/approve-reject-each-line-item-in-a-request",
              label: "Approve/Reject each line item in a request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-pending-approvals",
              label: "Get Pending Approvals",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/approve-reject-entire-request",
              label: "Approve/Reject entire request",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Tasks",
          link: {
            type: "generated-index",
            title: "Tasks",
            slug: "/category/api-reference/v-5-0/tasks",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-task-remove-entitlement",
              label: "Create Task - Remove Entitlement",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/complete-single-task",
              label: "Complete Single Task",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-tasks",
              label: "Update Tasks",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/discontinue-tasks",
              label: "Discontinue Tasks",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/discontinue-all-pending-tasks",
              label: "Discontinue All Pending Tasks",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-task-details",
              label: "Fetch Task Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/check-task-status",
              label: "Check Task Status",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Delegation",
          link: {
            type: "generated-index",
            title: "User Delegation",
            slug: "/category/api-reference/v-5-0/user-delegation",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-delegate-user-list",
              label: "Get Delegate User List",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/create-delegate",
              label: "Create Delegate",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-existing-delegates-list",
              label: "Fetch Existing Delegates List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/edit-delegate",
              label: "Edit Delegate",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/delete-delegate",
              label: "Delete Delegate",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Attestations",
          link: {
            type: "generated-index",
            title: "Attestations",
            slug: "/category/api-reference/v-5-0/attestations",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-attestation-list",
              label: "Fetch Attestation List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-attestation-details",
              label: "Fetch Attestation Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/certify-usermanager-requests",
              label: "Certify UserManager Requests",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-attestation-account-entitlement-details",
              label: "Fetch Attestation Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/approve-reject-attestation-account-details",
              label: "Approve Reject Attestation Account Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/lock-attestation",
              label: "Lock Attestation",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Campaigns",
          link: {
            type: "generated-index",
            title: "Campaigns",
            slug: "/category/api-reference/v-5-0/campaigns",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-campaign-list",
              label: "Fetch Campaign List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-campaign-details",
              label: "Fetch Campaign Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/lock-campaign",
              label: "Lock Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-certification-list",
              label: "Fetch Certification List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/discontinue-campaigns-and-certifications",
              label: "Discontinue Campaigns and Certifications",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-certification",
              label: "Reassign Certification",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Manager",
          link: {
            type: "generated-index",
            title: "User Manager",
            slug: "/category/api-reference/v-5-0/user-manager",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-campaign-details",
              label: "Fetch Campaign Details",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Manager Campaigns",
          link: {
            type: "generated-index",
            title: "User Manager Campaigns",
            slug: "/category/api-reference/v-5-0/user-manager-campaigns",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/certify-user-manager-for-campaign",
              label: "Certify User Manager for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-account-entitlement-details",
              label: "Fetch Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/approve-reject-campaign-account-entitlement-details",
              label: "Approve Reject Campaign Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-usermanager-step-1-for-campaign",
              label: "Reassign UserManager Step 1 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/consult-usermanager-step-1-for-campaign",
              label: "Consult UserManager Step 1 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/consult-campaign-account-entitlement-details",
              label: "Consult Campaign Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-certification-at-account-and-entitlement-level-copy",
              label: "Reassign Certification at Account and Entitlement Level Copy",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Entitlement Owner Campaigns",
          link: {
            type: "generated-index",
            title: "Entitlement Owner Campaigns",
            slug: "/category/api-reference/v-5-0/entitlement-owner-campaigns",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/consult-entitlementowner-step-1-for-campaign",
              label: "Consult EntitlementOwner Step 1 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/consult-entitlementowner-step-2-for-campaign",
              label: "Consult EntitlementOwner Step 2 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-account-entitlement-details-1",
              label: "Fetch Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-entitlement-owner-campaign-details",
              label: "Fetch Entitlement Owner Campaign Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-flat-response-entitlement-owner-campaign-details",
              label: "Fetch Flat Response Entitlement Owner Campaign Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/lock-campaign-1",
              label: "Lock Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/approve-reject-account-entitlement-details",
              label: "Approve Reject Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/certify-entitlement-owner-for-campaign",
              label: "Certify Entitlement Owner for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-entitlement-owner-for-campaign",
              label: "Reassign Entitlement Owner for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-certification-at-account-level",
              label: "Reassign Certification at Account Level",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Application Owner Campaigns",
          link: {
            type: "generated-index",
            title: "Application Owner Campaigns",
            slug: "/category/api-reference/v-5-0/application-owner-campaigns",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-account-entitlement-details-2",
              label: "Fetch Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/lock-campaign-2",
              label: "Lock Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/consult-appowner-account-entitlement-details",
              label: "Consult AppOwner Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-application-owner-for-campaign",
              label: "Reassign Application Owner for Campaign",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Application OwnerCampaigns",
          link: {
            type: "generated-index",
            title: "Application OwnerCampaigns",
            slug: "/category/api-reference/v-5-0/application-owner-campaigns",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/approve-reject-account-entitlement-details-1",
              label: "Approve Reject Account Entitlement Details",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Segregation of Duties",
          link: {
            type: "generated-index",
            title: "Segregation of Duties",
            slug: "/category/api-reference/v-5-0/segregation-of-duties",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/sod-evaluation-for-sap-functions",
              label: "SoD Evaluation for SAP Functions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/sod-evaluation-for-non-sap-functions",
              label: "SoD Evaluation for Non - SAP Functions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/add-mitigating-control-risk-account",
              label: "Add Mitigating Control Risk Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/upload-sod-ruleset",
              label: "Upload SOD Ruleset",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Password Management",
          link: {
            type: "generated-index",
            title: "Password Management",
            slug: "/category/api-reference/v-5-0/password-management",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-security-questions",
              label: "Fetch Security Questions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-user-security-questions",
              label: "Fetch User Security Questions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/validate-user-security-answers",
              label: "Validate User Security Answers",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/create-security-questions",
              label: "Create Security Questions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/create-password-policy",
              label: "Create Password Policy",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/change-user-password",
              label: "Change User Password",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Job Management",
          link: {
            type: "generated-index",
            title: "Job Management",
            slug: "/category/api-reference/v-5-0/job-management",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-and-update-trigger",
              label: "Create and Update Trigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/check-job-status",
              label: "Check Job Status",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/delete-trigger",
              label: "Delete Trigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/run-job-trigger",
              label: "Run Job Trigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-job-metadata",
              label: "Fetch Job Metadata",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/createtrigger",
              label: "createTrigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/resumepausejobs",
              label: "resumePauseJobs",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Common Utilities",
          link: {
            type: "generated-index",
            title: "Common Utilities",
            slug: "/category/api-reference/v-5-0/common-utilities",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/upload-new-file",
              label: "Upload New File",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/import-application-data",
              label: "Import Application Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/check-import-status",
              label: "Check Import Status",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/force-complete",
              label: "Force Complete",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/send-email",
              label: "Send Email",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Connection",
          link: {
            type: "generated-index",
            title: "Connection",
            slug: "/category/api-reference/v-5-0/connection",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/test-connection",
              label: "Test Connection",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Dashboard",
          link: {
            type: "generated-index",
            title: "Dashboard",
            slug: "/category/api-reference/v-5-0/dashboard",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/retrieve-dashboard-tiles-data",
              label: "Retrieve Dashboard Tiles Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/retrieve-dashboard-account-data",
              label: "Retrieve Dashboard Account Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/retrieve-dashboard-data",
              label: "Retrieve Dashboard Data",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Access Recommendations",
          link: {
            type: "generated-index",
            title: "Access Recommendations",
            slug: "/category/api-reference/v-5-0/access-recommendations",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-access-recommendations",
              label: "Get Access Recommendations",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Transport",
          link: {
            type: "generated-index",
            title: "Transport",
            slug: "/category/api-reference/v-5-0/transport",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/export-package",
              label: "Export Package",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/import-package",
              label: "Import Package",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/transport-status",
              label: "Transport Status",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Provisioning Policies",
          link: {
            type: "generated-index",
            title: "Provisioning Policies",
            slug: "/category/api-reference/v-5-0/provisioning-policies",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-technical-rules",
              label: "Fetch Technical Rules",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/update-technical-rules",
              label: "Update Technical Rules",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/create-technical-rules",
              label: "Create Technical Rules",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/delete-technical-rules",
              label: "Delete Technical Rules",
              className: "api-method delete",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Roles",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "api-reference/saviynt-enterprise-identity-cloud-api-reference",
        },
        {
          type: "category",
          label: "Roles",
          link: {
            type: "generated-index",
            title: "Roles",
            slug: "/category/api-reference/v-5-0/roles",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/remove-entitlement-from-role",
              label: "Remove Entitlement From Role",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/add-role",
              label: "Add Role",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-role-details-for-user",
              label: "Get Role Details for user",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-firefighter-role-details",
              label: "Get FireFighter Role Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/remove-role",
              label: "Remove Role",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Authentication",
          link: {
            type: "generated-index",
            title: "Authentication",
            slug: "/category/api-reference/v-5-0/authentication",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-authorization-token",
              label: "Get Authorization Token",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/refresh-authorization-token",
              label: "Refresh Authorization Token",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Users",
          link: {
            type: "generated-index",
            title: "Users",
            slug: "/category/api-reference/v-5-0/users",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-user",
              label: "Create User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-user",
              label: "Update User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-user-details",
              label: "Get User Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-users",
              label: "Get List of Users",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/authenticate-user",
              label: "Authenticate User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/validate-user-data",
              label: "Validate User Data",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Users Request",
          link: {
            type: "generated-index",
            title: "Users Request",
            slug: "/category/api-reference/v-5-0/users-request",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/bulk-upload-users",
              label: "Bulk Upload Users",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Role Membership",
          link: {
            type: "generated-index",
            title: "Role Membership",
            slug: "/category/api-reference/v-5-0/role-membership",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/add-remove-user-from-sav-role",
              label: "Add/Remove User from SAV ROLE",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-flat-response-role-details-for-user",
              label: "Get Flat Response Role Details For User",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Access",
          link: {
            type: "generated-index",
            title: "Access",
            slug: "/category/api-reference/v-5-0/access",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-access-details-for-user",
              label: "Get Access Details For User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-flat-response-entitlement-details-for-user",
              label: "Get Flat Response Entitlement Details For User",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/assign-entitlement-to-account",
              label: "Assign Entitlement to Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/remove-entitlement-from-account",
              label: "Remove Entitlement from Account",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Sav Roles",
          link: {
            type: "generated-index",
            title: "Sav Roles",
            slug: "/category/api-reference/v-5-0/sav-roles",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-savroles",
              label: "Get SavRoles",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Accounts",
          link: {
            type: "generated-index",
            title: "Accounts",
            slug: "/category/api-reference/v-5-0/accounts",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-account-details",
              label: "Get Account Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/export-account",
              label: "Export Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/create-account",
              label: "Create Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-account",
              label: "Update Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/assign-account-to-user",
              label: "Assign Account to User",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Privileges",
          link: {
            type: "generated-index",
            title: "Privileges",
            slug: "/category/api-reference/v-5-0/privileges",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-privilege",
              label: "Create Privilege",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/update-privilege",
              label: "Update Privilege",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/delete-privilege",
              label: "Delete Privilege",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-privileges-for-entitlement-type",
              label: "Get List of Privileges for Entitlement Type",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Entitlements",
          link: {
            type: "generated-index",
            title: "Entitlements",
            slug: "/category/api-reference/v-5-0/entitlements",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-entitlements",
              label: "Get Entitlements",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-child-entitlements",
              label: "Get Child Entitlements",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/create-update-entitlement",
              label: "Create/Update Entitlement",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-entitlement-values-for-endpoint",
              label: "Get Entitlement Values For Endpoint",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Endpoints",
          link: {
            type: "generated-index",
            title: "Endpoints",
            slug: "/category/api-reference/v-5-0/endpoints",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-endpoint",
              label: "Create Endpoint",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-endpoint",
              label: "Update Endpoint",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-endpoints",
              label: "Get List of Endpoints",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Entitlement Types",
          link: {
            type: "generated-index",
            title: "Entitlement Types",
            slug: "/category/api-reference/v-5-0/entitlement-types",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-entitlement-type",
              label: "Create Entitlement Type",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-entitlement-type",
              label: "Update Entitlement Type",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-entitlement-types",
              label: "Get List of Entitlement Types",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/delete-entitlement-types",
              label: "Delete Entitlement Types",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Dynamic Attributes",
          link: {
            type: "generated-index",
            title: "Dynamic Attributes",
            slug: "/category/api-reference/v-5-0/dynamic-attributes",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-dynamic-attribute",
              label: "Create Dynamic Attribute",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-dynamic-attribute",
              label: "Update Dynamic Attribute",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/fetch-dynamic-attributes",
              label: "Fetch Dynamic Attributes",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/delete-dynamic-attribute",
              label: "Delete Dynamic Attribute",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Security Systems",
          link: {
            type: "generated-index",
            title: "Security Systems",
            slug: "/category/api-reference/v-5-0/security-systems",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-security-system",
              label: "Create Security System",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-security-system",
              label: "Update Security System",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-security-systems",
              label: "Get List of Security Systems",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/delete-security-system",
              label: "Delete Security System",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "User Groups",
          link: {
            type: "generated-index",
            title: "User Groups",
            slug: "/category/api-reference/v-5-0/user-groups",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-update-usergroup",
              label: "Create/Update UserGroup",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/add-remove-user-from-usergroup",
              label: "Add/Remove User From UserGroup",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/delete-usergroup",
              label: "Delete UserGroup",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-usergroups",
              label: "Get List of UserGroups",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Organization",
          link: {
            type: "generated-index",
            title: "Organization",
            slug: "/category/api-reference/v-5-0/organization",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-organization",
              label: "Create Organization",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-organization",
              label: "Update Organization",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-organization",
              label: "Get Organization",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/delete-organization",
              label: "Delete Organization",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Connections",
          link: {
            type: "generated-index",
            title: "Connections",
            slug: "/category/api-reference/v-5-0/connections",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-list-of-connections",
              label: "Get List of Connections",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-connections-details",
              label: "Get Connections Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/delete-connections",
              label: "Delete Connections",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Dataset",
          link: {
            type: "generated-index",
            title: "Dataset",
            slug: "/category/api-reference/v-5-0/dataset",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/createdataset",
              label: "createDataset",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/getdatasetvalues",
              label: "getDatasetValues",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/updatedatasetvalues",
              label: "updateDatasetValues",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/deletedataset",
              label: "deleteDataset",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/uploaddatasetcsv",
              label: "uploadDatasetCSV",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/updatedataset",
              label: "updateDataset",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Analytics",
          link: {
            type: "generated-index",
            title: "Analytics",
            slug: "/category/api-reference/v-5-0/analytics",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-list-of-analytics",
              label: "Fetch List of Analytics",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-analytics-details",
              label: "Fetch Analytics Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/run-analytics-controls",
              label: "Run Analytics Controls",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-runtime-controls-data",
              label: "Fetch Runtime Controls Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-runtime-controls-data-v-2",
              label: "Fetch Runtime Controls Data V2",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-list-of-analytics-es",
              label: "Fetch List of Analytics ES",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/fetch-control-attributes",
              label: "Fetch Control Attributes",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-control-details-es",
              label: "Fetch Control Details ES",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Request",
          link: {
            type: "generated-index",
            title: "User Request",
            slug: "/category/api-reference/v-5-0/user-request",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-user-request",
              label: "Create User Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-user-request",
              label: "Update User Request",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-requestable-users",
              label: "Get Requestable Users",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Role Request",
          link: {
            type: "generated-index",
            title: "Role Request",
            slug: "/category/api-reference/v-5-0/role-request",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-role-request",
              label: "Create Role Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-role-request",
              label: "Update Role Request",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Access Request",
          link: {
            type: "generated-index",
            title: "Access Request",
            slug: "/category/api-reference/v-5-0/access-request",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-user-requestable-entitlements",
              label: "Get User Requestable Entitlements",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/validate-entitlement-request-data",
              label: "Validate Entitlement Request Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/request-to-create-entitlement-based-role",
              label: "Request to Create Entitlement Based Role",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/create-auto-approved-request",
              label: "Create Auto-approved Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/create-birthright-request",
              label: "Create Birthright Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/add-approver-to-existing-request",
              label: "Add Approver to existing Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/cancel-pending-request",
              label: "Cancel Pending Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-pending-requests-for-approver",
              label: "Get List of Pending Requests for Approver",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-request-approval-details",
              label: "Fetch Request Approval Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-request-access-attributes",
              label: "Fetch Request Access Attributes",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Organization Request",
          link: {
            type: "generated-index",
            title: "Organization Request",
            slug: "/category/api-reference/v-5-0/organization-request",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-organization-request",
              label: "Create Organization Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-organization-request",
              label: "Update Organization Request",
              className: "api-method put",
            },
          ],
        },
        {
          type: "category",
          label: "Request History",
          link: {
            type: "generated-index",
            title: "Request History",
            slug: "/category/api-reference/v-5-0/request-history",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-request-history-my-pending-requests",
              label: "Fetch Request History (my pending requests)",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-request-history-details",
              label: "Fetch Request History Details",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Request Approval",
          link: {
            type: "generated-index",
            title: "Request Approval",
            slug: "/category/api-reference/v-5-0/request-approval",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/approve-reject-each-line-item-in-a-request",
              label: "Approve/Reject each line item in a request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-pending-approvals",
              label: "Get Pending Approvals",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/approve-reject-entire-request",
              label: "Approve/Reject entire request",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Tasks",
          link: {
            type: "generated-index",
            title: "Tasks",
            slug: "/category/api-reference/v-5-0/tasks",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-task-remove-entitlement",
              label: "Create Task - Remove Entitlement",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/complete-single-task",
              label: "Complete Single Task",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-tasks",
              label: "Update Tasks",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/discontinue-tasks",
              label: "Discontinue Tasks",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/discontinue-all-pending-tasks",
              label: "Discontinue All Pending Tasks",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-task-details",
              label: "Fetch Task Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/check-task-status",
              label: "Check Task Status",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Delegation",
          link: {
            type: "generated-index",
            title: "User Delegation",
            slug: "/category/api-reference/v-5-0/user-delegation",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-delegate-user-list",
              label: "Get Delegate User List",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/create-delegate",
              label: "Create Delegate",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-existing-delegates-list",
              label: "Fetch Existing Delegates List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/edit-delegate",
              label: "Edit Delegate",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/delete-delegate",
              label: "Delete Delegate",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Attestations",
          link: {
            type: "generated-index",
            title: "Attestations",
            slug: "/category/api-reference/v-5-0/attestations",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-attestation-list",
              label: "Fetch Attestation List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-attestation-details",
              label: "Fetch Attestation Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/certify-usermanager-requests",
              label: "Certify UserManager Requests",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-attestation-account-entitlement-details",
              label: "Fetch Attestation Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/approve-reject-attestation-account-details",
              label: "Approve Reject Attestation Account Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/lock-attestation",
              label: "Lock Attestation",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Campaigns",
          link: {
            type: "generated-index",
            title: "Campaigns",
            slug: "/category/api-reference/v-5-0/campaigns",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-campaign-list",
              label: "Fetch Campaign List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-campaign-details",
              label: "Fetch Campaign Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/lock-campaign",
              label: "Lock Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-certification-list",
              label: "Fetch Certification List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/discontinue-campaigns-and-certifications",
              label: "Discontinue Campaigns and Certifications",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-certification",
              label: "Reassign Certification",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Manager",
          link: {
            type: "generated-index",
            title: "User Manager",
            slug: "/category/api-reference/v-5-0/user-manager",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-campaign-details",
              label: "Fetch Campaign Details",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Manager Campaigns",
          link: {
            type: "generated-index",
            title: "User Manager Campaigns",
            slug: "/category/api-reference/v-5-0/user-manager-campaigns",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/certify-user-manager-for-campaign",
              label: "Certify User Manager for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-account-entitlement-details",
              label: "Fetch Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/approve-reject-campaign-account-entitlement-details",
              label: "Approve Reject Campaign Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-usermanager-step-1-for-campaign",
              label: "Reassign UserManager Step 1 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/consult-usermanager-step-1-for-campaign",
              label: "Consult UserManager Step 1 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/consult-campaign-account-entitlement-details",
              label: "Consult Campaign Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-certification-at-account-and-entitlement-level-copy",
              label: "Reassign Certification at Account and Entitlement Level Copy",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Entitlement Owner Campaigns",
          link: {
            type: "generated-index",
            title: "Entitlement Owner Campaigns",
            slug: "/category/api-reference/v-5-0/entitlement-owner-campaigns",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/consult-entitlementowner-step-1-for-campaign",
              label: "Consult EntitlementOwner Step 1 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/consult-entitlementowner-step-2-for-campaign",
              label: "Consult EntitlementOwner Step 2 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-account-entitlement-details-1",
              label: "Fetch Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-entitlement-owner-campaign-details",
              label: "Fetch Entitlement Owner Campaign Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-flat-response-entitlement-owner-campaign-details",
              label: "Fetch Flat Response Entitlement Owner Campaign Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/lock-campaign-1",
              label: "Lock Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/approve-reject-account-entitlement-details",
              label: "Approve Reject Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/certify-entitlement-owner-for-campaign",
              label: "Certify Entitlement Owner for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-entitlement-owner-for-campaign",
              label: "Reassign Entitlement Owner for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-certification-at-account-level",
              label: "Reassign Certification at Account Level",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Application Owner Campaigns",
          link: {
            type: "generated-index",
            title: "Application Owner Campaigns",
            slug: "/category/api-reference/v-5-0/application-owner-campaigns",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-account-entitlement-details-2",
              label: "Fetch Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/lock-campaign-2",
              label: "Lock Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/consult-appowner-account-entitlement-details",
              label: "Consult AppOwner Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-application-owner-for-campaign",
              label: "Reassign Application Owner for Campaign",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Application OwnerCampaigns",
          link: {
            type: "generated-index",
            title: "Application OwnerCampaigns",
            slug: "/category/api-reference/v-5-0/application-owner-campaigns",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/approve-reject-account-entitlement-details-1",
              label: "Approve Reject Account Entitlement Details",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Segregation of Duties",
          link: {
            type: "generated-index",
            title: "Segregation of Duties",
            slug: "/category/api-reference/v-5-0/segregation-of-duties",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/sod-evaluation-for-sap-functions",
              label: "SoD Evaluation for SAP Functions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/sod-evaluation-for-non-sap-functions",
              label: "SoD Evaluation for Non - SAP Functions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/add-mitigating-control-risk-account",
              label: "Add Mitigating Control Risk Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/upload-sod-ruleset",
              label: "Upload SOD Ruleset",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Password Management",
          link: {
            type: "generated-index",
            title: "Password Management",
            slug: "/category/api-reference/v-5-0/password-management",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-security-questions",
              label: "Fetch Security Questions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-user-security-questions",
              label: "Fetch User Security Questions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/validate-user-security-answers",
              label: "Validate User Security Answers",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/create-security-questions",
              label: "Create Security Questions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/create-password-policy",
              label: "Create Password Policy",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/change-user-password",
              label: "Change User Password",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Job Management",
          link: {
            type: "generated-index",
            title: "Job Management",
            slug: "/category/api-reference/v-5-0/job-management",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-and-update-trigger",
              label: "Create and Update Trigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/check-job-status",
              label: "Check Job Status",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/delete-trigger",
              label: "Delete Trigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/run-job-trigger",
              label: "Run Job Trigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-job-metadata",
              label: "Fetch Job Metadata",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/createtrigger",
              label: "createTrigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/resumepausejobs",
              label: "resumePauseJobs",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Common Utilities",
          link: {
            type: "generated-index",
            title: "Common Utilities",
            slug: "/category/api-reference/v-5-0/common-utilities",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/upload-new-file",
              label: "Upload New File",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/import-application-data",
              label: "Import Application Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/check-import-status",
              label: "Check Import Status",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/force-complete",
              label: "Force Complete",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/send-email",
              label: "Send Email",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Connection",
          link: {
            type: "generated-index",
            title: "Connection",
            slug: "/category/api-reference/v-5-0/connection",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/test-connection",
              label: "Test Connection",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Dashboard",
          link: {
            type: "generated-index",
            title: "Dashboard",
            slug: "/category/api-reference/v-5-0/dashboard",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/retrieve-dashboard-tiles-data",
              label: "Retrieve Dashboard Tiles Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/retrieve-dashboard-account-data",
              label: "Retrieve Dashboard Account Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/retrieve-dashboard-data",
              label: "Retrieve Dashboard Data",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Access Recommendations",
          link: {
            type: "generated-index",
            title: "Access Recommendations",
            slug: "/category/api-reference/v-5-0/access-recommendations",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-access-recommendations",
              label: "Get Access Recommendations",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Transport",
          link: {
            type: "generated-index",
            title: "Transport",
            slug: "/category/api-reference/v-5-0/transport",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/export-package",
              label: "Export Package",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/import-package",
              label: "Import Package",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/transport-status",
              label: "Transport Status",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Provisioning Policies",
          link: {
            type: "generated-index",
            title: "Provisioning Policies",
            slug: "/category/api-reference/v-5-0/provisioning-policies",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-technical-rules",
              label: "Fetch Technical Rules",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/update-technical-rules",
              label: "Update Technical Rules",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/create-technical-rules",
              label: "Create Technical Rules",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/delete-technical-rules",
              label: "Delete Technical Rules",
              className: "api-method delete",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Policies",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "api-reference/saviynt-enterprise-identity-cloud-api-reference",
        },
        {
          type: "category",
          label: "Segregation of Duties",
          link: {
            type: "generated-index",
            title: "Segregation of Duties",
            slug: "/category/api-reference/v-5-0/segregation-of-duties",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/sod-evaluation-for-sap-functions",
              label: "SoD Evaluation for SAP Functions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/sod-evaluation-for-non-sap-functions",
              label: "SoD Evaluation for Non - SAP Functions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/add-mitigating-control-risk-account",
              label: "Add Mitigating Control Risk Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/upload-sod-ruleset",
              label: "Upload SOD Ruleset",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Password Management",
          link: {
            type: "generated-index",
            title: "Password Management",
            slug: "/category/api-reference/v-5-0/password-management",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-security-questions",
              label: "Fetch Security Questions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-user-security-questions",
              label: "Fetch User Security Questions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/validate-user-security-answers",
              label: "Validate User Security Answers",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/create-security-questions",
              label: "Create Security Questions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/create-password-policy",
              label: "Create Password Policy",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/change-user-password",
              label: "Change User Password",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Provisioning Policies",
          link: {
            type: "generated-index",
            title: "Provisioning Policies",
            slug: "/category/api-reference/v-5-0/provisioning-policies",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-technical-rules",
              label: "Fetch Technical Rules",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/update-technical-rules",
              label: "Update Technical Rules",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/create-technical-rules",
              label: "Create Technical Rules",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/delete-technical-rules",
              label: "Delete Technical Rules",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Authentication",
          link: {
            type: "generated-index",
            title: "Authentication",
            slug: "/category/api-reference/v-5-0/authentication",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-authorization-token",
              label: "Get Authorization Token",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/refresh-authorization-token",
              label: "Refresh Authorization Token",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Users",
          link: {
            type: "generated-index",
            title: "Users",
            slug: "/category/api-reference/v-5-0/users",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-user",
              label: "Create User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-user",
              label: "Update User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-user-details",
              label: "Get User Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-users",
              label: "Get List of Users",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/authenticate-user",
              label: "Authenticate User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/validate-user-data",
              label: "Validate User Data",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Users Request",
          link: {
            type: "generated-index",
            title: "Users Request",
            slug: "/category/api-reference/v-5-0/users-request",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/bulk-upload-users",
              label: "Bulk Upload Users",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Role Membership",
          link: {
            type: "generated-index",
            title: "Role Membership",
            slug: "/category/api-reference/v-5-0/role-membership",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/add-remove-user-from-sav-role",
              label: "Add/Remove User from SAV ROLE",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-flat-response-role-details-for-user",
              label: "Get Flat Response Role Details For User",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Access",
          link: {
            type: "generated-index",
            title: "Access",
            slug: "/category/api-reference/v-5-0/access",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-access-details-for-user",
              label: "Get Access Details For User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-flat-response-entitlement-details-for-user",
              label: "Get Flat Response Entitlement Details For User",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/assign-entitlement-to-account",
              label: "Assign Entitlement to Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/remove-entitlement-from-account",
              label: "Remove Entitlement from Account",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Sav Roles",
          link: {
            type: "generated-index",
            title: "Sav Roles",
            slug: "/category/api-reference/v-5-0/sav-roles",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-savroles",
              label: "Get SavRoles",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Accounts",
          link: {
            type: "generated-index",
            title: "Accounts",
            slug: "/category/api-reference/v-5-0/accounts",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-account-details",
              label: "Get Account Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/export-account",
              label: "Export Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/create-account",
              label: "Create Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-account",
              label: "Update Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/assign-account-to-user",
              label: "Assign Account to User",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Privileges",
          link: {
            type: "generated-index",
            title: "Privileges",
            slug: "/category/api-reference/v-5-0/privileges",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-privilege",
              label: "Create Privilege",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/update-privilege",
              label: "Update Privilege",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/delete-privilege",
              label: "Delete Privilege",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-privileges-for-entitlement-type",
              label: "Get List of Privileges for Entitlement Type",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Entitlements",
          link: {
            type: "generated-index",
            title: "Entitlements",
            slug: "/category/api-reference/v-5-0/entitlements",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-entitlements",
              label: "Get Entitlements",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-child-entitlements",
              label: "Get Child Entitlements",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/create-update-entitlement",
              label: "Create/Update Entitlement",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-entitlement-values-for-endpoint",
              label: "Get Entitlement Values For Endpoint",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Roles",
          link: {
            type: "generated-index",
            title: "Roles",
            slug: "/category/api-reference/v-5-0/roles",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/remove-entitlement-from-role",
              label: "Remove Entitlement From Role",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/add-role",
              label: "Add Role",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-role-details-for-user",
              label: "Get Role Details for user",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-firefighter-role-details",
              label: "Get FireFighter Role Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/remove-role",
              label: "Remove Role",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Endpoints",
          link: {
            type: "generated-index",
            title: "Endpoints",
            slug: "/category/api-reference/v-5-0/endpoints",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-endpoint",
              label: "Create Endpoint",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-endpoint",
              label: "Update Endpoint",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-endpoints",
              label: "Get List of Endpoints",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Entitlement Types",
          link: {
            type: "generated-index",
            title: "Entitlement Types",
            slug: "/category/api-reference/v-5-0/entitlement-types",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-entitlement-type",
              label: "Create Entitlement Type",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-entitlement-type",
              label: "Update Entitlement Type",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-entitlement-types",
              label: "Get List of Entitlement Types",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/delete-entitlement-types",
              label: "Delete Entitlement Types",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Dynamic Attributes",
          link: {
            type: "generated-index",
            title: "Dynamic Attributes",
            slug: "/category/api-reference/v-5-0/dynamic-attributes",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-dynamic-attribute",
              label: "Create Dynamic Attribute",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-dynamic-attribute",
              label: "Update Dynamic Attribute",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/fetch-dynamic-attributes",
              label: "Fetch Dynamic Attributes",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/delete-dynamic-attribute",
              label: "Delete Dynamic Attribute",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Security Systems",
          link: {
            type: "generated-index",
            title: "Security Systems",
            slug: "/category/api-reference/v-5-0/security-systems",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-security-system",
              label: "Create Security System",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-security-system",
              label: "Update Security System",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-security-systems",
              label: "Get List of Security Systems",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/delete-security-system",
              label: "Delete Security System",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "User Groups",
          link: {
            type: "generated-index",
            title: "User Groups",
            slug: "/category/api-reference/v-5-0/user-groups",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-update-usergroup",
              label: "Create/Update UserGroup",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/add-remove-user-from-usergroup",
              label: "Add/Remove User From UserGroup",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/delete-usergroup",
              label: "Delete UserGroup",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-usergroups",
              label: "Get List of UserGroups",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Organization",
          link: {
            type: "generated-index",
            title: "Organization",
            slug: "/category/api-reference/v-5-0/organization",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-organization",
              label: "Create Organization",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-organization",
              label: "Update Organization",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-organization",
              label: "Get Organization",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/delete-organization",
              label: "Delete Organization",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Connections",
          link: {
            type: "generated-index",
            title: "Connections",
            slug: "/category/api-reference/v-5-0/connections",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-list-of-connections",
              label: "Get List of Connections",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-connections-details",
              label: "Get Connections Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/delete-connections",
              label: "Delete Connections",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Dataset",
          link: {
            type: "generated-index",
            title: "Dataset",
            slug: "/category/api-reference/v-5-0/dataset",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/createdataset",
              label: "createDataset",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/getdatasetvalues",
              label: "getDatasetValues",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/updatedatasetvalues",
              label: "updateDatasetValues",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/deletedataset",
              label: "deleteDataset",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/uploaddatasetcsv",
              label: "uploadDatasetCSV",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/updatedataset",
              label: "updateDataset",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Analytics",
          link: {
            type: "generated-index",
            title: "Analytics",
            slug: "/category/api-reference/v-5-0/analytics",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-list-of-analytics",
              label: "Fetch List of Analytics",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-analytics-details",
              label: "Fetch Analytics Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/run-analytics-controls",
              label: "Run Analytics Controls",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-runtime-controls-data",
              label: "Fetch Runtime Controls Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-runtime-controls-data-v-2",
              label: "Fetch Runtime Controls Data V2",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-list-of-analytics-es",
              label: "Fetch List of Analytics ES",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/fetch-control-attributes",
              label: "Fetch Control Attributes",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-control-details-es",
              label: "Fetch Control Details ES",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Request",
          link: {
            type: "generated-index",
            title: "User Request",
            slug: "/category/api-reference/v-5-0/user-request",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-user-request",
              label: "Create User Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-user-request",
              label: "Update User Request",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-requestable-users",
              label: "Get Requestable Users",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Role Request",
          link: {
            type: "generated-index",
            title: "Role Request",
            slug: "/category/api-reference/v-5-0/role-request",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-role-request",
              label: "Create Role Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-role-request",
              label: "Update Role Request",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Access Request",
          link: {
            type: "generated-index",
            title: "Access Request",
            slug: "/category/api-reference/v-5-0/access-request",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-user-requestable-entitlements",
              label: "Get User Requestable Entitlements",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/validate-entitlement-request-data",
              label: "Validate Entitlement Request Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/request-to-create-entitlement-based-role",
              label: "Request to Create Entitlement Based Role",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/create-auto-approved-request",
              label: "Create Auto-approved Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/create-birthright-request",
              label: "Create Birthright Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/add-approver-to-existing-request",
              label: "Add Approver to existing Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/cancel-pending-request",
              label: "Cancel Pending Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-pending-requests-for-approver",
              label: "Get List of Pending Requests for Approver",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-request-approval-details",
              label: "Fetch Request Approval Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-request-access-attributes",
              label: "Fetch Request Access Attributes",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Organization Request",
          link: {
            type: "generated-index",
            title: "Organization Request",
            slug: "/category/api-reference/v-5-0/organization-request",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-organization-request",
              label: "Create Organization Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-organization-request",
              label: "Update Organization Request",
              className: "api-method put",
            },
          ],
        },
        {
          type: "category",
          label: "Request History",
          link: {
            type: "generated-index",
            title: "Request History",
            slug: "/category/api-reference/v-5-0/request-history",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-request-history-my-pending-requests",
              label: "Fetch Request History (my pending requests)",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-request-history-details",
              label: "Fetch Request History Details",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Request Approval",
          link: {
            type: "generated-index",
            title: "Request Approval",
            slug: "/category/api-reference/v-5-0/request-approval",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/approve-reject-each-line-item-in-a-request",
              label: "Approve/Reject each line item in a request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-pending-approvals",
              label: "Get Pending Approvals",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/approve-reject-entire-request",
              label: "Approve/Reject entire request",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Tasks",
          link: {
            type: "generated-index",
            title: "Tasks",
            slug: "/category/api-reference/v-5-0/tasks",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-task-remove-entitlement",
              label: "Create Task - Remove Entitlement",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/complete-single-task",
              label: "Complete Single Task",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-tasks",
              label: "Update Tasks",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/discontinue-tasks",
              label: "Discontinue Tasks",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/discontinue-all-pending-tasks",
              label: "Discontinue All Pending Tasks",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-task-details",
              label: "Fetch Task Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/check-task-status",
              label: "Check Task Status",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Delegation",
          link: {
            type: "generated-index",
            title: "User Delegation",
            slug: "/category/api-reference/v-5-0/user-delegation",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-delegate-user-list",
              label: "Get Delegate User List",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/create-delegate",
              label: "Create Delegate",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-existing-delegates-list",
              label: "Fetch Existing Delegates List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/edit-delegate",
              label: "Edit Delegate",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/delete-delegate",
              label: "Delete Delegate",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Attestations",
          link: {
            type: "generated-index",
            title: "Attestations",
            slug: "/category/api-reference/v-5-0/attestations",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-attestation-list",
              label: "Fetch Attestation List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-attestation-details",
              label: "Fetch Attestation Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/certify-usermanager-requests",
              label: "Certify UserManager Requests",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-attestation-account-entitlement-details",
              label: "Fetch Attestation Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/approve-reject-attestation-account-details",
              label: "Approve Reject Attestation Account Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/lock-attestation",
              label: "Lock Attestation",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Campaigns",
          link: {
            type: "generated-index",
            title: "Campaigns",
            slug: "/category/api-reference/v-5-0/campaigns",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-campaign-list",
              label: "Fetch Campaign List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-campaign-details",
              label: "Fetch Campaign Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/lock-campaign",
              label: "Lock Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-certification-list",
              label: "Fetch Certification List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/discontinue-campaigns-and-certifications",
              label: "Discontinue Campaigns and Certifications",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-certification",
              label: "Reassign Certification",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Manager",
          link: {
            type: "generated-index",
            title: "User Manager",
            slug: "/category/api-reference/v-5-0/user-manager",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-campaign-details",
              label: "Fetch Campaign Details",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Manager Campaigns",
          link: {
            type: "generated-index",
            title: "User Manager Campaigns",
            slug: "/category/api-reference/v-5-0/user-manager-campaigns",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/certify-user-manager-for-campaign",
              label: "Certify User Manager for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-account-entitlement-details",
              label: "Fetch Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/approve-reject-campaign-account-entitlement-details",
              label: "Approve Reject Campaign Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-usermanager-step-1-for-campaign",
              label: "Reassign UserManager Step 1 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/consult-usermanager-step-1-for-campaign",
              label: "Consult UserManager Step 1 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/consult-campaign-account-entitlement-details",
              label: "Consult Campaign Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-certification-at-account-and-entitlement-level-copy",
              label: "Reassign Certification at Account and Entitlement Level Copy",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Entitlement Owner Campaigns",
          link: {
            type: "generated-index",
            title: "Entitlement Owner Campaigns",
            slug: "/category/api-reference/v-5-0/entitlement-owner-campaigns",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/consult-entitlementowner-step-1-for-campaign",
              label: "Consult EntitlementOwner Step 1 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/consult-entitlementowner-step-2-for-campaign",
              label: "Consult EntitlementOwner Step 2 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-account-entitlement-details-1",
              label: "Fetch Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-entitlement-owner-campaign-details",
              label: "Fetch Entitlement Owner Campaign Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-flat-response-entitlement-owner-campaign-details",
              label: "Fetch Flat Response Entitlement Owner Campaign Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/lock-campaign-1",
              label: "Lock Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/approve-reject-account-entitlement-details",
              label: "Approve Reject Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/certify-entitlement-owner-for-campaign",
              label: "Certify Entitlement Owner for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-entitlement-owner-for-campaign",
              label: "Reassign Entitlement Owner for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-certification-at-account-level",
              label: "Reassign Certification at Account Level",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Application Owner Campaigns",
          link: {
            type: "generated-index",
            title: "Application Owner Campaigns",
            slug: "/category/api-reference/v-5-0/application-owner-campaigns",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-account-entitlement-details-2",
              label: "Fetch Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/lock-campaign-2",
              label: "Lock Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/consult-appowner-account-entitlement-details",
              label: "Consult AppOwner Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-application-owner-for-campaign",
              label: "Reassign Application Owner for Campaign",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Application OwnerCampaigns",
          link: {
            type: "generated-index",
            title: "Application OwnerCampaigns",
            slug: "/category/api-reference/v-5-0/application-owner-campaigns",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/approve-reject-account-entitlement-details-1",
              label: "Approve Reject Account Entitlement Details",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Job Management",
          link: {
            type: "generated-index",
            title: "Job Management",
            slug: "/category/api-reference/v-5-0/job-management",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-and-update-trigger",
              label: "Create and Update Trigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/check-job-status",
              label: "Check Job Status",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/delete-trigger",
              label: "Delete Trigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/run-job-trigger",
              label: "Run Job Trigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-job-metadata",
              label: "Fetch Job Metadata",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/createtrigger",
              label: "createTrigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/resumepausejobs",
              label: "resumePauseJobs",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Common Utilities",
          link: {
            type: "generated-index",
            title: "Common Utilities",
            slug: "/category/api-reference/v-5-0/common-utilities",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/upload-new-file",
              label: "Upload New File",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/import-application-data",
              label: "Import Application Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/check-import-status",
              label: "Check Import Status",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/force-complete",
              label: "Force Complete",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/send-email",
              label: "Send Email",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Connection",
          link: {
            type: "generated-index",
            title: "Connection",
            slug: "/category/api-reference/v-5-0/connection",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/test-connection",
              label: "Test Connection",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Dashboard",
          link: {
            type: "generated-index",
            title: "Dashboard",
            slug: "/category/api-reference/v-5-0/dashboard",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/retrieve-dashboard-tiles-data",
              label: "Retrieve Dashboard Tiles Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/retrieve-dashboard-account-data",
              label: "Retrieve Dashboard Account Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/retrieve-dashboard-data",
              label: "Retrieve Dashboard Data",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Access Recommendations",
          link: {
            type: "generated-index",
            title: "Access Recommendations",
            slug: "/category/api-reference/v-5-0/access-recommendations",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-access-recommendations",
              label: "Get Access Recommendations",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Transport",
          link: {
            type: "generated-index",
            title: "Transport",
            slug: "/category/api-reference/v-5-0/transport",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/export-package",
              label: "Export Package",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/import-package",
              label: "Import Package",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/transport-status",
              label: "Transport Status",
              className: "api-method get",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Request",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "api-reference/saviynt-enterprise-identity-cloud-api-reference",
        },
        {
          type: "category",
          label: "Access Request",
          link: {
            type: "generated-index",
            title: "Access Request",
            slug: "/category/api-reference/v-5-0/access-request",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-user-requestable-entitlements",
              label: "Get User Requestable Entitlements",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/validate-entitlement-request-data",
              label: "Validate Entitlement Request Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/request-to-create-entitlement-based-role",
              label: "Request to Create Entitlement Based Role",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/create-auto-approved-request",
              label: "Create Auto-approved Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/create-birthright-request",
              label: "Create Birthright Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/add-approver-to-existing-request",
              label: "Add Approver to existing Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/cancel-pending-request",
              label: "Cancel Pending Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-pending-requests-for-approver",
              label: "Get List of Pending Requests for Approver",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-request-approval-details",
              label: "Fetch Request Approval Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-request-access-attributes",
              label: "Fetch Request Access Attributes",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Request Approval",
          link: {
            type: "generated-index",
            title: "Request Approval",
            slug: "/category/api-reference/v-5-0/request-approval",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/approve-reject-each-line-item-in-a-request",
              label: "Approve/Reject each line item in a request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-pending-approvals",
              label: "Get Pending Approvals",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/approve-reject-entire-request",
              label: "Approve/Reject entire request",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Tasks",
          link: {
            type: "generated-index",
            title: "Tasks",
            slug: "/category/api-reference/v-5-0/tasks",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-task-remove-entitlement",
              label: "Create Task - Remove Entitlement",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/complete-single-task",
              label: "Complete Single Task",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-tasks",
              label: "Update Tasks",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/discontinue-tasks",
              label: "Discontinue Tasks",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/discontinue-all-pending-tasks",
              label: "Discontinue All Pending Tasks",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-task-details",
              label: "Fetch Task Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/check-task-status",
              label: "Check Task Status",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Authentication",
          link: {
            type: "generated-index",
            title: "Authentication",
            slug: "/category/api-reference/v-5-0/authentication",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-authorization-token",
              label: "Get Authorization Token",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/refresh-authorization-token",
              label: "Refresh Authorization Token",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Users",
          link: {
            type: "generated-index",
            title: "Users",
            slug: "/category/api-reference/v-5-0/users",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-user",
              label: "Create User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-user",
              label: "Update User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-user-details",
              label: "Get User Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-users",
              label: "Get List of Users",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/authenticate-user",
              label: "Authenticate User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/validate-user-data",
              label: "Validate User Data",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Users Request",
          link: {
            type: "generated-index",
            title: "Users Request",
            slug: "/category/api-reference/v-5-0/users-request",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/bulk-upload-users",
              label: "Bulk Upload Users",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Role Membership",
          link: {
            type: "generated-index",
            title: "Role Membership",
            slug: "/category/api-reference/v-5-0/role-membership",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/add-remove-user-from-sav-role",
              label: "Add/Remove User from SAV ROLE",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-flat-response-role-details-for-user",
              label: "Get Flat Response Role Details For User",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Access",
          link: {
            type: "generated-index",
            title: "Access",
            slug: "/category/api-reference/v-5-0/access",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-access-details-for-user",
              label: "Get Access Details For User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-flat-response-entitlement-details-for-user",
              label: "Get Flat Response Entitlement Details For User",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/assign-entitlement-to-account",
              label: "Assign Entitlement to Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/remove-entitlement-from-account",
              label: "Remove Entitlement from Account",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Sav Roles",
          link: {
            type: "generated-index",
            title: "Sav Roles",
            slug: "/category/api-reference/v-5-0/sav-roles",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-savroles",
              label: "Get SavRoles",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Accounts",
          link: {
            type: "generated-index",
            title: "Accounts",
            slug: "/category/api-reference/v-5-0/accounts",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-account-details",
              label: "Get Account Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/export-account",
              label: "Export Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/create-account",
              label: "Create Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-account",
              label: "Update Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/assign-account-to-user",
              label: "Assign Account to User",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Privileges",
          link: {
            type: "generated-index",
            title: "Privileges",
            slug: "/category/api-reference/v-5-0/privileges",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-privilege",
              label: "Create Privilege",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/update-privilege",
              label: "Update Privilege",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/delete-privilege",
              label: "Delete Privilege",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-privileges-for-entitlement-type",
              label: "Get List of Privileges for Entitlement Type",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Entitlements",
          link: {
            type: "generated-index",
            title: "Entitlements",
            slug: "/category/api-reference/v-5-0/entitlements",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-entitlements",
              label: "Get Entitlements",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-child-entitlements",
              label: "Get Child Entitlements",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/create-update-entitlement",
              label: "Create/Update Entitlement",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-entitlement-values-for-endpoint",
              label: "Get Entitlement Values For Endpoint",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Roles",
          link: {
            type: "generated-index",
            title: "Roles",
            slug: "/category/api-reference/v-5-0/roles",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/remove-entitlement-from-role",
              label: "Remove Entitlement From Role",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/add-role",
              label: "Add Role",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-role-details-for-user",
              label: "Get Role Details for user",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-firefighter-role-details",
              label: "Get FireFighter Role Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/remove-role",
              label: "Remove Role",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Endpoints",
          link: {
            type: "generated-index",
            title: "Endpoints",
            slug: "/category/api-reference/v-5-0/endpoints",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-endpoint",
              label: "Create Endpoint",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-endpoint",
              label: "Update Endpoint",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-endpoints",
              label: "Get List of Endpoints",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Entitlement Types",
          link: {
            type: "generated-index",
            title: "Entitlement Types",
            slug: "/category/api-reference/v-5-0/entitlement-types",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-entitlement-type",
              label: "Create Entitlement Type",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-entitlement-type",
              label: "Update Entitlement Type",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-entitlement-types",
              label: "Get List of Entitlement Types",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/delete-entitlement-types",
              label: "Delete Entitlement Types",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Dynamic Attributes",
          link: {
            type: "generated-index",
            title: "Dynamic Attributes",
            slug: "/category/api-reference/v-5-0/dynamic-attributes",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-dynamic-attribute",
              label: "Create Dynamic Attribute",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-dynamic-attribute",
              label: "Update Dynamic Attribute",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/fetch-dynamic-attributes",
              label: "Fetch Dynamic Attributes",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/delete-dynamic-attribute",
              label: "Delete Dynamic Attribute",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Security Systems",
          link: {
            type: "generated-index",
            title: "Security Systems",
            slug: "/category/api-reference/v-5-0/security-systems",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-security-system",
              label: "Create Security System",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-security-system",
              label: "Update Security System",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-security-systems",
              label: "Get List of Security Systems",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/delete-security-system",
              label: "Delete Security System",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "User Groups",
          link: {
            type: "generated-index",
            title: "User Groups",
            slug: "/category/api-reference/v-5-0/user-groups",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-update-usergroup",
              label: "Create/Update UserGroup",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/add-remove-user-from-usergroup",
              label: "Add/Remove User From UserGroup",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/delete-usergroup",
              label: "Delete UserGroup",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-usergroups",
              label: "Get List of UserGroups",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Organization",
          link: {
            type: "generated-index",
            title: "Organization",
            slug: "/category/api-reference/v-5-0/organization",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-organization",
              label: "Create Organization",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-organization",
              label: "Update Organization",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-organization",
              label: "Get Organization",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/delete-organization",
              label: "Delete Organization",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Connections",
          link: {
            type: "generated-index",
            title: "Connections",
            slug: "/category/api-reference/v-5-0/connections",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-list-of-connections",
              label: "Get List of Connections",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-connections-details",
              label: "Get Connections Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/delete-connections",
              label: "Delete Connections",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Dataset",
          link: {
            type: "generated-index",
            title: "Dataset",
            slug: "/category/api-reference/v-5-0/dataset",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/createdataset",
              label: "createDataset",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/getdatasetvalues",
              label: "getDatasetValues",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/updatedatasetvalues",
              label: "updateDatasetValues",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/deletedataset",
              label: "deleteDataset",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/uploaddatasetcsv",
              label: "uploadDatasetCSV",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/updatedataset",
              label: "updateDataset",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Analytics",
          link: {
            type: "generated-index",
            title: "Analytics",
            slug: "/category/api-reference/v-5-0/analytics",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-list-of-analytics",
              label: "Fetch List of Analytics",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-analytics-details",
              label: "Fetch Analytics Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/run-analytics-controls",
              label: "Run Analytics Controls",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-runtime-controls-data",
              label: "Fetch Runtime Controls Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-runtime-controls-data-v-2",
              label: "Fetch Runtime Controls Data V2",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-list-of-analytics-es",
              label: "Fetch List of Analytics ES",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/fetch-control-attributes",
              label: "Fetch Control Attributes",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-control-details-es",
              label: "Fetch Control Details ES",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Request",
          link: {
            type: "generated-index",
            title: "User Request",
            slug: "/category/api-reference/v-5-0/user-request",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-user-request",
              label: "Create User Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-user-request",
              label: "Update User Request",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-requestable-users",
              label: "Get Requestable Users",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Role Request",
          link: {
            type: "generated-index",
            title: "Role Request",
            slug: "/category/api-reference/v-5-0/role-request",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-role-request",
              label: "Create Role Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-role-request",
              label: "Update Role Request",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Organization Request",
          link: {
            type: "generated-index",
            title: "Organization Request",
            slug: "/category/api-reference/v-5-0/organization-request",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-organization-request",
              label: "Create Organization Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-organization-request",
              label: "Update Organization Request",
              className: "api-method put",
            },
          ],
        },
        {
          type: "category",
          label: "Request History",
          link: {
            type: "generated-index",
            title: "Request History",
            slug: "/category/api-reference/v-5-0/request-history",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-request-history-my-pending-requests",
              label: "Fetch Request History (my pending requests)",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-request-history-details",
              label: "Fetch Request History Details",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Delegation",
          link: {
            type: "generated-index",
            title: "User Delegation",
            slug: "/category/api-reference/v-5-0/user-delegation",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-delegate-user-list",
              label: "Get Delegate User List",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/create-delegate",
              label: "Create Delegate",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-existing-delegates-list",
              label: "Fetch Existing Delegates List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/edit-delegate",
              label: "Edit Delegate",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/delete-delegate",
              label: "Delete Delegate",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Attestations",
          link: {
            type: "generated-index",
            title: "Attestations",
            slug: "/category/api-reference/v-5-0/attestations",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-attestation-list",
              label: "Fetch Attestation List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-attestation-details",
              label: "Fetch Attestation Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/certify-usermanager-requests",
              label: "Certify UserManager Requests",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-attestation-account-entitlement-details",
              label: "Fetch Attestation Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/approve-reject-attestation-account-details",
              label: "Approve Reject Attestation Account Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/lock-attestation",
              label: "Lock Attestation",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Campaigns",
          link: {
            type: "generated-index",
            title: "Campaigns",
            slug: "/category/api-reference/v-5-0/campaigns",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-campaign-list",
              label: "Fetch Campaign List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-campaign-details",
              label: "Fetch Campaign Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/lock-campaign",
              label: "Lock Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-certification-list",
              label: "Fetch Certification List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/discontinue-campaigns-and-certifications",
              label: "Discontinue Campaigns and Certifications",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-certification",
              label: "Reassign Certification",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Manager",
          link: {
            type: "generated-index",
            title: "User Manager",
            slug: "/category/api-reference/v-5-0/user-manager",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-campaign-details",
              label: "Fetch Campaign Details",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Manager Campaigns",
          link: {
            type: "generated-index",
            title: "User Manager Campaigns",
            slug: "/category/api-reference/v-5-0/user-manager-campaigns",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/certify-user-manager-for-campaign",
              label: "Certify User Manager for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-account-entitlement-details",
              label: "Fetch Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/approve-reject-campaign-account-entitlement-details",
              label: "Approve Reject Campaign Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-usermanager-step-1-for-campaign",
              label: "Reassign UserManager Step 1 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/consult-usermanager-step-1-for-campaign",
              label: "Consult UserManager Step 1 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/consult-campaign-account-entitlement-details",
              label: "Consult Campaign Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-certification-at-account-and-entitlement-level-copy",
              label: "Reassign Certification at Account and Entitlement Level Copy",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Entitlement Owner Campaigns",
          link: {
            type: "generated-index",
            title: "Entitlement Owner Campaigns",
            slug: "/category/api-reference/v-5-0/entitlement-owner-campaigns",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/consult-entitlementowner-step-1-for-campaign",
              label: "Consult EntitlementOwner Step 1 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/consult-entitlementowner-step-2-for-campaign",
              label: "Consult EntitlementOwner Step 2 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-account-entitlement-details-1",
              label: "Fetch Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-entitlement-owner-campaign-details",
              label: "Fetch Entitlement Owner Campaign Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-flat-response-entitlement-owner-campaign-details",
              label: "Fetch Flat Response Entitlement Owner Campaign Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/lock-campaign-1",
              label: "Lock Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/approve-reject-account-entitlement-details",
              label: "Approve Reject Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/certify-entitlement-owner-for-campaign",
              label: "Certify Entitlement Owner for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-entitlement-owner-for-campaign",
              label: "Reassign Entitlement Owner for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-certification-at-account-level",
              label: "Reassign Certification at Account Level",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Application Owner Campaigns",
          link: {
            type: "generated-index",
            title: "Application Owner Campaigns",
            slug: "/category/api-reference/v-5-0/application-owner-campaigns",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-account-entitlement-details-2",
              label: "Fetch Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/lock-campaign-2",
              label: "Lock Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/consult-appowner-account-entitlement-details",
              label: "Consult AppOwner Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-application-owner-for-campaign",
              label: "Reassign Application Owner for Campaign",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Application OwnerCampaigns",
          link: {
            type: "generated-index",
            title: "Application OwnerCampaigns",
            slug: "/category/api-reference/v-5-0/application-owner-campaigns",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/approve-reject-account-entitlement-details-1",
              label: "Approve Reject Account Entitlement Details",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Segregation of Duties",
          link: {
            type: "generated-index",
            title: "Segregation of Duties",
            slug: "/category/api-reference/v-5-0/segregation-of-duties",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/sod-evaluation-for-sap-functions",
              label: "SoD Evaluation for SAP Functions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/sod-evaluation-for-non-sap-functions",
              label: "SoD Evaluation for Non - SAP Functions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/add-mitigating-control-risk-account",
              label: "Add Mitigating Control Risk Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/upload-sod-ruleset",
              label: "Upload SOD Ruleset",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Password Management",
          link: {
            type: "generated-index",
            title: "Password Management",
            slug: "/category/api-reference/v-5-0/password-management",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-security-questions",
              label: "Fetch Security Questions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-user-security-questions",
              label: "Fetch User Security Questions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/validate-user-security-answers",
              label: "Validate User Security Answers",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/create-security-questions",
              label: "Create Security Questions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/create-password-policy",
              label: "Create Password Policy",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/change-user-password",
              label: "Change User Password",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Job Management",
          link: {
            type: "generated-index",
            title: "Job Management",
            slug: "/category/api-reference/v-5-0/job-management",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-and-update-trigger",
              label: "Create and Update Trigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/check-job-status",
              label: "Check Job Status",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/delete-trigger",
              label: "Delete Trigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/run-job-trigger",
              label: "Run Job Trigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-job-metadata",
              label: "Fetch Job Metadata",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/createtrigger",
              label: "createTrigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/resumepausejobs",
              label: "resumePauseJobs",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Common Utilities",
          link: {
            type: "generated-index",
            title: "Common Utilities",
            slug: "/category/api-reference/v-5-0/common-utilities",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/upload-new-file",
              label: "Upload New File",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/import-application-data",
              label: "Import Application Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/check-import-status",
              label: "Check Import Status",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/force-complete",
              label: "Force Complete",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/send-email",
              label: "Send Email",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Connection",
          link: {
            type: "generated-index",
            title: "Connection",
            slug: "/category/api-reference/v-5-0/connection",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/test-connection",
              label: "Test Connection",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Dashboard",
          link: {
            type: "generated-index",
            title: "Dashboard",
            slug: "/category/api-reference/v-5-0/dashboard",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/retrieve-dashboard-tiles-data",
              label: "Retrieve Dashboard Tiles Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/retrieve-dashboard-account-data",
              label: "Retrieve Dashboard Account Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/retrieve-dashboard-data",
              label: "Retrieve Dashboard Data",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Access Recommendations",
          link: {
            type: "generated-index",
            title: "Access Recommendations",
            slug: "/category/api-reference/v-5-0/access-recommendations",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-access-recommendations",
              label: "Get Access Recommendations",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Transport",
          link: {
            type: "generated-index",
            title: "Transport",
            slug: "/category/api-reference/v-5-0/transport",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/export-package",
              label: "Export Package",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/import-package",
              label: "Import Package",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/transport-status",
              label: "Transport Status",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Provisioning Policies",
          link: {
            type: "generated-index",
            title: "Provisioning Policies",
            slug: "/category/api-reference/v-5-0/provisioning-policies",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-technical-rules",
              label: "Fetch Technical Rules",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/update-technical-rules",
              label: "Update Technical Rules",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/create-technical-rules",
              label: "Create Technical Rules",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/delete-technical-rules",
              label: "Delete Technical Rules",
              className: "api-method delete",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Applications",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "api-reference/saviynt-enterprise-identity-cloud-api-reference",
        },
        {
          type: "category",
          label: "Entitlements",
          link: {
            type: "generated-index",
            title: "Entitlements",
            slug: "/category/api-reference/v-5-0/entitlements",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-entitlements",
              label: "Get Entitlements",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-child-entitlements",
              label: "Get Child Entitlements",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/create-update-entitlement",
              label: "Create/Update Entitlement",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-entitlement-values-for-endpoint",
              label: "Get Entitlement Values For Endpoint",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Privileges",
          link: {
            type: "generated-index",
            title: "Privileges",
            slug: "/category/api-reference/v-5-0/privileges",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-privilege",
              label: "Create Privilege",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/update-privilege",
              label: "Update Privilege",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/delete-privilege",
              label: "Delete Privilege",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-privileges-for-entitlement-type",
              label: "Get List of Privileges for Entitlement Type",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Security Systems",
          link: {
            type: "generated-index",
            title: "Security Systems",
            slug: "/category/api-reference/v-5-0/security-systems",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-security-system",
              label: "Create Security System",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-security-system",
              label: "Update Security System",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-security-systems",
              label: "Get List of Security Systems",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/delete-security-system",
              label: "Delete Security System",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Endpoints",
          link: {
            type: "generated-index",
            title: "Endpoints",
            slug: "/category/api-reference/v-5-0/endpoints",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-endpoint",
              label: "Create Endpoint",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-endpoint",
              label: "Update Endpoint",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-endpoints",
              label: "Get List of Endpoints",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Connections",
          link: {
            type: "generated-index",
            title: "Connections",
            slug: "/category/api-reference/v-5-0/connections",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-list-of-connections",
              label: "Get List of Connections",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-connections-details",
              label: "Get Connections Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/delete-connections",
              label: "Delete Connections",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Entitlement Types",
          link: {
            type: "generated-index",
            title: "Entitlement Types",
            slug: "/category/api-reference/v-5-0/entitlement-types",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-entitlement-type",
              label: "Create Entitlement Type",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-entitlement-type",
              label: "Update Entitlement Type",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-entitlement-types",
              label: "Get List of Entitlement Types",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/delete-entitlement-types",
              label: "Delete Entitlement Types",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Dynamic Attributes",
          link: {
            type: "generated-index",
            title: "Dynamic Attributes",
            slug: "/category/api-reference/v-5-0/dynamic-attributes",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-dynamic-attribute",
              label: "Create Dynamic Attribute",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-dynamic-attribute",
              label: "Update Dynamic Attribute",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/fetch-dynamic-attributes",
              label: "Fetch Dynamic Attributes",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/delete-dynamic-attribute",
              label: "Delete Dynamic Attribute",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Authentication",
          link: {
            type: "generated-index",
            title: "Authentication",
            slug: "/category/api-reference/v-5-0/authentication",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-authorization-token",
              label: "Get Authorization Token",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/refresh-authorization-token",
              label: "Refresh Authorization Token",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Users",
          link: {
            type: "generated-index",
            title: "Users",
            slug: "/category/api-reference/v-5-0/users",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-user",
              label: "Create User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-user",
              label: "Update User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-user-details",
              label: "Get User Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-users",
              label: "Get List of Users",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/authenticate-user",
              label: "Authenticate User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/validate-user-data",
              label: "Validate User Data",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Users Request",
          link: {
            type: "generated-index",
            title: "Users Request",
            slug: "/category/api-reference/v-5-0/users-request",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/bulk-upload-users",
              label: "Bulk Upload Users",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Role Membership",
          link: {
            type: "generated-index",
            title: "Role Membership",
            slug: "/category/api-reference/v-5-0/role-membership",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/add-remove-user-from-sav-role",
              label: "Add/Remove User from SAV ROLE",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-flat-response-role-details-for-user",
              label: "Get Flat Response Role Details For User",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Access",
          link: {
            type: "generated-index",
            title: "Access",
            slug: "/category/api-reference/v-5-0/access",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-access-details-for-user",
              label: "Get Access Details For User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-flat-response-entitlement-details-for-user",
              label: "Get Flat Response Entitlement Details For User",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/assign-entitlement-to-account",
              label: "Assign Entitlement to Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/remove-entitlement-from-account",
              label: "Remove Entitlement from Account",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Sav Roles",
          link: {
            type: "generated-index",
            title: "Sav Roles",
            slug: "/category/api-reference/v-5-0/sav-roles",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-savroles",
              label: "Get SavRoles",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Accounts",
          link: {
            type: "generated-index",
            title: "Accounts",
            slug: "/category/api-reference/v-5-0/accounts",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-account-details",
              label: "Get Account Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/export-account",
              label: "Export Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/create-account",
              label: "Create Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-account",
              label: "Update Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/assign-account-to-user",
              label: "Assign Account to User",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Roles",
          link: {
            type: "generated-index",
            title: "Roles",
            slug: "/category/api-reference/v-5-0/roles",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/remove-entitlement-from-role",
              label: "Remove Entitlement From Role",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/add-role",
              label: "Add Role",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-role-details-for-user",
              label: "Get Role Details for user",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-firefighter-role-details",
              label: "Get FireFighter Role Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/remove-role",
              label: "Remove Role",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Groups",
          link: {
            type: "generated-index",
            title: "User Groups",
            slug: "/category/api-reference/v-5-0/user-groups",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-update-usergroup",
              label: "Create/Update UserGroup",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/add-remove-user-from-usergroup",
              label: "Add/Remove User From UserGroup",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/delete-usergroup",
              label: "Delete UserGroup",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-usergroups",
              label: "Get List of UserGroups",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Organization",
          link: {
            type: "generated-index",
            title: "Organization",
            slug: "/category/api-reference/v-5-0/organization",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-organization",
              label: "Create Organization",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-organization",
              label: "Update Organization",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-organization",
              label: "Get Organization",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/delete-organization",
              label: "Delete Organization",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Dataset",
          link: {
            type: "generated-index",
            title: "Dataset",
            slug: "/category/api-reference/v-5-0/dataset",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/createdataset",
              label: "createDataset",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/getdatasetvalues",
              label: "getDatasetValues",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/updatedatasetvalues",
              label: "updateDatasetValues",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/deletedataset",
              label: "deleteDataset",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/uploaddatasetcsv",
              label: "uploadDatasetCSV",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/updatedataset",
              label: "updateDataset",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Analytics",
          link: {
            type: "generated-index",
            title: "Analytics",
            slug: "/category/api-reference/v-5-0/analytics",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-list-of-analytics",
              label: "Fetch List of Analytics",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-analytics-details",
              label: "Fetch Analytics Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/run-analytics-controls",
              label: "Run Analytics Controls",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-runtime-controls-data",
              label: "Fetch Runtime Controls Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-runtime-controls-data-v-2",
              label: "Fetch Runtime Controls Data V2",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-list-of-analytics-es",
              label: "Fetch List of Analytics ES",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/fetch-control-attributes",
              label: "Fetch Control Attributes",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-control-details-es",
              label: "Fetch Control Details ES",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Request",
          link: {
            type: "generated-index",
            title: "User Request",
            slug: "/category/api-reference/v-5-0/user-request",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-user-request",
              label: "Create User Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-user-request",
              label: "Update User Request",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-requestable-users",
              label: "Get Requestable Users",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Role Request",
          link: {
            type: "generated-index",
            title: "Role Request",
            slug: "/category/api-reference/v-5-0/role-request",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-role-request",
              label: "Create Role Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-role-request",
              label: "Update Role Request",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Access Request",
          link: {
            type: "generated-index",
            title: "Access Request",
            slug: "/category/api-reference/v-5-0/access-request",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-user-requestable-entitlements",
              label: "Get User Requestable Entitlements",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/validate-entitlement-request-data",
              label: "Validate Entitlement Request Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/request-to-create-entitlement-based-role",
              label: "Request to Create Entitlement Based Role",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/create-auto-approved-request",
              label: "Create Auto-approved Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/create-birthright-request",
              label: "Create Birthright Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/add-approver-to-existing-request",
              label: "Add Approver to existing Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/cancel-pending-request",
              label: "Cancel Pending Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-pending-requests-for-approver",
              label: "Get List of Pending Requests for Approver",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-request-approval-details",
              label: "Fetch Request Approval Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-request-access-attributes",
              label: "Fetch Request Access Attributes",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Organization Request",
          link: {
            type: "generated-index",
            title: "Organization Request",
            slug: "/category/api-reference/v-5-0/organization-request",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-organization-request",
              label: "Create Organization Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-organization-request",
              label: "Update Organization Request",
              className: "api-method put",
            },
          ],
        },
        {
          type: "category",
          label: "Request History",
          link: {
            type: "generated-index",
            title: "Request History",
            slug: "/category/api-reference/v-5-0/request-history",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-request-history-my-pending-requests",
              label: "Fetch Request History (my pending requests)",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-request-history-details",
              label: "Fetch Request History Details",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Request Approval",
          link: {
            type: "generated-index",
            title: "Request Approval",
            slug: "/category/api-reference/v-5-0/request-approval",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/approve-reject-each-line-item-in-a-request",
              label: "Approve/Reject each line item in a request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-pending-approvals",
              label: "Get Pending Approvals",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/approve-reject-entire-request",
              label: "Approve/Reject entire request",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Tasks",
          link: {
            type: "generated-index",
            title: "Tasks",
            slug: "/category/api-reference/v-5-0/tasks",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-task-remove-entitlement",
              label: "Create Task - Remove Entitlement",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/complete-single-task",
              label: "Complete Single Task",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-tasks",
              label: "Update Tasks",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/discontinue-tasks",
              label: "Discontinue Tasks",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/discontinue-all-pending-tasks",
              label: "Discontinue All Pending Tasks",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-task-details",
              label: "Fetch Task Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/check-task-status",
              label: "Check Task Status",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Delegation",
          link: {
            type: "generated-index",
            title: "User Delegation",
            slug: "/category/api-reference/v-5-0/user-delegation",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-delegate-user-list",
              label: "Get Delegate User List",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/create-delegate",
              label: "Create Delegate",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-existing-delegates-list",
              label: "Fetch Existing Delegates List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/edit-delegate",
              label: "Edit Delegate",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/delete-delegate",
              label: "Delete Delegate",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Attestations",
          link: {
            type: "generated-index",
            title: "Attestations",
            slug: "/category/api-reference/v-5-0/attestations",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-attestation-list",
              label: "Fetch Attestation List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-attestation-details",
              label: "Fetch Attestation Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/certify-usermanager-requests",
              label: "Certify UserManager Requests",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-attestation-account-entitlement-details",
              label: "Fetch Attestation Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/approve-reject-attestation-account-details",
              label: "Approve Reject Attestation Account Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/lock-attestation",
              label: "Lock Attestation",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Campaigns",
          link: {
            type: "generated-index",
            title: "Campaigns",
            slug: "/category/api-reference/v-5-0/campaigns",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-campaign-list",
              label: "Fetch Campaign List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-campaign-details",
              label: "Fetch Campaign Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/lock-campaign",
              label: "Lock Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-certification-list",
              label: "Fetch Certification List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/discontinue-campaigns-and-certifications",
              label: "Discontinue Campaigns and Certifications",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-certification",
              label: "Reassign Certification",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Manager",
          link: {
            type: "generated-index",
            title: "User Manager",
            slug: "/category/api-reference/v-5-0/user-manager",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-campaign-details",
              label: "Fetch Campaign Details",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Manager Campaigns",
          link: {
            type: "generated-index",
            title: "User Manager Campaigns",
            slug: "/category/api-reference/v-5-0/user-manager-campaigns",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/certify-user-manager-for-campaign",
              label: "Certify User Manager for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-account-entitlement-details",
              label: "Fetch Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/approve-reject-campaign-account-entitlement-details",
              label: "Approve Reject Campaign Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-usermanager-step-1-for-campaign",
              label: "Reassign UserManager Step 1 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/consult-usermanager-step-1-for-campaign",
              label: "Consult UserManager Step 1 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/consult-campaign-account-entitlement-details",
              label: "Consult Campaign Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-certification-at-account-and-entitlement-level-copy",
              label: "Reassign Certification at Account and Entitlement Level Copy",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Entitlement Owner Campaigns",
          link: {
            type: "generated-index",
            title: "Entitlement Owner Campaigns",
            slug: "/category/api-reference/v-5-0/entitlement-owner-campaigns",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/consult-entitlementowner-step-1-for-campaign",
              label: "Consult EntitlementOwner Step 1 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/consult-entitlementowner-step-2-for-campaign",
              label: "Consult EntitlementOwner Step 2 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-account-entitlement-details-1",
              label: "Fetch Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-entitlement-owner-campaign-details",
              label: "Fetch Entitlement Owner Campaign Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-flat-response-entitlement-owner-campaign-details",
              label: "Fetch Flat Response Entitlement Owner Campaign Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/lock-campaign-1",
              label: "Lock Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/approve-reject-account-entitlement-details",
              label: "Approve Reject Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/certify-entitlement-owner-for-campaign",
              label: "Certify Entitlement Owner for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-entitlement-owner-for-campaign",
              label: "Reassign Entitlement Owner for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-certification-at-account-level",
              label: "Reassign Certification at Account Level",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Application Owner Campaigns",
          link: {
            type: "generated-index",
            title: "Application Owner Campaigns",
            slug: "/category/api-reference/v-5-0/application-owner-campaigns",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-account-entitlement-details-2",
              label: "Fetch Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/lock-campaign-2",
              label: "Lock Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/consult-appowner-account-entitlement-details",
              label: "Consult AppOwner Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-application-owner-for-campaign",
              label: "Reassign Application Owner for Campaign",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Application OwnerCampaigns",
          link: {
            type: "generated-index",
            title: "Application OwnerCampaigns",
            slug: "/category/api-reference/v-5-0/application-owner-campaigns",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/approve-reject-account-entitlement-details-1",
              label: "Approve Reject Account Entitlement Details",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Segregation of Duties",
          link: {
            type: "generated-index",
            title: "Segregation of Duties",
            slug: "/category/api-reference/v-5-0/segregation-of-duties",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/sod-evaluation-for-sap-functions",
              label: "SoD Evaluation for SAP Functions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/sod-evaluation-for-non-sap-functions",
              label: "SoD Evaluation for Non - SAP Functions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/add-mitigating-control-risk-account",
              label: "Add Mitigating Control Risk Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/upload-sod-ruleset",
              label: "Upload SOD Ruleset",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Password Management",
          link: {
            type: "generated-index",
            title: "Password Management",
            slug: "/category/api-reference/v-5-0/password-management",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-security-questions",
              label: "Fetch Security Questions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-user-security-questions",
              label: "Fetch User Security Questions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/validate-user-security-answers",
              label: "Validate User Security Answers",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/create-security-questions",
              label: "Create Security Questions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/create-password-policy",
              label: "Create Password Policy",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/change-user-password",
              label: "Change User Password",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Job Management",
          link: {
            type: "generated-index",
            title: "Job Management",
            slug: "/category/api-reference/v-5-0/job-management",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-and-update-trigger",
              label: "Create and Update Trigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/check-job-status",
              label: "Check Job Status",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/delete-trigger",
              label: "Delete Trigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/run-job-trigger",
              label: "Run Job Trigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-job-metadata",
              label: "Fetch Job Metadata",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/createtrigger",
              label: "createTrigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/resumepausejobs",
              label: "resumePauseJobs",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Common Utilities",
          link: {
            type: "generated-index",
            title: "Common Utilities",
            slug: "/category/api-reference/v-5-0/common-utilities",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/upload-new-file",
              label: "Upload New File",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/import-application-data",
              label: "Import Application Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/check-import-status",
              label: "Check Import Status",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/force-complete",
              label: "Force Complete",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/send-email",
              label: "Send Email",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Connection",
          link: {
            type: "generated-index",
            title: "Connection",
            slug: "/category/api-reference/v-5-0/connection",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/test-connection",
              label: "Test Connection",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Dashboard",
          link: {
            type: "generated-index",
            title: "Dashboard",
            slug: "/category/api-reference/v-5-0/dashboard",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/retrieve-dashboard-tiles-data",
              label: "Retrieve Dashboard Tiles Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/retrieve-dashboard-account-data",
              label: "Retrieve Dashboard Account Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/retrieve-dashboard-data",
              label: "Retrieve Dashboard Data",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Access Recommendations",
          link: {
            type: "generated-index",
            title: "Access Recommendations",
            slug: "/category/api-reference/v-5-0/access-recommendations",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-access-recommendations",
              label: "Get Access Recommendations",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Transport",
          link: {
            type: "generated-index",
            title: "Transport",
            slug: "/category/api-reference/v-5-0/transport",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/export-package",
              label: "Export Package",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/import-package",
              label: "Import Package",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/transport-status",
              label: "Transport Status",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Provisioning Policies",
          link: {
            type: "generated-index",
            title: "Provisioning Policies",
            slug: "/category/api-reference/v-5-0/provisioning-policies",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-technical-rules",
              label: "Fetch Technical Rules",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/update-technical-rules",
              label: "Update Technical Rules",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/create-technical-rules",
              label: "Create Technical Rules",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/delete-technical-rules",
              label: "Delete Technical Rules",
              className: "api-method delete",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Campaigns",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "api-reference/saviynt-enterprise-identity-cloud-api-reference",
        },
        {
          type: "category",
          label: "Attestations",
          link: {
            type: "generated-index",
            title: "Attestations",
            slug: "/category/api-reference/v-5-0/attestations",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-attestation-list",
              label: "Fetch Attestation List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-attestation-details",
              label: "Fetch Attestation Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/certify-usermanager-requests",
              label: "Certify UserManager Requests",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-attestation-account-entitlement-details",
              label: "Fetch Attestation Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/approve-reject-attestation-account-details",
              label: "Approve Reject Attestation Account Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/lock-attestation",
              label: "Lock Attestation",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Campaigns",
          link: {
            type: "generated-index",
            title: "Campaigns",
            slug: "/category/api-reference/v-5-0/campaigns",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-campaign-list",
              label: "Fetch Campaign List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-campaign-details",
              label: "Fetch Campaign Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/lock-campaign",
              label: "Lock Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-certification-list",
              label: "Fetch Certification List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/discontinue-campaigns-and-certifications",
              label: "Discontinue Campaigns and Certifications",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-certification",
              label: "Reassign Certification",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Manager Campaigns",
          link: {
            type: "generated-index",
            title: "User Manager Campaigns",
            slug: "/category/api-reference/v-5-0/user-manager-campaigns",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/certify-user-manager-for-campaign",
              label: "Certify User Manager for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-account-entitlement-details",
              label: "Fetch Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/approve-reject-campaign-account-entitlement-details",
              label: "Approve Reject Campaign Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-usermanager-step-1-for-campaign",
              label: "Reassign UserManager Step 1 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/consult-usermanager-step-1-for-campaign",
              label: "Consult UserManager Step 1 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/consult-campaign-account-entitlement-details",
              label: "Consult Campaign Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-certification-at-account-and-entitlement-level-copy",
              label: "Reassign Certification at Account and Entitlement Level Copy",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Entitlement Owner Campaigns",
          link: {
            type: "generated-index",
            title: "Entitlement Owner Campaigns",
            slug: "/category/api-reference/v-5-0/entitlement-owner-campaigns",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/consult-entitlementowner-step-1-for-campaign",
              label: "Consult EntitlementOwner Step 1 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/consult-entitlementowner-step-2-for-campaign",
              label: "Consult EntitlementOwner Step 2 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-account-entitlement-details-1",
              label: "Fetch Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-entitlement-owner-campaign-details",
              label: "Fetch Entitlement Owner Campaign Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-flat-response-entitlement-owner-campaign-details",
              label: "Fetch Flat Response Entitlement Owner Campaign Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/lock-campaign-1",
              label: "Lock Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/approve-reject-account-entitlement-details",
              label: "Approve Reject Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/certify-entitlement-owner-for-campaign",
              label: "Certify Entitlement Owner for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-entitlement-owner-for-campaign",
              label: "Reassign Entitlement Owner for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-certification-at-account-level",
              label: "Reassign Certification at Account Level",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Application Owner Campaigns",
          link: {
            type: "generated-index",
            title: "Application Owner Campaigns",
            slug: "/category/api-reference/v-5-0/application-owner-campaigns",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-account-entitlement-details-2",
              label: "Fetch Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/lock-campaign-2",
              label: "Lock Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/consult-appowner-account-entitlement-details",
              label: "Consult AppOwner Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-application-owner-for-campaign",
              label: "Reassign Application Owner for Campaign",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Authentication",
          link: {
            type: "generated-index",
            title: "Authentication",
            slug: "/category/api-reference/v-5-0/authentication",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-authorization-token",
              label: "Get Authorization Token",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/refresh-authorization-token",
              label: "Refresh Authorization Token",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Users",
          link: {
            type: "generated-index",
            title: "Users",
            slug: "/category/api-reference/v-5-0/users",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-user",
              label: "Create User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-user",
              label: "Update User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-user-details",
              label: "Get User Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-users",
              label: "Get List of Users",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/authenticate-user",
              label: "Authenticate User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/validate-user-data",
              label: "Validate User Data",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Users Request",
          link: {
            type: "generated-index",
            title: "Users Request",
            slug: "/category/api-reference/v-5-0/users-request",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/bulk-upload-users",
              label: "Bulk Upload Users",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Role Membership",
          link: {
            type: "generated-index",
            title: "Role Membership",
            slug: "/category/api-reference/v-5-0/role-membership",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/add-remove-user-from-sav-role",
              label: "Add/Remove User from SAV ROLE",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-flat-response-role-details-for-user",
              label: "Get Flat Response Role Details For User",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Access",
          link: {
            type: "generated-index",
            title: "Access",
            slug: "/category/api-reference/v-5-0/access",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-access-details-for-user",
              label: "Get Access Details For User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-flat-response-entitlement-details-for-user",
              label: "Get Flat Response Entitlement Details For User",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/assign-entitlement-to-account",
              label: "Assign Entitlement to Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/remove-entitlement-from-account",
              label: "Remove Entitlement from Account",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Sav Roles",
          link: {
            type: "generated-index",
            title: "Sav Roles",
            slug: "/category/api-reference/v-5-0/sav-roles",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-savroles",
              label: "Get SavRoles",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Accounts",
          link: {
            type: "generated-index",
            title: "Accounts",
            slug: "/category/api-reference/v-5-0/accounts",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-account-details",
              label: "Get Account Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/export-account",
              label: "Export Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/create-account",
              label: "Create Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-account",
              label: "Update Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/assign-account-to-user",
              label: "Assign Account to User",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Privileges",
          link: {
            type: "generated-index",
            title: "Privileges",
            slug: "/category/api-reference/v-5-0/privileges",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-privilege",
              label: "Create Privilege",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/update-privilege",
              label: "Update Privilege",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/delete-privilege",
              label: "Delete Privilege",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-privileges-for-entitlement-type",
              label: "Get List of Privileges for Entitlement Type",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Entitlements",
          link: {
            type: "generated-index",
            title: "Entitlements",
            slug: "/category/api-reference/v-5-0/entitlements",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-entitlements",
              label: "Get Entitlements",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-child-entitlements",
              label: "Get Child Entitlements",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/create-update-entitlement",
              label: "Create/Update Entitlement",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-entitlement-values-for-endpoint",
              label: "Get Entitlement Values For Endpoint",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Roles",
          link: {
            type: "generated-index",
            title: "Roles",
            slug: "/category/api-reference/v-5-0/roles",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/remove-entitlement-from-role",
              label: "Remove Entitlement From Role",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/add-role",
              label: "Add Role",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-role-details-for-user",
              label: "Get Role Details for user",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-firefighter-role-details",
              label: "Get FireFighter Role Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/remove-role",
              label: "Remove Role",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Endpoints",
          link: {
            type: "generated-index",
            title: "Endpoints",
            slug: "/category/api-reference/v-5-0/endpoints",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-endpoint",
              label: "Create Endpoint",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-endpoint",
              label: "Update Endpoint",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-endpoints",
              label: "Get List of Endpoints",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Entitlement Types",
          link: {
            type: "generated-index",
            title: "Entitlement Types",
            slug: "/category/api-reference/v-5-0/entitlement-types",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-entitlement-type",
              label: "Create Entitlement Type",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-entitlement-type",
              label: "Update Entitlement Type",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-entitlement-types",
              label: "Get List of Entitlement Types",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/delete-entitlement-types",
              label: "Delete Entitlement Types",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Dynamic Attributes",
          link: {
            type: "generated-index",
            title: "Dynamic Attributes",
            slug: "/category/api-reference/v-5-0/dynamic-attributes",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-dynamic-attribute",
              label: "Create Dynamic Attribute",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-dynamic-attribute",
              label: "Update Dynamic Attribute",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/fetch-dynamic-attributes",
              label: "Fetch Dynamic Attributes",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/delete-dynamic-attribute",
              label: "Delete Dynamic Attribute",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Security Systems",
          link: {
            type: "generated-index",
            title: "Security Systems",
            slug: "/category/api-reference/v-5-0/security-systems",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-security-system",
              label: "Create Security System",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-security-system",
              label: "Update Security System",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-security-systems",
              label: "Get List of Security Systems",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/delete-security-system",
              label: "Delete Security System",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "User Groups",
          link: {
            type: "generated-index",
            title: "User Groups",
            slug: "/category/api-reference/v-5-0/user-groups",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-update-usergroup",
              label: "Create/Update UserGroup",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/add-remove-user-from-usergroup",
              label: "Add/Remove User From UserGroup",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/delete-usergroup",
              label: "Delete UserGroup",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-usergroups",
              label: "Get List of UserGroups",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Organization",
          link: {
            type: "generated-index",
            title: "Organization",
            slug: "/category/api-reference/v-5-0/organization",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-organization",
              label: "Create Organization",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-organization",
              label: "Update Organization",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-organization",
              label: "Get Organization",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/delete-organization",
              label: "Delete Organization",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Connections",
          link: {
            type: "generated-index",
            title: "Connections",
            slug: "/category/api-reference/v-5-0/connections",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-list-of-connections",
              label: "Get List of Connections",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-connections-details",
              label: "Get Connections Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/delete-connections",
              label: "Delete Connections",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Dataset",
          link: {
            type: "generated-index",
            title: "Dataset",
            slug: "/category/api-reference/v-5-0/dataset",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/createdataset",
              label: "createDataset",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/getdatasetvalues",
              label: "getDatasetValues",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/updatedatasetvalues",
              label: "updateDatasetValues",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/deletedataset",
              label: "deleteDataset",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/uploaddatasetcsv",
              label: "uploadDatasetCSV",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/updatedataset",
              label: "updateDataset",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Analytics",
          link: {
            type: "generated-index",
            title: "Analytics",
            slug: "/category/api-reference/v-5-0/analytics",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-list-of-analytics",
              label: "Fetch List of Analytics",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-analytics-details",
              label: "Fetch Analytics Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/run-analytics-controls",
              label: "Run Analytics Controls",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-runtime-controls-data",
              label: "Fetch Runtime Controls Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-runtime-controls-data-v-2",
              label: "Fetch Runtime Controls Data V2",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-list-of-analytics-es",
              label: "Fetch List of Analytics ES",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/fetch-control-attributes",
              label: "Fetch Control Attributes",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-control-details-es",
              label: "Fetch Control Details ES",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Request",
          link: {
            type: "generated-index",
            title: "User Request",
            slug: "/category/api-reference/v-5-0/user-request",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-user-request",
              label: "Create User Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-user-request",
              label: "Update User Request",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-requestable-users",
              label: "Get Requestable Users",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Role Request",
          link: {
            type: "generated-index",
            title: "Role Request",
            slug: "/category/api-reference/v-5-0/role-request",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-role-request",
              label: "Create Role Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-role-request",
              label: "Update Role Request",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Access Request",
          link: {
            type: "generated-index",
            title: "Access Request",
            slug: "/category/api-reference/v-5-0/access-request",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-user-requestable-entitlements",
              label: "Get User Requestable Entitlements",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/validate-entitlement-request-data",
              label: "Validate Entitlement Request Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/request-to-create-entitlement-based-role",
              label: "Request to Create Entitlement Based Role",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/create-auto-approved-request",
              label: "Create Auto-approved Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/create-birthright-request",
              label: "Create Birthright Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/add-approver-to-existing-request",
              label: "Add Approver to existing Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/cancel-pending-request",
              label: "Cancel Pending Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-pending-requests-for-approver",
              label: "Get List of Pending Requests for Approver",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-request-approval-details",
              label: "Fetch Request Approval Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-request-access-attributes",
              label: "Fetch Request Access Attributes",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Organization Request",
          link: {
            type: "generated-index",
            title: "Organization Request",
            slug: "/category/api-reference/v-5-0/organization-request",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-organization-request",
              label: "Create Organization Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-organization-request",
              label: "Update Organization Request",
              className: "api-method put",
            },
          ],
        },
        {
          type: "category",
          label: "Request History",
          link: {
            type: "generated-index",
            title: "Request History",
            slug: "/category/api-reference/v-5-0/request-history",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-request-history-my-pending-requests",
              label: "Fetch Request History (my pending requests)",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-request-history-details",
              label: "Fetch Request History Details",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Request Approval",
          link: {
            type: "generated-index",
            title: "Request Approval",
            slug: "/category/api-reference/v-5-0/request-approval",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/approve-reject-each-line-item-in-a-request",
              label: "Approve/Reject each line item in a request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-pending-approvals",
              label: "Get Pending Approvals",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/approve-reject-entire-request",
              label: "Approve/Reject entire request",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Tasks",
          link: {
            type: "generated-index",
            title: "Tasks",
            slug: "/category/api-reference/v-5-0/tasks",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-task-remove-entitlement",
              label: "Create Task - Remove Entitlement",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/complete-single-task",
              label: "Complete Single Task",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-tasks",
              label: "Update Tasks",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/discontinue-tasks",
              label: "Discontinue Tasks",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/discontinue-all-pending-tasks",
              label: "Discontinue All Pending Tasks",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-task-details",
              label: "Fetch Task Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/check-task-status",
              label: "Check Task Status",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Delegation",
          link: {
            type: "generated-index",
            title: "User Delegation",
            slug: "/category/api-reference/v-5-0/user-delegation",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-delegate-user-list",
              label: "Get Delegate User List",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/create-delegate",
              label: "Create Delegate",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-existing-delegates-list",
              label: "Fetch Existing Delegates List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/edit-delegate",
              label: "Edit Delegate",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/delete-delegate",
              label: "Delete Delegate",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Manager",
          link: {
            type: "generated-index",
            title: "User Manager",
            slug: "/category/api-reference/v-5-0/user-manager",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-campaign-details",
              label: "Fetch Campaign Details",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Application OwnerCampaigns",
          link: {
            type: "generated-index",
            title: "Application OwnerCampaigns",
            slug: "/category/api-reference/v-5-0/application-owner-campaigns",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/approve-reject-account-entitlement-details-1",
              label: "Approve Reject Account Entitlement Details",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Segregation of Duties",
          link: {
            type: "generated-index",
            title: "Segregation of Duties",
            slug: "/category/api-reference/v-5-0/segregation-of-duties",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/sod-evaluation-for-sap-functions",
              label: "SoD Evaluation for SAP Functions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/sod-evaluation-for-non-sap-functions",
              label: "SoD Evaluation for Non - SAP Functions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/add-mitigating-control-risk-account",
              label: "Add Mitigating Control Risk Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/upload-sod-ruleset",
              label: "Upload SOD Ruleset",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Password Management",
          link: {
            type: "generated-index",
            title: "Password Management",
            slug: "/category/api-reference/v-5-0/password-management",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-security-questions",
              label: "Fetch Security Questions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-user-security-questions",
              label: "Fetch User Security Questions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/validate-user-security-answers",
              label: "Validate User Security Answers",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/create-security-questions",
              label: "Create Security Questions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/create-password-policy",
              label: "Create Password Policy",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/change-user-password",
              label: "Change User Password",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Job Management",
          link: {
            type: "generated-index",
            title: "Job Management",
            slug: "/category/api-reference/v-5-0/job-management",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-and-update-trigger",
              label: "Create and Update Trigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/check-job-status",
              label: "Check Job Status",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/delete-trigger",
              label: "Delete Trigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/run-job-trigger",
              label: "Run Job Trigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-job-metadata",
              label: "Fetch Job Metadata",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/createtrigger",
              label: "createTrigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/resumepausejobs",
              label: "resumePauseJobs",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Common Utilities",
          link: {
            type: "generated-index",
            title: "Common Utilities",
            slug: "/category/api-reference/v-5-0/common-utilities",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/upload-new-file",
              label: "Upload New File",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/import-application-data",
              label: "Import Application Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/check-import-status",
              label: "Check Import Status",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/force-complete",
              label: "Force Complete",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/send-email",
              label: "Send Email",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Connection",
          link: {
            type: "generated-index",
            title: "Connection",
            slug: "/category/api-reference/v-5-0/connection",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/test-connection",
              label: "Test Connection",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Dashboard",
          link: {
            type: "generated-index",
            title: "Dashboard",
            slug: "/category/api-reference/v-5-0/dashboard",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/retrieve-dashboard-tiles-data",
              label: "Retrieve Dashboard Tiles Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/retrieve-dashboard-account-data",
              label: "Retrieve Dashboard Account Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/retrieve-dashboard-data",
              label: "Retrieve Dashboard Data",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Access Recommendations",
          link: {
            type: "generated-index",
            title: "Access Recommendations",
            slug: "/category/api-reference/v-5-0/access-recommendations",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-access-recommendations",
              label: "Get Access Recommendations",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Transport",
          link: {
            type: "generated-index",
            title: "Transport",
            slug: "/category/api-reference/v-5-0/transport",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/export-package",
              label: "Export Package",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/import-package",
              label: "Import Package",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/transport-status",
              label: "Transport Status",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Provisioning Policies",
          link: {
            type: "generated-index",
            title: "Provisioning Policies",
            slug: "/category/api-reference/v-5-0/provisioning-policies",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-technical-rules",
              label: "Fetch Technical Rules",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/update-technical-rules",
              label: "Update Technical Rules",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/create-technical-rules",
              label: "Create Technical Rules",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/delete-technical-rules",
              label: "Delete Technical Rules",
              className: "api-method delete",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Analytics",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "api-reference/saviynt-enterprise-identity-cloud-api-reference",
        },
        {
          type: "category",
          label: "Analytics",
          link: {
            type: "generated-index",
            title: "Analytics",
            slug: "/category/api-reference/v-5-0/analytics",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-list-of-analytics",
              label: "Fetch List of Analytics",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-analytics-details",
              label: "Fetch Analytics Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/run-analytics-controls",
              label: "Run Analytics Controls",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-runtime-controls-data",
              label: "Fetch Runtime Controls Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-runtime-controls-data-v-2",
              label: "Fetch Runtime Controls Data V2",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-list-of-analytics-es",
              label: "Fetch List of Analytics ES",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/fetch-control-attributes",
              label: "Fetch Control Attributes",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-control-details-es",
              label: "Fetch Control Details ES",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Access Recommendations",
          link: {
            type: "generated-index",
            title: "Access Recommendations",
            slug: "/category/api-reference/v-5-0/access-recommendations",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-access-recommendations",
              label: "Get Access Recommendations",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Dashboard",
          link: {
            type: "generated-index",
            title: "Dashboard",
            slug: "/category/api-reference/v-5-0/dashboard",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/retrieve-dashboard-tiles-data",
              label: "Retrieve Dashboard Tiles Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/retrieve-dashboard-account-data",
              label: "Retrieve Dashboard Account Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/retrieve-dashboard-data",
              label: "Retrieve Dashboard Data",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Authentication",
          link: {
            type: "generated-index",
            title: "Authentication",
            slug: "/category/api-reference/v-5-0/authentication",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-authorization-token",
              label: "Get Authorization Token",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/refresh-authorization-token",
              label: "Refresh Authorization Token",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Users",
          link: {
            type: "generated-index",
            title: "Users",
            slug: "/category/api-reference/v-5-0/users",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-user",
              label: "Create User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-user",
              label: "Update User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-user-details",
              label: "Get User Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-users",
              label: "Get List of Users",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/authenticate-user",
              label: "Authenticate User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/validate-user-data",
              label: "Validate User Data",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Users Request",
          link: {
            type: "generated-index",
            title: "Users Request",
            slug: "/category/api-reference/v-5-0/users-request",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/bulk-upload-users",
              label: "Bulk Upload Users",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Role Membership",
          link: {
            type: "generated-index",
            title: "Role Membership",
            slug: "/category/api-reference/v-5-0/role-membership",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/add-remove-user-from-sav-role",
              label: "Add/Remove User from SAV ROLE",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-flat-response-role-details-for-user",
              label: "Get Flat Response Role Details For User",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Access",
          link: {
            type: "generated-index",
            title: "Access",
            slug: "/category/api-reference/v-5-0/access",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-access-details-for-user",
              label: "Get Access Details For User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-flat-response-entitlement-details-for-user",
              label: "Get Flat Response Entitlement Details For User",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/assign-entitlement-to-account",
              label: "Assign Entitlement to Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/remove-entitlement-from-account",
              label: "Remove Entitlement from Account",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Sav Roles",
          link: {
            type: "generated-index",
            title: "Sav Roles",
            slug: "/category/api-reference/v-5-0/sav-roles",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-savroles",
              label: "Get SavRoles",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Accounts",
          link: {
            type: "generated-index",
            title: "Accounts",
            slug: "/category/api-reference/v-5-0/accounts",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-account-details",
              label: "Get Account Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/export-account",
              label: "Export Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/create-account",
              label: "Create Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-account",
              label: "Update Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/assign-account-to-user",
              label: "Assign Account to User",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Privileges",
          link: {
            type: "generated-index",
            title: "Privileges",
            slug: "/category/api-reference/v-5-0/privileges",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-privilege",
              label: "Create Privilege",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/update-privilege",
              label: "Update Privilege",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/delete-privilege",
              label: "Delete Privilege",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-privileges-for-entitlement-type",
              label: "Get List of Privileges for Entitlement Type",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Entitlements",
          link: {
            type: "generated-index",
            title: "Entitlements",
            slug: "/category/api-reference/v-5-0/entitlements",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-entitlements",
              label: "Get Entitlements",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-child-entitlements",
              label: "Get Child Entitlements",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/create-update-entitlement",
              label: "Create/Update Entitlement",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-entitlement-values-for-endpoint",
              label: "Get Entitlement Values For Endpoint",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Roles",
          link: {
            type: "generated-index",
            title: "Roles",
            slug: "/category/api-reference/v-5-0/roles",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/remove-entitlement-from-role",
              label: "Remove Entitlement From Role",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/add-role",
              label: "Add Role",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-role-details-for-user",
              label: "Get Role Details for user",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-firefighter-role-details",
              label: "Get FireFighter Role Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/remove-role",
              label: "Remove Role",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Endpoints",
          link: {
            type: "generated-index",
            title: "Endpoints",
            slug: "/category/api-reference/v-5-0/endpoints",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-endpoint",
              label: "Create Endpoint",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-endpoint",
              label: "Update Endpoint",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-endpoints",
              label: "Get List of Endpoints",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Entitlement Types",
          link: {
            type: "generated-index",
            title: "Entitlement Types",
            slug: "/category/api-reference/v-5-0/entitlement-types",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-entitlement-type",
              label: "Create Entitlement Type",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-entitlement-type",
              label: "Update Entitlement Type",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-entitlement-types",
              label: "Get List of Entitlement Types",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/delete-entitlement-types",
              label: "Delete Entitlement Types",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Dynamic Attributes",
          link: {
            type: "generated-index",
            title: "Dynamic Attributes",
            slug: "/category/api-reference/v-5-0/dynamic-attributes",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-dynamic-attribute",
              label: "Create Dynamic Attribute",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-dynamic-attribute",
              label: "Update Dynamic Attribute",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/fetch-dynamic-attributes",
              label: "Fetch Dynamic Attributes",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/delete-dynamic-attribute",
              label: "Delete Dynamic Attribute",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Security Systems",
          link: {
            type: "generated-index",
            title: "Security Systems",
            slug: "/category/api-reference/v-5-0/security-systems",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-security-system",
              label: "Create Security System",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-security-system",
              label: "Update Security System",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-security-systems",
              label: "Get List of Security Systems",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/delete-security-system",
              label: "Delete Security System",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "User Groups",
          link: {
            type: "generated-index",
            title: "User Groups",
            slug: "/category/api-reference/v-5-0/user-groups",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-update-usergroup",
              label: "Create/Update UserGroup",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/add-remove-user-from-usergroup",
              label: "Add/Remove User From UserGroup",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/delete-usergroup",
              label: "Delete UserGroup",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-usergroups",
              label: "Get List of UserGroups",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Organization",
          link: {
            type: "generated-index",
            title: "Organization",
            slug: "/category/api-reference/v-5-0/organization",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-organization",
              label: "Create Organization",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-organization",
              label: "Update Organization",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-organization",
              label: "Get Organization",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/delete-organization",
              label: "Delete Organization",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Connections",
          link: {
            type: "generated-index",
            title: "Connections",
            slug: "/category/api-reference/v-5-0/connections",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-list-of-connections",
              label: "Get List of Connections",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-connections-details",
              label: "Get Connections Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/delete-connections",
              label: "Delete Connections",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Dataset",
          link: {
            type: "generated-index",
            title: "Dataset",
            slug: "/category/api-reference/v-5-0/dataset",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/createdataset",
              label: "createDataset",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/getdatasetvalues",
              label: "getDatasetValues",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/updatedatasetvalues",
              label: "updateDatasetValues",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/deletedataset",
              label: "deleteDataset",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/uploaddatasetcsv",
              label: "uploadDatasetCSV",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/updatedataset",
              label: "updateDataset",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Request",
          link: {
            type: "generated-index",
            title: "User Request",
            slug: "/category/api-reference/v-5-0/user-request",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-user-request",
              label: "Create User Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-user-request",
              label: "Update User Request",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-requestable-users",
              label: "Get Requestable Users",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Role Request",
          link: {
            type: "generated-index",
            title: "Role Request",
            slug: "/category/api-reference/v-5-0/role-request",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-role-request",
              label: "Create Role Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-role-request",
              label: "Update Role Request",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Access Request",
          link: {
            type: "generated-index",
            title: "Access Request",
            slug: "/category/api-reference/v-5-0/access-request",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-user-requestable-entitlements",
              label: "Get User Requestable Entitlements",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/validate-entitlement-request-data",
              label: "Validate Entitlement Request Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/request-to-create-entitlement-based-role",
              label: "Request to Create Entitlement Based Role",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/create-auto-approved-request",
              label: "Create Auto-approved Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/create-birthright-request",
              label: "Create Birthright Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/add-approver-to-existing-request",
              label: "Add Approver to existing Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/cancel-pending-request",
              label: "Cancel Pending Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-pending-requests-for-approver",
              label: "Get List of Pending Requests for Approver",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-request-approval-details",
              label: "Fetch Request Approval Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-request-access-attributes",
              label: "Fetch Request Access Attributes",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Organization Request",
          link: {
            type: "generated-index",
            title: "Organization Request",
            slug: "/category/api-reference/v-5-0/organization-request",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-organization-request",
              label: "Create Organization Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-organization-request",
              label: "Update Organization Request",
              className: "api-method put",
            },
          ],
        },
        {
          type: "category",
          label: "Request History",
          link: {
            type: "generated-index",
            title: "Request History",
            slug: "/category/api-reference/v-5-0/request-history",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-request-history-my-pending-requests",
              label: "Fetch Request History (my pending requests)",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-request-history-details",
              label: "Fetch Request History Details",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Request Approval",
          link: {
            type: "generated-index",
            title: "Request Approval",
            slug: "/category/api-reference/v-5-0/request-approval",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/approve-reject-each-line-item-in-a-request",
              label: "Approve/Reject each line item in a request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-pending-approvals",
              label: "Get Pending Approvals",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/approve-reject-entire-request",
              label: "Approve/Reject entire request",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Tasks",
          link: {
            type: "generated-index",
            title: "Tasks",
            slug: "/category/api-reference/v-5-0/tasks",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-task-remove-entitlement",
              label: "Create Task - Remove Entitlement",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/complete-single-task",
              label: "Complete Single Task",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-tasks",
              label: "Update Tasks",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/discontinue-tasks",
              label: "Discontinue Tasks",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/discontinue-all-pending-tasks",
              label: "Discontinue All Pending Tasks",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-task-details",
              label: "Fetch Task Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/check-task-status",
              label: "Check Task Status",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Delegation",
          link: {
            type: "generated-index",
            title: "User Delegation",
            slug: "/category/api-reference/v-5-0/user-delegation",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-delegate-user-list",
              label: "Get Delegate User List",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/create-delegate",
              label: "Create Delegate",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-existing-delegates-list",
              label: "Fetch Existing Delegates List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/edit-delegate",
              label: "Edit Delegate",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/delete-delegate",
              label: "Delete Delegate",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Attestations",
          link: {
            type: "generated-index",
            title: "Attestations",
            slug: "/category/api-reference/v-5-0/attestations",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-attestation-list",
              label: "Fetch Attestation List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-attestation-details",
              label: "Fetch Attestation Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/certify-usermanager-requests",
              label: "Certify UserManager Requests",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-attestation-account-entitlement-details",
              label: "Fetch Attestation Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/approve-reject-attestation-account-details",
              label: "Approve Reject Attestation Account Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/lock-attestation",
              label: "Lock Attestation",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Campaigns",
          link: {
            type: "generated-index",
            title: "Campaigns",
            slug: "/category/api-reference/v-5-0/campaigns",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-campaign-list",
              label: "Fetch Campaign List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-campaign-details",
              label: "Fetch Campaign Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/lock-campaign",
              label: "Lock Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-certification-list",
              label: "Fetch Certification List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/discontinue-campaigns-and-certifications",
              label: "Discontinue Campaigns and Certifications",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-certification",
              label: "Reassign Certification",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Manager",
          link: {
            type: "generated-index",
            title: "User Manager",
            slug: "/category/api-reference/v-5-0/user-manager",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-campaign-details",
              label: "Fetch Campaign Details",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Manager Campaigns",
          link: {
            type: "generated-index",
            title: "User Manager Campaigns",
            slug: "/category/api-reference/v-5-0/user-manager-campaigns",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/certify-user-manager-for-campaign",
              label: "Certify User Manager for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-account-entitlement-details",
              label: "Fetch Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/approve-reject-campaign-account-entitlement-details",
              label: "Approve Reject Campaign Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-usermanager-step-1-for-campaign",
              label: "Reassign UserManager Step 1 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/consult-usermanager-step-1-for-campaign",
              label: "Consult UserManager Step 1 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/consult-campaign-account-entitlement-details",
              label: "Consult Campaign Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-certification-at-account-and-entitlement-level-copy",
              label: "Reassign Certification at Account and Entitlement Level Copy",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Entitlement Owner Campaigns",
          link: {
            type: "generated-index",
            title: "Entitlement Owner Campaigns",
            slug: "/category/api-reference/v-5-0/entitlement-owner-campaigns",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/consult-entitlementowner-step-1-for-campaign",
              label: "Consult EntitlementOwner Step 1 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/consult-entitlementowner-step-2-for-campaign",
              label: "Consult EntitlementOwner Step 2 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-account-entitlement-details-1",
              label: "Fetch Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-entitlement-owner-campaign-details",
              label: "Fetch Entitlement Owner Campaign Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-flat-response-entitlement-owner-campaign-details",
              label: "Fetch Flat Response Entitlement Owner Campaign Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/lock-campaign-1",
              label: "Lock Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/approve-reject-account-entitlement-details",
              label: "Approve Reject Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/certify-entitlement-owner-for-campaign",
              label: "Certify Entitlement Owner for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-entitlement-owner-for-campaign",
              label: "Reassign Entitlement Owner for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-certification-at-account-level",
              label: "Reassign Certification at Account Level",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Application Owner Campaigns",
          link: {
            type: "generated-index",
            title: "Application Owner Campaigns",
            slug: "/category/api-reference/v-5-0/application-owner-campaigns",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-account-entitlement-details-2",
              label: "Fetch Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/lock-campaign-2",
              label: "Lock Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/consult-appowner-account-entitlement-details",
              label: "Consult AppOwner Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-application-owner-for-campaign",
              label: "Reassign Application Owner for Campaign",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Application OwnerCampaigns",
          link: {
            type: "generated-index",
            title: "Application OwnerCampaigns",
            slug: "/category/api-reference/v-5-0/application-owner-campaigns",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/approve-reject-account-entitlement-details-1",
              label: "Approve Reject Account Entitlement Details",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Segregation of Duties",
          link: {
            type: "generated-index",
            title: "Segregation of Duties",
            slug: "/category/api-reference/v-5-0/segregation-of-duties",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/sod-evaluation-for-sap-functions",
              label: "SoD Evaluation for SAP Functions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/sod-evaluation-for-non-sap-functions",
              label: "SoD Evaluation for Non - SAP Functions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/add-mitigating-control-risk-account",
              label: "Add Mitigating Control Risk Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/upload-sod-ruleset",
              label: "Upload SOD Ruleset",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Password Management",
          link: {
            type: "generated-index",
            title: "Password Management",
            slug: "/category/api-reference/v-5-0/password-management",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-security-questions",
              label: "Fetch Security Questions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-user-security-questions",
              label: "Fetch User Security Questions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/validate-user-security-answers",
              label: "Validate User Security Answers",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/create-security-questions",
              label: "Create Security Questions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/create-password-policy",
              label: "Create Password Policy",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/change-user-password",
              label: "Change User Password",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Job Management",
          link: {
            type: "generated-index",
            title: "Job Management",
            slug: "/category/api-reference/v-5-0/job-management",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-and-update-trigger",
              label: "Create and Update Trigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/check-job-status",
              label: "Check Job Status",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/delete-trigger",
              label: "Delete Trigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/run-job-trigger",
              label: "Run Job Trigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-job-metadata",
              label: "Fetch Job Metadata",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/createtrigger",
              label: "createTrigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/resumepausejobs",
              label: "resumePauseJobs",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Common Utilities",
          link: {
            type: "generated-index",
            title: "Common Utilities",
            slug: "/category/api-reference/v-5-0/common-utilities",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/upload-new-file",
              label: "Upload New File",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/import-application-data",
              label: "Import Application Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/check-import-status",
              label: "Check Import Status",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/force-complete",
              label: "Force Complete",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/send-email",
              label: "Send Email",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Connection",
          link: {
            type: "generated-index",
            title: "Connection",
            slug: "/category/api-reference/v-5-0/connection",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/test-connection",
              label: "Test Connection",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Transport",
          link: {
            type: "generated-index",
            title: "Transport",
            slug: "/category/api-reference/v-5-0/transport",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/export-package",
              label: "Export Package",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/import-package",
              label: "Import Package",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/transport-status",
              label: "Transport Status",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Provisioning Policies",
          link: {
            type: "generated-index",
            title: "Provisioning Policies",
            slug: "/category/api-reference/v-5-0/provisioning-policies",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-technical-rules",
              label: "Fetch Technical Rules",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/update-technical-rules",
              label: "Update Technical Rules",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/create-technical-rules",
              label: "Create Technical Rules",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/delete-technical-rules",
              label: "Delete Technical Rules",
              className: "api-method delete",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Administration",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "api-reference/saviynt-enterprise-identity-cloud-api-reference",
        },
        {
          type: "category",
          label: "User Delegation",
          link: {
            type: "generated-index",
            title: "User Delegation",
            slug: "/category/api-reference/v-5-0/user-delegation",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-delegate-user-list",
              label: "Get Delegate User List",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/create-delegate",
              label: "Create Delegate",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-existing-delegates-list",
              label: "Fetch Existing Delegates List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/edit-delegate",
              label: "Edit Delegate",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/delete-delegate",
              label: "Delete Delegate",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Common Utilities",
          link: {
            type: "generated-index",
            title: "Common Utilities",
            slug: "/category/api-reference/v-5-0/common-utilities",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/upload-new-file",
              label: "Upload New File",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/import-application-data",
              label: "Import Application Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/check-import-status",
              label: "Check Import Status",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/force-complete",
              label: "Force Complete",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/send-email",
              label: "Send Email",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Job Management",
          link: {
            type: "generated-index",
            title: "Job Management",
            slug: "/category/api-reference/v-5-0/job-management",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-and-update-trigger",
              label: "Create and Update Trigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/check-job-status",
              label: "Check Job Status",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/delete-trigger",
              label: "Delete Trigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/run-job-trigger",
              label: "Run Job Trigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-job-metadata",
              label: "Fetch Job Metadata",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/createtrigger",
              label: "createTrigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/resumepausejobs",
              label: "resumePauseJobs",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Transport",
          link: {
            type: "generated-index",
            title: "Transport",
            slug: "/category/api-reference/v-5-0/transport",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/export-package",
              label: "Export Package",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/import-package",
              label: "Import Package",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/transport-status",
              label: "Transport Status",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Dataset",
          link: {
            type: "generated-index",
            title: "Dataset",
            slug: "/category/api-reference/v-5-0/dataset",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/createdataset",
              label: "createDataset",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/getdatasetvalues",
              label: "getDatasetValues",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/updatedatasetvalues",
              label: "updateDatasetValues",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/deletedataset",
              label: "deleteDataset",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/uploaddatasetcsv",
              label: "uploadDatasetCSV",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/updatedataset",
              label: "updateDataset",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Authentication",
          link: {
            type: "generated-index",
            title: "Authentication",
            slug: "/category/api-reference/v-5-0/authentication",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-authorization-token",
              label: "Get Authorization Token",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/refresh-authorization-token",
              label: "Refresh Authorization Token",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Users",
          link: {
            type: "generated-index",
            title: "Users",
            slug: "/category/api-reference/v-5-0/users",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-user",
              label: "Create User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-user",
              label: "Update User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-user-details",
              label: "Get User Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-users",
              label: "Get List of Users",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/authenticate-user",
              label: "Authenticate User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/validate-user-data",
              label: "Validate User Data",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Users Request",
          link: {
            type: "generated-index",
            title: "Users Request",
            slug: "/category/api-reference/v-5-0/users-request",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/bulk-upload-users",
              label: "Bulk Upload Users",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Role Membership",
          link: {
            type: "generated-index",
            title: "Role Membership",
            slug: "/category/api-reference/v-5-0/role-membership",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/add-remove-user-from-sav-role",
              label: "Add/Remove User from SAV ROLE",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-flat-response-role-details-for-user",
              label: "Get Flat Response Role Details For User",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Access",
          link: {
            type: "generated-index",
            title: "Access",
            slug: "/category/api-reference/v-5-0/access",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-access-details-for-user",
              label: "Get Access Details For User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-flat-response-entitlement-details-for-user",
              label: "Get Flat Response Entitlement Details For User",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/assign-entitlement-to-account",
              label: "Assign Entitlement to Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/remove-entitlement-from-account",
              label: "Remove Entitlement from Account",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Sav Roles",
          link: {
            type: "generated-index",
            title: "Sav Roles",
            slug: "/category/api-reference/v-5-0/sav-roles",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-savroles",
              label: "Get SavRoles",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Accounts",
          link: {
            type: "generated-index",
            title: "Accounts",
            slug: "/category/api-reference/v-5-0/accounts",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-account-details",
              label: "Get Account Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/export-account",
              label: "Export Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/create-account",
              label: "Create Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-account",
              label: "Update Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/assign-account-to-user",
              label: "Assign Account to User",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Privileges",
          link: {
            type: "generated-index",
            title: "Privileges",
            slug: "/category/api-reference/v-5-0/privileges",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-privilege",
              label: "Create Privilege",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/update-privilege",
              label: "Update Privilege",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/delete-privilege",
              label: "Delete Privilege",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-privileges-for-entitlement-type",
              label: "Get List of Privileges for Entitlement Type",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Entitlements",
          link: {
            type: "generated-index",
            title: "Entitlements",
            slug: "/category/api-reference/v-5-0/entitlements",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-entitlements",
              label: "Get Entitlements",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-child-entitlements",
              label: "Get Child Entitlements",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/create-update-entitlement",
              label: "Create/Update Entitlement",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-entitlement-values-for-endpoint",
              label: "Get Entitlement Values For Endpoint",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Roles",
          link: {
            type: "generated-index",
            title: "Roles",
            slug: "/category/api-reference/v-5-0/roles",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/remove-entitlement-from-role",
              label: "Remove Entitlement From Role",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/add-role",
              label: "Add Role",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-role-details-for-user",
              label: "Get Role Details for user",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-firefighter-role-details",
              label: "Get FireFighter Role Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/remove-role",
              label: "Remove Role",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Endpoints",
          link: {
            type: "generated-index",
            title: "Endpoints",
            slug: "/category/api-reference/v-5-0/endpoints",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-endpoint",
              label: "Create Endpoint",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-endpoint",
              label: "Update Endpoint",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-endpoints",
              label: "Get List of Endpoints",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Entitlement Types",
          link: {
            type: "generated-index",
            title: "Entitlement Types",
            slug: "/category/api-reference/v-5-0/entitlement-types",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-entitlement-type",
              label: "Create Entitlement Type",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-entitlement-type",
              label: "Update Entitlement Type",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-entitlement-types",
              label: "Get List of Entitlement Types",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/delete-entitlement-types",
              label: "Delete Entitlement Types",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Dynamic Attributes",
          link: {
            type: "generated-index",
            title: "Dynamic Attributes",
            slug: "/category/api-reference/v-5-0/dynamic-attributes",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-dynamic-attribute",
              label: "Create Dynamic Attribute",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-dynamic-attribute",
              label: "Update Dynamic Attribute",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/fetch-dynamic-attributes",
              label: "Fetch Dynamic Attributes",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/delete-dynamic-attribute",
              label: "Delete Dynamic Attribute",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Security Systems",
          link: {
            type: "generated-index",
            title: "Security Systems",
            slug: "/category/api-reference/v-5-0/security-systems",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-security-system",
              label: "Create Security System",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-security-system",
              label: "Update Security System",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-security-systems",
              label: "Get List of Security Systems",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/delete-security-system",
              label: "Delete Security System",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "User Groups",
          link: {
            type: "generated-index",
            title: "User Groups",
            slug: "/category/api-reference/v-5-0/user-groups",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-update-usergroup",
              label: "Create/Update UserGroup",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/add-remove-user-from-usergroup",
              label: "Add/Remove User From UserGroup",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/delete-usergroup",
              label: "Delete UserGroup",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-usergroups",
              label: "Get List of UserGroups",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Organization",
          link: {
            type: "generated-index",
            title: "Organization",
            slug: "/category/api-reference/v-5-0/organization",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-organization",
              label: "Create Organization",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-organization",
              label: "Update Organization",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-organization",
              label: "Get Organization",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/delete-organization",
              label: "Delete Organization",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Connections",
          link: {
            type: "generated-index",
            title: "Connections",
            slug: "/category/api-reference/v-5-0/connections",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-list-of-connections",
              label: "Get List of Connections",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-connections-details",
              label: "Get Connections Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/delete-connections",
              label: "Delete Connections",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Analytics",
          link: {
            type: "generated-index",
            title: "Analytics",
            slug: "/category/api-reference/v-5-0/analytics",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-list-of-analytics",
              label: "Fetch List of Analytics",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-analytics-details",
              label: "Fetch Analytics Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/run-analytics-controls",
              label: "Run Analytics Controls",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-runtime-controls-data",
              label: "Fetch Runtime Controls Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-runtime-controls-data-v-2",
              label: "Fetch Runtime Controls Data V2",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-list-of-analytics-es",
              label: "Fetch List of Analytics ES",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/fetch-control-attributes",
              label: "Fetch Control Attributes",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-control-details-es",
              label: "Fetch Control Details ES",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Request",
          link: {
            type: "generated-index",
            title: "User Request",
            slug: "/category/api-reference/v-5-0/user-request",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-user-request",
              label: "Create User Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-user-request",
              label: "Update User Request",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/get-requestable-users",
              label: "Get Requestable Users",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Role Request",
          link: {
            type: "generated-index",
            title: "Role Request",
            slug: "/category/api-reference/v-5-0/role-request",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-role-request",
              label: "Create Role Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-role-request",
              label: "Update Role Request",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Access Request",
          link: {
            type: "generated-index",
            title: "Access Request",
            slug: "/category/api-reference/v-5-0/access-request",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-user-requestable-entitlements",
              label: "Get User Requestable Entitlements",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/validate-entitlement-request-data",
              label: "Validate Entitlement Request Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/request-to-create-entitlement-based-role",
              label: "Request to Create Entitlement Based Role",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/create-auto-approved-request",
              label: "Create Auto-approved Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/create-birthright-request",
              label: "Create Birthright Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/add-approver-to-existing-request",
              label: "Add Approver to existing Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/cancel-pending-request",
              label: "Cancel Pending Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-list-of-pending-requests-for-approver",
              label: "Get List of Pending Requests for Approver",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-request-approval-details",
              label: "Fetch Request Approval Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-request-access-attributes",
              label: "Fetch Request Access Attributes",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Organization Request",
          link: {
            type: "generated-index",
            title: "Organization Request",
            slug: "/category/api-reference/v-5-0/organization-request",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-organization-request",
              label: "Create Organization Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-organization-request",
              label: "Update Organization Request",
              className: "api-method put",
            },
          ],
        },
        {
          type: "category",
          label: "Request History",
          link: {
            type: "generated-index",
            title: "Request History",
            slug: "/category/api-reference/v-5-0/request-history",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-request-history-my-pending-requests",
              label: "Fetch Request History (my pending requests)",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-request-history-details",
              label: "Fetch Request History Details",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Request Approval",
          link: {
            type: "generated-index",
            title: "Request Approval",
            slug: "/category/api-reference/v-5-0/request-approval",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/approve-reject-each-line-item-in-a-request",
              label: "Approve/Reject each line item in a request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/get-pending-approvals",
              label: "Get Pending Approvals",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/approve-reject-entire-request",
              label: "Approve/Reject entire request",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Tasks",
          link: {
            type: "generated-index",
            title: "Tasks",
            slug: "/category/api-reference/v-5-0/tasks",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/create-task-remove-entitlement",
              label: "Create Task - Remove Entitlement",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/complete-single-task",
              label: "Complete Single Task",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/update-tasks",
              label: "Update Tasks",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/discontinue-tasks",
              label: "Discontinue Tasks",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/discontinue-all-pending-tasks",
              label: "Discontinue All Pending Tasks",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-task-details",
              label: "Fetch Task Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/check-task-status",
              label: "Check Task Status",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Attestations",
          link: {
            type: "generated-index",
            title: "Attestations",
            slug: "/category/api-reference/v-5-0/attestations",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-attestation-list",
              label: "Fetch Attestation List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-attestation-details",
              label: "Fetch Attestation Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/certify-usermanager-requests",
              label: "Certify UserManager Requests",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-attestation-account-entitlement-details",
              label: "Fetch Attestation Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/approve-reject-attestation-account-details",
              label: "Approve Reject Attestation Account Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/lock-attestation",
              label: "Lock Attestation",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Campaigns",
          link: {
            type: "generated-index",
            title: "Campaigns",
            slug: "/category/api-reference/v-5-0/campaigns",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-campaign-list",
              label: "Fetch Campaign List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-campaign-details",
              label: "Fetch Campaign Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/lock-campaign",
              label: "Lock Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-certification-list",
              label: "Fetch Certification List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/discontinue-campaigns-and-certifications",
              label: "Discontinue Campaigns and Certifications",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-certification",
              label: "Reassign Certification",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Manager",
          link: {
            type: "generated-index",
            title: "User Manager",
            slug: "/category/api-reference/v-5-0/user-manager",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-campaign-details",
              label: "Fetch Campaign Details",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Manager Campaigns",
          link: {
            type: "generated-index",
            title: "User Manager Campaigns",
            slug: "/category/api-reference/v-5-0/user-manager-campaigns",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/certify-user-manager-for-campaign",
              label: "Certify User Manager for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-account-entitlement-details",
              label: "Fetch Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/approve-reject-campaign-account-entitlement-details",
              label: "Approve Reject Campaign Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-usermanager-step-1-for-campaign",
              label: "Reassign UserManager Step 1 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/consult-usermanager-step-1-for-campaign",
              label: "Consult UserManager Step 1 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/consult-campaign-account-entitlement-details",
              label: "Consult Campaign Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-certification-at-account-and-entitlement-level-copy",
              label: "Reassign Certification at Account and Entitlement Level Copy",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Entitlement Owner Campaigns",
          link: {
            type: "generated-index",
            title: "Entitlement Owner Campaigns",
            slug: "/category/api-reference/v-5-0/entitlement-owner-campaigns",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/consult-entitlementowner-step-1-for-campaign",
              label: "Consult EntitlementOwner Step 1 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/consult-entitlementowner-step-2-for-campaign",
              label: "Consult EntitlementOwner Step 2 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-account-entitlement-details-1",
              label: "Fetch Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-entitlement-owner-campaign-details",
              label: "Fetch Entitlement Owner Campaign Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-flat-response-entitlement-owner-campaign-details",
              label: "Fetch Flat Response Entitlement Owner Campaign Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/lock-campaign-1",
              label: "Lock Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/approve-reject-account-entitlement-details",
              label: "Approve Reject Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/certify-entitlement-owner-for-campaign",
              label: "Certify Entitlement Owner for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-entitlement-owner-for-campaign",
              label: "Reassign Entitlement Owner for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-certification-at-account-level",
              label: "Reassign Certification at Account Level",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Application Owner Campaigns",
          link: {
            type: "generated-index",
            title: "Application Owner Campaigns",
            slug: "/category/api-reference/v-5-0/application-owner-campaigns",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-account-entitlement-details-2",
              label: "Fetch Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/lock-campaign-2",
              label: "Lock Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/consult-appowner-account-entitlement-details",
              label: "Consult AppOwner Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/reassign-application-owner-for-campaign",
              label: "Reassign Application Owner for Campaign",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Application OwnerCampaigns",
          link: {
            type: "generated-index",
            title: "Application OwnerCampaigns",
            slug: "/category/api-reference/v-5-0/application-owner-campaigns",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/approve-reject-account-entitlement-details-1",
              label: "Approve Reject Account Entitlement Details",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Segregation of Duties",
          link: {
            type: "generated-index",
            title: "Segregation of Duties",
            slug: "/category/api-reference/v-5-0/segregation-of-duties",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/sod-evaluation-for-sap-functions",
              label: "SoD Evaluation for SAP Functions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/sod-evaluation-for-non-sap-functions",
              label: "SoD Evaluation for Non - SAP Functions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/add-mitigating-control-risk-account",
              label: "Add Mitigating Control Risk Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/upload-sod-ruleset",
              label: "Upload SOD Ruleset",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Password Management",
          link: {
            type: "generated-index",
            title: "Password Management",
            slug: "/category/api-reference/v-5-0/password-management",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-security-questions",
              label: "Fetch Security Questions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/fetch-user-security-questions",
              label: "Fetch User Security Questions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/validate-user-security-answers",
              label: "Validate User Security Answers",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/create-security-questions",
              label: "Create Security Questions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/create-password-policy",
              label: "Create Password Policy",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/change-user-password",
              label: "Change User Password",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Connection",
          link: {
            type: "generated-index",
            title: "Connection",
            slug: "/category/api-reference/v-5-0/connection",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/test-connection",
              label: "Test Connection",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Dashboard",
          link: {
            type: "generated-index",
            title: "Dashboard",
            slug: "/category/api-reference/v-5-0/dashboard",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/retrieve-dashboard-tiles-data",
              label: "Retrieve Dashboard Tiles Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/retrieve-dashboard-account-data",
              label: "Retrieve Dashboard Account Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/retrieve-dashboard-data",
              label: "Retrieve Dashboard Data",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Access Recommendations",
          link: {
            type: "generated-index",
            title: "Access Recommendations",
            slug: "/category/api-reference/v-5-0/access-recommendations",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/get-access-recommendations",
              label: "Get Access Recommendations",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Provisioning Policies",
          link: {
            type: "generated-index",
            title: "Provisioning Policies",
            slug: "/category/api-reference/v-5-0/provisioning-policies",
          },
          items: [
            {
              type: "doc",
              id: "api-reference/fetch-technical-rules",
              label: "Fetch Technical Rules",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api-reference/update-technical-rules",
              label: "Update Technical Rules",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api-reference/create-technical-rules",
              label: "Create Technical Rules",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api-reference/delete-technical-rules",
              label: "Delete Technical Rules",
              className: "api-method delete",
            },
          ],
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
