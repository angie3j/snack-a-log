const confirmHealth = require("../confirmHealth.js");
const db = require("../db/dbConfig.js");
const updatedSnackName = require("../updateName.js");

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
      "DELETE FROM snacks WHERE id=$1 RETURNING *",
      id
    );
    return deletedSnack;
  } catch (error) {
    return error;
  }
};

const createSnack = async (snack) => {
  try {
    const { name, fiber, protein, added_sugar, is_healthy, image } = snack;
    const newSnack = await db.one(
      "INSERT INTO snacks (name, fiber, protein, added_sugar, is_healthy, image) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [name, fiber, protein, added_sugar, is_healthy, image]
    );
    return newSnack;
  } catch (error) {
    return error;
  }
};
// const createSnack = async (snack) => {
//   console.log(snack);
//   let { image, fiber, protein, added_sugar } = snack;
//   try {
//     let updatedSnack = confirmHealth(snack);
//     let updatedName = updatedSnackName(snack);
//     if (!image) {
//       image = "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image";
//     }
//     const is_healthy = updatedSnack.is_healthy;
//     const newSnack = await db.one(
//       "INSERT INTO snacks (name, image, fiber, protein, added_sugar, is_healthy) VALUES ($1, $2, $3, $4, $5, $6 ) RETURNING * ",
//       [updatedName, image, fiber, protein, added_sugar, is_healthy]
//     );
//     return newSnack;
//   } catch (error) {
//     return error;
//   }
// };

// const createSnack = async (id, snack) => {
//   const { name, image, fiber, protein, added_sugar } = snack;
//   console.log('Update', snack);
//   try {
//     const createSnack = await db.one(
//       "UPDATE snacks SET name=$1, image=$2, fiber=$3, protein=$4, added_sugar=$5 WHERE id=$6 RETURNING *", [name, image, fiber, protein, added_sugar]
//     );
//     console.log('Updating!', createSnack);
//     return createSnack
//   } catch (error) {
//     console.log('error');
//     return error;
//   }
// };

// if(!name){ res.status(404).json({ error: "Must include name field" })
// if(name && image) {  res.status(200).send(createdSnack) }
// if(name && image === ""){  createdSnack.image = "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image";
//  res.status(200).json(createdSnack);}

// });

module.exports = {
  getAllSnacks,
  getSnack,
  deleteSnack,
  createSnack,
};
