const { Relationship, Text } = require('@keystonejs/fields');

module.exports = {
  fields: {
    brand: { type: Text, isRequired: true },
    model: { type: Text, isRequired: true },
    owner: { type: Relationship, ref: 'User.vehicles' },
  },
};
