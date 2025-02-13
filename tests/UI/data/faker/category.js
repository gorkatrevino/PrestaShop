import Groups from '@data/demo/groups';

const {faker} = require('@faker-js/faker');

/**
 * Create new category to use on creation category form on BO
 * @class
 */
class CategoryData {
  /**
   * Constructor for class CategoryData
   * @param categoryToCreate {Object} Could be used to force the value of some members
   */
  constructor(categoryToCreate = {}) {
    /** @type {string} Name of the category */
    this.name = categoryToCreate.name || `${faker.color.human()} ${faker.commerce.department()}`;

    /** @type {boolean} True to display the category on FO */
    this.displayed = categoryToCreate.displayed === undefined ? true : categoryToCreate.displayed;

    /** @type {string} Description of the category */
    this.description = faker.lorem.sentence();

    /** @type {string} Meta title of the category */
    this.metaTitle = categoryToCreate.metaTitle || faker.lorem.word();

    /** @type {string} Meta description of the category */
    this.metaDescription = faker.lorem.sentence();

    /** @type {GroupData} Customer group that could access to the category */
    this.groupAccess = categoryToCreate.groupAccess
      || faker.helpers.arrayElement(Groups);
  }
}

module.exports = CategoryData;
