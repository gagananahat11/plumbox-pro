let nameInput = document.querySelector(".name-field");
let phoneInput = document.querySelector(".phone-field");
let serviceInput = document.querySelector(".service-field");

let submitBtn = document.querySelector(".form-submit-button");
let message = document.querySelector(".message");

submitBtn.addEventListener("click", (e) => {

    e.preventDefault();

    let name = nameInput.value.trim();
    let phone = phoneInput.value.trim();
    let service = serviceInput.value;

    if (name === "") {
        message.innerText = "Name is required";
        return;
    }

    if (phone === "") {
        message.innerText = "Phone number is required";
        return;
    }

    if (phone.length !== 10) {
        message.innerText = "Phone number must be 10 digits";
        return;
    }

    if (service === "") {
        message.innerText = "Please select a service";
        return;
    }

    message.innerText = "Form submitted successfully ";

    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Service:", service);

});