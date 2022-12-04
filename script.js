export let serverURL = 'http://127.0.0.1:3333/api/notas'
export let authToken = "Bearer NA.NE2DjYa4-jI_kJSI_kwP-K9k_L2p-VBYQzIasosCGvR1ZeuLlfff2atZp-yb"

async function criaNota(data) {
  const response = await fetch(serverURL, {
    headers: { Authorization: `${authToken}`, 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(data)
  })
  // if (!response.ok) {
  //   console.log(response.json)
  // } else {
  //   console.log("Nota Criada")
  // }
  return response.status
}

async function deleteNota(id) {
  const response = await fetch(`${serverURL}/${id}`, {
    headers: { Authorization: `${authToken}`, 'Content-Type': 'application/json' },
    method: 'DELETE',
  })
  console.log("Nota Removida")
  return response.status
}
async function getNota(id) {
  const response = await fetch(`${serverURL}/${id}`, {
    headers: { Authorization: `${authToken}` }
  })
  if (response.ok) {
    let nota = await response.json()
    return nota
  } else {
    // window.location.assign(".")
    return response.status
  }
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


function gerarNotaView(titulo, corpo) {
  return `<h1>${titulo}</h1><h4>${corpo}</h4>`
}





export { getNota, getFormJSONData, getNotas, deleteNota,criaNota }

