$(document).ready(function(){
document.querySelector('.phone').addEventListener('keyup', 
    function(){this.value = this.value.replace(/[A-Za-zА-Яа-яЁё]/g, '');
});
document.querySelector('.name').addEventListener('keyup', 
    function(){this.value = this.value.replace(/[A-Za-z\d]/g, '');
});
$('#contactForm input[type=email]').on('blur', function () {
  let email = $(this).val();
  
  if (email.length > 0
  && (email.match(/.+?\@.+/g) || []).length !== 1) {
    console.log('invalid');
    alert('Вы ввели некорректный e-mail!');
  } else {
    console.log('valid');
  }
});



});