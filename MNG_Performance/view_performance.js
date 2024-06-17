document.addEventListener('DOMContentLoaded', (event) => {
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

const viewButtons = document.querySelectorAll('.viewInforBtn');
viewButtons.forEach(button => {
	button.addEventListener('click', redirectToPage);
});

function redirectToPage() {
    window.location.href = "result.html"; 
}

//Drawing dash board static
	const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September','October','November','December'];
    const data = {
      labels: labels,
      datasets: [{
        label: 'Package/Month',
        data: [65, 59, 80, 81, 56, 55, 40,100,50,22,55,66],
       borderColor:'red',
       borderWidth:2
      },

      {
      label: 'Driver/Month',
      data: [32, 56, 32, 87, 45, 33, 67,32,87,23,56,23],
       borderColor:'blue',
       borderWidth:2

      }
    
    ]
    };
    const config = {
      type: 'line',
      data: data,
      options: {
        responsive:true
      }
	  
    };
    const myChart = new Chart(
      document.getElementById('myChart'),
      config
    );

// Drawing growing dash board

const growingData = {
	labels: [
		'Service 1',
		'Service 2',
		'Service 3',
		'Service 4',
		'Service 5'
	],
	datasets: [{
		label: 'Growing of month',
		data: [11, 16, 7, 3, 14],
		backgroundColor: [
			'rgb(255, 99, 132)',
			'rgb(75, 192, 192)',
			'rgb(255, 205, 86)',
			'rgb(201, 203, 207)',
			'rgb(54, 162, 235)'
		]
	}]
};

const growingConfig = {
	type: 'polarArea',
	data: growingData,
	options: {
		responsive: true
	}
};

const growingChart = new Chart(
	document.getElementById('myGrowingChart'),
	growingConfig
);

});