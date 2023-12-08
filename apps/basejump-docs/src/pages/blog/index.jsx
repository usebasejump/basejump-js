import * as fs from 'fs'
import Link from 'next/link'
import { HeroPattern } from '@/components/HeroPattern.jsx'
import Head from "next/head";

const BlogIndex = ({ posts }) => {
  return (
    <div className="-pt-6 mx-auto grid max-w-xl gap-y-6 pb-20">
      <HeroPattern />
      {posts.map((post) => (
        <Link
          href={`/blog/${post.meta.slug}`}
          key={post.meta.slug}
          className="prose block px-4 pt-6 dark:prose-invert lg:px-0"
        >
          <p className="my-0 text-sm text-gray-500">{post.meta.category}</p>
          <h2 className="mb-0 mt-0 py-0">{post.meta.title}</h2>
          <p className="my-1">{post.meta.description}</p>
        </Link>
      ))}
    </div>
  )
}

export default BlogIndex

export async function getStaticProps() {
  // load file paths from current directory that end in `.mdx`. Ignore all other file extensions
  const postFilePaths = fs.readdirSync('./src/pages/blog')

  const posts = []

  for (const postFilePath of postFilePaths) {
    if (!postFilePath.endsWith('.mdx')) continue

    const file = await import(`./${postFilePath}`)
    const {
      props: { meta },
    } = file.getStaticProps()
    const slug = postFilePath.replace(/\.mdx?$/, '')
    posts.push({
      meta: {
        ...meta,
        slug,
      },
    })
  }
  return {
    props: {
      title: 'Articles - Basejump',
      description: 'Articles about Basejump, Supabase, and SaaS development',
      posts: posts.sort((a, b) => {
        return new Date(b.meta.published) - new Date(a.meta.published)
      }),
    },
  }
}
