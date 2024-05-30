/**
 * Gère l'affichage et les interactions de la page de contact
 */
const currentPage = 'contact';

if (document.body.classList.contains(`${currentPage}`)) {

console.log(`Is Page => '${currentPage}'`);

    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');
    const submitForm = document.querySelector('.form');


    submitForm.addEventListener('submit',(e) =>{

    e.preventDefault();

    // const submitTrigger = e.submitter;
  
    if(!emailCheck(emailInput) | !messageCheck(messageInput) ){

        console.warn('Form Validation Wrong');

    } else {

        confirmationForm(e.target);

        formDataStorage(e.target);

        console.log('Form Validation OK');

    }

});

}





function emailCheck(inputElement) {

    if (inputElement !== null) {

        let inputValue = inputElement?.value;

        const pattern = "[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}";
        const regEx = new RegExp(pattern);

        if (regEx.test(inputValue)) {

            console.log(`GOOD Value of Email => ${inputValue}`);

            return true;

        } else {

            console.error(`BAD Value of  Email => ${inputValue}`);

            return false;
        }

    }
}

function messageCheck(inputElement) {

    if (inputElement !== null) {

        let inputValue = inputElement?.value;

        const minimalLength = 5 ;

        if (inputValue.length > minimalLength) {

            console.log(`GOOD Value of Message => ${inputValue}`);

            return true;

        } else {

            console.error(`BAD Value of Message => ${inputValue}`);
            
            return false;
        }

    }
}

function formDataStorage(formElement) {

    let formDatas = new FormData(formElement);

    const copyDatas = Object.fromEntries(formDatas);

    localStorage.setItem(`form-${currentPage}`,JSON.stringify(copyDatas));

}

function confirmationForm(formElement) {

    let confirmation = document.createElement('div');
    confirmation.classList.add('success');
    confirmation.textContent = ` Formulaire faussement envoyé, bien joué 👌`;

    formElement.append(confirmation)

}


