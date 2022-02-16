// DONE: Implement and use this function to to set the is_healthy attribute on newly created 
// snacks 
// Snack Health The value of is_healthy should be a boolean. It is determined by the following

// if protein or fiber is greater than or equal to 5 and added_sugar is less than 5 then the snack is_healthy = true
// if any values are not numbers (ie empty strings, not numbers) then snack is_healthy = null
// To add this functionality, create the function inside the confirmHealth.js file. You should require this function in your snackController.js and then call it.

// To summarize:

// in the confirmHealth.js file
// write a function called confirmHealth
// don't forget to export this function
// pass in the snack object to the function
// if there are missing values for protein or fiber or added_sugar, snack.is_healthy = null
// if protein is greater than or equal to 5 OR fiber is greater than or equal to 5 AND added_sugar is less than 5, then snack.is_healthy = true
// else, the snack.is_healthy - false
// don't forget to return the value


const confirmHealth = (snack) => {

};

module.exports = confirmHealth;
