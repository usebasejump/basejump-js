import {SupabaseClient} from "@supabase/supabase-js";
import {GET_ACCOUNTS_RESPONSE} from "@usebasejump/shared";
import useSWR, {SWRConfiguration} from "swr";

export const useAccounts = (supabaseClient: SupabaseClient, options?: SWRConfiguration) => {
    return useSWR<GET_ACCOUNTS_RESPONSE>(
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
