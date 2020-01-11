import "./styles/style.scss";


  var nav_links = document.querySelectorAll(".navigation__item");
  nav_links = Array.from(nav_links);

  function toggleNavClass(e) {
    if(!e.target.className.includes("navigation__item--active")){
      let active = document.querySelector(".navigation__item--active");
      active.classList.remove("navigation__item--active");
      e.target.classList.add("navigation__item--active")
    }
  }

  nav_links.forEach( link => link.addEventListener("click", toggleNavClass));


