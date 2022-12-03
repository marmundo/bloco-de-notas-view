import { authToken, getNota, serverURL } from './script.js'

let formTitulo = document.querySelector('#titulo')
let formCorpo = document.querySelector('#corpo')

const params = new URLSearchParams(window.location.search)

if (params.has('id')) {
  let id = params.get('id')
  let jsonData = await getNota(id)
  if (jsonData) {
    gerarFormNota(jsonData)
  } else {
    alert("Erro ao editar dados")
    location.href = "."
  }
}

function gerarFormNota(nota) {
  formTitulo.value = nota.titulo
  formCorpo.value = nota.corpo
}

function getFormJSONData(form) {
  const data = new FormData(form)
  const value = Object.fromEntries(data.entries());
  return value
}

btnEditarNota.addEventListener("click", async (data) => {
  data.preventDefault()
  data = getFormJSONData(document.querySelector("#form"))
  let id = params.get('id')
  let url = `${serverURL}/${id}`
  const response = await fetch(url, {
    headers: { Authorization: `${authToken}` , , 'Content-Type': 'application/json' },
    method: 'PUT',
    body: JSON.stringify(data)
  })
  console.log(await response.json())
  if (!response.ok) {
    console.log(response.json)
  } else {
    console.log("Nota Editada")
  }
})