import { pool } from "../dbConect.js";

export const getUSER = async (req,res)=>{
    const [result] = await pool.query('select *from ventasdb ;')
    res.json(result)
}

export const posUSER = async (req,res)=>{
    res.json('creando los usuarios ')
}

export const putUSER = async (req,res)=>{
    res.json('actualizando  los usuarios ')
}

export const deleteUSER = async (req,res)=>{
    res.json('eliminando los usuarios ')
}