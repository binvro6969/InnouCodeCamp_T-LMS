

//--------------------------------------------------------------------------------//
const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})



const radioButtons = document.querySelectorAll('input[name="select-size"]');
const sizeDescription = document.getElementById('size-description');

radioButtons.forEach((radioButton) => {
  radioButton.addEventListener('change', () => {
    if (radioButton.checked) {
      var radioValue = radioButton.value;
      var radioDes;
      
      if (radioValue == 'S') radioDes = "(L) 25cm x (W) 20cm x (H) 20cm"
      else if (radioValue == 'M') radioDes = "(L) 50cm x (W) 50cm x (H) 40cm"
      else if (radioValue == 'L') radioDes = "(L) 70cm x (W) 60cm x (H) 60cm"
      else if (radioValue == 'XL') radioDes = "(L) 170cm x (W) 120cm x (H) 100cm"

      sizeDescription.textContent = `${radioDes}`;
    }
  });
});