"use client"

import * as React from "react"
import {useMemo, useState} from "react"
import {CheckIcon, ChevronsUpDownIcon, PlusCircleIcon,} from "lucide-react";

import {cn} from "@/lib/utils.ts"
import {Button} from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Popover, PopoverContent, PopoverTrigger,} from "@/components/ui/popover"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"
import {useAccounts} from "@usebasejump/next";

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>;

type SelectedAccount = ReturnType<typeof useAccounts>["data"][0] | null;

interface AccountSelectorProps extends PopoverTriggerProps {
    accountId: string;
}

export default function AccountSelector({ className, accountId, placeholder = "Select an account..." }: AccountSelectorProps) {
    const [open, setOpen] = useState(false)
    const [showNewTeamDialog, setShowNewTeamDialog] = useState(false)
    const [selectedAccount, setSelectedAccount] = useState<SelectedAccount | null>(null)

    const {data: accounts} = useAccounts({
        onSuccess(accounts) {
            if (accountId && accounts.length > 0) {
                setSelectedAccount(accounts.find((account) => account.account_id === accountId));
            }
        }
    });

    const {teamAccounts, personalAccount} = useMemo(() => {
        const personalAccount = accounts?.find((account) => account.personal_account);
        const teamAccounts = accounts?.filter((account) => !account.personal_account);

        return {
            personalAccount,
            teamAccounts
        }
    }, [accounts]);

    return (
        <Dialog open={showNewTeamDialog} onOpenChange={setShowNewTeamDialog}>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        aria-label="Select a team"
                        className={cn("w-[250px] justify-between", className)}
                    >
                        {selectedAccount?.name || placeholder}
                        <ChevronsUpDownIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[250px] p-0">
                    <Command>
                        <CommandList>
                            <CommandInput placeholder="Search account..." />
                            <CommandEmpty>No account found.</CommandEmpty>
                            <CommandGroup heading="Personal Account">
                                <CommandItem
                                    key={personalAccount?.account_id}
                                    onSelect={() => {
                                        setSelectedAccount(personalAccount)
                                        setOpen(false)
                                    }}
                                    className="text-sm"
                                >
                                    {personalAccount?.name}
                                    <CheckIcon
                                        className={cn(
                                            "ml-auto h-4 w-4",
                                            selectedAccount?.account_id === personalAccount?.account_id
                                                ? "opacity-100"
                                                : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            </CommandGroup>
                            {teamAccounts?.length > 0 && (
                            <CommandGroup heading="Teams">
                                {teamAccounts.map((team) => (
                                    <CommandItem
                                        key={team.account_id}
                                        onSelect={() => {
                                            setSelectedAccount(team)
                                            setOpen(false)
                                        }}
                                        className="text-sm"
                                    >
                                        {team.name}
                                        <CheckIcon
                                            className={cn(
                                                "ml-auto h-4 w-4",
                                                selectedAccount?.account_id === team.account_id
                                                    ? "opacity-100"
                                                    : "opacity-0"
                                            )}
                                        />
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                            )}
                        </CommandList>
                        <CommandSeparator />
                        <CommandList>
                            <CommandGroup>
                                <DialogTrigger asChild>
                                    <CommandItem
                                        onSelect={() => {
                                            setOpen(false)
                                            setShowNewTeamDialog(true)
                                        }}
                                    >
                                        <PlusCircleIcon className="mr-2 h-5 w-5" />
                                        Create Team
                                    </CommandItem>
                                </DialogTrigger>
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create team</DialogTitle>
                    <DialogDescription>
                        Add a new team to manage products and customers.
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <div className="space-y-4 py-2 pb-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Team name</Label>
                            <Input id="name" placeholder="Acme Inc." />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="plan">Subscription plan</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a plan" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="free">
                                        <span className="font-medium">Free</span> -{" "}
                                        <span className="text-muted-foreground">
                      Trial for two weeks
                    </span>
                                    </SelectItem>
                                    <SelectItem value="pro">
                                        <span className="font-medium">Pro</span> -{" "}
                                        <span className="text-muted-foreground">
                      $9/month per user
                    </span>
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={() => setShowNewTeamDialog(false)}>
                        Cancel
                    </Button>
                    <Button type="submit">Continue</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
