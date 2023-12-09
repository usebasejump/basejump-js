"use client";

import {createClient} from "../utils/create-client";
import {usePersonalAccount as usePersonalAccountReact} from "@usebasejump/react";
import {SWRConfiguration} from "swr";

export const usePersonalAccount = (options?: SWRConfiguration) => {
    const supabaseClient = createClient();
    return usePersonalAccountReact(supabaseClient, options);
}