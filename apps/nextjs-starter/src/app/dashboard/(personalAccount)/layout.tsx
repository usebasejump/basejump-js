import {createClient} from "@/utils/supabase/server.ts";
import DashboardHeader from "@/app/dashboard/DashboardHeader.tsx";
import {cookies} from "next/headers";

export default async function PersonalAccountDashboard({children}) {

    const cookieStore = cookies()
    const supabaseClient = createClient(cookieStore);

    const {data: personalAccount, error} = await supabaseClient.rpc('get_personal_account');

    const navigation = [
        {
            name: 'Overview',
            href: '/dashboard',
        },
        {
            name: 'Settings',
            href: '/dashboard/settings'
        }
    ]

    return (
        <>
            <DashboardHeader accountId={personalAccount.account_id} navigation={navigation} />
            <div className="w-full p-8">{children}</div>
        </>
    )

}