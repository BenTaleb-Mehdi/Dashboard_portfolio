const menudropclose = document.querySelector(".dropmenuclose"),
  menu = document.querySelector(".menu"),
  main = document.querySelector(".main"),
  dropmenu = document.querySelector(".dropmenu");

menudropclose.addEventListener("click", () => {
  menu.classList.add("active");
  dropmenu.style.display = "block";
  main.classList.add("menu-hidden");
});
dropmenu.addEventListener("click", () => {
  menu.classList.remove("active");
  dropmenu.style.display = "none";
  main.classList.remove("menu-hidden");
});

const btnUserListe = document.querySelector(".clinetListebtn"),
  btnUser = document.querySelector(".btnUser");

btnUser.addEventListener("click", () => {
  btnUserListe.classList.toggle("showbtn");
});

const addUsers = document.querySelector(".addUsers"),
  contentUsers = document.querySelector(".contentUsers"),
  content = document.querySelector(".content"),
  invoiceUser = document.querySelector(".invoiceUser"),
  contentInvoiceUser = document.querySelector(".contentinvoiUser"),
  dashboardHome = document.querySelector(".dashboardHome"),
  AnalyeseUsers = document.querySelector(".AnalyeseUsers"),
  contentanalysesUsers = document.querySelector(".contentanalysesUsers");

function hideAllSections() {
  // Fixed function name
  content.classList.add("hidden");
  contentUsers.classList.add("hidden");
  contentInvoiceUser.classList.add("hidden"); // Fixed variable name
  contentanalysesUsers.classList.add('hidden')
}
dashboardHome.addEventListener("click", () => {
  hideAllSections();
  content.classList.remove("hidden");
});
addUsers.addEventListener("click", () => {
  hideAllSections(); // Corrected function name
  contentUsers.classList.remove("hidden");
});

invoiceUser.addEventListener("click", () => {
  hideAllSections(); // Corrected function name
  contentInvoiceUser.classList.remove("hidden"); // Fixed variable name
});

AnalyeseUsers.addEventListener("click", () => {
  hideAllSections(); // Corrected function name
  contentanalysesUsers.classList.remove("hidden"); // Fixed variable name
});

// Optionally show the default section
content.classList.remove("hidden");

//function for display navbar on all sectiones
function addCustomNavbar() {
  // Define the HTML structure for the navbar
  const navbarHTML = `
    <div class="navbar">
      <div class="dropmenu ">
        <i class="bx bx-menu-alt-left"></i>
      </div>
      <div class="startnav">
        <span></span>
      </div>
      <div class="endnav">
        <div class="notification"><i class="bx bxs-bell"></i></div>
        <div class="profileNav">
          <div class="proimg">
            <img src="imgMd.png" alt="Profile Picture" />
          </div>
          <div class="infoPro">
            <h2>Mr. Bentaleb</h2>
            <p>Full-stack Developer Admin</p>
          </div>
        </div>
      </div>
    </div>
  `;
 
  // Add the navbar to all sections dynamically
  const sections = document.querySelectorAll(
    ".contentUsers, .contentinvoiUser,.contentanalysesUsers"
  );

  sections.forEach((section) => {
    section.insertAdjacentHTML("afterbegin", navbarHTML);      
  });

  const showMenuButtons = document.querySelectorAll(".dropmenu i");

  showMenuButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Find the corresponding menu for this button
      menu.classList.remove("active");
      button.style.display = "block";
      main.classList.remove("menu-hidden");
      
    });
  });
}

// Call the function to add the navbar
addCustomNavbar();



