let cnt = 0; //create a global counter
function outputTime(val) {//Create a function that takes one argument and return the result of the new promise
  return new Promise((resolve) => {
    setTimeout(() => {
      cnt++;//increment the counter
      resolve(`x value ${val} counter:${cnt}`);
    }, 1000);
  });
}
async function aCall(val) {//second function
  console.log(`ready ${val} counter:${cnt}`);
  const res = await outputTime(val);
  console.log(res);
}
for (let x = 1; x < 10; x++) {
  aCall(x);//create a loop to iterate 10 times
}
