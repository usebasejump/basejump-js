import { SupabaseClient } from "@supabase/supabase-js";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { GET_ACCOUNTS_RESPONSE } from "@usebasejump/shared";

type Props = {
  supabaseClient?: SupabaseClient<any> | null;
  options?: UseQueryOptions;
};

export const useAccounts = ({ supabaseClient, options }: Props) => {
  return useQuery<GET_ACCOUNTS_RESPONSE>({
    queryKey: ["accounts"],
    queryFn: async () => {
      const { data, error } = await supabaseClient.rpc("get_accounts");

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
    enabled: !!supabaseClient,
    ...options,
  });
};
