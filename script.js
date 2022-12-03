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


function gerarNotaView(titulo, corpo) {
  return `<h1>${titulo}</h1><h4>${corpo}</h4>`
}





export { getNota, getFormJSONData, getNotas }

