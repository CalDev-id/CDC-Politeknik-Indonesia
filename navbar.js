// ===================================
// ======== Slider For Navbar ========
// ===================================

const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav .nav .navWithBtn .navigasi");

menuToggle.addEventListener("click", function () {
	nav.classList.toggle("slide");
});

// ==========================================
// ======== Styling Box Button Masuk ========
// ==========================================
let catchLocalStorage = JSON.parse(localStorage.getItem("USER_PASS"));
const btnMasuk = document.querySelector(".navWithBtn .logSignUp");

btnMasuk.addEventListener("click", () => {
	window.open("login.html", "_self");
});

function insertAvatarUser() {
	return `
   <img src="user (1).png" alt="" width="20px" height="20px">
							<p>${catchLocalStorage["username"]}</p>
   `;
}

if (catchLocalStorage) {
	// btnMasuk.style.backgroundColor = "transparent";
	btnMasuk.innerHTML = insertAvatarUser();
	btnMasuk.addEventListener("click", () => {
		window.open("profilPage.html", "_self");
	});
}

const logo = document.querySelector(".nav .logo");

logo.addEventListener("click", () => {
	window.open("index.html", "_self");
});
