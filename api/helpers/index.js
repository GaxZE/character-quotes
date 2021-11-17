function mustBeInArray(array, author) {
  return new Promise((resolve, reject) => {
    const row = array.find(r => r.author.toLowerCase() == author.replace("-", " "))

      if (!row) {
          reject({
              message: 'ID is not good',
              status: 404
          })
      }
      resolve(row)
  })
}

module.exports = {
  mustBeInArray
}
