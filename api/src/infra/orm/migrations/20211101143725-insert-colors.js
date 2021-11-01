'use strict'

const tableName = { tableName: 'cor' }
const data = [
  { id: 1, descricao: 'Azul' },
  { id: 2, descricao: 'Preto' },
  { id: 3, descricao: 'Amarelo' },
  { id: 4, descricao: 'Branco' },
  { id: 5, descricao: 'Roxo' },
  { id: 6, descricao: 'Rosa' },
]
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(tableName, data)
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all(data.map((data) => queryInterface.bulkDelete(tableName, data)))
  },
}
