
const formData = {username: '', email: '', phone: '', data: '', comment: ''}
const modal_form = document.getElementById("modal");
modal_form.addEventListener("submit", function submitForm(event) {
    event.preventDefault();
    const user_name = modal_form.elements["name"].value;
    const user_email = modal_form.elements["email"].value;
    const user_phone = modal_form.elements["phone"].value;
    const user_data = modal_form.elements["data"].value;
    const user_comment = modal_form.elements["comment"].value;

    if (!user_name || !user_email || !user_comment) {
        alert('Заполните все обязательные поля.');
        return;
    }
    if (!/^\d+$/.test(user_phone)) {
        alert('Телефон должен содержать только цифры.');
        return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(user_email)) {
        alert('Введите корректный e-mail.');
        return;
    }
    formData.username = user_name;
    formData.email = user_email;
    formData.phone = user_phone;
    formData.data = user_data;
    formData.comment = user_comment;

    function PrintData() {
        console.log("Имя: ", user_name);
        console.log("Почта: ", user_email);
        console.log("Телефон: ", user_phone);
        console.log("Дата: ", user_data);
        console.log("Комментарий: ", user_comment);
    }

    PrintData();
});