(async () => {
    let keywords = 'Pepe Frog'
    let url = `https://g.tenor.com/v1/search?q=${keywords}&key=02V4W1N2V9BZ&limit=8`
    let response = await fetch(url, {mode: 'no-cors'});
    let json = await response.json()
    let index = Math.floor(Math.random() * json.results.length)
    console.log(json.results[index].id)
    return gifInserter(json.results[index].id, 8)
})()

function gifInserter(id, val) {
    const container = document.querySelector('#gif-container')
    for (let i = 0; i < val; i++) {
        let temp = 'div' + val
        temp = document.createElement('div')
        temp.setAttribute('data-postid', id);
        temp.setAttribute('data-share-method', 'host');
        temp.setAttribute('data-width', '100%');
        temp.setAttribute('data-aspect-ratio', '1.0')
        temp.classList.add('tenor-gif-embed')
        container.append(temp)
    }
}