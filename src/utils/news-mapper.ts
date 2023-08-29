import { UseGetPostsReturnData } from '@/hooks/useGetPosts'

export default function newsMapper(posts?: UseGetPostsReturnData[]) {
  if (!posts) {
    return []
  }

  // TODO: Remove slice after pagination applied
  return posts.map((post, index) => ({
    id: post.id,
    className: `card-${index + 1}`,
    author: post.user.name,
    date: post.created_at,
    title: post.title,
    coverImage: post.post_image,
    href: `/news/${post.id}`,
  }))
}
