
import SigninForm from "../components/forms/SigninForm";
import SignunForm from "../components/forms/SignupForm";
import defineRoutes from "../config/defineRoutes";
import AppLayout from "../layouts/AppLayout";
import AuthLayout from "../layouts/AuthLayout";
import HeaderOnlyLayout from "../layouts/HeaderOnlyLayout";
import UserLayout from "../layouts/UserLayout";
import Friends from "../pages/Friends";
import Gaming from "../pages/Gaming";
import Groups from "../pages/group/Groups";
import Home from "../pages/Home";
import Marketpalce from "../pages/marketplace/Marketplace";
import Photo from "../pages/Photo";
import Stories from "../pages/Stories";
import StoriesCreate from "../pages/StoriesCreate";
import Watch from "../pages/watch/Watch";
import GroupCreate from "../pages/group/GroupCreate";
import UserAbout from "../pages/user/UserAbout";
import UserFriend from "../pages/user/UserFriend";
import UserMap from "../pages/user/UserMap";
import UserPhoto from "../pages/user/UserPhoto";
import UserProfile from "../pages/user/UserProfile";
import UserVideo from "../pages/user/UserVideo";
import GroupsJoins from "../pages/group/GroupsJoins";
import GroupInfo from "../pages/group/GroupInfo";
import Bookmark from "../pages/Bookmark";
import SinglePost from "../pages/SinglePost";
import VerifyEmailNotification from "../pages/VerifyEmailNotification";
import VerifyEmail from "../pages/VerifyEmail";
import ResendEmailVerify from "../pages/ResendEmailVerify";
const publicRoutes = [
    {
        layout:AuthLayout,
        routes:[
            {
                path: defineRoutes.signin,
                component:SigninForm
            },
            {
                path: defineRoutes.signup,
                component:SignunForm
            },
            {
                path: defineRoutes.verify_email_notification,
                component:VerifyEmailNotification
            },
            {
                path: defineRoutes.verify_email,
                component:VerifyEmail
            },
            {
                path: defineRoutes.resend_email,
                component:ResendEmailVerify
            },
        ]
    },
    
] 
const privateRoutes =[
    {
        layout:AppLayout,
        routes:[
            {
                path: defineRoutes.home,
                component:Home
            },
           
           
           
            {
                path: defineRoutes.gaming,
                component:Gaming
            },
            {
                path: defineRoutes.stories,
                component:Stories
            },
            {
                path:defineRoutes.story_create,
                component:StoriesCreate
            },
            {
                path:defineRoutes.photo,
                component:Photo
            },
            {
                path:defineRoutes.video,
                component:Photo
            },
        ]
    },
    {
        layout:UserLayout,
        routes:[
           {
            path:defineRoutes.user,
            component:UserProfile
           },
           {
            path:defineRoutes.user_about,
            component:UserAbout
           },
           {
            path:defineRoutes.user_about_more,
            component:UserAbout
           },
           {
            path:defineRoutes.user_friends,
            component:UserFriend
           },
           {
            path:defineRoutes.user_photos,
            component:UserPhoto
           },
           {
            path:defineRoutes.user_videos,
            component:UserVideo
           },
           {
            path:defineRoutes.user_map,
            component:UserMap
           },

        ]
    },
    {
        layout: HeaderOnlyLayout,
        routes:[
            {
                path:defineRoutes.friends,
                component:Friends
            },
            {
                path:defineRoutes.group_create,
                component:GroupCreate
            },
            {
                path: defineRoutes.groups,
                component:Groups
            },
            {
                path: defineRoutes.groups_more,
                component:GroupInfo
            },
            {
                path: defineRoutes.groups_joins,
                component:GroupsJoins
            },
            {
                path: defineRoutes.groups_detail,
                component:GroupInfo
            },
            {
                path: defineRoutes.watch,
                component:Watch
            },
            {
                path: defineRoutes.marketplace,
                component:Marketpalce
            },
            {
                path: defineRoutes.bookmarks,
                component:Bookmark
            },
            {
                path: defineRoutes.post,
                component:SinglePost
            },
        ]
    }
   
]
export { publicRoutes ,privateRoutes } ;