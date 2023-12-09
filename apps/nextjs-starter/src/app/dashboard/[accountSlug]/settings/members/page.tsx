import {cookies} from "next/headers";
import {createClient} from "@/utils/supabase/server.ts";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {Card} from "@/components/ui/card.tsx";

export default async function TeamMembersPage({params: {accountSlug}}) {
    const cookieStore = cookies();
    const supabaseClient = createClient(cookieStore);
    const {data: teams} = await supabaseClient.rpc('get_accounts');

    return (
        <div>
            <Card>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Team</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {teams.map((team) => (
                            <TableRow key={team.id}>
                                <TableCell>{team.name}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
        </div>
    )
}