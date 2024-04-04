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
          type: "category",
          label: "Authentication",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-authorization-token",
              label: "Get Authorization Token",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/refresh-authorization-token",
              label: "Refresh Authorization Token",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Users",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-user",
              label: "Create User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-user",
              label: "Update User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/bulk-upload-users",
              label: "Bulk Upload Users",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-user-details",
              label: "Get User Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-list-of-users",
              label: "Get List of Users",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/add-remove-user-from-sav-role",
              label: "Add/Remove User from SAV ROLE",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-access-details-for-user",
              label: "Get Access Details For User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-flat-response-entitlement-details-for-user",
              label: "Get Flat Response Entitlement Details For User",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/get-flat-response-role-details-for-user",
              label: "Get Flat Response Role Details For User",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/authenticate-user",
              label: "Authenticate User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/validate-user-data",
              label: "Validate User Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-savroles",
              label: "Get SavRoles",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Accounts",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-account-details",
              label: "Get Account Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/export-account",
              label: "Export Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/create-account",
              label: "Create Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-account",
              label: "Update Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/assign-account-to-user",
              label: "Assign Account to User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/assign-entitlement-to-account",
              label: "Assign Entitlement to Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/remove-entitlement-from-account",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-entitlements",
              label: "Get Entitlements",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-child-entitlements",
              label: "Get Child Entitlements",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/create-update-entitlement",
              label: "Create/Update Entitlement",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-entitlement-values-for-endpoint",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-privilege",
              label: "Create Privilege",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/update-privilege",
              label: "Update Privilege",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/delete-privilege",
              label: "Delete Privilege",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/get-list-of-privileges-for-entitlement-type",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/remove-entitlement-from-role",
              label: "Remove Entitlement From Role",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/add-role",
              label: "Add Role",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-role-details-for-user",
              label: "Get Role Details for user",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-firefighter-role-details",
              label: "Get FireFighter Role Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/remove-role",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-update-usergroup",
              label: "Create/Update UserGroup",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/add-remove-user-from-usergroup",
              label: "Add/Remove User From UserGroup",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/delete-usergroup",
              label: "Delete UserGroup",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-list-of-usergroups",
              label: "Get List of UserGroups",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Organization",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-organization",
              label: "Create Organization",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-organization",
              label: "Update Organization",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/get-organization",
              label: "Get Organization",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/delete-organization",
              label: "Delete Organization",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Endpoints",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-endpoint",
              label: "Create Endpoint",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-endpoint",
              label: "Update Endpoint",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/get-list-of-endpoints",
              label: "Get List of Endpoints",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Entitlement Types",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-entitlement-type",
              label: "Create Entitlement Type",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-entitlement-type",
              label: "Update Entitlement Type",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/get-list-of-entitlement-types",
              label: "Get List of Entitlement Types",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/delete-entitlement-types",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-dynamic-attribute",
              label: "Create Dynamic Attribute",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-dynamic-attribute",
              label: "Update Dynamic Attribute",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/fetch-dynamic-attributes",
              label: "Fetch Dynamic Attributes",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/delete-dynamic-attribute",
              label: "Delete Dynamic Attribute",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Security Systems",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-security-system",
              label: "Create Security System",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-security-system",
              label: "Update Security System",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/get-list-of-security-systems",
              label: "Get List of Security Systems",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/delete-security-system",
              label: "Delete Security System",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Connections",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-list-of-connections",
              label: "Get List of Connections",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-connections-details",
              label: "Get Connections Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/delete-connections",
              label: "Delete Connections",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Dataset",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/createdataset",
              label: "createDataset",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/getdatasetvalues",
              label: "getDatasetValues",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/updatedatasetvalues",
              label: "updateDatasetValues",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/deletedataset",
              label: "deleteDataset",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/uploaddatasetcsv",
              label: "uploadDatasetCSV",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/updatedataset",
              label: "updateDataset",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Analytics",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/fetch-list-of-analytics",
              label: "Fetch List of Analytics",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-analytics-details",
              label: "Fetch Analytics Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/run-analytics-controls",
              label: "Run Analytics Controls",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-runtime-controls-data",
              label: "Fetch Runtime Controls Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-runtime-controls-data-v-2",
              label: "Fetch Runtime Controls Data V2",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-list-of-analytics-es",
              label: "Fetch List of Analytics ES",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/fetch-control-attributes",
              label: "Fetch Control Attributes",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-control-details-es",
              label: "Fetch Control Details ES",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Request",
          items: [
            {
              type: "doc",
              id: "eic/create-user-request",
              label: "Create User Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-user-request",
              label: "Update User Request",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/get-requestable-users",
              label: "Get Requestable Users",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Role Request",
          items: [
            {
              type: "doc",
              id: "eic/create-role-request",
              label: "Create Role Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-role-request",
              label: "Update Role Request",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Access Request",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-user-requestable-entitlements",
              label: "Get User Requestable Entitlements",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/validate-entitlement-request-data",
              label: "Validate Entitlement Request Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/request-to-create-entitlement-based-role",
              label: "Request to Create Entitlement Based Role",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/create-auto-approved-request",
              label: "Create Auto-approved Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/create-birthright-request",
              label: "Create Birthright Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/add-approver-to-existing-request",
              label: "Add Approver to existing Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/cancel-pending-request",
              label: "Cancel Pending Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-list-of-pending-requests-for-approver",
              label: "Get List of Pending Requests for Approver",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-request-approval-details",
              label: "Fetch Request Approval Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-request-access-attributes",
              label: "Fetch Request Access Attributes",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Organization Request",
          items: [
            {
              type: "doc",
              id: "eic/create-organization-request",
              label: "Create Organization Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-organization-request",
              label: "Update Organization Request",
              className: "api-method put",
            },
          ],
        },
        {
          type: "category",
          label: "Request History",
          items: [
            {
              type: "doc",
              id: "eic/fetch-request-history-my-pending-requests",
              label: "Fetch Request History (my pending requests)",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-request-history-details",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/approve-reject-each-line-item-in-a-request",
              label: "Approve/Reject each line item in a request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-pending-approvals",
              label: "Get Pending Approvals",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/approve-reject-entire-request",
              label: "Approve/Reject entire request",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Tasks",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-task-remove-entitlement",
              label: "Create Task - Remove Entitlement",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/complete-single-task",
              label: "Complete Single Task",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-tasks",
              label: "Update Tasks",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/discontinue-tasks",
              label: "Discontinue Tasks",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/discontinue-all-pending-tasks",
              label: "Discontinue All Pending Tasks",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-task-details",
              label: "Fetch Task Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/check-task-status",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-delegate-user-list",
              label: "Get Delegate User List",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/create-delegate",
              label: "Create Delegate",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-existing-delegates-list",
              label: "Fetch Existing Delegates List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/edit-delegate",
              label: "Edit Delegate",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/delete-delegate",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/fetch-attestation-list",
              label: "Fetch Attestation List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-attestation-details",
              label: "Fetch Attestation Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/certify-usermanager-requests",
              label: "Certify UserManager Requests",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-attestation-account-entitlement-details",
              label: "Fetch Attestation Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/approve-reject-attestation-account-details",
              label: "Approve Reject Attestation Account Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/lock-attestation",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/fetch-campaign-list",
              label: "Fetch Campaign List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-campaign-details",
              label: "Fetch Campaign Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/lock-campaign",
              label: "Lock Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-certification-list",
              label: "Fetch Certification List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/discontinue-campaigns-and-certifications",
              label: "Discontinue Campaigns and Certifications",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/reassign-certification",
              label: "Reassign Certification",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Manager",
          items: [
            {
              type: "doc",
              id: "eic/fetch-campaign-details",
              label: "Fetch Campaign Details",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Manager Campaigns",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/certify-user-manager-for-campaign",
              label: "Certify User Manager for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-account-entitlement-details",
              label: "Fetch Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/approve-reject-campaign-account-entitlement-details",
              label: "Approve Reject Campaign Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/reassign-usermanager-step-1-for-campaign",
              label: "Reassign UserManager Step 1 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/consult-usermanager-step-1-for-campaign",
              label: "Consult UserManager Step 1 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/consult-campaign-account-entitlement-details",
              label: "Consult Campaign Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/reassign-certification-at-account-and-entitlement-level-copy",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/consult-entitlementowner-step-1-for-campaign",
              label: "Consult EntitlementOwner Step 1 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/consult-entitlementowner-step-2-for-campaign",
              label: "Consult EntitlementOwner Step 2 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-account-entitlement-details-1",
              label: "Fetch Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-entitlement-owner-campaign-details",
              label: "Fetch Entitlement Owner Campaign Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-flat-response-entitlement-owner-campaign-details",
              label: "Fetch Flat Response Entitlement Owner Campaign Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/lock-campaign-1",
              label: "Lock Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/approve-reject-account-entitlement-details",
              label: "Approve Reject Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/certify-entitlement-owner-for-campaign",
              label: "Certify Entitlement Owner for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/reassign-entitlement-owner-for-campaign",
              label: "Reassign Entitlement Owner for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/reassign-certification-at-account-level",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/fetch-account-entitlement-details-2",
              label: "Fetch Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/lock-campaign-2",
              label: "Lock Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/consult-appowner-account-entitlement-details",
              label: "Consult AppOwner Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/reassign-application-owner-for-campaign",
              label: "Reassign Application Owner for Campaign",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Application OwnerCampaigns",
          items: [
            {
              type: "doc",
              id: "eic/approve-reject-account-entitlement-details-1",
              label: "Approve Reject Account Entitlement Details",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Segregation of Duties",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/sod-evaluation-for-sap-functions",
              label: "SoD Evaluation for SAP Functions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/sod-evaluation-for-non-sap-functions",
              label: "SoD Evaluation for Non - SAP Functions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/add-mitigating-control-risk-account",
              label: "Add Mitigating Control Risk Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/upload-sod-ruleset",
              label: "Upload SOD Ruleset",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Password Management",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/fetch-security-questions",
              label: "Fetch Security Questions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-user-security-questions",
              label: "Fetch User Security Questions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/validate-user-security-answers",
              label: "Validate User Security Answers",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/create-security-questions",
              label: "Create Security Questions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/create-password-policy",
              label: "Create Password Policy",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/change-user-password",
              label: "Change User Password",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Job Management",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-and-update-trigger",
              label: "Create and Update Trigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/check-job-status",
              label: "Check Job Status",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/delete-trigger",
              label: "Delete Trigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/run-job-trigger",
              label: "Run Job Trigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-job-metadata",
              label: "Fetch Job Metadata",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/createtrigger",
              label: "createTrigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/resumepausejobs",
              label: "resumePauseJobs",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Common Utilities",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/upload-new-file",
              label: "Upload New File",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/import-application-data",
              label: "Import Application Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/check-import-status",
              label: "Check Import Status",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/force-complete",
              label: "Force Complete",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/send-email",
              label: "Send Email",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Connection",
          items: [
            {
              type: "doc",
              id: "eic/test-connection",
              label: "Test Connection",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Dashboard",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/retrieve-dashboard-tiles-data",
              label: "Retrieve Dashboard Tiles Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/retrieve-dashboard-account-data",
              label: "Retrieve Dashboard Account Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/retrieve-dashboard-data",
              label: "Retrieve Dashboard Data",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Access Recommendations",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-access-recommendations",
              label: "Get Access Recommendations",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Transport",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/export-package",
              label: "Export Package",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/import-package",
              label: "Import Package",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/transport-status",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/fetch-technical-rules",
              label: "Fetch Technical Rules",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/update-technical-rules",
              label: "Update Technical Rules",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/create-technical-rules",
              label: "Create Technical Rules",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/delete-technical-rules",
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
          type: "category",
          label: "Segregation of Duties",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/sod-evaluation-for-sap-functions",
              label: "SoD Evaluation for SAP Functions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/sod-evaluation-for-non-sap-functions",
              label: "SoD Evaluation for Non - SAP Functions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/add-mitigating-control-risk-account",
              label: "Add Mitigating Control Risk Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/upload-sod-ruleset",
              label: "Upload SOD Ruleset",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Password Management",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/fetch-security-questions",
              label: "Fetch Security Questions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-user-security-questions",
              label: "Fetch User Security Questions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/validate-user-security-answers",
              label: "Validate User Security Answers",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/create-security-questions",
              label: "Create Security Questions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/create-password-policy",
              label: "Create Password Policy",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/change-user-password",
              label: "Change User Password",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Provisioning Policies",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/fetch-technical-rules",
              label: "Fetch Technical Rules",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/update-technical-rules",
              label: "Update Technical Rules",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/create-technical-rules",
              label: "Create Technical Rules",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/delete-technical-rules",
              label: "Delete Technical Rules",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Authentication",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-authorization-token",
              label: "Get Authorization Token",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/refresh-authorization-token",
              label: "Refresh Authorization Token",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Users",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-user",
              label: "Create User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-user",
              label: "Update User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/bulk-upload-users",
              label: "Bulk Upload Users",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-user-details",
              label: "Get User Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-list-of-users",
              label: "Get List of Users",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/add-remove-user-from-sav-role",
              label: "Add/Remove User from SAV ROLE",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-access-details-for-user",
              label: "Get Access Details For User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-flat-response-entitlement-details-for-user",
              label: "Get Flat Response Entitlement Details For User",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/get-flat-response-role-details-for-user",
              label: "Get Flat Response Role Details For User",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/authenticate-user",
              label: "Authenticate User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/validate-user-data",
              label: "Validate User Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-savroles",
              label: "Get SavRoles",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Accounts",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-account-details",
              label: "Get Account Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/export-account",
              label: "Export Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/create-account",
              label: "Create Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-account",
              label: "Update Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/assign-account-to-user",
              label: "Assign Account to User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/assign-entitlement-to-account",
              label: "Assign Entitlement to Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/remove-entitlement-from-account",
              label: "Remove Entitlement from Account",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Privileges",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-privilege",
              label: "Create Privilege",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/update-privilege",
              label: "Update Privilege",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/delete-privilege",
              label: "Delete Privilege",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/get-list-of-privileges-for-entitlement-type",
              label: "Get List of Privileges for Entitlement Type",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Entitlements",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-entitlements",
              label: "Get Entitlements",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-child-entitlements",
              label: "Get Child Entitlements",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/create-update-entitlement",
              label: "Create/Update Entitlement",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-entitlement-values-for-endpoint",
              label: "Get Entitlement Values For Endpoint",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Roles",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/remove-entitlement-from-role",
              label: "Remove Entitlement From Role",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/add-role",
              label: "Add Role",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-role-details-for-user",
              label: "Get Role Details for user",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-firefighter-role-details",
              label: "Get FireFighter Role Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/remove-role",
              label: "Remove Role",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Endpoints",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-endpoint",
              label: "Create Endpoint",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-endpoint",
              label: "Update Endpoint",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/get-list-of-endpoints",
              label: "Get List of Endpoints",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Entitlement Types",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-entitlement-type",
              label: "Create Entitlement Type",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-entitlement-type",
              label: "Update Entitlement Type",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/get-list-of-entitlement-types",
              label: "Get List of Entitlement Types",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/delete-entitlement-types",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-dynamic-attribute",
              label: "Create Dynamic Attribute",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-dynamic-attribute",
              label: "Update Dynamic Attribute",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/fetch-dynamic-attributes",
              label: "Fetch Dynamic Attributes",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/delete-dynamic-attribute",
              label: "Delete Dynamic Attribute",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Security Systems",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-security-system",
              label: "Create Security System",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-security-system",
              label: "Update Security System",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/get-list-of-security-systems",
              label: "Get List of Security Systems",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/delete-security-system",
              label: "Delete Security System",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "User Groups",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-update-usergroup",
              label: "Create/Update UserGroup",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/add-remove-user-from-usergroup",
              label: "Add/Remove User From UserGroup",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/delete-usergroup",
              label: "Delete UserGroup",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-list-of-usergroups",
              label: "Get List of UserGroups",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Organization",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-organization",
              label: "Create Organization",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-organization",
              label: "Update Organization",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/get-organization",
              label: "Get Organization",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/delete-organization",
              label: "Delete Organization",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Connections",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-list-of-connections",
              label: "Get List of Connections",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-connections-details",
              label: "Get Connections Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/delete-connections",
              label: "Delete Connections",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Dataset",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/createdataset",
              label: "createDataset",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/getdatasetvalues",
              label: "getDatasetValues",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/updatedatasetvalues",
              label: "updateDatasetValues",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/deletedataset",
              label: "deleteDataset",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/uploaddatasetcsv",
              label: "uploadDatasetCSV",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/updatedataset",
              label: "updateDataset",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Analytics",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/fetch-list-of-analytics",
              label: "Fetch List of Analytics",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-analytics-details",
              label: "Fetch Analytics Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/run-analytics-controls",
              label: "Run Analytics Controls",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-runtime-controls-data",
              label: "Fetch Runtime Controls Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-runtime-controls-data-v-2",
              label: "Fetch Runtime Controls Data V2",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-list-of-analytics-es",
              label: "Fetch List of Analytics ES",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/fetch-control-attributes",
              label: "Fetch Control Attributes",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-control-details-es",
              label: "Fetch Control Details ES",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Request",
          items: [
            {
              type: "doc",
              id: "eic/create-user-request",
              label: "Create User Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-user-request",
              label: "Update User Request",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/get-requestable-users",
              label: "Get Requestable Users",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Role Request",
          items: [
            {
              type: "doc",
              id: "eic/create-role-request",
              label: "Create Role Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-role-request",
              label: "Update Role Request",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Access Request",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-user-requestable-entitlements",
              label: "Get User Requestable Entitlements",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/validate-entitlement-request-data",
              label: "Validate Entitlement Request Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/request-to-create-entitlement-based-role",
              label: "Request to Create Entitlement Based Role",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/create-auto-approved-request",
              label: "Create Auto-approved Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/create-birthright-request",
              label: "Create Birthright Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/add-approver-to-existing-request",
              label: "Add Approver to existing Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/cancel-pending-request",
              label: "Cancel Pending Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-list-of-pending-requests-for-approver",
              label: "Get List of Pending Requests for Approver",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-request-approval-details",
              label: "Fetch Request Approval Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-request-access-attributes",
              label: "Fetch Request Access Attributes",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Organization Request",
          items: [
            {
              type: "doc",
              id: "eic/create-organization-request",
              label: "Create Organization Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-organization-request",
              label: "Update Organization Request",
              className: "api-method put",
            },
          ],
        },
        {
          type: "category",
          label: "Request History",
          items: [
            {
              type: "doc",
              id: "eic/fetch-request-history-my-pending-requests",
              label: "Fetch Request History (my pending requests)",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-request-history-details",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/approve-reject-each-line-item-in-a-request",
              label: "Approve/Reject each line item in a request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-pending-approvals",
              label: "Get Pending Approvals",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/approve-reject-entire-request",
              label: "Approve/Reject entire request",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Tasks",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-task-remove-entitlement",
              label: "Create Task - Remove Entitlement",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/complete-single-task",
              label: "Complete Single Task",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-tasks",
              label: "Update Tasks",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/discontinue-tasks",
              label: "Discontinue Tasks",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/discontinue-all-pending-tasks",
              label: "Discontinue All Pending Tasks",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-task-details",
              label: "Fetch Task Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/check-task-status",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-delegate-user-list",
              label: "Get Delegate User List",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/create-delegate",
              label: "Create Delegate",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-existing-delegates-list",
              label: "Fetch Existing Delegates List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/edit-delegate",
              label: "Edit Delegate",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/delete-delegate",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/fetch-attestation-list",
              label: "Fetch Attestation List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-attestation-details",
              label: "Fetch Attestation Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/certify-usermanager-requests",
              label: "Certify UserManager Requests",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-attestation-account-entitlement-details",
              label: "Fetch Attestation Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/approve-reject-attestation-account-details",
              label: "Approve Reject Attestation Account Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/lock-attestation",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/fetch-campaign-list",
              label: "Fetch Campaign List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-campaign-details",
              label: "Fetch Campaign Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/lock-campaign",
              label: "Lock Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-certification-list",
              label: "Fetch Certification List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/discontinue-campaigns-and-certifications",
              label: "Discontinue Campaigns and Certifications",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/reassign-certification",
              label: "Reassign Certification",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Manager",
          items: [
            {
              type: "doc",
              id: "eic/fetch-campaign-details",
              label: "Fetch Campaign Details",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Manager Campaigns",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/certify-user-manager-for-campaign",
              label: "Certify User Manager for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-account-entitlement-details",
              label: "Fetch Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/approve-reject-campaign-account-entitlement-details",
              label: "Approve Reject Campaign Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/reassign-usermanager-step-1-for-campaign",
              label: "Reassign UserManager Step 1 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/consult-usermanager-step-1-for-campaign",
              label: "Consult UserManager Step 1 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/consult-campaign-account-entitlement-details",
              label: "Consult Campaign Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/reassign-certification-at-account-and-entitlement-level-copy",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/consult-entitlementowner-step-1-for-campaign",
              label: "Consult EntitlementOwner Step 1 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/consult-entitlementowner-step-2-for-campaign",
              label: "Consult EntitlementOwner Step 2 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-account-entitlement-details-1",
              label: "Fetch Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-entitlement-owner-campaign-details",
              label: "Fetch Entitlement Owner Campaign Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-flat-response-entitlement-owner-campaign-details",
              label: "Fetch Flat Response Entitlement Owner Campaign Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/lock-campaign-1",
              label: "Lock Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/approve-reject-account-entitlement-details",
              label: "Approve Reject Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/certify-entitlement-owner-for-campaign",
              label: "Certify Entitlement Owner for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/reassign-entitlement-owner-for-campaign",
              label: "Reassign Entitlement Owner for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/reassign-certification-at-account-level",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/fetch-account-entitlement-details-2",
              label: "Fetch Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/lock-campaign-2",
              label: "Lock Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/consult-appowner-account-entitlement-details",
              label: "Consult AppOwner Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/reassign-application-owner-for-campaign",
              label: "Reassign Application Owner for Campaign",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Application OwnerCampaigns",
          items: [
            {
              type: "doc",
              id: "eic/approve-reject-account-entitlement-details-1",
              label: "Approve Reject Account Entitlement Details",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Job Management",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-and-update-trigger",
              label: "Create and Update Trigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/check-job-status",
              label: "Check Job Status",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/delete-trigger",
              label: "Delete Trigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/run-job-trigger",
              label: "Run Job Trigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-job-metadata",
              label: "Fetch Job Metadata",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/createtrigger",
              label: "createTrigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/resumepausejobs",
              label: "resumePauseJobs",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Common Utilities",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/upload-new-file",
              label: "Upload New File",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/import-application-data",
              label: "Import Application Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/check-import-status",
              label: "Check Import Status",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/force-complete",
              label: "Force Complete",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/send-email",
              label: "Send Email",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Connection",
          items: [
            {
              type: "doc",
              id: "eic/test-connection",
              label: "Test Connection",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Dashboard",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/retrieve-dashboard-tiles-data",
              label: "Retrieve Dashboard Tiles Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/retrieve-dashboard-account-data",
              label: "Retrieve Dashboard Account Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/retrieve-dashboard-data",
              label: "Retrieve Dashboard Data",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Access Recommendations",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-access-recommendations",
              label: "Get Access Recommendations",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Transport",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/export-package",
              label: "Export Package",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/import-package",
              label: "Import Package",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/transport-status",
              label: "Transport Status",
              className: "api-method get",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Request Collection",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Access Request",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-user-requestable-entitlements",
              label: "Get User Requestable Entitlements",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/validate-entitlement-request-data",
              label: "Validate Entitlement Request Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/request-to-create-entitlement-based-role",
              label: "Request to Create Entitlement Based Role",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/create-auto-approved-request",
              label: "Create Auto-approved Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/create-birthright-request",
              label: "Create Birthright Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/add-approver-to-existing-request",
              label: "Add Approver to existing Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/cancel-pending-request",
              label: "Cancel Pending Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-list-of-pending-requests-for-approver",
              label: "Get List of Pending Requests for Approver",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-request-approval-details",
              label: "Fetch Request Approval Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-request-access-attributes",
              label: "Fetch Request Access Attributes",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Request Approval",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/approve-reject-each-line-item-in-a-request",
              label: "Approve/Reject each line item in a request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-pending-approvals",
              label: "Get Pending Approvals",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/approve-reject-entire-request",
              label: "Approve/Reject entire request",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Tasks",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-task-remove-entitlement",
              label: "Create Task - Remove Entitlement",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/complete-single-task",
              label: "Complete Single Task",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-tasks",
              label: "Update Tasks",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/discontinue-tasks",
              label: "Discontinue Tasks",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/discontinue-all-pending-tasks",
              label: "Discontinue All Pending Tasks",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-task-details",
              label: "Fetch Task Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/check-task-status",
              label: "Check Task Status",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Authentication",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-authorization-token",
              label: "Get Authorization Token",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/refresh-authorization-token",
              label: "Refresh Authorization Token",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Users",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-user",
              label: "Create User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-user",
              label: "Update User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/bulk-upload-users",
              label: "Bulk Upload Users",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-user-details",
              label: "Get User Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-list-of-users",
              label: "Get List of Users",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/add-remove-user-from-sav-role",
              label: "Add/Remove User from SAV ROLE",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-access-details-for-user",
              label: "Get Access Details For User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-flat-response-entitlement-details-for-user",
              label: "Get Flat Response Entitlement Details For User",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/get-flat-response-role-details-for-user",
              label: "Get Flat Response Role Details For User",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/authenticate-user",
              label: "Authenticate User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/validate-user-data",
              label: "Validate User Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-savroles",
              label: "Get SavRoles",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Accounts",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-account-details",
              label: "Get Account Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/export-account",
              label: "Export Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/create-account",
              label: "Create Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-account",
              label: "Update Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/assign-account-to-user",
              label: "Assign Account to User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/assign-entitlement-to-account",
              label: "Assign Entitlement to Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/remove-entitlement-from-account",
              label: "Remove Entitlement from Account",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Privileges",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-privilege",
              label: "Create Privilege",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/update-privilege",
              label: "Update Privilege",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/delete-privilege",
              label: "Delete Privilege",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/get-list-of-privileges-for-entitlement-type",
              label: "Get List of Privileges for Entitlement Type",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Entitlements",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-entitlements",
              label: "Get Entitlements",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-child-entitlements",
              label: "Get Child Entitlements",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/create-update-entitlement",
              label: "Create/Update Entitlement",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-entitlement-values-for-endpoint",
              label: "Get Entitlement Values For Endpoint",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Roles",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/remove-entitlement-from-role",
              label: "Remove Entitlement From Role",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/add-role",
              label: "Add Role",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-role-details-for-user",
              label: "Get Role Details for user",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-firefighter-role-details",
              label: "Get FireFighter Role Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/remove-role",
              label: "Remove Role",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Endpoints",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-endpoint",
              label: "Create Endpoint",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-endpoint",
              label: "Update Endpoint",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/get-list-of-endpoints",
              label: "Get List of Endpoints",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Entitlement Types",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-entitlement-type",
              label: "Create Entitlement Type",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-entitlement-type",
              label: "Update Entitlement Type",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/get-list-of-entitlement-types",
              label: "Get List of Entitlement Types",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/delete-entitlement-types",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-dynamic-attribute",
              label: "Create Dynamic Attribute",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-dynamic-attribute",
              label: "Update Dynamic Attribute",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/fetch-dynamic-attributes",
              label: "Fetch Dynamic Attributes",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/delete-dynamic-attribute",
              label: "Delete Dynamic Attribute",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Security Systems",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-security-system",
              label: "Create Security System",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-security-system",
              label: "Update Security System",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/get-list-of-security-systems",
              label: "Get List of Security Systems",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/delete-security-system",
              label: "Delete Security System",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "User Groups",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-update-usergroup",
              label: "Create/Update UserGroup",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/add-remove-user-from-usergroup",
              label: "Add/Remove User From UserGroup",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/delete-usergroup",
              label: "Delete UserGroup",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-list-of-usergroups",
              label: "Get List of UserGroups",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Organization",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-organization",
              label: "Create Organization",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-organization",
              label: "Update Organization",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/get-organization",
              label: "Get Organization",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/delete-organization",
              label: "Delete Organization",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Connections",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-list-of-connections",
              label: "Get List of Connections",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-connections-details",
              label: "Get Connections Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/delete-connections",
              label: "Delete Connections",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Dataset",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/createdataset",
              label: "createDataset",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/getdatasetvalues",
              label: "getDatasetValues",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/updatedatasetvalues",
              label: "updateDatasetValues",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/deletedataset",
              label: "deleteDataset",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/uploaddatasetcsv",
              label: "uploadDatasetCSV",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/updatedataset",
              label: "updateDataset",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Analytics",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/fetch-list-of-analytics",
              label: "Fetch List of Analytics",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-analytics-details",
              label: "Fetch Analytics Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/run-analytics-controls",
              label: "Run Analytics Controls",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-runtime-controls-data",
              label: "Fetch Runtime Controls Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-runtime-controls-data-v-2",
              label: "Fetch Runtime Controls Data V2",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-list-of-analytics-es",
              label: "Fetch List of Analytics ES",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/fetch-control-attributes",
              label: "Fetch Control Attributes",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-control-details-es",
              label: "Fetch Control Details ES",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Request",
          items: [
            {
              type: "doc",
              id: "eic/create-user-request",
              label: "Create User Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-user-request",
              label: "Update User Request",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/get-requestable-users",
              label: "Get Requestable Users",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Role Request",
          items: [
            {
              type: "doc",
              id: "eic/create-role-request",
              label: "Create Role Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-role-request",
              label: "Update Role Request",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Organization Request",
          items: [
            {
              type: "doc",
              id: "eic/create-organization-request",
              label: "Create Organization Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-organization-request",
              label: "Update Organization Request",
              className: "api-method put",
            },
          ],
        },
        {
          type: "category",
          label: "Request History",
          items: [
            {
              type: "doc",
              id: "eic/fetch-request-history-my-pending-requests",
              label: "Fetch Request History (my pending requests)",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-request-history-details",
              label: "Fetch Request History Details",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Delegation",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-delegate-user-list",
              label: "Get Delegate User List",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/create-delegate",
              label: "Create Delegate",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-existing-delegates-list",
              label: "Fetch Existing Delegates List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/edit-delegate",
              label: "Edit Delegate",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/delete-delegate",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/fetch-attestation-list",
              label: "Fetch Attestation List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-attestation-details",
              label: "Fetch Attestation Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/certify-usermanager-requests",
              label: "Certify UserManager Requests",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-attestation-account-entitlement-details",
              label: "Fetch Attestation Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/approve-reject-attestation-account-details",
              label: "Approve Reject Attestation Account Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/lock-attestation",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/fetch-campaign-list",
              label: "Fetch Campaign List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-campaign-details",
              label: "Fetch Campaign Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/lock-campaign",
              label: "Lock Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-certification-list",
              label: "Fetch Certification List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/discontinue-campaigns-and-certifications",
              label: "Discontinue Campaigns and Certifications",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/reassign-certification",
              label: "Reassign Certification",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Manager",
          items: [
            {
              type: "doc",
              id: "eic/fetch-campaign-details",
              label: "Fetch Campaign Details",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Manager Campaigns",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/certify-user-manager-for-campaign",
              label: "Certify User Manager for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-account-entitlement-details",
              label: "Fetch Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/approve-reject-campaign-account-entitlement-details",
              label: "Approve Reject Campaign Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/reassign-usermanager-step-1-for-campaign",
              label: "Reassign UserManager Step 1 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/consult-usermanager-step-1-for-campaign",
              label: "Consult UserManager Step 1 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/consult-campaign-account-entitlement-details",
              label: "Consult Campaign Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/reassign-certification-at-account-and-entitlement-level-copy",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/consult-entitlementowner-step-1-for-campaign",
              label: "Consult EntitlementOwner Step 1 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/consult-entitlementowner-step-2-for-campaign",
              label: "Consult EntitlementOwner Step 2 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-account-entitlement-details-1",
              label: "Fetch Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-entitlement-owner-campaign-details",
              label: "Fetch Entitlement Owner Campaign Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-flat-response-entitlement-owner-campaign-details",
              label: "Fetch Flat Response Entitlement Owner Campaign Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/lock-campaign-1",
              label: "Lock Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/approve-reject-account-entitlement-details",
              label: "Approve Reject Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/certify-entitlement-owner-for-campaign",
              label: "Certify Entitlement Owner for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/reassign-entitlement-owner-for-campaign",
              label: "Reassign Entitlement Owner for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/reassign-certification-at-account-level",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/fetch-account-entitlement-details-2",
              label: "Fetch Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/lock-campaign-2",
              label: "Lock Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/consult-appowner-account-entitlement-details",
              label: "Consult AppOwner Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/reassign-application-owner-for-campaign",
              label: "Reassign Application Owner for Campaign",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Application OwnerCampaigns",
          items: [
            {
              type: "doc",
              id: "eic/approve-reject-account-entitlement-details-1",
              label: "Approve Reject Account Entitlement Details",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Segregation of Duties",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/sod-evaluation-for-sap-functions",
              label: "SoD Evaluation for SAP Functions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/sod-evaluation-for-non-sap-functions",
              label: "SoD Evaluation for Non - SAP Functions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/add-mitigating-control-risk-account",
              label: "Add Mitigating Control Risk Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/upload-sod-ruleset",
              label: "Upload SOD Ruleset",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Password Management",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/fetch-security-questions",
              label: "Fetch Security Questions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-user-security-questions",
              label: "Fetch User Security Questions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/validate-user-security-answers",
              label: "Validate User Security Answers",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/create-security-questions",
              label: "Create Security Questions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/create-password-policy",
              label: "Create Password Policy",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/change-user-password",
              label: "Change User Password",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Job Management",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-and-update-trigger",
              label: "Create and Update Trigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/check-job-status",
              label: "Check Job Status",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/delete-trigger",
              label: "Delete Trigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/run-job-trigger",
              label: "Run Job Trigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-job-metadata",
              label: "Fetch Job Metadata",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/createtrigger",
              label: "createTrigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/resumepausejobs",
              label: "resumePauseJobs",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Common Utilities",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/upload-new-file",
              label: "Upload New File",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/import-application-data",
              label: "Import Application Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/check-import-status",
              label: "Check Import Status",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/force-complete",
              label: "Force Complete",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/send-email",
              label: "Send Email",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Connection",
          items: [
            {
              type: "doc",
              id: "eic/test-connection",
              label: "Test Connection",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Dashboard",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/retrieve-dashboard-tiles-data",
              label: "Retrieve Dashboard Tiles Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/retrieve-dashboard-account-data",
              label: "Retrieve Dashboard Account Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/retrieve-dashboard-data",
              label: "Retrieve Dashboard Data",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Access Recommendations",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-access-recommendations",
              label: "Get Access Recommendations",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Transport",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/export-package",
              label: "Export Package",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/import-package",
              label: "Import Package",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/transport-status",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/fetch-technical-rules",
              label: "Fetch Technical Rules",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/update-technical-rules",
              label: "Update Technical Rules",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/create-technical-rules",
              label: "Create Technical Rules",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/delete-technical-rules",
              label: "Delete Technical Rules",
              className: "api-method delete",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Applications Collection",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Security Systems",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-security-system",
              label: "Create Security System",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-security-system",
              label: "Update Security System",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/get-list-of-security-systems",
              label: "Get List of Security Systems",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/delete-security-system",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-endpoint",
              label: "Create Endpoint",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-endpoint",
              label: "Update Endpoint",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/get-list-of-endpoints",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-list-of-connections",
              label: "Get List of Connections",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-connections-details",
              label: "Get Connections Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/delete-connections",
              label: "Delete Connections",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Entitlement Types",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-entitlement-type",
              label: "Create Entitlement Type",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-entitlement-type",
              label: "Update Entitlement Type",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/get-list-of-entitlement-types",
              label: "Get List of Entitlement Types",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/delete-entitlement-types",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-dynamic-attribute",
              label: "Create Dynamic Attribute",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-dynamic-attribute",
              label: "Update Dynamic Attribute",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/fetch-dynamic-attributes",
              label: "Fetch Dynamic Attributes",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/delete-dynamic-attribute",
              label: "Delete Dynamic Attribute",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Authentication",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-authorization-token",
              label: "Get Authorization Token",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/refresh-authorization-token",
              label: "Refresh Authorization Token",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Users",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-user",
              label: "Create User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-user",
              label: "Update User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/bulk-upload-users",
              label: "Bulk Upload Users",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-user-details",
              label: "Get User Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-list-of-users",
              label: "Get List of Users",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/add-remove-user-from-sav-role",
              label: "Add/Remove User from SAV ROLE",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-access-details-for-user",
              label: "Get Access Details For User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-flat-response-entitlement-details-for-user",
              label: "Get Flat Response Entitlement Details For User",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/get-flat-response-role-details-for-user",
              label: "Get Flat Response Role Details For User",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/authenticate-user",
              label: "Authenticate User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/validate-user-data",
              label: "Validate User Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-savroles",
              label: "Get SavRoles",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Accounts",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-account-details",
              label: "Get Account Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/export-account",
              label: "Export Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/create-account",
              label: "Create Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-account",
              label: "Update Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/assign-account-to-user",
              label: "Assign Account to User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/assign-entitlement-to-account",
              label: "Assign Entitlement to Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/remove-entitlement-from-account",
              label: "Remove Entitlement from Account",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Privileges",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-privilege",
              label: "Create Privilege",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/update-privilege",
              label: "Update Privilege",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/delete-privilege",
              label: "Delete Privilege",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/get-list-of-privileges-for-entitlement-type",
              label: "Get List of Privileges for Entitlement Type",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Entitlements",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-entitlements",
              label: "Get Entitlements",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-child-entitlements",
              label: "Get Child Entitlements",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/create-update-entitlement",
              label: "Create/Update Entitlement",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-entitlement-values-for-endpoint",
              label: "Get Entitlement Values For Endpoint",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Roles",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/remove-entitlement-from-role",
              label: "Remove Entitlement From Role",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/add-role",
              label: "Add Role",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-role-details-for-user",
              label: "Get Role Details for user",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-firefighter-role-details",
              label: "Get FireFighter Role Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/remove-role",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-update-usergroup",
              label: "Create/Update UserGroup",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/add-remove-user-from-usergroup",
              label: "Add/Remove User From UserGroup",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/delete-usergroup",
              label: "Delete UserGroup",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-list-of-usergroups",
              label: "Get List of UserGroups",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Organization",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-organization",
              label: "Create Organization",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-organization",
              label: "Update Organization",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/get-organization",
              label: "Get Organization",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/delete-organization",
              label: "Delete Organization",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Dataset",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/createdataset",
              label: "createDataset",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/getdatasetvalues",
              label: "getDatasetValues",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/updatedatasetvalues",
              label: "updateDatasetValues",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/deletedataset",
              label: "deleteDataset",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/uploaddatasetcsv",
              label: "uploadDatasetCSV",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/updatedataset",
              label: "updateDataset",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Analytics",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/fetch-list-of-analytics",
              label: "Fetch List of Analytics",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-analytics-details",
              label: "Fetch Analytics Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/run-analytics-controls",
              label: "Run Analytics Controls",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-runtime-controls-data",
              label: "Fetch Runtime Controls Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-runtime-controls-data-v-2",
              label: "Fetch Runtime Controls Data V2",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-list-of-analytics-es",
              label: "Fetch List of Analytics ES",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/fetch-control-attributes",
              label: "Fetch Control Attributes",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-control-details-es",
              label: "Fetch Control Details ES",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Request",
          items: [
            {
              type: "doc",
              id: "eic/create-user-request",
              label: "Create User Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-user-request",
              label: "Update User Request",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/get-requestable-users",
              label: "Get Requestable Users",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Role Request",
          items: [
            {
              type: "doc",
              id: "eic/create-role-request",
              label: "Create Role Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-role-request",
              label: "Update Role Request",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Access Request",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-user-requestable-entitlements",
              label: "Get User Requestable Entitlements",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/validate-entitlement-request-data",
              label: "Validate Entitlement Request Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/request-to-create-entitlement-based-role",
              label: "Request to Create Entitlement Based Role",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/create-auto-approved-request",
              label: "Create Auto-approved Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/create-birthright-request",
              label: "Create Birthright Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/add-approver-to-existing-request",
              label: "Add Approver to existing Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/cancel-pending-request",
              label: "Cancel Pending Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-list-of-pending-requests-for-approver",
              label: "Get List of Pending Requests for Approver",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-request-approval-details",
              label: "Fetch Request Approval Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-request-access-attributes",
              label: "Fetch Request Access Attributes",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Organization Request",
          items: [
            {
              type: "doc",
              id: "eic/create-organization-request",
              label: "Create Organization Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-organization-request",
              label: "Update Organization Request",
              className: "api-method put",
            },
          ],
        },
        {
          type: "category",
          label: "Request History",
          items: [
            {
              type: "doc",
              id: "eic/fetch-request-history-my-pending-requests",
              label: "Fetch Request History (my pending requests)",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-request-history-details",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/approve-reject-each-line-item-in-a-request",
              label: "Approve/Reject each line item in a request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-pending-approvals",
              label: "Get Pending Approvals",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/approve-reject-entire-request",
              label: "Approve/Reject entire request",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Tasks",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-task-remove-entitlement",
              label: "Create Task - Remove Entitlement",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/complete-single-task",
              label: "Complete Single Task",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-tasks",
              label: "Update Tasks",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/discontinue-tasks",
              label: "Discontinue Tasks",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/discontinue-all-pending-tasks",
              label: "Discontinue All Pending Tasks",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-task-details",
              label: "Fetch Task Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/check-task-status",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-delegate-user-list",
              label: "Get Delegate User List",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/create-delegate",
              label: "Create Delegate",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-existing-delegates-list",
              label: "Fetch Existing Delegates List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/edit-delegate",
              label: "Edit Delegate",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/delete-delegate",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/fetch-attestation-list",
              label: "Fetch Attestation List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-attestation-details",
              label: "Fetch Attestation Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/certify-usermanager-requests",
              label: "Certify UserManager Requests",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-attestation-account-entitlement-details",
              label: "Fetch Attestation Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/approve-reject-attestation-account-details",
              label: "Approve Reject Attestation Account Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/lock-attestation",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/fetch-campaign-list",
              label: "Fetch Campaign List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-campaign-details",
              label: "Fetch Campaign Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/lock-campaign",
              label: "Lock Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-certification-list",
              label: "Fetch Certification List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/discontinue-campaigns-and-certifications",
              label: "Discontinue Campaigns and Certifications",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/reassign-certification",
              label: "Reassign Certification",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Manager",
          items: [
            {
              type: "doc",
              id: "eic/fetch-campaign-details",
              label: "Fetch Campaign Details",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Manager Campaigns",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/certify-user-manager-for-campaign",
              label: "Certify User Manager for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-account-entitlement-details",
              label: "Fetch Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/approve-reject-campaign-account-entitlement-details",
              label: "Approve Reject Campaign Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/reassign-usermanager-step-1-for-campaign",
              label: "Reassign UserManager Step 1 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/consult-usermanager-step-1-for-campaign",
              label: "Consult UserManager Step 1 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/consult-campaign-account-entitlement-details",
              label: "Consult Campaign Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/reassign-certification-at-account-and-entitlement-level-copy",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/consult-entitlementowner-step-1-for-campaign",
              label: "Consult EntitlementOwner Step 1 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/consult-entitlementowner-step-2-for-campaign",
              label: "Consult EntitlementOwner Step 2 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-account-entitlement-details-1",
              label: "Fetch Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-entitlement-owner-campaign-details",
              label: "Fetch Entitlement Owner Campaign Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-flat-response-entitlement-owner-campaign-details",
              label: "Fetch Flat Response Entitlement Owner Campaign Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/lock-campaign-1",
              label: "Lock Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/approve-reject-account-entitlement-details",
              label: "Approve Reject Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/certify-entitlement-owner-for-campaign",
              label: "Certify Entitlement Owner for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/reassign-entitlement-owner-for-campaign",
              label: "Reassign Entitlement Owner for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/reassign-certification-at-account-level",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/fetch-account-entitlement-details-2",
              label: "Fetch Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/lock-campaign-2",
              label: "Lock Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/consult-appowner-account-entitlement-details",
              label: "Consult AppOwner Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/reassign-application-owner-for-campaign",
              label: "Reassign Application Owner for Campaign",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Application OwnerCampaigns",
          items: [
            {
              type: "doc",
              id: "eic/approve-reject-account-entitlement-details-1",
              label: "Approve Reject Account Entitlement Details",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Segregation of Duties",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/sod-evaluation-for-sap-functions",
              label: "SoD Evaluation for SAP Functions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/sod-evaluation-for-non-sap-functions",
              label: "SoD Evaluation for Non - SAP Functions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/add-mitigating-control-risk-account",
              label: "Add Mitigating Control Risk Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/upload-sod-ruleset",
              label: "Upload SOD Ruleset",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Password Management",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/fetch-security-questions",
              label: "Fetch Security Questions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-user-security-questions",
              label: "Fetch User Security Questions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/validate-user-security-answers",
              label: "Validate User Security Answers",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/create-security-questions",
              label: "Create Security Questions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/create-password-policy",
              label: "Create Password Policy",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/change-user-password",
              label: "Change User Password",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Job Management",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-and-update-trigger",
              label: "Create and Update Trigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/check-job-status",
              label: "Check Job Status",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/delete-trigger",
              label: "Delete Trigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/run-job-trigger",
              label: "Run Job Trigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-job-metadata",
              label: "Fetch Job Metadata",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/createtrigger",
              label: "createTrigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/resumepausejobs",
              label: "resumePauseJobs",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Common Utilities",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/upload-new-file",
              label: "Upload New File",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/import-application-data",
              label: "Import Application Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/check-import-status",
              label: "Check Import Status",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/force-complete",
              label: "Force Complete",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/send-email",
              label: "Send Email",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Connection",
          items: [
            {
              type: "doc",
              id: "eic/test-connection",
              label: "Test Connection",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Dashboard",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/retrieve-dashboard-tiles-data",
              label: "Retrieve Dashboard Tiles Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/retrieve-dashboard-account-data",
              label: "Retrieve Dashboard Account Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/retrieve-dashboard-data",
              label: "Retrieve Dashboard Data",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Access Recommendations",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-access-recommendations",
              label: "Get Access Recommendations",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Transport",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/export-package",
              label: "Export Package",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/import-package",
              label: "Import Package",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/transport-status",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/fetch-technical-rules",
              label: "Fetch Technical Rules",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/update-technical-rules",
              label: "Update Technical Rules",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/create-technical-rules",
              label: "Create Technical Rules",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/delete-technical-rules",
              label: "Delete Technical Rules",
              className: "api-method delete",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Campaigns Collection",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Attestations",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/fetch-attestation-list",
              label: "Fetch Attestation List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-attestation-details",
              label: "Fetch Attestation Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/certify-usermanager-requests",
              label: "Certify UserManager Requests",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-attestation-account-entitlement-details",
              label: "Fetch Attestation Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/approve-reject-attestation-account-details",
              label: "Approve Reject Attestation Account Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/lock-attestation",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/fetch-campaign-list",
              label: "Fetch Campaign List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-campaign-details",
              label: "Fetch Campaign Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/lock-campaign",
              label: "Lock Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-certification-list",
              label: "Fetch Certification List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/discontinue-campaigns-and-certifications",
              label: "Discontinue Campaigns and Certifications",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/reassign-certification",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/certify-user-manager-for-campaign",
              label: "Certify User Manager for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-account-entitlement-details",
              label: "Fetch Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/approve-reject-campaign-account-entitlement-details",
              label: "Approve Reject Campaign Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/reassign-usermanager-step-1-for-campaign",
              label: "Reassign UserManager Step 1 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/consult-usermanager-step-1-for-campaign",
              label: "Consult UserManager Step 1 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/consult-campaign-account-entitlement-details",
              label: "Consult Campaign Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/reassign-certification-at-account-and-entitlement-level-copy",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/consult-entitlementowner-step-1-for-campaign",
              label: "Consult EntitlementOwner Step 1 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/consult-entitlementowner-step-2-for-campaign",
              label: "Consult EntitlementOwner Step 2 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-account-entitlement-details-1",
              label: "Fetch Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-entitlement-owner-campaign-details",
              label: "Fetch Entitlement Owner Campaign Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-flat-response-entitlement-owner-campaign-details",
              label: "Fetch Flat Response Entitlement Owner Campaign Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/lock-campaign-1",
              label: "Lock Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/approve-reject-account-entitlement-details",
              label: "Approve Reject Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/certify-entitlement-owner-for-campaign",
              label: "Certify Entitlement Owner for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/reassign-entitlement-owner-for-campaign",
              label: "Reassign Entitlement Owner for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/reassign-certification-at-account-level",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/fetch-account-entitlement-details-2",
              label: "Fetch Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/lock-campaign-2",
              label: "Lock Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/consult-appowner-account-entitlement-details",
              label: "Consult AppOwner Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/reassign-application-owner-for-campaign",
              label: "Reassign Application Owner for Campaign",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Authentication",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-authorization-token",
              label: "Get Authorization Token",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/refresh-authorization-token",
              label: "Refresh Authorization Token",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Users",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-user",
              label: "Create User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-user",
              label: "Update User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/bulk-upload-users",
              label: "Bulk Upload Users",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-user-details",
              label: "Get User Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-list-of-users",
              label: "Get List of Users",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/add-remove-user-from-sav-role",
              label: "Add/Remove User from SAV ROLE",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-access-details-for-user",
              label: "Get Access Details For User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-flat-response-entitlement-details-for-user",
              label: "Get Flat Response Entitlement Details For User",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/get-flat-response-role-details-for-user",
              label: "Get Flat Response Role Details For User",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/authenticate-user",
              label: "Authenticate User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/validate-user-data",
              label: "Validate User Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-savroles",
              label: "Get SavRoles",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Accounts",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-account-details",
              label: "Get Account Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/export-account",
              label: "Export Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/create-account",
              label: "Create Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-account",
              label: "Update Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/assign-account-to-user",
              label: "Assign Account to User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/assign-entitlement-to-account",
              label: "Assign Entitlement to Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/remove-entitlement-from-account",
              label: "Remove Entitlement from Account",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Privileges",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-privilege",
              label: "Create Privilege",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/update-privilege",
              label: "Update Privilege",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/delete-privilege",
              label: "Delete Privilege",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/get-list-of-privileges-for-entitlement-type",
              label: "Get List of Privileges for Entitlement Type",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Entitlements",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-entitlements",
              label: "Get Entitlements",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-child-entitlements",
              label: "Get Child Entitlements",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/create-update-entitlement",
              label: "Create/Update Entitlement",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-entitlement-values-for-endpoint",
              label: "Get Entitlement Values For Endpoint",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Roles",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/remove-entitlement-from-role",
              label: "Remove Entitlement From Role",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/add-role",
              label: "Add Role",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-role-details-for-user",
              label: "Get Role Details for user",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-firefighter-role-details",
              label: "Get FireFighter Role Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/remove-role",
              label: "Remove Role",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Endpoints",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-endpoint",
              label: "Create Endpoint",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-endpoint",
              label: "Update Endpoint",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/get-list-of-endpoints",
              label: "Get List of Endpoints",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Entitlement Types",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-entitlement-type",
              label: "Create Entitlement Type",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-entitlement-type",
              label: "Update Entitlement Type",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/get-list-of-entitlement-types",
              label: "Get List of Entitlement Types",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/delete-entitlement-types",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-dynamic-attribute",
              label: "Create Dynamic Attribute",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-dynamic-attribute",
              label: "Update Dynamic Attribute",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/fetch-dynamic-attributes",
              label: "Fetch Dynamic Attributes",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/delete-dynamic-attribute",
              label: "Delete Dynamic Attribute",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Security Systems",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-security-system",
              label: "Create Security System",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-security-system",
              label: "Update Security System",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/get-list-of-security-systems",
              label: "Get List of Security Systems",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/delete-security-system",
              label: "Delete Security System",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "User Groups",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-update-usergroup",
              label: "Create/Update UserGroup",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/add-remove-user-from-usergroup",
              label: "Add/Remove User From UserGroup",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/delete-usergroup",
              label: "Delete UserGroup",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-list-of-usergroups",
              label: "Get List of UserGroups",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Organization",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-organization",
              label: "Create Organization",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-organization",
              label: "Update Organization",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/get-organization",
              label: "Get Organization",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/delete-organization",
              label: "Delete Organization",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Connections",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-list-of-connections",
              label: "Get List of Connections",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-connections-details",
              label: "Get Connections Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/delete-connections",
              label: "Delete Connections",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Dataset",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/createdataset",
              label: "createDataset",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/getdatasetvalues",
              label: "getDatasetValues",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/updatedatasetvalues",
              label: "updateDatasetValues",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/deletedataset",
              label: "deleteDataset",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/uploaddatasetcsv",
              label: "uploadDatasetCSV",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/updatedataset",
              label: "updateDataset",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Analytics",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/fetch-list-of-analytics",
              label: "Fetch List of Analytics",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-analytics-details",
              label: "Fetch Analytics Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/run-analytics-controls",
              label: "Run Analytics Controls",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-runtime-controls-data",
              label: "Fetch Runtime Controls Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-runtime-controls-data-v-2",
              label: "Fetch Runtime Controls Data V2",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-list-of-analytics-es",
              label: "Fetch List of Analytics ES",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/fetch-control-attributes",
              label: "Fetch Control Attributes",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-control-details-es",
              label: "Fetch Control Details ES",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Request",
          items: [
            {
              type: "doc",
              id: "eic/create-user-request",
              label: "Create User Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-user-request",
              label: "Update User Request",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/get-requestable-users",
              label: "Get Requestable Users",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Role Request",
          items: [
            {
              type: "doc",
              id: "eic/create-role-request",
              label: "Create Role Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-role-request",
              label: "Update Role Request",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Access Request",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-user-requestable-entitlements",
              label: "Get User Requestable Entitlements",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/validate-entitlement-request-data",
              label: "Validate Entitlement Request Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/request-to-create-entitlement-based-role",
              label: "Request to Create Entitlement Based Role",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/create-auto-approved-request",
              label: "Create Auto-approved Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/create-birthright-request",
              label: "Create Birthright Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/add-approver-to-existing-request",
              label: "Add Approver to existing Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/cancel-pending-request",
              label: "Cancel Pending Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-list-of-pending-requests-for-approver",
              label: "Get List of Pending Requests for Approver",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-request-approval-details",
              label: "Fetch Request Approval Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-request-access-attributes",
              label: "Fetch Request Access Attributes",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Organization Request",
          items: [
            {
              type: "doc",
              id: "eic/create-organization-request",
              label: "Create Organization Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-organization-request",
              label: "Update Organization Request",
              className: "api-method put",
            },
          ],
        },
        {
          type: "category",
          label: "Request History",
          items: [
            {
              type: "doc",
              id: "eic/fetch-request-history-my-pending-requests",
              label: "Fetch Request History (my pending requests)",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-request-history-details",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/approve-reject-each-line-item-in-a-request",
              label: "Approve/Reject each line item in a request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-pending-approvals",
              label: "Get Pending Approvals",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/approve-reject-entire-request",
              label: "Approve/Reject entire request",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Tasks",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-task-remove-entitlement",
              label: "Create Task - Remove Entitlement",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/complete-single-task",
              label: "Complete Single Task",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-tasks",
              label: "Update Tasks",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/discontinue-tasks",
              label: "Discontinue Tasks",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/discontinue-all-pending-tasks",
              label: "Discontinue All Pending Tasks",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-task-details",
              label: "Fetch Task Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/check-task-status",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-delegate-user-list",
              label: "Get Delegate User List",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/create-delegate",
              label: "Create Delegate",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-existing-delegates-list",
              label: "Fetch Existing Delegates List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/edit-delegate",
              label: "Edit Delegate",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/delete-delegate",
              label: "Delete Delegate",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Manager",
          items: [
            {
              type: "doc",
              id: "eic/fetch-campaign-details",
              label: "Fetch Campaign Details",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Application OwnerCampaigns",
          items: [
            {
              type: "doc",
              id: "eic/approve-reject-account-entitlement-details-1",
              label: "Approve Reject Account Entitlement Details",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Segregation of Duties",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/sod-evaluation-for-sap-functions",
              label: "SoD Evaluation for SAP Functions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/sod-evaluation-for-non-sap-functions",
              label: "SoD Evaluation for Non - SAP Functions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/add-mitigating-control-risk-account",
              label: "Add Mitigating Control Risk Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/upload-sod-ruleset",
              label: "Upload SOD Ruleset",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Password Management",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/fetch-security-questions",
              label: "Fetch Security Questions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-user-security-questions",
              label: "Fetch User Security Questions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/validate-user-security-answers",
              label: "Validate User Security Answers",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/create-security-questions",
              label: "Create Security Questions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/create-password-policy",
              label: "Create Password Policy",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/change-user-password",
              label: "Change User Password",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Job Management",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-and-update-trigger",
              label: "Create and Update Trigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/check-job-status",
              label: "Check Job Status",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/delete-trigger",
              label: "Delete Trigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/run-job-trigger",
              label: "Run Job Trigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-job-metadata",
              label: "Fetch Job Metadata",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/createtrigger",
              label: "createTrigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/resumepausejobs",
              label: "resumePauseJobs",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Common Utilities",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/upload-new-file",
              label: "Upload New File",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/import-application-data",
              label: "Import Application Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/check-import-status",
              label: "Check Import Status",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/force-complete",
              label: "Force Complete",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/send-email",
              label: "Send Email",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Connection",
          items: [
            {
              type: "doc",
              id: "eic/test-connection",
              label: "Test Connection",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Dashboard",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/retrieve-dashboard-tiles-data",
              label: "Retrieve Dashboard Tiles Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/retrieve-dashboard-account-data",
              label: "Retrieve Dashboard Account Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/retrieve-dashboard-data",
              label: "Retrieve Dashboard Data",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Access Recommendations",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-access-recommendations",
              label: "Get Access Recommendations",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Transport",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/export-package",
              label: "Export Package",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/import-package",
              label: "Import Package",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/transport-status",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/fetch-technical-rules",
              label: "Fetch Technical Rules",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/update-technical-rules",
              label: "Update Technical Rules",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/create-technical-rules",
              label: "Create Technical Rules",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/delete-technical-rules",
              label: "Delete Technical Rules",
              className: "api-method delete",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Analytics Collection",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Analytics",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/fetch-list-of-analytics",
              label: "Fetch List of Analytics",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-analytics-details",
              label: "Fetch Analytics Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/run-analytics-controls",
              label: "Run Analytics Controls",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-runtime-controls-data",
              label: "Fetch Runtime Controls Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-runtime-controls-data-v-2",
              label: "Fetch Runtime Controls Data V2",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-list-of-analytics-es",
              label: "Fetch List of Analytics ES",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/fetch-control-attributes",
              label: "Fetch Control Attributes",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-control-details-es",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-access-recommendations",
              label: "Get Access Recommendations",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Dashboard",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/retrieve-dashboard-tiles-data",
              label: "Retrieve Dashboard Tiles Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/retrieve-dashboard-account-data",
              label: "Retrieve Dashboard Account Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/retrieve-dashboard-data",
              label: "Retrieve Dashboard Data",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Authentication",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-authorization-token",
              label: "Get Authorization Token",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/refresh-authorization-token",
              label: "Refresh Authorization Token",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Users",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-user",
              label: "Create User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-user",
              label: "Update User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/bulk-upload-users",
              label: "Bulk Upload Users",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-user-details",
              label: "Get User Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-list-of-users",
              label: "Get List of Users",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/add-remove-user-from-sav-role",
              label: "Add/Remove User from SAV ROLE",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-access-details-for-user",
              label: "Get Access Details For User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-flat-response-entitlement-details-for-user",
              label: "Get Flat Response Entitlement Details For User",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/get-flat-response-role-details-for-user",
              label: "Get Flat Response Role Details For User",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/authenticate-user",
              label: "Authenticate User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/validate-user-data",
              label: "Validate User Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-savroles",
              label: "Get SavRoles",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Accounts",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-account-details",
              label: "Get Account Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/export-account",
              label: "Export Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/create-account",
              label: "Create Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-account",
              label: "Update Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/assign-account-to-user",
              label: "Assign Account to User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/assign-entitlement-to-account",
              label: "Assign Entitlement to Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/remove-entitlement-from-account",
              label: "Remove Entitlement from Account",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Privileges",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-privilege",
              label: "Create Privilege",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/update-privilege",
              label: "Update Privilege",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/delete-privilege",
              label: "Delete Privilege",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/get-list-of-privileges-for-entitlement-type",
              label: "Get List of Privileges for Entitlement Type",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Entitlements",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-entitlements",
              label: "Get Entitlements",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-child-entitlements",
              label: "Get Child Entitlements",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/create-update-entitlement",
              label: "Create/Update Entitlement",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-entitlement-values-for-endpoint",
              label: "Get Entitlement Values For Endpoint",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Roles",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/remove-entitlement-from-role",
              label: "Remove Entitlement From Role",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/add-role",
              label: "Add Role",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-role-details-for-user",
              label: "Get Role Details for user",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-firefighter-role-details",
              label: "Get FireFighter Role Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/remove-role",
              label: "Remove Role",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Endpoints",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-endpoint",
              label: "Create Endpoint",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-endpoint",
              label: "Update Endpoint",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/get-list-of-endpoints",
              label: "Get List of Endpoints",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Entitlement Types",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-entitlement-type",
              label: "Create Entitlement Type",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-entitlement-type",
              label: "Update Entitlement Type",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/get-list-of-entitlement-types",
              label: "Get List of Entitlement Types",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/delete-entitlement-types",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-dynamic-attribute",
              label: "Create Dynamic Attribute",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-dynamic-attribute",
              label: "Update Dynamic Attribute",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/fetch-dynamic-attributes",
              label: "Fetch Dynamic Attributes",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/delete-dynamic-attribute",
              label: "Delete Dynamic Attribute",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Security Systems",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-security-system",
              label: "Create Security System",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-security-system",
              label: "Update Security System",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/get-list-of-security-systems",
              label: "Get List of Security Systems",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/delete-security-system",
              label: "Delete Security System",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "User Groups",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-update-usergroup",
              label: "Create/Update UserGroup",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/add-remove-user-from-usergroup",
              label: "Add/Remove User From UserGroup",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/delete-usergroup",
              label: "Delete UserGroup",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-list-of-usergroups",
              label: "Get List of UserGroups",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Organization",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-organization",
              label: "Create Organization",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-organization",
              label: "Update Organization",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/get-organization",
              label: "Get Organization",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/delete-organization",
              label: "Delete Organization",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Connections",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-list-of-connections",
              label: "Get List of Connections",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-connections-details",
              label: "Get Connections Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/delete-connections",
              label: "Delete Connections",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Dataset",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/createdataset",
              label: "createDataset",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/getdatasetvalues",
              label: "getDatasetValues",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/updatedatasetvalues",
              label: "updateDatasetValues",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/deletedataset",
              label: "deleteDataset",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/uploaddatasetcsv",
              label: "uploadDatasetCSV",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/updatedataset",
              label: "updateDataset",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Request",
          items: [
            {
              type: "doc",
              id: "eic/create-user-request",
              label: "Create User Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-user-request",
              label: "Update User Request",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/get-requestable-users",
              label: "Get Requestable Users",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Role Request",
          items: [
            {
              type: "doc",
              id: "eic/create-role-request",
              label: "Create Role Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-role-request",
              label: "Update Role Request",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Access Request",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-user-requestable-entitlements",
              label: "Get User Requestable Entitlements",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/validate-entitlement-request-data",
              label: "Validate Entitlement Request Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/request-to-create-entitlement-based-role",
              label: "Request to Create Entitlement Based Role",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/create-auto-approved-request",
              label: "Create Auto-approved Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/create-birthright-request",
              label: "Create Birthright Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/add-approver-to-existing-request",
              label: "Add Approver to existing Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/cancel-pending-request",
              label: "Cancel Pending Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-list-of-pending-requests-for-approver",
              label: "Get List of Pending Requests for Approver",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-request-approval-details",
              label: "Fetch Request Approval Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-request-access-attributes",
              label: "Fetch Request Access Attributes",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Organization Request",
          items: [
            {
              type: "doc",
              id: "eic/create-organization-request",
              label: "Create Organization Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-organization-request",
              label: "Update Organization Request",
              className: "api-method put",
            },
          ],
        },
        {
          type: "category",
          label: "Request History",
          items: [
            {
              type: "doc",
              id: "eic/fetch-request-history-my-pending-requests",
              label: "Fetch Request History (my pending requests)",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-request-history-details",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/approve-reject-each-line-item-in-a-request",
              label: "Approve/Reject each line item in a request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-pending-approvals",
              label: "Get Pending Approvals",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/approve-reject-entire-request",
              label: "Approve/Reject entire request",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Tasks",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-task-remove-entitlement",
              label: "Create Task - Remove Entitlement",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/complete-single-task",
              label: "Complete Single Task",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-tasks",
              label: "Update Tasks",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/discontinue-tasks",
              label: "Discontinue Tasks",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/discontinue-all-pending-tasks",
              label: "Discontinue All Pending Tasks",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-task-details",
              label: "Fetch Task Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/check-task-status",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-delegate-user-list",
              label: "Get Delegate User List",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/create-delegate",
              label: "Create Delegate",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-existing-delegates-list",
              label: "Fetch Existing Delegates List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/edit-delegate",
              label: "Edit Delegate",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/delete-delegate",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/fetch-attestation-list",
              label: "Fetch Attestation List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-attestation-details",
              label: "Fetch Attestation Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/certify-usermanager-requests",
              label: "Certify UserManager Requests",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-attestation-account-entitlement-details",
              label: "Fetch Attestation Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/approve-reject-attestation-account-details",
              label: "Approve Reject Attestation Account Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/lock-attestation",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/fetch-campaign-list",
              label: "Fetch Campaign List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-campaign-details",
              label: "Fetch Campaign Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/lock-campaign",
              label: "Lock Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-certification-list",
              label: "Fetch Certification List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/discontinue-campaigns-and-certifications",
              label: "Discontinue Campaigns and Certifications",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/reassign-certification",
              label: "Reassign Certification",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Manager",
          items: [
            {
              type: "doc",
              id: "eic/fetch-campaign-details",
              label: "Fetch Campaign Details",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Manager Campaigns",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/certify-user-manager-for-campaign",
              label: "Certify User Manager for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-account-entitlement-details",
              label: "Fetch Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/approve-reject-campaign-account-entitlement-details",
              label: "Approve Reject Campaign Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/reassign-usermanager-step-1-for-campaign",
              label: "Reassign UserManager Step 1 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/consult-usermanager-step-1-for-campaign",
              label: "Consult UserManager Step 1 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/consult-campaign-account-entitlement-details",
              label: "Consult Campaign Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/reassign-certification-at-account-and-entitlement-level-copy",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/consult-entitlementowner-step-1-for-campaign",
              label: "Consult EntitlementOwner Step 1 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/consult-entitlementowner-step-2-for-campaign",
              label: "Consult EntitlementOwner Step 2 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-account-entitlement-details-1",
              label: "Fetch Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-entitlement-owner-campaign-details",
              label: "Fetch Entitlement Owner Campaign Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-flat-response-entitlement-owner-campaign-details",
              label: "Fetch Flat Response Entitlement Owner Campaign Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/lock-campaign-1",
              label: "Lock Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/approve-reject-account-entitlement-details",
              label: "Approve Reject Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/certify-entitlement-owner-for-campaign",
              label: "Certify Entitlement Owner for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/reassign-entitlement-owner-for-campaign",
              label: "Reassign Entitlement Owner for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/reassign-certification-at-account-level",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/fetch-account-entitlement-details-2",
              label: "Fetch Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/lock-campaign-2",
              label: "Lock Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/consult-appowner-account-entitlement-details",
              label: "Consult AppOwner Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/reassign-application-owner-for-campaign",
              label: "Reassign Application Owner for Campaign",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Application OwnerCampaigns",
          items: [
            {
              type: "doc",
              id: "eic/approve-reject-account-entitlement-details-1",
              label: "Approve Reject Account Entitlement Details",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Segregation of Duties",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/sod-evaluation-for-sap-functions",
              label: "SoD Evaluation for SAP Functions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/sod-evaluation-for-non-sap-functions",
              label: "SoD Evaluation for Non - SAP Functions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/add-mitigating-control-risk-account",
              label: "Add Mitigating Control Risk Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/upload-sod-ruleset",
              label: "Upload SOD Ruleset",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Password Management",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/fetch-security-questions",
              label: "Fetch Security Questions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-user-security-questions",
              label: "Fetch User Security Questions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/validate-user-security-answers",
              label: "Validate User Security Answers",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/create-security-questions",
              label: "Create Security Questions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/create-password-policy",
              label: "Create Password Policy",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/change-user-password",
              label: "Change User Password",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Job Management",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-and-update-trigger",
              label: "Create and Update Trigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/check-job-status",
              label: "Check Job Status",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/delete-trigger",
              label: "Delete Trigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/run-job-trigger",
              label: "Run Job Trigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-job-metadata",
              label: "Fetch Job Metadata",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/createtrigger",
              label: "createTrigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/resumepausejobs",
              label: "resumePauseJobs",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Common Utilities",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/upload-new-file",
              label: "Upload New File",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/import-application-data",
              label: "Import Application Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/check-import-status",
              label: "Check Import Status",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/force-complete",
              label: "Force Complete",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/send-email",
              label: "Send Email",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Connection",
          items: [
            {
              type: "doc",
              id: "eic/test-connection",
              label: "Test Connection",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Transport",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/export-package",
              label: "Export Package",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/import-package",
              label: "Import Package",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/transport-status",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/fetch-technical-rules",
              label: "Fetch Technical Rules",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/update-technical-rules",
              label: "Update Technical Rules",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/create-technical-rules",
              label: "Create Technical Rules",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/delete-technical-rules",
              label: "Delete Technical Rules",
              className: "api-method delete",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Admin Collection",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "category",
          label: "User Delegation",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-delegate-user-list",
              label: "Get Delegate User List",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/create-delegate",
              label: "Create Delegate",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-existing-delegates-list",
              label: "Fetch Existing Delegates List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/edit-delegate",
              label: "Edit Delegate",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/delete-delegate",
              label: "Delete Delegate",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Common Utilities",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/upload-new-file",
              label: "Upload New File",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/import-application-data",
              label: "Import Application Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/check-import-status",
              label: "Check Import Status",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/force-complete",
              label: "Force Complete",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/send-email",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-and-update-trigger",
              label: "Create and Update Trigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/check-job-status",
              label: "Check Job Status",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/delete-trigger",
              label: "Delete Trigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/run-job-trigger",
              label: "Run Job Trigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-job-metadata",
              label: "Fetch Job Metadata",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/createtrigger",
              label: "createTrigger",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/resumepausejobs",
              label: "resumePauseJobs",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Transport",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/export-package",
              label: "Export Package",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/import-package",
              label: "Import Package",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/transport-status",
              label: "Transport Status",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Dataset",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/createdataset",
              label: "createDataset",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/getdatasetvalues",
              label: "getDatasetValues",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/updatedatasetvalues",
              label: "updateDatasetValues",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/deletedataset",
              label: "deleteDataset",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/uploaddatasetcsv",
              label: "uploadDatasetCSV",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/updatedataset",
              label: "updateDataset",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Authentication",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-authorization-token",
              label: "Get Authorization Token",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/refresh-authorization-token",
              label: "Refresh Authorization Token",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Users",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-user",
              label: "Create User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-user",
              label: "Update User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/bulk-upload-users",
              label: "Bulk Upload Users",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-user-details",
              label: "Get User Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-list-of-users",
              label: "Get List of Users",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/add-remove-user-from-sav-role",
              label: "Add/Remove User from SAV ROLE",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-access-details-for-user",
              label: "Get Access Details For User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-flat-response-entitlement-details-for-user",
              label: "Get Flat Response Entitlement Details For User",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/get-flat-response-role-details-for-user",
              label: "Get Flat Response Role Details For User",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/authenticate-user",
              label: "Authenticate User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/validate-user-data",
              label: "Validate User Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-savroles",
              label: "Get SavRoles",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Accounts",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-account-details",
              label: "Get Account Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/export-account",
              label: "Export Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/create-account",
              label: "Create Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-account",
              label: "Update Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/assign-account-to-user",
              label: "Assign Account to User",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/assign-entitlement-to-account",
              label: "Assign Entitlement to Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/remove-entitlement-from-account",
              label: "Remove Entitlement from Account",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Privileges",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-privilege",
              label: "Create Privilege",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/update-privilege",
              label: "Update Privilege",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/delete-privilege",
              label: "Delete Privilege",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/get-list-of-privileges-for-entitlement-type",
              label: "Get List of Privileges for Entitlement Type",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Entitlements",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-entitlements",
              label: "Get Entitlements",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-child-entitlements",
              label: "Get Child Entitlements",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/create-update-entitlement",
              label: "Create/Update Entitlement",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-entitlement-values-for-endpoint",
              label: "Get Entitlement Values For Endpoint",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Roles",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/remove-entitlement-from-role",
              label: "Remove Entitlement From Role",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/add-role",
              label: "Add Role",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-role-details-for-user",
              label: "Get Role Details for user",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-firefighter-role-details",
              label: "Get FireFighter Role Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/remove-role",
              label: "Remove Role",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Endpoints",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-endpoint",
              label: "Create Endpoint",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-endpoint",
              label: "Update Endpoint",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/get-list-of-endpoints",
              label: "Get List of Endpoints",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Entitlement Types",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-entitlement-type",
              label: "Create Entitlement Type",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-entitlement-type",
              label: "Update Entitlement Type",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/get-list-of-entitlement-types",
              label: "Get List of Entitlement Types",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/delete-entitlement-types",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-dynamic-attribute",
              label: "Create Dynamic Attribute",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-dynamic-attribute",
              label: "Update Dynamic Attribute",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/fetch-dynamic-attributes",
              label: "Fetch Dynamic Attributes",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/delete-dynamic-attribute",
              label: "Delete Dynamic Attribute",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Security Systems",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-security-system",
              label: "Create Security System",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-security-system",
              label: "Update Security System",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/get-list-of-security-systems",
              label: "Get List of Security Systems",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/delete-security-system",
              label: "Delete Security System",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "User Groups",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-update-usergroup",
              label: "Create/Update UserGroup",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/add-remove-user-from-usergroup",
              label: "Add/Remove User From UserGroup",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/delete-usergroup",
              label: "Delete UserGroup",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-list-of-usergroups",
              label: "Get List of UserGroups",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Organization",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-organization",
              label: "Create Organization",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-organization",
              label: "Update Organization",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/get-organization",
              label: "Get Organization",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/delete-organization",
              label: "Delete Organization",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Connections",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-list-of-connections",
              label: "Get List of Connections",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-connections-details",
              label: "Get Connections Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/delete-connections",
              label: "Delete Connections",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Analytics",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/fetch-list-of-analytics",
              label: "Fetch List of Analytics",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-analytics-details",
              label: "Fetch Analytics Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/run-analytics-controls",
              label: "Run Analytics Controls",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-runtime-controls-data",
              label: "Fetch Runtime Controls Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-runtime-controls-data-v-2",
              label: "Fetch Runtime Controls Data V2",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-list-of-analytics-es",
              label: "Fetch List of Analytics ES",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/fetch-control-attributes",
              label: "Fetch Control Attributes",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-control-details-es",
              label: "Fetch Control Details ES",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Request",
          items: [
            {
              type: "doc",
              id: "eic/create-user-request",
              label: "Create User Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-user-request",
              label: "Update User Request",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/get-requestable-users",
              label: "Get Requestable Users",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Role Request",
          items: [
            {
              type: "doc",
              id: "eic/create-role-request",
              label: "Create Role Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-role-request",
              label: "Update Role Request",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Access Request",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-user-requestable-entitlements",
              label: "Get User Requestable Entitlements",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/validate-entitlement-request-data",
              label: "Validate Entitlement Request Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/request-to-create-entitlement-based-role",
              label: "Request to Create Entitlement Based Role",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/create-auto-approved-request",
              label: "Create Auto-approved Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/create-birthright-request",
              label: "Create Birthright Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/add-approver-to-existing-request",
              label: "Add Approver to existing Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/cancel-pending-request",
              label: "Cancel Pending Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-list-of-pending-requests-for-approver",
              label: "Get List of Pending Requests for Approver",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-request-approval-details",
              label: "Fetch Request Approval Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-request-access-attributes",
              label: "Fetch Request Access Attributes",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Organization Request",
          items: [
            {
              type: "doc",
              id: "eic/create-organization-request",
              label: "Create Organization Request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-organization-request",
              label: "Update Organization Request",
              className: "api-method put",
            },
          ],
        },
        {
          type: "category",
          label: "Request History",
          items: [
            {
              type: "doc",
              id: "eic/fetch-request-history-my-pending-requests",
              label: "Fetch Request History (my pending requests)",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-request-history-details",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/approve-reject-each-line-item-in-a-request",
              label: "Approve/Reject each line item in a request",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/get-pending-approvals",
              label: "Get Pending Approvals",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/approve-reject-entire-request",
              label: "Approve/Reject entire request",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Tasks",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/create-task-remove-entitlement",
              label: "Create Task - Remove Entitlement",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/complete-single-task",
              label: "Complete Single Task",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/update-tasks",
              label: "Update Tasks",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/discontinue-tasks",
              label: "Discontinue Tasks",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/discontinue-all-pending-tasks",
              label: "Discontinue All Pending Tasks",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-task-details",
              label: "Fetch Task Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/check-task-status",
              label: "Check Task Status",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Attestations",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/fetch-attestation-list",
              label: "Fetch Attestation List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-attestation-details",
              label: "Fetch Attestation Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/certify-usermanager-requests",
              label: "Certify UserManager Requests",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-attestation-account-entitlement-details",
              label: "Fetch Attestation Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/approve-reject-attestation-account-details",
              label: "Approve Reject Attestation Account Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/lock-attestation",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/fetch-campaign-list",
              label: "Fetch Campaign List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-campaign-details",
              label: "Fetch Campaign Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/lock-campaign",
              label: "Lock Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-certification-list",
              label: "Fetch Certification List",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/discontinue-campaigns-and-certifications",
              label: "Discontinue Campaigns and Certifications",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/reassign-certification",
              label: "Reassign Certification",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Manager",
          items: [
            {
              type: "doc",
              id: "eic/fetch-campaign-details",
              label: "Fetch Campaign Details",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "User Manager Campaigns",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/certify-user-manager-for-campaign",
              label: "Certify User Manager for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-account-entitlement-details",
              label: "Fetch Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/approve-reject-campaign-account-entitlement-details",
              label: "Approve Reject Campaign Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/reassign-usermanager-step-1-for-campaign",
              label: "Reassign UserManager Step 1 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/consult-usermanager-step-1-for-campaign",
              label: "Consult UserManager Step 1 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/consult-campaign-account-entitlement-details",
              label: "Consult Campaign Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/reassign-certification-at-account-and-entitlement-level-copy",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/consult-entitlementowner-step-1-for-campaign",
              label: "Consult EntitlementOwner Step 1 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/consult-entitlementowner-step-2-for-campaign",
              label: "Consult EntitlementOwner Step 2 for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-account-entitlement-details-1",
              label: "Fetch Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-entitlement-owner-campaign-details",
              label: "Fetch Entitlement Owner Campaign Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-flat-response-entitlement-owner-campaign-details",
              label: "Fetch Flat Response Entitlement Owner Campaign Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/lock-campaign-1",
              label: "Lock Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/approve-reject-account-entitlement-details",
              label: "Approve Reject Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/certify-entitlement-owner-for-campaign",
              label: "Certify Entitlement Owner for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/reassign-entitlement-owner-for-campaign",
              label: "Reassign Entitlement Owner for Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/reassign-certification-at-account-level",
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
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/fetch-account-entitlement-details-2",
              label: "Fetch Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/lock-campaign-2",
              label: "Lock Campaign",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/consult-appowner-account-entitlement-details",
              label: "Consult AppOwner Account Entitlement Details",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/reassign-application-owner-for-campaign",
              label: "Reassign Application Owner for Campaign",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Application OwnerCampaigns",
          items: [
            {
              type: "doc",
              id: "eic/approve-reject-account-entitlement-details-1",
              label: "Approve Reject Account Entitlement Details",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Segregation of Duties",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/sod-evaluation-for-sap-functions",
              label: "SoD Evaluation for SAP Functions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/sod-evaluation-for-non-sap-functions",
              label: "SoD Evaluation for Non - SAP Functions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/add-mitigating-control-risk-account",
              label: "Add Mitigating Control Risk Account",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/upload-sod-ruleset",
              label: "Upload SOD Ruleset",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Password Management",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/fetch-security-questions",
              label: "Fetch Security Questions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/fetch-user-security-questions",
              label: "Fetch User Security Questions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/validate-user-security-answers",
              label: "Validate User Security Answers",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/create-security-questions",
              label: "Create Security Questions",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/create-password-policy",
              label: "Create Password Policy",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/change-user-password",
              label: "Change User Password",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Connection",
          items: [
            {
              type: "doc",
              id: "eic/test-connection",
              label: "Test Connection",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Dashboard",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/retrieve-dashboard-tiles-data",
              label: "Retrieve Dashboard Tiles Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/retrieve-dashboard-account-data",
              label: "Retrieve Dashboard Account Data",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/retrieve-dashboard-data",
              label: "Retrieve Dashboard Data",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Access Recommendations",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/get-access-recommendations",
              label: "Get Access Recommendations",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Provisioning Policies",
          link: {
            type: "doc",
            id: "eic/saviynt-enterprise-identity-cloud-api-reference",
          },
          items: [
            {
              type: "doc",
              id: "eic/fetch-technical-rules",
              label: "Fetch Technical Rules",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "eic/update-technical-rules",
              label: "Update Technical Rules",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "eic/create-technical-rules",
              label: "Create Technical Rules",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "eic/delete-technical-rules",
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