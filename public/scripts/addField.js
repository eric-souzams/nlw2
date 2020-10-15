//Find the button
document.querySelector("#add-time").addEventListener('click', cloneField);

//When click on button
function cloneField() {
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

  const fields = newFieldContainer.querySelectorAll('input');
  
  fields.forEach(function(field) {
    field.value = "";
  })

  document.querySelector('#schedule-items').appendChild(newFieldContainer);
}