import type { NextPage } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Image from 'next/image'

import Head from 'next/head'

type Author ={
  name: string,
  image: string,
  about: string,
  role: string
  social_media: string[],
}

type Post = {
  title: string,
  content: string,
  date: string,
  excerpt: string,
  cover_image: string
  author: Author,
}
 

const Home = (posts: Post[]) => {
  console.log(posts)
  return (
    <div>
      <Head>
        <title>DevBlog</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <h1> TEST</h1>
    </div>
  )
}

export async function getStaticProps(){
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map(filename => {
    const slug = filename.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const {data, content} = matter(markdownWithMeta)

    return {slug, data, content}
  })
  return {
    props: {posts}
  }
}
export default Home
