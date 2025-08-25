const toggleBtn = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const closBtn = document.querySelector(".close-btn");
const sidebarClasses = sidebar.classList;

// console.log(sidebarClasses);
toggleBtn.addEventListener("click", () => {
  sidebarClasses.toggle("show-sidebar");
});

closBtn.addEventListener("click", () => {
  sidebarClasses.remove("show-sidebar");
  console.log(sidebarClasses);
});
