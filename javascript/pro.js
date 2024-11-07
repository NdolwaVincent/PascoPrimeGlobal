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