import { Button } from '@/components/Button.jsx'
import { HeroPattern } from '@/components/HeroPattern.jsx'
import HomepageFeatures from '@/components/homepage/Features.jsx'
import HomepageUiComponents from '@/components/homepage/UiComponents.jsx'
import HomepageCrossPlatform from '@/components/homepage/CrossPlatform.jsx'
import HomepageBuildWithSupabase from '@/components/homepage/BuildWithSupabase.jsx'
import Link from 'next/link'
import {Note} from "@/components/mdx"

const IndexPage = () => (
  <>
    <HeroPattern />
    <div className="py-14 sm:py-20 lg:pb-44">
      <div className="max-w-7xlpx-6 mx-auto lg:px-8">
        <div className="prose mx-auto max-w-2xl text-center dark:prose-invert">
          <h1 className="text-4xl">
            Add auth, teams and billing to your Supabase app in 31 seconds
          </h1>
          <p className="text-lg">Free and open source</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/docs/installation">
              <Button>Get started</Button>
            </Link>
            <Link href="/docs">
              <Button variant="text" arrow="right">
                Learn more
              </Button>
            </Link>
          </div>
        </div>
        <div className="grid gap-y-10 pt-8 lg:gap-y-28 lg:gap-y-40">
          <HomepageFeatures />
          <HomepageUiComponents />
          <HomepageCrossPlatform />
          <HomepageBuildWithSupabase />
        </div>
      </div>
    </div>
  </>
)

export default IndexPage

export async function getStaticProps() {
  return { props: { title: "Open source Supabase SaaS starter", description: "Launch your Supabase SaaS app faster with Basejump. Free and open source" } }
}