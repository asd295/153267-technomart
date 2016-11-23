var btnWrite = document.querySelector(".writetous-btn");
var popupWrite = document.querySelector(".popup-writetous");
var closeWrite = document.querySelector(".popup-writetous-close");
var closeWriteBtn = document.querySelector(".write-reset");
var formWrite = document.querySelector(".popup-writetous form");
var nameWrite = document.querySelector(".popup-writetous [name=name]");
var emailWrite = document.querySelector(".popup-writetous [name=email]");
var textareaWrite = document.querySelector(".popup-writetous textarea");
var storage = localStorage.getItem("name")
var sendWrite = document.querySelector(".popup-writetous .write-send");

var btnAddcart = document.querySelectorAll(".buy");
var popupAddcart = document.querySelector(".popup-addcart");
var closeAddcart = document.querySelector(".popup-addcart-close");
var closeAddcartBtn = popupAddcart.querySelector(".addcart-btn-continue")

var btnMap = document.querySelector(".contact-map");
var popupMap = document.querySelector(".popup-map");
var closeMap = document.querySelector(".popup-map-close");


//  popup Write

if (btnWrite) {
  btnWrite.addEventListener("click", function(event) {
    event.preventDefault();
    popupWrite.classList.add("popup-show");
    setTimeout(function(event) {
      popupWrite.classList.remove("popup-show");
      popupWrite.classList.add("popup-static");
    }, 650);
    if (storage) {
      nameWrite.value = storage;
      emailWrite.focus();
    } else {
      nameWrite.focus();
    }
  });

  formWrite.addEventListener("submit", function(event) {
    if (!nameWrite.value || !emailWrite.value || !textareaWrite.value) {
      event.preventDefault();
      popupWrite.classList.add("popup-error");
      setTimeout(function(event) {
        popupWrite.classList.remove("popup-error");
      }, 650);
    } else {
      localStorage.setItem("login", nameWrite.value);
    }
  });

  closeWriteBtn.addEventListener("click", function(event) {
    event.preventDefault();
    popupWrite.classList.remove("popup-show");
    popupWrite.classList.remove("popup-static");
    popupWrite.classList.remove("popup-error");
  });

  closeWrite.addEventListener("click", function(event) {
    event.preventDefault();
    popupWrite.classList.remove("popup-show");
    popupWrite.classList.remove("popup-static");
    popupWrite.classList.remove("popup-error");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popupWrite.classList.contains("popup-show")) {
        popupWrite.classList.remove("popup-show");
      }
      if (popupWrite.classList.contains("popup-static")) {
        popupWrite.classList.remove("popup-static");
      }
    }
  })
}

//  popup Addcart

if (btnAddcart) {
  Array.prototype.forEach.call(btnAddcart, function(curr){
    curr.addEventListener("click", function() {
      event.preventDefault();
      popupAddcart.classList.add("popup-addcart-show");
      return false;
    }, false);
  });

  closeAddcart.addEventListener("click", function(event) {
    event.preventDefault();
    popupAddcart.classList.remove("popup-addcart-show");
  });

  closeAddcartBtn.addEventListener("click", function(event) {
    event.preventDefault();
    popupAddcart.classList.remove("popup-addcart-show");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popupAddcart.classList.contains("popup-addcart-show")) {
        popupAddcart.classList.remove("popup-addcart-show");
      }
    }
  })
}

//  popup Map

if (btnMap) {
  btnMap.addEventListener("click", function(event) {
    event.preventDefault();
    popupMap.classList.add("popup-map-show");
  });

  closeMap.addEventListener("click", function(event) {
    event.preventDefault();
    popupMap.classList.remove("popup-map-show");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popupMap.classList.contains("popup-map-show")) {
        popupMap.classList.remove("popup-map-show");
      }
    }
  })
}