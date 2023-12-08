import { Button, Col } from '@/components/mdx.jsx'
import SupabaseExamples from './SupabaseExamples.mdx'

export default function HomepageBuildWithSupabase() {
  return (
    <div className="mx-auto max-w-xl lg:max-w-6xl">
      <div className="grid grid-cols-1 content-center items-start items-center gap-x-16 gap-y-10 lg:max-w-none lg:grid-cols-2">
        <div className="hidden lg:block">
          <Col>
            <SupabaseExamples />
          </Col>
        </div>
        <Col>
          <div className="prose px-4 dark:prose-invert dark:prose-invert lg:grid lg:max-w-7xl lg:px-0">
            <div className="lg:col-start-2">
              <h1 className="mt-4 text-4xl font-bold tracking-tight">
                Keep building with Supabase
                <br />
                ...or not
              </h1>
              <p>
                <strong>Already using Supabase?</strong> Add Basejump to your
                existing project with a single migration file
              </p>
              <p>
                <strong>Not sure if you want to use Supabase at all?</strong> No
                problem, you can launch Basejump with a free Supabase instance
                and use it as a headless authentication API
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 text-sm sm:grid-cols-2">
                <div>
                  <h3 className="mt-0 pt-0">FREE</h3>
                  <p>Supabase is free to use for most projects</p>
                </div>
                <div>
                  <h3 className="mt-0 pt-0">Open Source</h3>
                  <p>
                    Supabase is open source. Host it with them or on your own.
                  </p>
                </div>
              </div>
              <Button
                href="https://supabase.com"
                target="_blank"
                variant="text"
                arrow="right"
              >
                Learn more about Supabase
              </Button>
            </div>
          </div>
        </Col>
        <div className="lg:hidden">
          <Col>
            <SupabaseExamples />
          </Col>
        </div>
      </div>
    </div>
  )
}
