import express from 'express';
import cors from 'cors';
import roomrout from './Routes/roomrout.js'
import bookingroute from './Routes/bookingroute.js';
import customerrouter from './Routes/customerdetailroute.js';


const app=express();
const port=4000;


app.use(express.json());
app.use(cors())

app.use('/rooms',roomrout)
app.use('/booking',bookingroute)
app.use('/customer',customerrouter)



app.get('/',(req,res)=>{
    res.status(200).send("Api is running successfully")
  })

app.listen(port,()=>{
    console.log("running successfully");
})