
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
});







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
});





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
};


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
});



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
});


//Mark noti as read
const unreadMessages = document.querySelectorAll('.unread');
const unreadMessagesCount = document.querySelectorAll('.num');
const markAll = document.getElementById('mark-as-read');

unreadMessagesCount.forEach(el => {
	el.innerText = unreadMessages.length;
  });
  
  unreadMessages.forEach((message) => {
	message.addEventListener('click', () => {
	  message.classList.remove('unread');
	  const newUnreadMessages = document.querySelectorAll('.unread');
	  
	  // Update all elements with the class 'num'
	  unreadMessagesCount.forEach(el => {
		el.innerText = newUnreadMessages.length;
	  });
	});
  });

//Mark all read
markAll.addEventListener('click', () => {
  unreadMessages.forEach((message) =>{
	message.classList.remove('unread');
  });
  const newUnreadMessages = document.querySelectorAll('.unread');
  unreadMessagesCount.innerHTML = newUnreadMessages.length;
});


//Show noti popup
function toggleDropdown(event) {
	event.preventDefault();
	event.stopPropagation(); // Prevent the click from bubbling up
	$(event.currentTarget).siblings(".dropdown").toggleClass("active");
}

function closeDropdown(event) {
	if (!$(event.target).closest('.notification').length) {
		$(".dropdown").removeClass("active");
	}
}