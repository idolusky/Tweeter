// const tweeter = Tweeter()
// const renderer = Renderer()

// const Controller = function (){

const twit = $("#post").on("click", function () {
    const postText = $("#input").val()
    tweeter.addPost(postText)
    renderer.renderPosts(tweeter.getPosts())

})

const deletePost = $("#posts").on("click", ".delete", function () {
    const id = $($(this)).closest(".post").data("id")
    tweeter.removePost(id)
    renderer.renderPosts(tweeter.getPosts())

})

const addComment = $("#posts").on("click", ".add", function () {
    const addCommentText = $(this).prev().val()
    console.log(addCommentText)
    const addCommentId = $(this).closest(".post").last(".comments").attr("data-id")
    tweeter.addComment(addCommentText, addCommentId)
    renderer.renderPosts(tweeter.getPosts())

})

const deleteComment = $("#posts").on("click", "button", function () {
    const postid = $($(this)).closest(".post").attr("data-id")
    const comid = $(this).closest(".comments").attr("data-id")
    tweeter.removeComment(postid, comid)
    renderer.renderPosts(tweeter.getPosts())

})

// }


renderer.renderPosts(tweeter.getPosts())


