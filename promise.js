const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (data) => {
  return new Promise((resolve, reject) => {
    if (data === null) {
      reject(`Terjadi kesalahan`);
    } else {
      promiseTheaterIXX().then((dataPengunjung) => {
        const isiDatapengunjungIXX = [
          dataPengunjung[0].hasil,
          dataPengunjung[1].hasil,
          dataPengunjung[2].hasil,
        ];

        promiseTheaterVGC().then((dataPengunjung) => {
          const isiDatapengunjungVGC = [
            dataPengunjung[0].hasil,
            dataPengunjung[1].hasil,
            dataPengunjung[2].hasil,
          ];

          let isiDataGabungan =
            isiDatapengunjungIXX.concat(isiDatapengunjungVGC);

          let itungIsiDataSama = {};
          isiDataGabungan.forEach((jumlah) => {
            itungIsiDataSama[jumlah] = (itungIsiDataSama[jumlah] || 0) + 1;
          });

          if (data === isiDataGabungan[0]) {
            resolve(itungIsiDataSama.marah);
          } else {
            resolve(itungIsiDataSama.marah - 2);
          }
        });
      });
    }
  });
};

module.exports = {
  promiseOutput,
};
