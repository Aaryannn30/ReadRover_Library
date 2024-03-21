const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item => {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i => {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});






// TOGGLE SIDEBAR
function logpop() {
	const modal = document.querySelector("#modal");
	const openModal = document.querySelector(".open-button");
	const closeModal = document.querySelector(".close-button");

	openModal.addEventListener("click", () => {
		modal.showModal();
	});

	closeModal.addEventListener("click", () => {
		modal.close();
	});
}

// const menuBar = document.querySelector('#content nav .bx.bx-menu');
// const sidebar = document.getElementById('sidebar');

// // menuBar.addEventListener('click', function () {
// // 	sidebar.classList.toggle('hide');
// // })


// function genreMenu() {
// 	let genMenu = document.getElementById("genMenu")
// 	genMenu.classList.toggle("open-genre");
// }


// // for Logout Pop-Up

// const section = document.querySelector("section"),
// 	overlay = document.querySelector(".overlay"),
// 	showBtn = document.querySelector(".show-modal"),
// 	closeBtn = document.querySelector(".close-btn");

// showBtn.addEventListener("click", () => section.classList.add("active"));

// overlay.addEventListener("click", () =>
// 	section.classList.remove("active")
// );

// closeBtn.addEventListener("click", () =>
// 	section.classList.remove("active")
// );
