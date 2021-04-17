if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("./sw.js").then(
      function (registration) {
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      function (err) {
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}

/*auth.onAuthStateChanged(user => {
    const logout = document.getElementById('logout-btn');
    const login = document.getElementById('login-btn');
    if (user){
        console.log("user logged in: ", user.email);
        //  login.style.display = 'none';
        // logout.style.display = 'block';
    }else{
        console.log("user logged out");
        //   logout.style.display = 'none';
        //  login.style.display = 'block';

    }
}); */

function enableFullscreen(element) {
  alert("powinno sie wydarzyc");
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

//logout
const logout = document.getElementById("logout-btn");
if (document.body.contains(logout)) {
  logout.addEventListener("click", (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
      window.location.href = "./index.html";
    });
  });
}

const carouselImages = document.querySelectorAll("[data-fullscreen]");
for (i = 0; i < carouselImages.length; i++) {
  alert(i + " dodajemy");
  carouselImages[i].addEventListener("click", enableFullscreen);
}
