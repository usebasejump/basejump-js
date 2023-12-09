import { Button } from '@/components/mdx.jsx'
import Link from 'next/link'

export default function HomepageUiComponents() {
  return (
    <div className="mx-auto max-w-6xl">
      <section aria-labelledby="features-heading" className="relative">
        <div className="aspect-h-2 flex items-center content-center aspect-w-3 sm:aspect-w-5 lg:aspect-none overflow-hidden lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-16">
          <img
            src="/images/react-components.png"
            alt="Launch even faster with our easy to use React components"
          />
        </div>

        <div className="prose mx-auto max-w-2xl px-4 dark:prose-invert dark:prose-invert sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:col-start-2">
            <h1 className="mt-4 text-4xl font-bold tracking-tight">
              Ready to go React components (coming soon)
            </h1>
            <p>
              Launch faster with pre-built React components for your
              authentication and user management. As you grow, replace them with
              your own
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 text-sm sm:grid-cols-2">
              <div>
                <h3 className="mt-0 pt-0">Personal and team functionality</h3>
                <p>
                  Billing portal, team management and invitations. All ready to
                  go.
                </p>
              </div>
              <div>
                <h3 className="mt-0 pt-0">Fully customizable</h3>
                <p>
                  Bring your own design tweaks or replace entire components with
                  your own
                </p>
              </div>
            </div>
            <Link href="/docs/react">
              <Button variant="text" arrow="right">
                View Documentation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
