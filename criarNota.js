import { getFormJSONData, getNota,criaNota } from './script.js'

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



btnCriarNota.addEventListener("click", async (data) => {
  data.preventDefault()
  data = getFormJSONData(document.querySelector("#form"))
  let id = params.get('id')
  data["id"] = id
  let res=await criaNota(data)
  if(res){
    window.location.assign(".")
  }
})


