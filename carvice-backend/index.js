const { Keystone } = require('@keystonejs/keystone');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');

// Lists
const Vehicle = require('./models/Vehicle');
const User = require('./models/User');

const PROJECT_NAME = "carvice-backend";

const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new Adapter(),
});

// Creating lists
keystone.createList('User', User);
keystone.createList('Vehicle', Vehicle);

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({ enableDefaultRoute: true, authStrategy }),
  ],
};
