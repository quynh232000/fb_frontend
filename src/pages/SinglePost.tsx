import Post from "../components/shared/Post"

const SinglePost = () => {
  return (
    <div className="flex justify-center py-4">
        <div className="w-content">
            <Post type="user"/>
        </div>
    </div>
  )
}

export default SinglePost