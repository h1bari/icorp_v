const EMAIL_REGEX =
    /^(?!.*\.{2,})(?!.*[-_%+]{2,})(?!^[^A-Za-z0-9]+)[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+(?:\.[A-Za-z-]+)+$/;
const NAME_REGEX = /^(?!.*\s)[A-Za-zА-Яа-яЁёІіЇїЄєҐґ][A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s]*(?<!\s)$/;
const TEL_REGEX = /^(\+38(050|063|066|067|068|093|095|096|097|099|098))\d{7}$/
const validateForm = (event) =>  {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let tel = document.getElementById("tel").value;
    let email = document.getElementById("_replyto").value;
    let isValid = true;

    document.getElementById("nameError").textContent = "";
    document.getElementById("telError").textContent = "";
    document.getElementById("emailError").textContent = "";

    if (!name.match(NAME_REGEX)) {
        document.getElementById("nameError").textContent = "Поле 'Ім'я' должно быть заполнено";
        isValid = false;
    }

    if (!tel.match(TEL_REGEX)) {
        document.getElementById("telError").textContent = "Введите корректный номер телефона в формате +38 (___) ____ ____";
        isValid = false;
    }

    if (!email.match(EMAIL_REGEX)) {
        document.getElementById("emailError").textContent = "Введите корректный адрес электронной почты";
        isValid = false;
    }
    if (isValid) {
        document.getElementById("myForm").submit();
    }

    return isValid;
}
