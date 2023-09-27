const handlePasswordSwitcher = function () {
    console.log("handlePasswordSwitcher executed");

    let passwordInput = document.querySelector('.js-password-input');
    passwordCheckbox = document.querySelector('.js-password-toggle-checkbox');

    passwordCheckbox.addEventListener('click', function(){
        if (passwordInput.type == 'password'){
            passwordInput.type = 'text'
        }
        else{
            passwordInput.type = 'password'
        }
    })
}

const init = function () {
    console.log('Script loaded!');

    // init password switcher
    handlePasswordSwitcher();

    // Other init functions here
}

init();