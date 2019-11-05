// Access control functions

const userIsAdmin = ({ authentication: { item: user } }) => Boolean(user && user.isAdmin);

const userOwnsItem = ({ authentication: { item: user } }) => {
  if (!user) {
    return false;
  }
  return { id: user.id };
};

const userIsAdminOrOwner = (auth) => userIsAdmin(auth) || userOwnsItem(auth);

module.exports = { userIsAdmin, userOwnsItem, userIsAdminOrOwner };
