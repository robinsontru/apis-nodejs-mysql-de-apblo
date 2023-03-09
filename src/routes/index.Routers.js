import { pool } from "./dbConect.js";

app.get('/prueba',async(req,res)=>{
    const [result]=await pool.query('SELECT * FROM ventasdb ')
    res.json(result)
})