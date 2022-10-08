const currentDate = new Intl.DateTimeFormat("en-UK", {
    dateStyle: "full",
  }).format(new Date());
  
  document.querySelector(".date").innerHTML = currentDate;
  
  // Hamburger button toggle menu
  function toggleMenu() {
    document.querySelector(".nav-info").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
  }
  
  const menuButton = document.getElementById("hamburgerBtn");
  menuButton.onclick = toggleMenu;