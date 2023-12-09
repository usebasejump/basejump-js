import {cookies} from "next/headers";
import {createClient} from "@/utils/supabase/server.ts";

export default async function TeamSettingsPage({params: {accountSlug}}) {
    const cookieStore = cookies();
    const supabaseClient = createClient(cookieStore);
    const {data: teamAccount} = await supabaseClient.rpc('get_account_by_slug', {
        slug: accountSlug
    });

    return (
        <div>
           Team Settings
        </div>
    )
}