// const sentence = "hello there from lighthouse labs\n";
// let delay = 1000;

// sentence.split('').forEach((letter) => {
//   setTimeout (() => {
//       process.stdout.write(letter);
// }, delay);
// delay +=1000;

// });

const sentence = "hello there from lighthouse labs\n";

for (const char of sentence) {
  setTimeout(() => {
  }, 1000)
  process.stdout.write(char);
}