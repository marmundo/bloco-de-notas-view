notasContainer = document.querySelector('.corpo')
let serverURL = 'http://127.0.0.1:3333/api/notas'



async function getNotas() {
  const response = await fetch(serverURL,
    {
      headers: { Authorization: 'Bearer Mg.shOnLFN1r2gWo0rljwle-UIYbtOFjl_Bhc2tIIKDxvCBws8f4d9mJfK5yQtL' }
    });
  const myJson = await response.json();
  return myJson
}

async function feedNotasContainer() {
  let notas = await getNotas()
  console.log(notas)
  notas.forEach(nota => {
    const { titulo, corpo, id } = nota
    cardHTML = gerarCard(titulo, corpo, id)
    notasContainer.innerHTML += cardHTML;
  });
}

function gerarCard(titulo, corpo, id) {
  return `<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${titulo}</h5>
  <p class="card-text">${corpo}.</p>
  <a href=javascript:viewNota(${id}) class="btn btn-primary">Ver</a>
</div>
</div>`;
}

function gerarNotaView(titulo, corpo) {
  return `<h1>${titulo}</h1><h4>${corpo}</h4>`
}
async function viewNota(id) {
  let nota = await fetch(serverURL + "/" + id).then(dados => dados.json())
  notasContainer.innerHTML = gerarNotaView(nota.titulo, nota.corpo)
}

feedNotasContainer()