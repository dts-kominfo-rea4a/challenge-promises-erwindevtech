const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (emosi) => {
  return new Promise(async (resolve, reject) => {
    if (emosi == null || emosi.isEmpty) {
      return reject("wrong input");
    }

    let result = await Promise.all([promiseTheaterIXX(), promiseTheaterVGC()]);

    return resolve(
      result.reduce(
        (total, current) =>
          total + current.filter((obj) => obj.hasil == emosi).length,
        0
      )
    );
  });
};

module.exports = {
  promiseOutput,
};
