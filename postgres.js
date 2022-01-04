import pg from 'pg';
const Client = pg.Client;
const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "1998",
    database: "postgres"
})

client.connect()
.then(() => console.log("Connected Successfully"))
.catch(e => console.error(e))
.finally(() => client.end())