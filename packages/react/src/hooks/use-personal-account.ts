import {SupabaseClient} from "@supabase/supabase-js";
import {GET_ACCOUNT_RESPONSE} from "@usebasejump/shared";
import useSWR, {SWRConfiguration} from "swr";

export const usePersonalAccount = (supabaseClient: SupabaseClient, options?: SWRConfiguration) => {
    return useSWR<GET_ACCOUNT_RESPONSE>(
        ["personal-account"],
        async () => {
            const {data, error} = await supabaseClient.rpc("get_personal_account");

            if (error) {
                throw new Error(error.message);
            }
            return data;
        },
        options,
    );
};
