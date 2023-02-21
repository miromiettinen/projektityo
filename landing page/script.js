let products = {
  data: [
    {
      productName: "Miesten luistimet kokoa 42, Bauer",
      category: "winter",
      price: "8",
      image: "white-tshirt.jpg",
    },
    {
      productName: "Salibandymaila",
      category: "indoor",
      price: "5",
      image: "short-skirt.jpg",
    },
    {
      productName: "Naisten laskettelusukset, pituus 156cm",
      category: "winter",
      price: "15",
      image: "sporty-smartwatch.jpg",
    },
    {
      productName: "Kajakki",
      category: "water",
      price: "30",
      image: "knitted-top.jpg",
    },
    {
      productName: "Kuntopyörä",
      category: "other",
      price: "25",
      image: "black-leather-jacket.jpg",
    },
    {
      productName: "Miesten 29 tuumainen maastopyörä",
      category: "cycling",
      price: "40",
      image: "pink-trousers.jpg",
    },
    {
      productName: "Rullaluistimet kokoa 39",
      category: "other",
      price: "4",
      image: "brown-jacket.jpg",
    },
    {
      productName: "Koripallo, Wilson",
      category: "indoor",
      price: "5",
      image: "comfy-gray-pants.jpg",
    },
  ],
};

for (let i of products.data) {
  //Kortin luominen
  let card = document.createElement("div");
  //Kortille tulee valita kategoria
  card.classList.add("card", i.category, "hide");
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  let container = document.createElement("div");
  container.classList.add("container");
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  let price = document.createElement("h6");
  price.innerText = "€" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//Parametrien valinta
function filterProduct(value) {
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //Kaikkien korttien valinta
  let elements = document.querySelectorAll(".card");
  //Loopataan kaikki kortit läpi
  elements.forEach((element) => {
    //Näytä kaikki tuotteet mikäli valittuna "kaikki"
    if (value == "Kaikki") {
      element.classList.remove("hide");
    } else {
      //Tarkistetaan sisältääkö elementti kategorialuokan
      if (element.classList.contains(value)) {
        element.classList.remove("hide");
      } else {
        //Piilotetaan muut elementit jotka eivät täsmää kategoriaan
        element.classList.add("hide");
      }
    }
  });
}

//Hae näppäin
document.getElementById("search").addEventListener("click", () => {
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //Loopataan kaikki elementit
  elements.forEach((element, index) => {
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //Näytetään kortit, jotka kohtaavat ehdot
      cards[index].classList.remove("hide");
    } else {
      //Piilotetaan muut kortit
      cards[index].classList.add("hide");
    }
  });
});

window.onload = () => {
  filterProduct("Kaikki");
};