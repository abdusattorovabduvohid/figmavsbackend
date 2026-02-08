// form.addEventListener("submit", async (e) => {
//   e.preventDefault();

//   console.log("submit qilindi", e);

//   const f = new FormData(e.target);

//   console.log(f);

//   try {
//     const res = await fetch("http://localhost:5000/products", {
//       method: "POST",
//       body: f,
//     });

//     const resData = await res.json();

//     console.log(resData);
//   } catch (err) {
//     console.log("err", err);
//   }
// });
