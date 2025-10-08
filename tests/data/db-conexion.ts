import mysql from "mysql2/promise";
import { dbConfig } from "../data/db.config";
//import { PoolConnection } from "mysql2";

export const pool = mysql.createPool({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

async function testConnection() {
    const connection = await pool.getConnection();
    try {
        
        console.log("Successfully connected to the database!");
        connection.release();
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }finally{
        connection.release();
    }
}

testConnection();