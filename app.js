// async function myFunc() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("hello");
//     }, 1000);
//   });
//   const error = true;
//   if (!error) {
//     const res = await promise;
//     return res;
//   } else {
//     await Promise.reject(new Error("Something went wrong"));
//   }
// }

// myFunc()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

async function getUsers() {
  // await response of fatch call
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  // Only peoceed once its resolved
  const data = await response.json();
  // Only peoceed once second promise is resolved
  return data;
}
getUsers().then((users) => console.log(users));
