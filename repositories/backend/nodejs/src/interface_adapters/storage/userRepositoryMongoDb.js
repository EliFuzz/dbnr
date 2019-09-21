const db = require("../../frameworks_drivers/db/mongodb").mongoose.model(
  "User"
);
const User = require("../../enterprise_business_rules/entities/user");

const create = async userEntity => {
  const { firstName, lastName } = userEntity;

  const user = new db({ firstName, lastName });
  const seqUser = await user.save();

  return User(seqUser);
};

const read = async () => {
  const seqUsers = await db.find();

  return seqUsers.map(({ id, firstName, lastName }) =>
    User({ id, firstName, lastName })
  );
};
const update = async user => {
  const { id, firstName, lastName } = await db.findByIdAndUpdate(user.id, user);

  return User({ id, firstName, lastName });
};
const remove = async userId => {
  const { id, firstName, lastName } = await db.findOneAndRemove(userId);

  return User({ id, firstName, lastName });
};

module.exports = {
  create,
  read,
  update,
  remove
};
