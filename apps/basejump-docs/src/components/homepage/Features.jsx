export default function HomepageFeatures() {
  return (
    <div className="mx-auto mt-16 flow-root max-w-5xl px-12 sm:mt-24 lg:px-0">
      <div className="grid gap-8 md:grid-cols-3 lg:gap-14">
        <div className="prose dark:prose-invert">
          <h2 className="border-b pb-2 dark:border-gray-800">Accounts & teams</h2>
          <p>
            Authentication, personal accounts, team accounts and member
            permissions
          </p>
        </div>
        <div className="prose dark:prose-invert">
          <h2 className="border-b pb-2 dark:border-gray-800">Subscription billing</h2>
          <p>
            Manage account subscriptions out of the box using Stripe. Add new
            providers easily
          </p>
        </div>
        <div className="prose dark:prose-invert">
          <h2 className="border-b pb-2 dark:border-gray-800">Optional React components</h2>
          <p>
            Launch even faster using customizable React UI components for
            account functionality
          </p>
        </div>
        <div className="prose dark:prose-invert">
          <h2 className="border-b pb-2 dark:border-gray-800">Powered by Supabase</h2>
          <p>
            Use as a standalone auth/billing system or as part of your existing
            Supabase app
          </p>
        </div>
        <div className="prose dark:prose-invert">
          <h2 className="border-b pb-2 dark:border-gray-800">Extensible roles & permissions</h2>
          <p>
            Leverage Supabase RLS policies to restrict access to data by user
            role
          </p>
        </div>
        <div className="prose dark:prose-invert">
          <h2 className="border-b pb-2 dark:border-gray-800">It&apos;s all your data</h2>
          <p>
            Everything is stored in your own Supabase database. Customize
            everything and extend with your own tables
          </p>
        </div>
      </div>
    </div>
  )
}
