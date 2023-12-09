import Head from 'next/head'
import { Router, useRouter } from 'next/router'
import { MDXProvider } from '@mdx-js/react'

import { Layout } from '@/components/Layout'
import * as mdxComponents from '@/components/mdx'
import { useMobileNavigationStore } from '@/components/MobileNavigation'
import getFullUrl from "@/lib/get-full-url";

import '@/styles/tailwind.css'
import 'focus-visible'
import { ContentLayout } from '@/components/ContentLayout.jsx'

function onRouteChange() {
  useMobileNavigationStore.getState().close()
}

Router.events.on('routeChangeStart', onRouteChange)
Router.events.on('hashChangeStart', onRouteChange)

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const isDocsPath = router.pathname.startsWith('/docs');

  return (
    <>
      <Head>
        {(!!pageProps.title || !!pageProps.meta?.title) && (
            <>
                <title>{`${pageProps.title || pageProps.meta?.title} - Basejump`}</title>
                <meta property="og:title" content={pageProps.title || pageProps.meta?.title} />
                <meta name="twitter:title" content={pageProps.title || pageProps.meta?.title} />
                <meta property="og:image" content={getFullUrl(`/api/og?title=${pageProps.title || pageProps.meta?.title}`)} />
                <meta
                    name="twitter:image"
                    content={getFullUrl(`/api/og?title=${pageProps.title || pageProps.meta?.title}`)}
                />
            </>
        )}
          {(!!pageProps.description && !!pageProps.meta?.description) && (
              <>
                <meta
                  name="description"
                  content={pageProps.meta?.description || pageProps.description}
                />
                  <meta
                      property="og:description"
                      content={pageProps.meta?.description || pageProps.description}
                  />
                  <meta
                      name="twitter:description"
                      content={pageProps.meta?.description || pageProps.description}
                  />
              </>
            )}
      <script
          defer
          data-domain="usebasejump.com"
          src="https://plausible.io/js/plausible.js"
      ></script>
      </Head>
      <MDXProvider components={mdxComponents}>
        {isDocsPath ? (
          <Layout {...Component.layoutProps} {...pageProps} showFeedbackForm={false}>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <ContentLayout {...Component.layoutProps} {...pageProps}>
            <Component {...pageProps} />
          </ContentLayout>
        )}
      </MDXProvider>
    </>
  )
}
