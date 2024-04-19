let str = "Helo my name is ahmed sayed kotb";

let newStr = str.split(" ");

let del = "";

for (let i = 0; i < newStr.length; i++) {
  setTimeout(() => {
    del += newStr[i] + " ";
    console.log(del);
  }, 500 * i);
}
