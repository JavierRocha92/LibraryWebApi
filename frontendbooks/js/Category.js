//  class Category {
//   constructor(id, name, nicename) {
//     this._id = id;
//     this._name = name;
//     this._nicename = nicename;
//   }

//   get id() {
//     return this._id;
//   }
//   set id(id) {
//     this._id = id;
//   }

//   get name() {
//     return this._name;
//   }
//   set name(name) {
//     this._name = name;
//   }

//   get nicename() {
//     return this._nicename;
//   }
//   set nicename(nicename) {
//     this._nicename = nicename;
//   }
// }

// export default Category;

/**
 * Represents a category with various attributes such as id, name, and nicename.
 */
class Category {
  /**
   * Constructor for the Category class.
   * @param {number} id - The unique identifier of the category.
   * @param {string} name - The name of the category.
   * @param {string} nicename - The user-friendly name of the category.
   */
  constructor(id, name, nicename) {
    this._id = id;
    this._name = name;
    this._nicename = nicename;
  }

  /**
   * Gets the unique identifier of the category.
   * @returns {number} - The unique identifier of the category.
   */
  get id() {
    return this._id;
  }

  /**
   * Sets the unique identifier of the category.
   * @param {number} id - The unique identifier of the category.
   */
  set id(id) {
    this._id = id;
  }

  /**
   * Gets the name of the category.
   * @returns {string} - The name of the category.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name of the category.
   * @param {string} name - The name of the category.
   */
  set name(name) {
    this._name = name;
  }

  /**
   * Gets the user-friendly name of the category.
   * @returns {string} - The user-friendly name of the category.
   */
  get nicename() {
    return this._nicename;
  }

  /**
   * Sets the user-friendly name of the category.
   * @param {string} nicename - The user-friendly name of the category.
   */
  set nicename(nicename) {
    this._nicename = nicename;
  }
}

// Export the Category class
export default Category;
