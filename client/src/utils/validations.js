/**
 * Checks if all the fields in the form are empty after removing trailing spaces
 * @param  {Array} fields The array of variables to check
 * @return {Boolean}      true if fields are filled, false if one of them is not not
 */
export const fieldsAreFilled = (fields) => {
  //checks for every field individually, if one is empty te function return False
  for (const field of fields){
    if (field.trim() === "") {
      alert("All fields are required");
      return false;
    }
  }
  return true;
};