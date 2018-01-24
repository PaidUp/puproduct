export default class Organization {
  constructor ({
    ownerId,
    ownerFirstName,
    ownerLastName,
    ownerDOB,
    ownerSSN,
    ownerEmail,
    ownerPhone,
    country,
    state,
    city,
    zipCode,
    EIN,
    Address,
    AddressLineTwo,
    website,
    businessName,
    businessType,
    aba,
    dda,
    createAt,
    updateAt,
    verify,
    referralCode,
    paymentId,
    seasons
  }) {
    for (let [k, v] of Object.entries(arguments[0])) {
      this[k] = v
    }
  }
}
