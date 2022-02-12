// 
const express = require('express');
const snacks = express.Router();


const {
    getAllSnacks,
    getSnack,
    deleteSnack,
    updateSnack,
} = require('../queries/snacks')

// GET the entire snacks object
snacks.get('/', async (_, response) => {
    console.log('GET request to /snacks');
    const allSnacks = await getAllSnacks();
    // Checking for an empty object
    if (allSnacks.length === 0) {
        response.status(404).json({error: 'Server Error'});
    return;
    }
    response.status(200).json(allSnacks);
});

// GET a single snack by id
snacks.get('/:id', async (request, response) => {
    console.log('GET request to /snacks/:id');
    const { id } = request.params;
    // function taking a parameter id
    const snack = await getSnack(id);
    // checking if snack is undefined
    if (snack === 'undefined') {
        response.status(404).json({error: 'Server Error'});
    return;
    }
    response.status(200).json(snack);
}); 

// DELETE
snacks.delete('/:id', async (request, response) => {
    console.log('DELETE request to /snacks/:id');
    const { id } = request.params;
    const deletedSnack = await deleteSnack(id);
    if (deletedSnack === 'undefined') {
        response.status(404).json({error: 'Server Error'});
    return
    }
    response.status(200).json(deletedSnack);
}); 

//POST

snacks.put('/:id', async (request, response) => {
    const updatedSnack = await updateSnack(request.body);
    console.log(updatedSnack);
    // checking if snack is undefined
    if (updatedSnack === 'undefined') {
        response.status(422).json({error: 'Must include name field'});
    return
    }
    response.status(200).json(updatedSnack);
}); 



module.exports = snacks;