import {SupabaseClient} from "@supabase/supabase-js";
import {GetAccountResponse} from "@usebasejump/shared";
import useSWR, {SWRConfiguration} from "swr";

export const useAccount = (supabaseClient: SupabaseClient, accountId: string, options?: SWRConfiguration) => {
    return useSWR<GetAccountResponse>(
        !!supabaseClient && !!accountId && ["account", accountId],
        async () => {
            const {data, error} = await supabaseClient.rpc("get_account", {
                account_id: accountId,
            });

            if (error) {
                throw new Error(error.message);
            }

            return data;
        }, options);
};
