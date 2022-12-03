import { getNota, getNotas,serverURL,authToken } from "./script.js"
let notasContainer = document.querySelector('.corpo')
let btnRemoverNota


async function viewNota(id) {
  let nota = getNota(id)
  notasContainer.innerHTML = gerarNotaView(nota.titulo, nota.corpo)
}

async function deleteNota(e) {
  let id=e.currentTarget.id
  let url = `${serverURL}/${id}`
  const response = await fetch(url, {
    headers: { Authorization: `${authToken}`, 'Content-Type': 'application/json' },
    method: 'DELETE',
  })
  if (!response.ok) {
    console.log(response.json)
  } else {
    console.log("Nota Removida")
    window.location.assign(".")
  }
}


async function feedNotasContainer() {
  let notas = await getNotas()
  notas.forEach(nota => {
    let cardHTML = gerarCard(nota)
    notasContainer.innerHTML += cardHTML;
  });
  btnRemoverNota = document.querySelectorAll(".btnRemoverNota")
  btnRemoverNota.forEach(btn => btn.addEventListener("click", deleteNota))

}

function gerarCard(nota) {
  return `<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${nota.titulo}</h5>
  <p class="card-text">${nota.corpo}.</p>
  <!--<a href=javascript:viewNota(${nota.id}) class="btn btn-primary">Ver</a>-->
  <a href=editarNota.html?id=${nota.id} class="btn btn-primary">Editar</a>
  <button class="btn btn-primary btnRemoverNota" id=${nota.id} >Remover</button>
</div>
</div>`;
}

document.onload = feedNotasContainer()

