const Sequelize = require('sequelize')
const { DB_NAME, DB_USER, DB_PASS } = require('./dbsecret')

const DB_CONFIG = {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306
}

const db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG)

async function hasConection() {
  try {
    await db.authenticate()
    console.log('Conexão estabelecida com banco de dados!')
  } catch (error) {
    console.error('Erro ao tentar conectar ao banco de dados!')
  }
}

Object.assign(db, {
  hasConection
})

module.exports = db