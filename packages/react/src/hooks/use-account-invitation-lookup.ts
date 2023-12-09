import {SupabaseClient} from "@supabase/supabase-js";
import {LookupInvitationResponse} from "@usebasejump/shared";
import useSWR, {SWRConfiguration} from "swr";

export const useAccountInvitationLookup = (supabaseClient: SupabaseClient, token: string, options?: SWRConfiguration) => {
    return useSWR<LookupInvitationResponse>(
        !!supabaseClient && !!token && ["account-invitation-lookup", token],
        async () => {
            const {data, error} = await supabaseClient.rpc("lookup_invitation", {
                lookup_invitation_token: token,
            });

            if (error) {
                throw new Error(error.message);
            }

            return data;
        },
        options);
};
