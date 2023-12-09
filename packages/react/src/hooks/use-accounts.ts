import {SupabaseClient} from "@supabase/supabase-js";
import {GetAccountsResponse} from "@usebasejump/shared";
import useSWR, {SWRConfiguration} from "swr";

export const useAccounts = (supabaseClient: SupabaseClient, options?: SWRConfiguration) => {
    return useSWR<GetAccountsResponse>(
        !!supabaseClient && ["accounts"],
        async () => {
            const {data, error} = await supabaseClient.rpc("get_accounts");

            if (error) {
                throw new Error(error.message);
            }

            return data;
        },
        options
    );
};
