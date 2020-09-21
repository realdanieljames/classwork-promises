// 1.
// Create a promise called myFirstPromise
const myPromise = new Promise( (resolve, reject)=>{
  // Inside the promise
  // Create a boolean variable check and set it to true
  let booleanValue = true

  // Create a variable rand and it should calculate a random number between 1 and 10
  let rand = Math.floor((Math.random() * 10) +1);

  // If the check boolean is true it should resolve with the
  // result of a random number between one and ten
  if(booleanValue){
    setTimeout( ()=> {

      resolve(rand);
    },2000)
  }
  // if the check boolean is false, it should reject with
  // a string that says: Cannot computer random number
  else {
    setTimeout( ()=>{

      reject('cannot computer random number')
    }, 2000);
  }
  // Both resolve and reject should only occur after 2 seconds
  
}
);

// Now call the promise you created and chain your thenables.
myPromise.then((rand)=>{
  // In your first thenable
  // console.log('I have my random number <the number> and I will multiply it by 5')
  // Multiply your random number by 5 and pass the data to the next thenable
  console.log(`i have my random number ${rand} and i will multiply it by 5`)
  let result = rand * 5
  return result
})

// In your second thenable log a String
// that says `Here is the result of my random number multiplied
// by 5: < place number result here>`
.then((result)=>{
  console.log(`Here is the result of my random number multiplied by 5: ${result}`)

})




// 2.
// create a function called getDataPromise that returns a promise
// inside the function create an error variable and set it to boolean false
// create a conditional that handles the rejection if there is an error with a message 'Something went wrong'
// Create a set timeout function that after 4 seconds returns the data (we are mimicking a 3rd party API call)

// consume your promise
// take the result and log the data
// take data and output 'Hello Joe Peters' for each object
// This should be 3 separate steps
// Handle the error in case there is one
// Test by setting your error variable to false then true

let data = [
  { firstName: 'Joe', lastName: 'Peters' },
  { firstName: 'Doug', lastName: 'Lawson' },
  { firstName: 'Sandra', lastName: 'Mathers' },
];


let getDataPromise = ()=>{
  
  return new Promise( (resolve, reject)=>{
    let error = false;
    if(error){
      reject(`something went wrong`)
    }
    else {
      setTimeout( ()=>{
        resolve(data)
      }, 4000)
    }
    

  })
};

getDataPromise.then((data)=>{

})



