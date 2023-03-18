let button = document.getElementById("m-butt");

// three function
// function 1
function PromiseAPI1()
{
  return new Promise((resolve , reject) => {
    setTimeout(() => {
      resolve(
        fetch(" https://dummyjson.com/posts")
           .then((resp) => resp.json()).then((data) => {
            let innerData = data.posts;
            let id = innerData.map((posts => 
            document.getElementById("data-content")
            .innerHTML = `
            <div class = "inner-section-one">
            <div class = "inner-id">${posts.id}</div>
            <div class = "inner-title">${posts.title}</div>
            <div class = "inner-body">${posts.body}</div>
            <div class = "inner-tags">${posts.tags}</div>
            </div>`))
            document.getElementById("data-content").innerHTML = id;
           })
      )
    resolve = true;
    } , 1000)
  })
}
// promise 2
function PromiseAPI2()
{
    return new Promise((resolve , reject) => {
        setTimeout(() =>{
         resolve(
            fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data_two) => {
             let productData = data_two.products;
             console.log(productData);
             let p_id = productData.map((products) => 
             document.getElementById("data-content_two")
             .innerHTML = `
             <div class = "inner-section-one">
             <div class = "product-id">${ products.id}</div>
             <div class = "product-title">${products.title}</div>
             <div class = "product-description">${products.description}</div>
             <div class = "product-price">${products.price}</div>
             <div class = "product-discountPercentage">${products.discountPercentage}</div>
             </div>`);
            document.getElementById("data-content_two").innerHTML = p_id;
            })
         )
        resolve = true;
        }, 2000)
    })
}
// promise 3
function PromiseAPI3()
{
   return new Promise((resolve , reject) => {
    setTimeout(() => {
     resolve(
        fetch("https://dummyjson.com/todos")
        .then((res) => res.json())
        .then((data_three) => {
          let todos_data = data_three.todos;
          let t_c = todos_data.map((todos) => document.getElementById("data-content_three")
          .innerHTML = `
          <div class = "inner-section-one">
          <div class = "todos-id">${todos.completed}</div>
          <div class = "todos-title">${todos.id}</div>
          <div class = "todos-description">${todos.todo}</div>
          <div class = "todos-price">${todos.userId}</div>
          </div>`);
         document.getElementById("data-content_three").innerHTML = t_c;
        })
     )
     resolve = true;
    } , 3000)
 })
}
// Event listener for button
button.addEventListener("click" , () => {
  PromiseAPI1()
  .then((data1) => PromiseAPI2(data1))
  .then((data2) => PromiseAPI3(data2));
})