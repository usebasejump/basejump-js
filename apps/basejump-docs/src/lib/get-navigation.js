const docsNavigation = [
    {
        title: 'Guides',
        links: [
            {title: 'Getting started', href: '/docs'},
            {title: 'Installation', href: '/docs/installation'},
            {
                title: 'Understanding accounts & roles',
                href: '/docs/understanding-accounts',
            },
            {title: 'Using RLS & permissions', href: '/docs/rls'},
            {title: 'Adding protected tables', href: '/docs/example-schema'},

            {title: 'Testing & pgTAP', href: '/docs/testing'},
            {title: 'Deploying', href: '/docs/deployment'},
        ],
    },
    {
        title: 'UI Components',
        links: [{title: 'React / Next.js', href: '/docs/react'}],
    },
    {
        title: 'API Reference',
        links: [
            {title: 'Accounts', href: '/docs/accounts'},
            {title: 'Invitations', href: '/docs/invitations'},
            {title: 'Team Members', href: '/docs/team-members'},
            {title: 'Permissions', href: '/docs/permissions'},
            {title: 'Billing', href: '/docs/billing'},
            {title: 'Database Functions', href: '/docs/database-utilities'},
        ],
    },
    {
        title: 'Billing Providers',
        links: [
            {title: 'Stripe', href: '/docs/billing-stripe'},
            {title: 'Add new provider', href: '/docs/billing-new'},
        ]
    },
];

const reactNavigation = [
    {
        title: 'Getting Started',
        links: [
            {title: 'Installation', href: '/docs/react'},
        ],
    },
    {
        title: 'Utilities / Hooks',
        links: [
            {title: 'SignedIn / SignedOut', href: '/docs/react/user-session'},
            {title: 'Data loading hooks', href: '/docs/react/hooks'},
        ],
    },
    {
        title: "UI Components",
        links: [
            {title: 'UserAccountButton', href: '/docs/react/user-account-button'},
            {title: 'AccountSelector', href: '/docs/react/account-selector'},
            {title: 'NewTeamForm', href: '/docs/react/new-team-form'},
            {title: 'AcceptInvitationForm', href: '/docs/react/accept-invitation-form'},
            {title: 'InviteMemberForm', href: '/docs/react/invite-member-form'},
        ]
    }
];

export default function getNavigation(urlPath = '/docs') {
    if (urlPath.startsWith('/docs/react')) {
        return reactNavigation;
    }

    return docsNavigation;
}