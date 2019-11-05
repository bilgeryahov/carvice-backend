const {
  Text, Checkbox, Password, Relationship,
} = require('@keystonejs/fields');

const access = require('../access');

module.exports = {
  fields: {
    name: { type: Text },
    email: {
      type: Text,
      isUnique: true,
    },
    isAdmin: { type: Checkbox },
    password: {
      type: Password,
    },
    vehicles: {
      type: Relationship, ref: 'Vehicle.owner', many: true,
    },
  },
  access: {
    read: access.userIsAdminOrOwner,
    update: access.userIsAdminOrOwner,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    auth: true,
  },
};
