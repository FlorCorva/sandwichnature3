"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const heroSection = document.querySelector(".hero");
  const images = [
    "./assets/images/hero-bg.jpg", // Agrega la ruta de tus imágenes aquí
    "./assets/images/hero-bg2.jpg", // Agrega más rutas de imágenes si es necesario
    "./assets/images/hero-bg3.jpg", // Agrega más rutas de imágenes si es necesario
  ];
  let currentImageIndex = 0;

  function changeBackgroundImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const imageUrl = images[currentImageIndex];
    heroSection.style.backgroundImage = `url('${imageUrl}')`;
  }

  setInterval(changeBackgroundImage, 4000); // Cambiar cada 3 segundos (3000 milisegundos)
});

// // Obtener el botón por su ID
// const saberMasButton = document.getElementById("saberMas");

// // Agregar un evento de clic al botón
// saberMasButton.addEventListener("click", function () {
//   // Redirigir a la página web al hacer clic en el botón
//   window.open("https://www.embutidosestevez.es/", "_blank");
// });

document.addEventListener("DOMContentLoaded", function () {
  // Obtén todos los botones con el atributo data-pdf
  var botonesDescargarPDF = document.querySelectorAll("[data-pdf]");

  // Agrega un evento de clic a cada botón
  botonesDescargarPDF.forEach(function (boton) {
    boton.addEventListener("click", function () {
      // Obtiene la URL del PDF desde el atributo data-pdf
      var urlPDF = boton.getAttribute("data-pdf");

      console.log("URL del PDF:", urlPDF); // Agrega esta línea de console.log

      // Crea un elemento <a> oculto para descargar el PDF
      var link = document.createElement("a");
      link.href = urlPDF;
      link.target = "_blank"; // Abre en una nueva ventana o pestaña

      // Establece el atributo "download" para forzar la descarga
      link.download = "documento.pdf"; // Puedes personalizar el nombre

      // Simula un clic en el enlace para iniciar la descarga
      link.click();
    });
  });
});

// document.addEventListener('DOMContentLoaded', function() {
//   var botonDescargarPDF = document.getElementById('descargarPDF');

//   botonDescargarPDF.addEventListener('click', function() {
//       var urlPDF = 'assets/archivos/2023.08.16 catálogo v3.pdf';
//       var link = document.createElement('a');
//       link.href = urlPDF;
//       link.download = '2023.08.16 catálogo v3.pdf';
//       link.click();
//   });
// });

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-menu-toggle-btn]");

menuToggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    menuToggleBtn.classList.toggle("active");
  });
}

/**
 * header sticky & back to top
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

/**
 * search box toggle
 */

const searchBtn = document.querySelector("[data-search-btn]");
const searchContainer = document.querySelector("[data-search-container]");
const searchSubmitBtn = document.querySelector("[data-search-submit-btn]");
const searchCloseBtn = document.querySelector("[data-search-close-btn]");

const searchBoxElems = [searchBtn, searchSubmitBtn, searchCloseBtn];

for (let i = 0; i < searchBoxElems.length; i++) {
  searchBoxElems[i].addEventListener("click", function () {
    searchContainer.classList.toggle("active");
    document.body.classList.toggle("active");
  });
}

/**
 * move cycle on scroll
 */

const deliveryBoy = document.querySelector("[data-delivery-boy]");

let deliveryBoyMove = -80;
let lastScrollPos = 0;

window.addEventListener("scroll", function () {
  let deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;

  if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
    let activeScrollPos = window.scrollY;

    if (lastScrollPos < activeScrollPos) {
      deliveryBoyMove += 1;
    } else {
      deliveryBoyMove -= 1;
    }

    lastScrollPos = activeScrollPos;
    deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
  }
});
