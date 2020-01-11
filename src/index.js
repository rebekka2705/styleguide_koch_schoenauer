import "./styles/style.scss"


var links = document.querySelector(".navigation__items");
links = Array.from(links);

links.forEach( link => link.addClickListener("click", toggleNavClass(link)));

function toggleNavClass(link) {
  console.log("hello");
  if(link.className == "navigation__items--non-active"){
    link.classList.remove("navigation__items--non-active");
    link.classList.add("navigation__items--active");
  }
}