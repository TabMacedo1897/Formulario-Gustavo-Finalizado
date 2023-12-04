function checkInputs() {
    const inputs = document.querySelectorAll('.form-control input');
    inputs.forEach(input => {
        if (input.value.trim() === "") {
            setErrorFor(input, "Este campo é obrigatório");
        } else {
            setSuccessFor(input);
        }
    });
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
    small.style.visibility = 'visible';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function removeError(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control';
    const small = formControl.querySelector('small');
    small.innerText = '';
    small.style.visibility = 'hidden';
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('form').addEventListener('submit', function (e) {
        e.preventDefault();
        window.location.reload();
        checkInputs();
    });
});

const inputs = document.querySelectorAll('.form-control input');
inputs.forEach(input => {
    input.addEventListener('blur', checkInputs);
    input.addEventListener('focus', function () {
        removeError(input);
    });
});
