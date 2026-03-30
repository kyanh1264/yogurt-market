function addProduct() {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const desc = document.getElementById("desc").value;

  db.collection("products").add({
    name: name,
    price: price,
    desc: desc,
    createdAt: new Date(),
  });

  alert("Uploaded!");
}

function displayProducts() {
  const list = document.getElementById("product-list");

  db.collection("products")
    .orderBy("createdAt", "desc")
    .onSnapshot((snapshot) => {
      list.innerHTML = "";

      snapshot.forEach((doc) => {
        const p = doc.data();

        list.innerHTML += `
          <div class="product">
            <h3>${p.name}</h3>
            <p>💰 ${p.price}</p>
            <p>${p.desc}</p>
          </div>
        `;
      });
    });
}

// run on load
displayProducts();
