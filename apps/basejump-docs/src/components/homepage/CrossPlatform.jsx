import { Button, Col } from '@/components/mdx.jsx'
import CodeExample from './CodeExamples.mdx'
import logoJS from '@/images/logos/javascript.svg'
import logoTS from '@/images/logos/typescript.svg'
import logoPython from '@/images/logos/python.svg'
import logoSwift from '@/images/logos/swift.svg'
import Image from 'next/image'

export default function HomepageCrossPlatform() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="grid grid-cols-1 content-center items-start items-center gap-x-16 gap-y-10 lg:max-w-none lg:grid-cols-2">
        <Col>
          <div className="prose px-4 dark:prose-invert dark:prose-invert lg:grid lg:max-w-7xl">
            <div className="lg:col-start-2">
              <h1 className="mt-4 text-4xl font-bold tracking-tight">
                Build for any platform
              </h1>
              <p>
                Leverage Supabase libraries in Javascript, Python, Go, Swift or
                anything else.
              </p>

              <div className="flex gap-4">
                <Image src={logoJS} alt="Javascript" width={50} height={50} />
                <Image src={logoTS} alt="Typescript" width={50} height={50} />
                <Image src={logoSwift} alt="Swift" width={50} height={50} />
                <Image src={logoPython} alt="Python" width={50} height={50} />
              </div>

              <Button
                href="https://supabase.com/docs"
                variant="text"
                target="_blank"
                arrow="right"
              >
                View all Supabase SDKs
              </Button>
            </div>
          </div>
        </Col>
        <Col>
          <CodeExample />
        </Col>
      </div>
    </div>
  )
}
