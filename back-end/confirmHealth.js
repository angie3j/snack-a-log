//added sugar needs to be below 5
//protein or fiber needs to be above five in order to be healthy

// const confirmHealth = (snack) => {
//   // if (isNaN(snack.fiber) || isNaN(snack.protein) || isNaN(snack.added_sugar)) {
//   //   return null;
//   // }
//   if (snack.added_sugar < 5 && (snack.fiber >= 5 || snack.protein > 5)) {
//     snack.is_healthy = true;
//   } else {
//     snack.is_healthy = false;
//   }
//   return snack;
// };

const confirmHealth = (snack) => {
  if (isNaN(snack.protein) || isNaN(snack.added_sugar) || isNaN(snack.fiber))
    return null;
  if (
    (snack.protein >= 5 && snack.added_sugar < 5) ||
    (snack.fiber >= 5 && snack.added_sugar < 5)
  )
    return true;
  return false;
};

module.exports = confirmHealth;
