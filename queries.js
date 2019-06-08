const { Pool } = require('pg')
const pool = new Pool({
  user: 'doadmin',
  host: 'jde-ministries-do-user-6078920-0.db.ondigitalocean.com',
  database: 'defaultdb',
  password: 'deg165j0bykouxlj',
  port: 25060,
  ssl: true
})

const getDevotionals = (request, response) => {
    const query = 'SELECT * FROM devotional';
    pool.query(query, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getDevotionalsGraphQL = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM devotional';
        pool.query(query, (error, results) => {
            if (error) {
                throw error
            }
            resolve(results.rows)
        })
    })
}

const getDevotionalGraphQLByID = (argid) => {
    return new Promise((resolve, reject) => {
        const id = argid
        const query = 'SELECT * FROM devotional WHERE id = $1';
        pool.query(query, [id], (error, results) => {
            if (error) {
                throw error
            }
            resolve(results.rows[0])
        })
    })
}

const getDevotionalByID = (request, response) => {
    const id = parseInt(request.params.id)
    const query = 'SELECT * FROM devotional WHERE id = $1';
    pool.query(query, [id], (error, results) => {
        if (error) {
            throw error
        }
        console.log(results.rows)
        response.status(200).json(results.rows)
    })
}
module.exports = {
    getDevotionals,
    getDevotionalByID,
    getDevotionalsGraphQL,
    getDevotionalGraphQLByID
}