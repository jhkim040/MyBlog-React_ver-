const hideMenuIcon = document.querySelector(".hideMenu");
const sideCategory = document.getElementById("sideCategory");

hideMenuIcon.onclick = () => {
  if (sideCategory.style.display == "none") {
    sideCategory.style.display = "block";
  } else {
    sideCategory.style.display = "none";
  }
};
