const db = require("../db/dbConfig.js");

// All snacks are shown
const getAllSnacks = async () => {
  try {
    const allSnacks = await db.any("SELECT * FROM snacks");
    return allSnacks;
  } catch (error) {
    return error;
  }
};

const getSnack = async (id) => {
  try {
    const snack = await db.one("SELECT * FROM snacks WHERE id=$1", id);
    return snack;
  } catch (error) {
    return error;
  }
};


const deleteSnack = async (id) => {
  try {
    const deletedSnack = await db.one(
      "DELETE FROM snacks WHERE id=$1 RETURNING *", id);
    return deletedSnack;
  } catch (error) {
    return error;
  }
};

const updateSnack = async (id, snack) => {
  const { name, image, fiber, protein, added_sugar } = snack;
  console.log('Update', snack);
  try {
    const updatedSnack = await db.one(
      "UPDATE snacks SET name=$1, image=$2, fiber=$3, protein=$4, added_sugar=$5 WHERE id=$6 RETURNING *", [name, image, fiber, protein, added_sugar]
    );
    console.log('Updating!', updatedSnack);
    return updatedSnack 
  } catch (error) {
    console.log('error');
    return error;
  } 

};


module.exports = { 
  getAllSnacks,
  getSnack,
  deleteSnack,
  updateSnack, 
};
