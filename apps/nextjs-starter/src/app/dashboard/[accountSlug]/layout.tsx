import {createClient} from "@/utils/supabase/server.ts";
import DashboardHeader from "@/app/dashboard/DashboardHeader.tsx";
import {cookies} from "next/headers";

export default async function PersonalAccountDashboard({children, params: {accountSlug}}) {
    const cookieStore = cookies()
    const supabaseClient = createClient(cookieStore);

    const {data: teamAccount, error} = await supabaseClient.rpc('get_account_by_slug', {
        slug: accountSlug
    });

    const navigation = [
        {
            name: 'Overview',
            href: `/dashboard/${accountSlug}`,
        },
        {
            name: 'Settings',
            href: `/dashboard/${accountSlug}/settings`
        }
    ]

    return (
        <>
            <DashboardHeader accountId={teamAccount.account_id} navigation={navigation}/>
            <div className="w-full p-8">{children}</div>
        </>
    )

}