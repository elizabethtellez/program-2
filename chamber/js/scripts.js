function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
  document.querySelector(".navbar").classList.toggle("white");
  document.querySelector(".navbar").classList.toggle("no_border");
}
/*function background_border() {
  
}*/
const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;
