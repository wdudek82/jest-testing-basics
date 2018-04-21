const functions = {
  add: (x, y) => x + y,
  isNull: () => null,
  checkValue: (value) => value,
  createUser: () => {
    const user = { firstName: 'Brad'}
    user['lastName'] = 'Traversy';
    return user;
  }
}

module.exports = functions;