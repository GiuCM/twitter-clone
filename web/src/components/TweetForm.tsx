import { useState } from "react"

export const TweetForm = () => {
  const maxTweetLength = 250
  const [text, setText] = useState('');

  return (
    <div className="border-b border-silver p-4 space-y-6">
      <div className="flex p-4 space-x-5">
        <img src="/src/assets/avatar.png" className="w-7" />
        <h1 className="font-bold text-x1">Página Inicial</h1>
      </div>

      <form className="pl-12 text-lg flex flex-col">
        <textarea
          name="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="O que está acontecendo?"
          className="bg-transparent outline-none"
        />

        <div className="flex justify-end items-center space-x-3">
          <span className="text-sm">
            {text.length} / <span className="text-birdBlue">{maxTweetLength}</span>
          </span>
          <button 
            className="bg-birdBlue px-4 py-2 rounded-full disabled:opacity-50"
            disabled={text.length > maxTweetLength}
          >
            Tweet
          </button>
        </div>
      </form>
    </div>
  )
}