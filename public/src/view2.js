const search = new URLSearchParams(window.location.search)
const page_id = search.get("post_id")

window.onload = () => {
    let endpoint = 'https://jsonplaceholder.typicode.com/posts'
        //endpoint = "../fake.json"

    fetch(endpoint).then((res) => res.json()).then((json) => {
        let post = json[page_id - 1]
        document.getElementById("title").innerHTML = post.title
        document.getElementById("body").innerHTML = post.body
    })
}