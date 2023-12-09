import {SupabaseClient} from "@supabase/supabase-js";
import {GetAccountBillingStatusResponse} from "@usebasejump/shared";
import useSWR, {SWRConfiguration} from "swr";

export const useAccountBillingStatus = (supabaseClient: SupabaseClient, accountId: string, options?: SWRConfiguration) => {
    return useSWR<GetAccountBillingStatusResponse>(
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
