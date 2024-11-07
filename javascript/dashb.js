document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    alert('Thank you for your message! We will get back to you soon.');
    this.reset(); // Reset the form fields after submission
});
// Optional JavaScript for additional interactivity
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.backgroundColor = '#b2dfdb';
    });

    card.addEventListener('mouseout', () => {
        card.style.backgroundColor = '#ffffff';
    });
});


function toggleDrawer() {
    const drawer = document.getElementById('drawer');
    if (drawer.style.left === '0px') {
        drawer.style.left = '-250px'; // Hide drawer
    } else {
        drawer.style.left = '0px'; // Show drawer
    }
}

function loadPage(page) {
    const mainContent = document.getElementById('main-content');
    fetch(page)
        .then(response => response.text())
        .then(data => {
            mainContent.innerHTML = data;
            // Optional: Hide the drawer after loading the page
            toggleDrawer();
        })
        .catch(error => {
            console.error('Error loading page:', error);
            mainContent.innerHTML = '<h1>Error loading page.</h1>';
        });
}
/*deposits*/
const conversionRate = 0.007;
function convertToUSD(){
	const kshAmount = document.getElementById("amount").value;
	const usdAmount = (kshAmount * conversionRate).toFixed(2);
	document.getElementById("usd-amount").textContent = usdAmount;
}

function submitDeposit(){
	const amount = document.getElementById("amount").value;
	const usdAmount = (kshAmount * conversionRate).toFixed(2);

	if (amount) {
		alert('Deposit KSH ${amount} (USD ${usdAmount}) via MPESA.');
	}
	else{
		alert('Please enter anamount');
	}
}
/*withdraw*/
const minimumAmount = 5;

function submitWithdrawal() {
    const amount = document.getElementById("withdraw-amount").value;
    
    if (amount < minimumAmount) {
        alert(`The minimum withdrawal amount is USD ${minimumAmount}.`);
    } else {
        alert(`You have successfully requested a withdrawal of USD ${amount} from MAIN BALANCE.`);
    }
}

/*bout*/
function toggleAnswer(answerId) {
  const answer = document.getElementById(answerId);
  answer.style.display = answer.style.display === "none" || answer.style.display === "" ? "block" : "none";
}
/////
function enableEdit() {
  const profileItems = document.querySelectorAll('.profile-item .value');
  profileItems.forEach(item => {
    // Change the text content to an input field
    const currentText = item.textContent;
    item.innerHTML = `<input type="text" value="${currentText}" class="editable-field">`;
  });

  // Change button to save changes
  const editButton = document.getElementById('edit-btn');
  editButton.textContent = 'Save Changes';
  editButton.setAttribute('onclick', 'saveChanges()');
}

// Function to save the changes after editing
function saveChanges() {
  const editableFields = document.querySelectorAll('.editable-field');
  editableFields.forEach(field => {
    const parentItem = field.closest('.profile-item');
    parentItem.querySelector('.value').textContent = field.value;
  });

  // Change button back to edit
  const editButton = document.getElementById('edit-btn');
  editButton.textContent = 'Edit Profile';
  editButton.setAttribute('onclick', 'enableEdit()');
}

// Add event listener to Edit Profile button on load
document.addEventListener('DOMContentLoaded', () => {
  const editButton = document.getElementById('edit-btn');
  editButton.addEventListener('click', enableEdit);
});
