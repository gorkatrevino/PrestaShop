import Countries from '@data/demo/countries';

const {faker} = require('@faker-js/faker');

const countriesNames = Object.values(Countries).map((country) => country.name);

/**
 * Create new brand address to use in brand address form on BO
 * @class
 */
class BrandAddressData {
  /**
   * Constructor for class brandAddressData
   * @param brandAddressToCreate {Object} Could be used to force the value of some members
   */
  constructor(brandAddressToCreate = {}) {
    /** @type {string} Associated brand to the address */
    this.brandName = brandAddressToCreate.brandName || '--';

    /** @type {string} Linked address firstname */
    this.firstName = brandAddressToCreate.firstName || faker.name.firstName();

    /** @type {string} Linked address lastname */
    this.lastName = brandAddressToCreate.lastName || faker.name.lastName();

    /** @type {string} Address first line */
    this.address = brandAddressToCreate.address || faker.address.streetAddress();

    /** @type {string} Address second line */
    this.secondaryAddress = brandAddressToCreate.secondaryAddress || faker.address.secondaryAddress();

    /** @type {string} Address postal code (default to this format #####) */
    this.postalCode = brandAddressToCreate.postalCode || faker.address.zipCode();

    /** @type {string} Address city name */
    this.city = brandAddressToCreate.city || faker.address.city();

    /** @type {string} Address country name */
    this.country = brandAddressToCreate.country || faker.helpers.arrayElement(countriesNames);

    /** @type {string} Home phone number linked to the address */
    this.homePhone = brandAddressToCreate.homePhone || faker.phone.number('01########');

    /** @type {string} Mobile phone number linked to the address */
    this.mobilePhone = brandAddressToCreate.mobilePhone || faker.phone.number('06########');

    /** @type {string} Other information to add on address */
    this.other = brandAddressToCreate.other || '';
  }
}

module.exports = BrandAddressData;
