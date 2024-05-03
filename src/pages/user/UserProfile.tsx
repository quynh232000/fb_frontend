import CreatePost from "../../components/shared/CreatePost";
import Post from "../../components/shared/Post";
import SidebarUser from "../../components/shared/user/SidebarUser";


const UserProfile = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="w-full  lg:w-sidebar_user">
        <SidebarUser />
      </div>
      <div className="flex flex-col gap-4 flex-1">
        <CreatePost />
        <Post type="user"/>
        <Post type="user"/>
        <Post type="user"/>
        <Post type="user"/>
       
      </div>
      
    </div>
  );
};

export default UserProfile;
