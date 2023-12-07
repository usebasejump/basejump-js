import {SupabaseClient} from "@supabase/supabase-js";
import {GET_ACCOUNT_BILLING_STATUS_RESPONSE} from "@usebasejump/shared";
import useSWR, {SWRConfiguration} from "swr";

export const useAccountBillingStatus = (supabaseClient: SupabaseClient, accountId: string, options?: SWRConfiguration) => {
    return useSWR<GET_ACCOUNT_BILLING_STATUS_RESPONSE>(
        !!supabaseClient && !!accountId && ['account-billing-status', accountId],
        async () => {
            const {data, error} = await supabaseClient.functions.invoke(
                "billing-functions",
                {
                    body: {
                        action: "get_billing_status",
                        args: {
                            account_id: accountId,
                        },
                    },
                }
            );

            if (error) {
                throw new Error(error.message);
            }

            return data;
        },
        options);
};
