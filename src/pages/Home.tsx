
import CreatePost from "../components/shared/CreatePost"
import Post from "../components/shared/Post"
import Story from "../components/shared/Story"
import SuggestionFriend from "../components/shared/SuggestionFriend"

const Home = () => {
  
  return (
    <div className="flex flex-col gap-4">
      <Story/>
      <CreatePost/>
      <Post type="user"/>
      <SuggestionFriend/>
      <Post type="user"/>
      
    </div>
  )
}

export default Home