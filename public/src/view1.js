const postsList = document.getElementById('posts-list')
let maxLoadedItems = 0
let posts = []

function showItems()
{
    
}

window.onload = () => {
    let endpoint = 'https://jsonplaceholder.typicode.com/posts'
    //endpoint = "../fake.json"

    fetch(endpoint).then((res) => res.json()).then((json) => {
        for(const j of json)
        {
            posts[j.id] = j
        }
        /*for(let i = 0; i < json.length; i++)
        {
            posts[i] = json[i]
        }*/

        loadMoreItems()
    })
}

function loadMoreItems()
{
    if(maxLoadedItems >= posts.length)
    {
        maxLoadedItems = posts.length - 1
        document.getElementById('load-more-btn').hidden = true
    }

    for(let i = maxLoadedItems; i < maxLoadedItems + 5; i++)
    {
        let p = posts[i]

        if(p)
            postsList.innerHTML += `<li><a href="view2.html?post_id=${p.id}">${p.id}. ${p.title}</a></li>`
    }

    maxLoadedItems += 5

    if(maxLoadedItems >= posts.length)
    {
        maxLoadedItems = posts.length - 1
        document.getElementById('load-more-btn').hidden = true
    }
}