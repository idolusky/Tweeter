const posts = tweeter.getPosts()

const Renderer = function () {

    // const posts = tweeter.getPosts()

    const renderPosts = function (postsArr) {
        $("#posts").empty();
        for (let post = 0; post < posts.length; post++) {
            const postDiv = `<div class='post' data-id=${posts[post].id} class="posts" style=display:inline>${posts[post].text}</div>`
            $("#posts").append($(postDiv))
            const postButton = `<button class="delete" > Delete Post </button>`
            $("#posts").append($(postButton))
            $("#posts").append($("<br>"))
            $("#posts").append($("<br>"))

            for (let comment = 0; comment < posts[post].comments.length; comment++) {
                const commentsDiv = `<div style=display:inline data-id=${posts[post].comments[comment].id} class =comments>${posts[post].comments[comment].text}</div>`
                $("#posts").append($(commentsDiv))
                const comButton = `<button class="delete-comment" > X </button>`
                $("#posts").append($(comButton))
                $("#posts").append($("<br>"))
            }
            $("#posts").append($(`<input class='addtext'placeholder="Add comment">`))
            $("#posts").append($(`<button class='add'>Add comment</button>`))
            $("#posts").append($("<br>"))
            $("#posts").append($("<br>"))
        }

    }




    return { renderPosts }
}
// console.log(posts[0].comments[0].id);
const renderer = Renderer()


renderer.renderPosts    