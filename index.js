function addEventListeners(id, modalNumber) {
  document.getElementById(id).addEventListener("click", function () {
    document.querySelector(".modal" + modalNumber).classList.add("open");
  });

  document
    .querySelector(".close" + modalNumber)
    .addEventListener("click", function () {
      document.querySelector(".modal" + modalNumber).classList.remove("open");
    });
}

for (let i = 1; i <= 7; i++) {
  addEventListeners("open" + i, i);
}

// dark/light theme

document.querySelector(".themetoggle").addEventListener("click", (event) => {
  event.preventDefault();
  if (localStorage.getItem("theme") === "light") {
    localStorage.removeItem("theme");
  } else {
    localStorage.setItem("theme", "light");
  }
  addLightClassToHtml();
});

function addLightClassToHtml() {
  try {
    if (localStorage.getItem("theme") === "light") {
      var pageWrapper = document.querySelector(".page-wrapper");
      if (pageWrapper) {
        pageWrapper.classList.add("light");
      }
      var header = document.querySelector(".header");
      if (header) {
        header.classList.add("light");
      }
      var footer = document.querySelector(".footer");
      if (footer) {
        footer.classList.add("light");
      }
      var links = document.querySelectorAll("a");
      links.forEach(function (link) {
        link.classList.add("light-text");
      });

      var buttons = document.querySelectorAll("button");
      buttons.forEach(function (button) {
        button.classList.add("light-text");
      });
      document.querySelector(".themetoggle span").textContent = "dark_mode";
    } else {
      var pageWrapper = document.querySelector(".page-wrapper");
      if (pageWrapper) {
        pageWrapper.classList.remove("light");
      }

      var header = document.querySelector(".header");
      if (header) {
        header.classList.remove("light");
      }
      var footer = document.querySelector(".footer");
      if (footer) {
        footer.classList.remove("light");
      }
      var links = document.querySelectorAll("a");
      links.forEach(function (link) {
        link.classList.remove("light-text");
      });
      var buttons = document.querySelectorAll("button");
      buttons.forEach(function (button) {
        button.classList.remove("light-text");
      });
      document.querySelector(".themetoggle span").textContent = "wb_sunny";
    }
  } catch (err) {}
}

addLightClassToHtml();
