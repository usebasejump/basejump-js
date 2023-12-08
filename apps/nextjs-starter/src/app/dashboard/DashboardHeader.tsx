import AccountSelector from "@/components/basejump/AccountSelector";
import Logo from "@/components/Logo";
import ProfileButton from "@/components/basejump/ProfileButton.tsx";
import Link from "next/link";


interface Props {
    accountId: string;
    navigation?: {
        name: string;
        href: string;
    }[]
}
export default async function DashboardHeader({accountId, navigation = []}: Props) {
    return (
        <nav className="w-full p-4 flex justify-between items-center border-b">
            <div className="flex justify-start items-center gap-x-4 lg:gap-x-6">
                <div className="flex items-center gap-x-4">
                    <Logo />
                    <span className="border-l rotate-12 h-6" />
                    <AccountSelector accountId={accountId} />
                </div>
            {navigation.map((navItem) => (
                    <Link key={navItem.name} href={navItem.href} className="text-sm font-medium transition-colors hover:text-primary">
                        {navItem.name}
                    </Link>
            ))}
            </div>

            <div className="flex items-center gap-x-4">
                <ProfileButton />
            </div>
        </nav>
    )

}