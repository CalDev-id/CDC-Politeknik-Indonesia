// =========================
// ===== Profil Page =======
// =========================

// Show Form Isian with Clicking Input Header

const inputHeader = document.querySelectorAll(".dataDiri .inputHeader");
const sectionProfil = document.querySelectorAll(".dataDiri section");
const iconArrow = document.querySelectorAll(
	".inputHeader .fillInfo .iconArrow img"
);
inputHeader.forEach((el) => {
	el.addEventListener("click", () => {
		if (el.classList.contains("diri")) {
			sectionProfil[0].classList.toggle("tampil");
			iconArrow[0].classList.toggle("rotate");
		}
		if (el.classList.contains("pendidikan")) {
			sectionProfil[1].classList.toggle("tampil");
			iconArrow[1].classList.toggle("rotate");
		}
		if (el.classList.contains("cv")) {
			sectionProfil[2].classList.toggle("tampil");
			iconArrow[2].classList.toggle("rotate");
		}
	});
});

// Add Data Pendidikan
const btnAddSchool = document.querySelector(".addDataPendidikan .btnAddSchool");
const closeBtn = document.querySelector(
	".addDataPendidikan .formParent .closeBtn img"
);
const addDataPendidikan = document.querySelector(".addDataPendidikan");
const parentForm = document.querySelector(".addDataPendidikan .formParent");

function formParent() {
	return `<div class="formParent">
	<select name="" id="">
		<option value="none" disabled selected>-- Jenjang --</option>
		<option value="SD">SD</option>
		<option value="SMP">SMP</option>
		<option value="SMU">SMU</option>
		<option value="PTN_PTS">Perguruan Tinggi</option>
	</select>
	<div class="formIsian">
		<input
			type="text"
			name=""
			id="namaSekolah"
			placeholder="Nama Sekolah"
		/>
		<input
			type="text"
			name=""
			id="kotaKab"
			placeholder="Kota / Kabupaten"
		/>
		<input
			type="number"
			name=""
			id="tahunMasuk"
			placeholder="Tahun Masuk"
		/>
		<input
			type="number"
			name=""
			id="tahunLulus"
			placeholder="Tahun Lulus"
		/>
	</div>
	<div class="closeBtn" onclick="removeParent(this)">
		<img
			src="cross.png"
			alt=""
			width="30px"
			height="30px"
		/>
	</div>
</div>`;
}

btnAddSchool.addEventListener("click", () => {
	btnAddSchool.insertAdjacentHTML("beforebegin", formParent());
	// if (parentForm.length <= 0) {
	// } else {
	// 	parentForm.insertAdjacentHTML("afterend", formParent());
	// }
});

function removeParent(el) {
	el.parentElement.style.display = "none";
}

// Catch Data From Local Storage
const helloUserName = document.querySelector(
	".navBox .helloSection .userHello span"
);
const helloUserEmail = document.querySelector(".navBox .helloSection .email");
const fullName = document.querySelector(".boxProfil .commonInfo .name p");
const userName = document.querySelector(".boxProfil .commonInfo .userName p");
const emailUser = document.querySelector(".boxProfil .commonInfo .email p");
const passUser = document.querySelector(".boxProfil .commonInfo .passWord p");

let user_pass = {};
// if (!tempRegister) {
// 	tempRegister = [];
// }
let tempRegister = [];
function checkWhoIsLogin() {
	tempRegister = JSON.parse(localStorage.getItem("STORAGE_REGISTER"));
	for (let i = 0; i < tempRegister.length; i++) {
		if (user_pass["username"] == tempRegister[i].username) {
			helloUserName.innerHTML = tempRegister[i].nama;
			fullName.innerHTML = tempRegister[i].nama;
			userName.innerHTML = tempRegister[i].username;
			emailUser.innerHTML = tempRegister[i].email;
			helloUserEmail.innerHTML = tempRegister[i].email;
			let password = tempRegister[i].password;
			let pass = "*";
			for (let j = 1; j < password.length; j++) {
				pass += "*";
			}
			passUser.innerHTML = pass;
		}
		// console.log(tempRegister[i]);
	}
}

if ((temp = localStorage.getItem("USER_PASS"))) {
	user_pass = JSON.parse(temp);
	checkWhoIsLogin();
	console.log(user_pass);
	console.log(tempRegister);
}

// Log Out Switching User
const logOutBtn = document.querySelector(".menu a.logOut");

logOutBtn.addEventListener("click", () => {
	localStorage.removeItem("USER_PASS");
	window.open("index.html", "_self");
});
