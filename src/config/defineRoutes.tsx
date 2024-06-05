export default {
    home:"/",
    marketplace:"/marketplace",
    watch:"/watch",
    verify_email_notification:"/verify_email_notification",
    verify_email:"/verify_email/:token",
    resend_email:"/resend_verify_email",
    
    gaming:"/gaming",
    friends:"/friends",
    post:"/post/:post_id",


    signin:"signin",
    signup:"signup",
    story_create:"/story/create",
    stories:"/stories/:user_id",
    photo:"/photo/:id",
    video:"/video/:id",
    user:"/user/:id",
    user_about:"/user/:id/about",
    user_about_more:"/user/:id/about?type=:type",
    user_photos:"/user/:id/photos",
    user_friends:"/user/:id/friends",
    user_videos:"/user/:id/videos",
    user_map:"/user/:id/map",

    group_create:"/group/create",
    groups:"/groups",
    groups_detail:"/groups/:group_id",
    groups_more:"/groups/:group_id/:group_more",
    groups_joins:"/groups/joins",

    bookmarks:"/bookmarks"
}