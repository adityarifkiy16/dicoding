// lebih berfokus pada "what to solve"
// contohnya 

const mahasiswa = ['Aditya', 20, 'Genuk'];
const newMahasiswa = mahasiswa.map((name) => `${name}`);
console.log(newMahasiswa);

// daripada kita memikirkan bagaimana melakukan looping
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
const newNamesWithExcMark = [];
for(let i = 0; i < names.length; i++) {
  newNamesWithExcMark.push(`${names[i]}!`);
}

console.log(newNamesWithExcMark);