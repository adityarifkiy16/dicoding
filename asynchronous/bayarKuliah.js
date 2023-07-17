const { resolve } = require("path");

function withDrawMoney(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (amount > 2000) {
        reject(new Error("Not enough money to withdraw"));
      }
      resolve(amount);
    }, 1000);
  });
}

function bayarKuliah(money) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (money < 900) {
        reject(new Error("Not enough money to pay!"));
      } else if (money > 900) {
        resolve(`${money - 900} uang kembalian anda`);
      }
      resolve("payment successfull!");
    }, 1000);
  });
}

function cetakStruk() {
  withDrawMoney(1900)
    /*
     * Dalam chaining promise setiap fungsi then harus mengembalikan promise baru
     * untuk menjalankan proses chaining karena nilai yang dikembalikan tersebut akan dibawa ke fungsi then selanjutnya
     */

    /*
     ? return 1900 lalu dimasukan kedalam argumen 'money'
     */

    /*
     *return bayarKuliah(money)
     */
    .then((money) => bayarKuliah(money))
    .then((result) => console.log(result))
    .catch((err) => console.log(err.message));
}

module.exports = { withDrawMoney, bayarKuliah };
