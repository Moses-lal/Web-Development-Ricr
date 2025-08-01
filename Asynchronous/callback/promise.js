// function submit() {
//   const a = parseInt(document.getElementById("input1").value);
//   const b = parseInt(document.getElementById("input2").value);
//   const c = a + b;

//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (c > 100) reject("value > 100");
//       else resolve("First check passed");
//     }, 5000);
//   }).then(()=>{
//     console.log("yeh likhna cha rha hu")
//   }).catch(console.error);

//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (c > 200) reject("value > 200");
//       else resolve("Second check passed");
//     }, 5000);
//   }).then(console.log).catch(console.error);

//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (c > 300) reject("value > 300");
//       else resolve("Third check passed");
//     }, 5000);
//   }).then(console.log).catch(console.error);
// }

const SIRKACODE="yeh neeche  !! "; 



// let arpitsPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("I am Aprits Promise and rejecting now");
//   }, 5000);
// });

async function xyz(ID) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ID === 5) {
        reject("An Error Occured");
      } else {
        console.log("The Data is", ID);
        resolve("Success");
      }
    }, 5000);
  });
}

// xyz(1)
//   .then((res) => {
//     console.log(res);
//     return xyz(2);
//   })
//   .then((res) => xyz(3))
//   .then((res) => xyz(4))
//   .then((res) => xyz(5))
//   .then((res) => xyz(6))
//   .catch((rej) => console.log("Error 500"));

await xyz(1);
await xyz(2);
await xyz(3);
await xyz(4);
await xyz(5);
await xyz(6);