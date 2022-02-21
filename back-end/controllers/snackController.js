// 
const express = require('express');
const snacks = express.Router();
const confirmHealth = require('../confirmHealth');

const {
    getAllSnacks,
    getSnack,
    deleteSnack,
    createSnack,
    updateSnack,
} = require('../queries/snacks')

// GET the entire Snacks object
snacks.get('/', async (_, response) => {
    console.log('GET request to /snacks');
    const allSnacks = await getAllSnacks();
        response.status(200).json({ 
            "success":true,
            "payload": allSnacks,
        });
    })

// GET a single Snack by id
snacks.get('/:id', async (request, response) => {
    console.log('GET request to /snacks/:id');
    const { id } = request.params;
    // function taking a parameter id
    const oneSnack = await getSnack(id);
    // checking if Snack is undefined
    if (snack === 'undefined') {
        response.status(404).json({
            "success":false,
            "payload": "item not found",
            });
    return;
    }
    response.status(200).json({
        "success":false,
        "payload": oneSnack,
    });
}); 

// POST create a new snack - create
snacks.post("/", async (req, res) => {
    console.log("POST /snacks");
    const { body } = req;
    const createdSnack = await createSnack(req.body);
    const finalObj = {};
    if (createdSnack.id) {
      finalObj.success = true;
      finalObj.payload = createdSnack;
    }
    res.status(200).json(finalObj);
  });

//POST
snacks.post('/:id', async (request, response) => {
    console.log('POST /snacks');
    const body = request
    // checking if Snack is undefined
    if (body.image === 'undefined') {
        body.image = "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image"    
        return 
    }
    body.name = body.name.split(' ').map(element => {
        if(element.length > 2) {
            return element[0].toUpperCase() + element.slice(1).toLowerCase()
        }
        return element
    })
    .join(' ')
    body.is_healthy = confirmHealth(body)
    
    const snack = await createSnack(body)
    if(!snack.name){
       return res.status(422).json({error: "error"})
    }
    res.status(200).json({
        "success":true,
        "payload": snack,
      })
})

// DELETE
snacks.delete('/:id', async (request, response) => {
    console.log('DELETE request to /snacks/:id');
    const { id } = request.params;
    const deletedSnack = await deleteSnack(id);
    if (deletedSnack === 'undefined') {
        response.status(404).json({
            "success":false,
            "payload": "Cannot Delete",
        });
        return;
    }    
    response.status(200).json({
        "success":true,
        "payload": deletedSnack,
    });
}); 

module.exports = snacks