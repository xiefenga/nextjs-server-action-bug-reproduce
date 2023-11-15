import PostDetail from './PostDetail'
import content from './content.json'

const getPostDetail = async (): Promise<Post> => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return content
}

export default async function Home() {
  const post = await getPostDetail()
  return (
    <main className="h-screen p-24">
      <PostDetail
        post={post}
        onSave={async () => {
          'use server'
          // not error
          console.log(post.id)
          // error
          console.log(post.title)
          console.log(post)
        }}
      />
    </main>
  )
}
