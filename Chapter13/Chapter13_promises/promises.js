const myPromise = new Promise((resolve, reject) => {//setup a promise
    resolve("Start Counting");
   });
   function counter(val){//create a function named counter
    console.log(val);
   }
   myPromise//return the values
    .then(value => {counter(value); return "one"})
    .then(value => {counter(value); return "two"})
    .then(value => {counter(value); return "three"})
    .then(value => {counter(value);});