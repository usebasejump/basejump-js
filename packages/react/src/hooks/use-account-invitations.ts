import {SupabaseClient} from "@supabase/supabase-js";
import {GET_ACCOUNT_INVITES_RESPONSE} from "@usebasejump/shared";
import useSWR, {SWRConfiguration} from "swr";

export const useAccountInvitations = (supabaseClient: SupabaseClient, accountId: string, options?: SWRConfiguration) => {
    return useSWR<GET_ACCOUNT_INVITES_RESPONSE>(
        !!supabaseClient && !!accountId && ["account-invitations", accountId],
        async () => {
            const {data, error} = await supabaseClient.rpc(
                "get_account_invitations",
                {
                    account_id: accountId,
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
