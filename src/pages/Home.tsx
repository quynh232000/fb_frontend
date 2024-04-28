import CreeatePost from "../components/shared/CreatePost"
import Post from "../components/shared/Post"
import Story from "../components/shared/Story"

const Home = () => {
  return (
    <div className="flex flex-col gap-4">
      <Story/>
      <CreeatePost/>
      <Post/>
      <Post/>
      
    </div>
  )
}

export default Home