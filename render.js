const posts = tweeter.getPosts()

const Renderer = function () {

    // const posts = tweeter.getPosts()

    const renderPosts = function (postsArr) {
        $("#posts").empty();
        for (let post = 0; post < posts.length; post++) {
            let postDiv = $(`<div class='post' data-id=${posts[post].id}  >${posts[post].text}</div>`)
            const postButton = `<button class="delete" > Delete Post </button>`
            postDiv.append($(postButton))


            for (let comment = 0; comment < posts[post].comments.length; comment++) {
                const commentsP = $(`<div  data-id=${posts[post].comments[comment].id} class =comments>${posts[post].comments[comment].text}</div>`)
                postDiv.append($(commentsP))
                const comButton = `<button class="delete-comment" > X </button>`
                $(commentsP).append($(comButton))
            }
            $(postDiv).append($(`<input class='addtext'placeholder="Add comment">`))
            $(postDiv).append($(`<button class='add'>Add comment</button>`))
            $("#posts").append($(postDiv))

        }

    }




    return { renderPosts }
}
// console.log(posts[0].comments[0].id);
const renderer = Renderer()


renderer.renderPosts    