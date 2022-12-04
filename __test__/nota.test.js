export let notaobject = {
  "id": 5,
  "titulo": "olá",
  "corpo": "Mundo",
  "user_id": 1,
  "created_at": "2022-12-03T17:55:29.000-03:00",
  "updated_at": "2022-12-04T02:09:40.000-03:00"
}


import { criaNota, deleteNota, getNota } from '../script.js';
describe("nota", () => {
  describe("get rota nota", () => {
    describe("dado que a nota nao existe", () => {
      it("deveria retornar erro 404", async () => {
        const notaID = 123
        let nota = await getNota(notaID)
        expect(nota).toBe(404)
      })
    })

    describe("dado que a nota 5 existe", () => {
      it("deveria retornar o corpo da nota 5", async () => {
        const notaID = 5
        let nota = await getNota(notaID)
        expect(nota.titulo).toBe(notaobject.titulo)
      })
    })
  })


  describe("del rota nota", () => {
    describe("dado que a nota 4 existe", () => {
      it("deveria retornar 204 quando deletar", async () => {
        const notaID = 4
        let nota = await deleteNota(notaID)
        expect(nota).toBe(204)
      })
    })
    describe("dado que a nota 4 não existe", () => {
      it("deveria retornar 404 quando deletar", async () => {
        const notaID = 4
        let nota = await deleteNota(notaID)
        expect(nota).toBe(204)
      })
    })
  })

  describe("create rota nota", () => {
    describe("dado que a nota  existe", () => {
      it("deveria retornar 500 quando criar", async () => {
        const notaID = 4
        let nota = await criaNota(notaobject)
        expect(nota).toBe(500)
      })
    })
    describe("dado que a nota não existe", () => {
      it("deveria retornar 201 quando deletar", async () => {
        const notaID = 4
        let newnotaobject = {
          "titulo": "olá",
          "corpo": "Mundo 2",
        }
        let nota = await criaNota(newnotaobject)
        expect(nota).toBe(201)
        await deleteNota(nota.id)
      })
    })
  })
})
