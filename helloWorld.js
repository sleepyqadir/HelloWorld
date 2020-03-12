let str = "";
let iterator = 65;

///HELLO

//H
while (String.fromCodePoint(iterator) !== "Z") {
  if (String.fromCodePoint(iterator) === "H") {
    str += String.fromCodePoint(iterator);
  }
  iterator++;
}
//E
iterator = 65;
while (String.fromCodePoint(iterator) !== "Z") {
  if (String.fromCodePoint(iterator) === "E") {
    str += String.fromCodePoint(iterator);
  }
  iterator++;
}
//L
iterator = 65;
while (String.fromCodePoint(iterator) !== "Z") {
  if (String.fromCodePoint(iterator) === "L") {
    str += String.fromCodePoint(iterator);
  }
  iterator++;
}
//L
iterator = 65;
while (String.fromCodePoint(iterator) !== "Z") {
  if (String.fromCodePoint(iterator) === "L") {
    str += String.fromCodePoint(iterator);
  }
  iterator++;
}
//O
iterator = 65;
while (String.fromCodePoint(iterator) !== "Z") {
  if (String.fromCodePoint(iterator) === "O") {
    str += String.fromCodePoint(iterator);
  }
  iterator++;
}

// space

str += String.fromCodePoint(32);

//WORLD

//W
iterator = 65;
while (String.fromCodePoint(iterator) !== "Z") {
  if (String.fromCodePoint(iterator) === "W") {
    str += String.fromCodePoint(iterator);
  }
  iterator++;
}
//O
iterator = 65;
while (String.fromCodePoint(iterator) !== "Z") {
  if (String.fromCodePoint(iterator) === "O") {
    str += String.fromCodePoint(iterator);
  }
  iterator++;
}
//R
iterator = 65;
while (String.fromCodePoint(iterator) !== "Z") {
  if (String.fromCodePoint(iterator) === "R") {
    str += String.fromCodePoint(iterator);
  }
  iterator++;
}
//L
iterator = 65;
while (String.fromCodePoint(iterator) !== "Z") {
  if (String.fromCodePoint(iterator) === "L") {
    str += String.fromCodePoint(iterator);
  }
  iterator++;
}
//D
iterator = 65;
while (String.fromCodePoint(iterator) !== "Z") {
  if (String.fromCodePoint(iterator) === "D") {
    str += String.fromCodePoint(iterator);
  }
  iterator++;
}

console.log(str);
