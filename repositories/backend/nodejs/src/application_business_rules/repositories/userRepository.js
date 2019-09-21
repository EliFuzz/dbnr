const create = repository => userEntity => repository.create(userEntity);
const read = repository => async () => repository.read();
const update = repository => userEntity => repository.update(userEntity);
const remove = repository => userId => repository.remove(userId);

module.exports = {
  create,
  read,
  update,
  remove
};
