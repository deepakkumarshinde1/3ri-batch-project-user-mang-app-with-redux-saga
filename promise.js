// promises
async function div(a = 0, b = 0) {
  if (b !== 0) {
    let result = a / b;
    return Promise.resolve(result);
  } else {
    return Promise.reject(error);
  }
}

console.log("--- start ---");

// macro task , micro taks
setTimeout(() => {
  console.log("timeout");
}, 0);

div(10, 0)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

console.log("--- end ---");

async function a() {
  try {
    let response = await fetch();
    let result = await response.json();
  } catch (error) {
    console.log(error);
  }
}
