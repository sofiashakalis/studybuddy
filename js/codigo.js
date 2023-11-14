// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true,
  'albumLabel': "Image %1 of %2",
  'maxWidth' : 300,
  'positionFromTop': 250,
  'imageFadeDuration': 1500
})

