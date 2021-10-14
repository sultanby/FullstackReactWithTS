import React, { FunctionComponent } from "react"
import Link from "next/link"
import { Post } from "../../shared/types"
import { Title, Figure, Content, Meta } from "./PostBodyStyle"
import { Breadcrumbs } from "../Breadcrumbs"

interface PostBodyProps {
  post: Post
}

export const PostBody: FunctionComponent<PostBodyProps> = ({ post }) => {
  return (
    <div>
      <Breadcrumbs post={post} />
      <Title>{post.title}</Title>
      <Figure>
        <img src={post.image} alt={post.title} />
      </Figure>

      <Content dangerouslySetInnerHTML={{ __html: post.content }} />

      <Meta>
        <span>{post.date}</span>
        <span>&middot;</span>
        <Link href="/category/[id]" as={`/category/${post.category}`}>
          <a>{post.category}</a>
        </Link>
        <span>&middot;</span>
        <a href={post.source}>Source</a>
      </Meta>
    </div>
  )
}
