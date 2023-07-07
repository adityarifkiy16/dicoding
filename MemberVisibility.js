class Mahasiswa {
  #nim = null; //enclosing class

  constructor(nama, umur, jurusan) {
    this.nama = nama;
    this.umur = umur;
    this.jurusan = jurusan;
    this.#nim = `G.231.22.${this.#generateRandomNumber()}`;
  }

  get nim(){
    return this.#nim; 
  }

  set nim(nim){
    console.log("kamu ga boleh edit ini");
  }
  
  belajar(){
    console.log(`${this.nama} sedang belajar`);    
  }

  kenalan(){
    console.log(`nama saya ${this.nama}, umur saya ${this.umur}, jurusan ${this.jurusan}, nim ${this.nim}`)
  }
  
  #generateRandomNumber(){
    return `${Math.floor(Math.random() * 50 + 1)}`;
  }
}

const mahasiswa = new Mahasiswa('Aditya', 21, 'Teknik Informatika');
mahasiswa.belajar();
mahasiswa.kenalan();
