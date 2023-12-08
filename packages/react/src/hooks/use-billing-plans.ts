import {SupabaseClient} from "@supabase/supabase-js";
import {GET_BILLING_PLANS_RESPONSE} from "@usebasejump/shared";
import useSWR, {SWRConfiguration} from "swr";

export const useBillingPlans = (supabaseClient: SupabaseClient, accountId?: string, options?: SWRConfiguration) => {
    return useSWR<GET_BILLING_PLANS_RESPONSE>(
        !!supabaseClient && ["billing-plans", accountId],
        async () => {
            if (!supabaseClient) {
                throw new Error("Client not yet loaded");
            }

            const {data, error} = await supabaseClient.functions.invoke(
                "billing-functions",
                {
                    body: {
                        action: "get_plans",
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
        options
    );
};
