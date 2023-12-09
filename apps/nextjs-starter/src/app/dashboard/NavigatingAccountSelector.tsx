'use client'

import {useRouter} from "next/navigation";
import AccountSelector from "@/components/basejump/AccountSelector.tsx";

interface Props {
    accountId: string;
}
export default function NavigatingAccountSelector({accountId}: Props) {
    const router = useRouter();

    return (
        <AccountSelector
            accountId={accountId}
            afterTeamCreated={(account) => router.push(`/dashboard/${account.slug}`)}
            onAccountSelected={(account) => router.push(account.personal_account ? `/dashboard` : `/dashboard/${account.slug}`)}
        />
    )
}