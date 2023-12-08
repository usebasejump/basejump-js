import { ContentHeader } from '@/components/ContentHeader.jsx'
import { ContentFooter } from '@/components/ContentFooter.jsx'
import { SectionProvider } from '@/components/SectionProvider.jsx'
import { motion } from 'framer-motion'
import { Button } from '@/components/Button.jsx'

export function ContentLayout({ meta, children, sections = [] }) {
  return (
    <SectionProvider sections={sections}>
      <div>
        <motion.header
          layoutScroll
          className="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex"
        >
          <div className="lg:pointer-events-auto lg:block">
            <ContentHeader />
          </div>
        </motion.header>
        <div className="relative flex h-full flex-col px-4 pt-14 sm:px-6 lg:px-8">
          <main className="flex-auto py-14">
            {!!meta?.title && (
              <div className="prose dark:prose-invert">
                <div>
                  <Button variant="text" href="/">
                    Home
                  </Button>
                  <span className="mx-2">/</span>
                  <Button variant="text" href="/blog">
                    Articles
                  </Button>
                  <span className="mx-2">/</span>
                  <span>{meta.title}</span>
                </div>
                <div className="pb-20 pt-14">
                  <p className="my-0 py-0">{meta.category}</p>
                  <h1 className="my-0 py-0 text-4xl">{meta.title}</h1>
                </div>
              </div>
            )}
            {children}
          </main>
          <ContentFooter />
        </div>
      </div>
    </SectionProvider>
  )
}
