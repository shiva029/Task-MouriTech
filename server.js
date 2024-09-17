const express = require('express');
const spawn = require('child_process');
const shiva = require('./loop')


const app = express()


 async function runimageprocessing (){
  try{
    const child =spawn(shiva);
    
    await child.stdout.on('data',(data)=>{
      console.log(`stdout: ${data}`)
    })

    await child.stderr.on('data',(data)=>{
      console.error(`stderr: ${data}`)
    })
    await child.on('close',(code)=>{
        if(code === 0){
         console.log('closed')
        }
        })
  } catch {
     
  }
 
}

var port = 3000

app.listen (port,()=>{
console.log('servet started')
})

app.get('/imageprocessing',async(req,res)=>{
  
  try{
    await runimageprocessing()
    res.send('processeddd')
  } catch {
    res.send('Error')
  }

})

