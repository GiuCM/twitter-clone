import { Tweet } from "./components/Tweet"
import { TweetForm } from "./components/TweetForm"


export const App = () => {
  return (
    <>
      <TweetForm />
      <Tweet
        name="Elon Musk"
        username="@elonmusk"
        avatar="/src/assets/avatar.png"
        message="Welcome to twitter"
      />
      <Tweet
        name="Giuliana"
        username="@giucm"
        avatar="/src/assets/avatar.png"
        message="hey hey"
      />
    </>
  )
}
