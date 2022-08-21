const db = require("../db/dbConfig.js");

// QUERY FOR ALL SNACKS
const getAllSnacks = async () => {
  try {
    const allSnacks = await db.any("SELECT * FROM snacks");
    return allSnacks;
  } catch (err) {
    return err;
  }
};

// QUERY FOR ONE SNACK
const getSnack = async (id) => {
  try {
    const oneSnack = await db.one("SELECT * FROM snacks WHERE id=$1", id);
    return oneSnack;
  } catch (err) {
    return err;
  }
};

// QUERY TO CREATE A SNACK
const createSnack = async (name, fiber, protein, added_sugar, isHealthy, image) => {
  // const { name, fiber, protein, added_sugar, is_healthy, image } = snack;
  let lowercaseName = name.toLower().split(" ")
  let snackName = lowercaseName().map((lower) => {
    if (lower.length > 2){
      return lower.charAt(0).toUpperCase()+lower.substring(1)
    }else{
      return lower
    }
  }).join(" ")
  
    if (!image){
      image = "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image"
    }  

  try {
    const newSnack = await db.one(
      "INSERT INTO snacks (name, fiber, protein, added_sugar, is_healthy, image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [name, fiber, protein, added_sugar, isHealthy, image]
    );
    return newSnack;
  } catch (error) {
    return error;
  }
};

// QUERY TO DELETE A SNACK 
const deleteSnack = async (id) => {
    try {
        const deletedSnack = await db.one("DELETE FROM snacks WHERE id = $1 RETURNING *", id);
        return deletedSnack
    } catch (err) {
        return err;
    }
}

// QUERY TO UPDATE A SNACK 
const updateSnack = async (id, name, fiber, protein, added_sugar, isHealthy, image) => {
    // const { name, fiber, protein, added_sugar, is_healthy, image } = snack;
    let lowercaseName = name.toLower().split(" ")
    let snackName = lowercaseName().map((lower) => {
      if (lower.length > 2){
        return lower.charAt(0).toUpperCase()+lower.substring(1)
      }else{
        return lower
      }
    }).join(" ")
    
      if (!image){
        image = "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image"
      }  
      
    try {
        const updatedSnack = await db.one("UPDATE snacks SET name = $1, fiber = $2, protein = $3, added_sugar = $4, is_healthy = $5, image = $6 WHERE id = $7 RETURNING *",
        [name, fiber, protein, added_sugar, isHealthy, image, id])
        return updatedSnack;
    } catch (err) {
        return err;
    }
}

module.exports = { getAllSnacks, getSnack, createSnack, deleteSnack, updateSnack};
