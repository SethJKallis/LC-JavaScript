let clickOutputEl = document.getElementById('click-output')
let saveOutputEl = document.getElementById('save-output')
let count = 0

clickOutputEl.innerText = 0
saveOutputEl.innerText = "0 - "

function add(){
    console.log('add 1')
    count += 1
    clickOutputEl.innerText = count
    console.log(clickOutputEl.innerText)
}

function subtract(){
    console.log('minus 1')
    count += -1
    clickOutputEl.innerText = count
    console.log(clickOutputEl.innerText)
}

function save(){
    console.log('Data Saved')
    saveOutputEl.innerText +=" " + count + " " + "-"
    count = 0
    clickOutputEl.innerText = count
}


