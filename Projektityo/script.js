let products = {
  data: [
    {
      productName: "Miesten luistimet kokoa 42, Bauer",
      category: "winter",
      price: "8",
      image: "https://shop.hockeybase.fi/ISA_HB/88912062-_0_lim_full.jpg",
    },
    {
      productName: "Salibandymailoja",
      category: "indoor",
      price: "5",
      image: "https://yle.fi/aihe/sites/aihe/files/migrated/kkuluttaja/KUN_saba_viuhka.jpg",
    },
    {
      productName: "Naisten laskettelusukset, pituus 156cm",
      category: "winter",
      price: "15",
      image: "https://www.lakeussport.fi/WebRoot/vilkasfi02/Shops/2016112815/5873/6A4D/EA9C/58DE/55F5/0A28/100A/0BCC/Chica_2.jpg",
    },
    {
      productName: "Kajakki",
      category: "water",
      price: "30",
      image: "https://www.netrauta.fi/media/catalog/product/cache/2ef38d9c10cbab2cffdf4552e8a5efdc/k/a/kajakki-lyfco-390x60cm-taitettava-punainen-1.jpg",
    },
    {
      productName: "Käsipainot 4-20kg",
      category: "other",
      price: "25",
      image: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      productName: "Miesten maastopyörä",
      category: "cycling",
      price: "40",
      image: "https://images.unsplash.com/photo-1575585269294-7d28dd912db8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      productName: "Rullaluistimet kokoa 39",
      category: "other",
      price: "4",
      image: "https://images.unsplash.com/photo-1615670319396-d2ce67c79abd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1929&q=80",
    },
    {
      productName: "Koripallo, Wilson",
      category: "indoor",
      price: "5",
      image: "https://images.unsplash.com/photo-1640576905072-8181534f83ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
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
  let rentButton = document.createElement("button");
  rentButton.classList.add("rent-button");
  rentButton.innerText = "Vuokraa tuote";
  rentButton.addEventListener("click", function() {
    window.location.href = 'rental.html'; // change the URL to your rental form page
  });
  container.appendChild(rentButton);

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
