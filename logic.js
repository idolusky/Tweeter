// const Tweeter = function () {

//     const posts = [
//         {
//             text: "First post!",
//             id: "p1",
//             comments: [
//                 { id: "c1", text: "First comment on first post!" },
//                 { id: "c2", text: "Second comment on first post!!" },
//                 { id: "c3", text: "Third comment on first post!!!" }
//             ]
//         },
//         {
//             text: "Aw man, I wanted to be first",
//             id: "p2",
//             comments: [
//                 { id: "c4", text: "Don't wory second poster, you'll be first one day." },
//                 { id: "c5", text: "Yeah, believe in yourself!" },
//                 { id: "c6", text: "Haha second place what a joke." }
//             ]
//         }
//     ]

//     const comments = []


//     let postIdCounter = posts.length

//     commentIdCounter = comments.length

//     const getPosts = function () {
//         return posts
//     }

//     const addPost = function (text) {

//         posts.push(post.text)
//     }


//     let post = {
//         id: posts.id,
//         text: getPosts,
//         comments: []
//     }

//     const removePost = function (postId) {
//         posts.splice(parseInt(posts.postId - 1), 1)
//     }

//     return

// }

// const tweeter = Tweeter()








const Tweeter = function () {

    const posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

    let postIdCounter = posts.length

    let commentIdCounter = function () {
        let commentCount = 0
        for (let post of posts) {
            commentCount += post.comments.length
        }
        return commentCount
    }

    let commentCount = commentIdCounter()


    const getPosts = function () {
        return posts
    }

    const addPost = function (text) {
        postIdCounter++
        return posts.push({
            text: text,
            id: ("p" + postIdCounter),
            comments: []
        })
    }
    // let postId = posts.id

    const removePost = function (postId) {
        for (let i = 0; i < posts.length; i++) {
            if (posts[i].id === postId) {
                posts.splice(i, 1)
            }
        }
    }


    const addComment = function (text, postId) {
        commentCount++
        for (let p = 0; p < posts.length; p++) {
            if (posts[p].id === postId) {
                posts[p].comments.push({ id: "c" + commentCount, text: text })
            }
        }

    }



    // addComment("ido commenting", "p1")
    // console.log(posts)
    // console.log(commentIdCounter())

    const removeComment = function (postId, commentId) {
        for (let p = 0; p < posts.length; p++) {
            if (posts[p].id === postId) {
                for (let c = 0; c < posts[p].comments.length; c++) {
                    if (commentId === posts[p].comments[c].id) {
                        posts[p].comments.splice(c, 1)
                    }
                }
            }
        }
    }

    // removeComment("p1", "c3")
    // console.log(posts)

    // console.log(commentIdCounter())
    // addComment("p1", "ido again")
    // console.log(posts)

    return {
        addPost,
        commentIdCounter,
        getPosts,
        removePost,
        removeComment,
        addComment

    }


}

const tweeter = Tweeter()

// tweeter.addPost("This is my own post!")
// console.log(tweeter.getPosts())
//This should be added to the posts array:
//{text: "This is my own post!", id: "p3", comments: []}

// tweeter.removePost("p1")
// console.log(tweeter.getPosts())
// //There should only be two posts in the post's array:
// //{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
// //{text: "This is my own post!", id: "p3", comments: []}

// //============================
// //============================
// //Stop here
// //Make sure everything works. Then keep going
// //============================
// //============================

// tweeter.addComment("Damn straight it is!", "p3")
// tweeter.addComment("Second the best!", "p2")
// console.log(tweeter.getPosts())
// //This should be added to the third post's comments array:
// //{id: "c7", text: "Damn straight it is!"}

// //This should be added to the second post's comments array:
// //{id: "c8", text: "Second the best!"}

    // tweeter.removeComment("p2", "c6")
    // console.log(tweeter.getPosts())
// //This comment should be removed:
// //{id: "c6", text: "Haha second place what a joke."}
