import  React from 'react';
import Head from "next/head"
import { Feed } from '../components/Feed';
import { Category, Post } from '../shared/types';
import { fetchCategories, fetchPosts } from '../api/summary';

interface FrontProps { 
    posts: Post[],
    categories: Category[]
}

export async function getStaticProps() {
    const categories = await fetchCategories()
    const posts = await fetchPosts()
    return { props: { posts, categories } }
  }

export default function Front({posts, categories}: FrontProps) {
    return (
        <>
            <Head>
                <title>Front Page</title>
            </Head>
            <main>
                <Feed posts={posts} categories={categories} />
            </main>
        </>
    )
}
