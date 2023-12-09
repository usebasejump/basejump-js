import {Database} from "./basejump-types";

export type CurrentUserAccountRoleResponse = {
    account_role: Database["basejump"]["Tables"]["account_user"]["Row"]["account_role"];
    is_primary_owner: boolean;
    is_personal_account: boolean;
};

export type GetBillingPlansResponse = Array<{
    id: string;
    name: string;
    description?: string;
    amount: number;
    currency: string;
    interval: "month" | "year" | "one_time";
    interval_count: 1;
    trial_period_days?: 30;
    active?: boolean;
    metadata?: {
        [key: string]: string;
    };
}>;

export type GetAccountResponse = {
    account_id: string;
    role: Database["basejump"]["Tables"]["account_user"]["Row"]["account_role"];
    is_primary_owner: boolean;
    name: string;
    slug: string;
    personal_account: boolean;
    created_at: Date;
    updated_at: Date;
    metadata: {
        [key: string]: any;
    };
};

export type CreateAccountResponse = GetAccountResponse;
export type UpdateAccountResponse = GetAccountResponse;

export type GetAccountsResponse = {
    account_id: string;
    role: Database["basejump"]["Tables"]["account_user"]["Row"]["account_role"];
    is_primary_owner: boolean;
    name: string;
    slug: string;
    personal_account: boolean;
    created_at: Date;
    updated_at: Date;
}[];

export type GetAccountMembersResponse = {
    user_id: string;
    name: string;
    account_role: Database["basejump"]["Tables"]["account_user"]["Row"]["account_role"];
    is_primary_owner: boolean;
}[];

export type GetAccountInvitesResponse = {
    account_role: Database["basejump"]["Tables"]["account_user"]["Row"]["account_role"];
    invitation_type: Database["basejump"]["Tables"]["invitations"]["Row"]["invitation_type"];
    created_at: Date;
}[];

export type CreateInvitationResponse = {
    token: string;
};

export type GetAccountBillingStatusResponse = {
    subscription_id: string;
    subscription_active: boolean;
    status: Database["basejump"]["Tables"]["billing_subscriptions"]["Row"]["status"];
    billing_email?: string;
    account_role: Database["basejump"]["Tables"]["account_user"]["Row"]["account_role"];
    is_primary_owner: boolean;
    billing_enabled: boolean;
};

export type AcceptInvitationResponse = {
    account_id: string;
    account_role: Database["basejump"]["Tables"]["account_user"]["Row"]["account_role"];
    slug: string;
};

export type LookupInvitationResponse = {
    active: boolean;
    account_name: string;
};
