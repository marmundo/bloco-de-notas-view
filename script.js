let notasContainer = document.querySelector('.corpo')
export let serverURL = 'http://127.0.0.1:3333/api/notas'
export let authToken = "Bearer NA.NE2DjYa4-jI_kJSI_kwP-K9k_L2p-VBYQzIasosCGvR1ZeuLlfff2atZp-yb"



async function getNota(id) {
  const response = await fetch(`${serverURL}/${id}`, {
    headers: { Authorization: `${authToken}` }
  })
  let nota = await response.json()
  return nota[0]
}

function getFormJSONData(form) {
  const data = new FormData(form)
  const value = Object.fromEntries(data.entries());
  return value
}

async function getNotas() {
  const response = await fetch(serverURL,
    {
      headers: { Authorization: `${authToken}` }
    });
  const myJson = await response.json();
  return myJson
}

async function feedNotasContainer() {
  let notas = await getNotas()
  notas.forEach(nota => {
    let cardHTML = gerarCard(nota)
    notasContainer.innerHTML += cardHTML;
  });
}

function gerarCard(nota) {
  return `<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${nota.titulo}</h5>
  <p class="card-text">${nota.corpo}.</p>
  <a href=javascript:viewNota(${nota.id}) class="btn btn-primary">Ver</a>
  <a href=editarNota.html?id=${nota.id} class="btn btn-primary">Editar</a>
  <a href=javascript:viewNota(${nota.id}) class="btn btn-primary">Remover</a>
</div>
</div>`;
}

function gerarNotaView(titulo, corpo) {
  return `<h1>${titulo}</h1><h4>${corpo}</h4>`
}

async function viewNota(id) {
  let nota = getNota(id)
  notasContainer.innerHTML = gerarNotaView(nota.titulo, nota.corpo)
}



export { getNota, feedNotasContainer, getFormJSONData }

