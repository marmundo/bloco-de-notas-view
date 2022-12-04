import { getNota, getNotas, deleteNota } from "./script.js"
let notasContainer = document.querySelector('.corpo')
let btnRemoverNota


async function viewNota(id) {
  let nota = getNota(id)
  notasContainer.innerHTML = gerarNotaView(nota.titulo, nota.corpo)
}

async function deletarNota(e) {
  let id=e.currentTarget.id
  let res=await deleteNota(id)
  if(res==204){
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
  btnRemoverNota.forEach(btn => btn.addEventListener("click", deletarNota))

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

