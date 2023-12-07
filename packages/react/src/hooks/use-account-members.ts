import {SupabaseClient} from "@supabase/supabase-js";
import {GET_ACCOUNT_MEMBERS_RESPONSE} from "@usebasejump/shared";
import useSWR, {SWRConfiguration} from "swr";

export const useAccountMembers = (supabaseClient: SupabaseClient, accountId: string, options?: SWRConfiguration) => {
    return useSWR<GET_ACCOUNT_MEMBERS_RESPONSE>(
        !!supabaseClient && !!accountId && ["account-members", accountId],
        async () => {
            const {data, error} = await supabaseClient.rpc("get_account_members", {
                account_id: accountId,
            });

            if (error) {
                throw new Error(error.message);
            }

            return data;
        },
        options
    );
};
