import {cookies} from "next/headers";
import {createClient} from "@/utils/supabase/server.ts";

export default async function PersonalAccountSettingsPage() {
    const cookieStore = cookies();
    const supabaseClient = createClient(cookieStore);
    const {data: personalAccount} = await supabaseClient.rpc('get_personal_account');

    return (
        <div>
            Personal Account
        </div>
    )
}