import {SupabaseClient} from "@supabase/supabase-js";
import {GetAccountResponse} from "@usebasejump/shared";
import useSWR, {SWRConfiguration} from "swr";

export const useAccountBySlug = (supabaseClient: SupabaseClient, accountSlug: string, options?: SWRConfiguration) => {
    return useSWR<GetAccountResponse>(
        !!supabaseClient && !!accountSlug && ["account", accountSlug],
        async () => {
            const {data, error} = await supabaseClient.rpc("get_account_by_slug", {
                slug: accountSlug,
            });

            if (error) {
                throw new Error(error.message);
            }

            return data;
        }, options);
};
