const { withDrawMoney, bayarKuliah } = require("./bayarKuliah");

/*
 !  async digunakan untuk mengubah fungsi agar dapat berjalan secara async
 */
async function cetakStruk(amount) {
  try {
    /*
     * await digunakan untuk menunggu proses promise sebelumnya
     */
    const money = await withDrawMoney(amount);
    const result = await bayarKuliah(money);
    /*
     ! keyword async secara implisit menggunakan return untuk mengubah status promise menjadi fullfiled
     ! dan throw untuk mengubah status promise menjadi rejected
    */
    return result;
  } catch (error) {
    throw error;
  }
}

cetakStruk(800)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
