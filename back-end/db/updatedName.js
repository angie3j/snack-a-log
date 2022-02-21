const updatedSnackName = (snack) => {
    const snackName = snack.name;
    const nameArray = snackName.split(" ");
    const updatedSnackName = nameArray
      .map((word) => {
        if (word.length > 2) {
          return word[0].toUpperCase() + word.substring(1).toLowerCase();
        } else {
          return word.toLowerCase();
        }
      })
      .join(" ");
    return updatedSnackName;
  };
  module.exports = updatedSnackName;