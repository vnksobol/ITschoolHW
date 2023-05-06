// 5. While
let answers = ["Да", "Скорее да", "Затрудняюсь ответить", "Скорее нет", "Нет"];
let i = 0;
while (answers[i]) {
  i++; 
}
console.log("Варианты ответов: " + answers);

let wheel = 1;
while (wheel < 4) {
  // wheel = wheel + 1;
  wheel += 1;
  console.log("A vehicle usualy has " + wheel + " wheels");
}


// 7. Even:
for (let i = 1; i < 11; ++i)  {
    if (i % 2 == 1)
        continue;
    console.log(i);
}

// 9.
// for (let i = 0; i < 3; i++) { 
//   console.log(i);
// }

// 10.
// let i = 0;
// while (++i < 5) console.log(i);

// let i = 0;
// while (i++ < 5) console.log(i);
