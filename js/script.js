



//This is for plus or minus the number of quanity of product

const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const inputField = document.getElementsByClassName ('cartNumber');

/** minusButton.addEventListener('click', event => {
  event.preventDefault();
  const currentValue = Number(inputField.value) || 0;
  if(currentValue < 1) {
    return 0
  } else {
    inputField.value = currentValue - 1;
  }

});**/

function minus(clicked_id) {
  //event.preventDefault();
  //var x = document.getElementById(clicked_id).nextElementSibling.innerHTML; 
return console.log('hello i am he', inputField);
const currentValue = Number(inputField.value) || 0;
if(currentValue < 1) {
  return 0
} else {
  inputField.value = currentValue - 1;
}
}
/**plusButton.addEventListener('click', event => {
  event.preventDefault();
  const currentValue = Number(inputField.value) || 0;
  inputField.value = currentValue + 1;
});*/

function addToCart(clicked_id) {
  console.log(clicked_id, 'clicked_id')
  const currentValue = Number(inputField.value) || 0;
  inputField.value = currentValue + 1;
}
