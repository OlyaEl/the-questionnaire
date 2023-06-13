const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
    // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
    // https://learn.javascript.ru/default-browser-action
    event.preventDefault();

    // Здесь твой код
    const sendButton = document.querySelector("#button");
    const resetButton = document.querySelector("#clear");
    const userName = document.querySelector("#name");
    const userSecondName = document.querySelector("#secondName");
    const userEmail = document.querySelector("#email");
    const userTelephoneNumber = document.querySelector("#phone");
    const agreement = document.querySelector("#agree");

    fetch('https://polinashneider.space/user', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer: OlyaEl'
            },
            body: JSON.stringify({
                "name": userName.value,
                "secondName": userSecondName.value,
                "phone": userTelephoneNumber.value,
                "email": userEmail.value,
                "agree": agreement.checked
            })
        })
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            console.log(data);
            alert(`${userName.value}, регистрация прошла успешно!`)
            form.reset();
        })
        .catch((err) => {
            alert(`${userName.value}, кажется, что-то пошло не так!`)
        })
})