import { HeartIcon } from '@heroicons/react/outline'
import { useState } from 'react'

interface TweetProps {
  name: string,
  username: string,
  avatar: string,
  message: string
}

export const Tweet = ({ name, username, avatar, message }: TweetProps) => {
  const [like, setLike] = useState(false);

  return (
    <div className="flex space-x-3 p-4 border-b border-silver">
      <div>
        <img src={avatar} />
      </div>
      <div className='space-y-1'>
        <span className="font-bold text-sm">{name}</span>{' '}
        <span className="text-sm text-silver">{username}</span>

        <p>{message}</p>
        <div className='flex space-x-1 text-silver text-sm items-center'>
          <button
            type='button'
            onClick={() => {setLike(!like)}}
          >
            <HeartIcon className={`w-5 stroke-1 ${like ? 'fill-rose-500 stroke-rose-500' : 'fill-transparent'} transition-colors`} />
          </button>
          <span>{like ? '1' : ''}</span>
        </div>
      </div>
    </div>
  )
}