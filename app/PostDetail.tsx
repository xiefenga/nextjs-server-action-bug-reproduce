'use client'

import React from 'react'

interface PostDetailProps {
  post: Post
  onSave: () => Promise<void>
}

const PostDetail: React.FC<PostDetailProps> = ({ post, onSave }) => {

  const [body, setBody] = React.useState(post.body)

  return (
    <div>
      <h1 className='text-4xl font-bold'>{post.title}</h1>
      <textarea
        value={body}
        placeholder='please inpute'
        onChange={e => setBody(e.target.value)}
        className='w-full mt-4 bg-gray-300 p-2 h-96 rounded border'
      />
      <button
        onClick={() => onSave()}
        className='py-1 px-2 rounded bg-neutral-200 hover:bg-neutral-300 transition-all ease-in-out'
      >
        save
      </button>
    </div>
  )
}

export default PostDetail