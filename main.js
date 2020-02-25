// console.log("Hello from Skeleton Key")

(function() {
    let addButton = document.getElementById('add-button')
    let diceUl = document.getElementById('dice')

    renderDice()

    addButton.addEventListener('click', function() {
        let url = new URL(window.location.href)
        let params = new URLSearchParams(url.search.slice(1))

        params.append('d', 6)

        window.location = url.origin + '?' + params
    })

    function getSearchParams() {
        let url = new URL(window.location.href)
        return new URLSearchParams(url.search.slice(1))
    }

    function renderDice() {
        let params = getSearchParams()
        params.getAll('d').forEach(function (value, index) {
            let li = document.createElement('li')
            let button = document.createElement('button')
            button.dataset.index = index
            button.textContent = `D` + value
            li.appendChild(button)
            diceUl.appendChild(li)
        })
    }
})()