const express = require('express')
const axios = require('axios')
const app = express()
const PORT = 8080

require('dotenv').config();
const BEARER_TOKEN = process.env.BEARER_TOKEN;

app.use(express.json())

app.listen(PORT, (req,res)=>{
    console.log(`Server is running on ${PORT}`);
})

app.get('/users',async (req,res)=>{
    try {
        const res = await axios.get("http://20.244.56.144/test/users", {headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`
        }})
        const users = res.data
        res.status(200).json(users)
        
    } catch (error) {
        console.log(error);
        res.sendStatus(500,`There was an error in : ${error}`)
    }
})

app.get('/test/users/:userid/posts', async (req,res)=>{
    const { userid } = req.params;
    try {
        const res = await axios.get("http://20.244.56.144/test/users/:userid/posts", {headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`
        }})
        const users = res.data
        res.status(200).json(users)
        
    } catch (error) {
        console.log(error);
        res.sendStatus(500,`There was an error in : ${error}`)
    }
})

app.get('/test/posts/:postid/comments', async (req,res)=>{
    const { postid } = req.params;
    try {
        const res = await axios.get("http://20.244.56.144/test/posts/:postid/comments", {headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`
        }})
        const users = res.data
        res.status(200).json(users)
        
    } catch (error) {
        console.log(error);
        res.sendStatus(500,`There was an error in : ${error}`)
    }
})