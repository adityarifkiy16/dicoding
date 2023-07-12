// !percobaan jika berhasil
// const json = '{"nama": "aditya", "hobby":"basket"}';
// try {
//   const user = JSON.parse(json);

//   console.log(user.nama);
//   console.log(user.hobby);
// } catch (error) {
//   console.log(error);
// }

// !percobaan jika gagal

// const gagal = "{bad json}";
// try {
//   const user = JSON.parse(gagal);
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
// }

// !percobaan jika error akan tetapi catch diabaikan

const json = '{"age": 20}';
try {
  const user = JSON.parse(json);

  /*
   * menggunakan keyword throw jika properties name tidak ada akan menghasilkan error
   * dan catch tidak diabaikan.
   */

  if (!user.name) {
    throw new SyntaxError("'name' is required");
  }

  console.log(user.name);
  console.log(user.age);
} catch (error) {
  /* 
    * Parameter error merupaka sebuah object dengan beberapa properties utama:
    ! name : Nama error
    ! message : pesan detail eror
    ! stack : urutan kejadian yang menyebabkan error 
    */
  console.log(error.name);
  console.log(error.message);
}
