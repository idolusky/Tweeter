// const tweeter = Tweeter()
// const renderer = Renderer()


const twit = $("#post").on("click", function () {
    const postText = $("#input").val()
    tweeter.addPost(postText)
    renderer.renderPosts(tweeter.getPosts())

})

const deletePost = $("#posts").on("click", "button", function () {
    tweeter.removePost($($(this)).prev(".post").attr("data-id"))
    renderer.renderPosts(tweeter.getPosts())

})

// const addComment = $("#posts").on("click", ".add", function () {
//     const addCommentText = $(this).prev().val()
//     const addCommentId = $(".add").siblings(".post").attr("data-id")
//     console.log(addCommentText, addCommentId)
//     renderer.renderPosts(tweeter.getPosts())

// })

// const deleteComment = $("#posts").on("click", "button", function () {
//     const postid = $($(this)).prev().attr("data-id")
//     const comid = $(this).prev().attr("data-id")
//     console.log(postid, comid)
//     renderer.renderPosts(tweeter.getPosts())

// })

renderer.renderPosts(tweeter.getPosts())


