import {SupabaseClient} from "@supabase/supabase-js";
import {GetAccountMembersResponse} from "@usebasejump/shared";
import useSWR, {SWRConfiguration} from "swr";

export const useAccountMembers = (supabaseClient: SupabaseClient, accountId: string, options?: SWRConfiguration) => {
    return useSWR<GetAccountMembersResponse>(
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
