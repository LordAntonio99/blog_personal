import React from 'react'
import Image from 'next/image'

const Author = ({ author }) => {
  console.log(author)
  return (
    <div className="relative mt-20 mb-8 rounded-lg bg-white/10 p-12 text-center">
      <div className="absolute left-0 right-0 -top-14">
        <Image
          src={author.photo.url}
          alt={author.name}
          unoptimized
          width="100px"
          height="100px"
          className="rounded-full object-cover align-middle"
        />
      </div>
        <h3 className='text-white my-4 text-xl font-bold'>{author.name}</h3>
        <p className='text-white text-lg'>{author.bio}</p>
    </div>
  )
}

export default Author
