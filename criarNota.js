import { authToken, getFormJSONData, getNota, serverURL } from './script.js'

let formTitulo = document.querySelector('#titulo')
let formCorpo = document.querySelector('#corpo')

// const params = new URLSearchParams(window.location.search)

// if (params.has('id')) {
//   let id = params.get('id')
//   let jsonData = await getNota(id)
//   if (jsonData) {
//     gerarFormNota(jsonData)
//   } else {
//     alert("Erro ao editar dados")
//     location.href = "."
//   }
// }

// function gerarFormNota(nota) {
//   formTitulo.value = nota.titulo
//   formCorpo.value = nota.corpo
// }



btnCriarNota.addEventListener("click", async (data) => {
  data.preventDefault()
  data = getFormJSONData(document.querySelector("#form"))
  let url = `${serverURL}`
  const response = await fetch(url, {
    headers: { Authorization: `${authToken}`, 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(data)
  })
  if (!response.ok) {
    console.log(response.json)
  } else {
    console.log("Nota Criada")
    window.location.assign(".")
  }
})