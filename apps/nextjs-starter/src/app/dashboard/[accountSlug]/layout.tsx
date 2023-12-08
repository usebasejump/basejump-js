import {createClient} from "@/utils/supabase/server.ts";
import DashboardHeader from "@/app/dashboard/DashboardHeader.tsx";
import {cookies} from "next/headers";

export default async function PersonalAccountDashboard({children, params: {accountSlug}}) {
    const cookieStore = cookies()
    const supabaseClient = createClient(cookieStore);

    const {data: teamAccount, error} = await supabaseClient.rpc('get_account_by_slug', {
        slug: accountSlug
    });

    return (
        <>
            <DashboardHeader accountId={teamAccount.account_id} />

            {children}
        </>
    )

}