// ПОПРОБОВАТЬ СДЕЛАТЬ ЧЕРЕЗ ОДИН МАССИВ С ФЛАГАМИ TRUE И FALSE

const buttonNeedToReadEl = document.getElementById("needToRead")
const buttonAlreadyReadEl = document.getElementById("alreadyRead")
const buttonSearchEl = document.getElementById("search")
const inputNameEl = document.getElementById("name")
const inputTagEl = document.getElementById("tag")
const inputLinkEl = document.getElementById("link")
const buttonAddEl = document.getElementById("add")
const generalWindowEl = document.getElementById("generalWindow")

let list = []

let readList = []

buttonNeedToReadEl.addEventListener('click', () => {

    inputNameEl.style.display = 'inline'

    inputTagEl.style.display = 'inline'

    inputLinkEl.style.display = 'inline'

    buttonAddEl.style.display='inline'

    renderList()
})

buttonAlreadyReadEl.addEventListener('click', () => {

    inputNameEl.style.display = 'none'

    inputTagEl.style.display = 'none'

    inputLinkEl.style.display = 'none'

    buttonAddEl.style.display='none'

    renderReadList()
})

class Read {
    constructor(name, tag, link, id) {
        this.name = name
        this.tag = tag
        this.link = link
        this.id = id
    }
}

const alreadyReadList = () => {

}

buttonAddEl.addEventListener('click', () => {
    const name = inputNameEl.value
    const tag = inputTagEl.value
    const link = inputLinkEl.value
    const item = new Read(name, tag, link, Math.random())

    list.unshift(item)

    renderList()
})

const renderList = () => {
    generalWindowEl.innerHTML = ''

    list.forEach((item, index) => { //ЧТО ЗАПИСЫВАЕТ ВНУТРЬ FOREACH
        const el = document.createElement('div')

        
        el.innerHTML = `
        <div>
        <input id="checkbox" type="checkbox">
        Название задачи: ${item.name}; Теги: ${item.tag}; Ссылка: ${item.link}
        <button id="${item.id}"> Удалить</button>
        
        </div>`
        generalWindowEl.appendChild(el)

        const deleteButtonEl = document.getElementById(item.id)

        deleteButtonEl.addEventListener('click', () => {
            let index = list.findIndex(el => el.id === item.id) // ЧТО ЗАПИСЫВАЕТСЯ ВНУТРЬ FINDINDEX

            list.splice(index, 1)

            renderList()
        })

        const checkBoxEl = el.querySelector('#checkbox')

        checkBoxEl.addEventListener('change', () => {
            let index = list.findIndex(el => el.id === item.id)

            list.splice(index, 1)

            readList.unshift(item)

            renderList()
        })
    })
}

const renderReadList = () => {
    generalWindowEl.innerHTML = ''

    readList.forEach((item, index) => { //ЧТО ЗАПИСЫВАЕТ ВНУТРЬ FOREACH
        const el = document.createElement('div')


        el.innerHTML = `
        <div>
        <input id="checkbox" type="checkbox" checked>
        Название задачи: ${item.name}; Теги: ${item.tag}; Ссылка: ${item.link}
        <button id="${item.id}"> Удалить</button>
        
        </div>`
        generalWindowEl.appendChild(el)

        const deleteButtonEl = document.getElementById(item.id)

        deleteButtonEl.addEventListener('click', () => {
            let index = readList.findIndex(el => el.id === item.id) // ЧТО ЗАПИСЫВАЕТСЯ ВНУТРЬ FINDINDEX

            readList.splice(index, 1)

            renderReadList()
        })

        const checkBoxEl = el.querySelector('#checkbox')

        checkBoxEl.addEventListener('change', () => {
            let index = list.findIndex(el => el.id === item.id)

            readList.splice(index, 1)

            list.unshift(item)

            renderReadList()
        })
    })
}