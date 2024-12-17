document.addEventListener('DOMContentLoaded', function () {  
    const loginForm = document.getElementById('loginForm');  
    const registerForm = document.getElementById('registerForm');  
 
    // Регулярные выражения для проверки email и пароля  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;  
  
    loginForm.addEventListener('submit', function (e) {  
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;  
        const password = document.getElementById('loginPassword').value;  

        if (!emailPattern.test(email)) {  
            alert('Введите корректный email!');  
            return; 
        }  

        if (!passwordPattern.test(password)) {  
            alert('Пароль должен содержать минимум 6 символов, включая буквы и цифры!');  
            return;  
        }  
 
        console.log('Авторизация:', email, password);  
        alert('Вы успешно авторизовались!');   
        const modal = bootstrap.Modal.getInstance(document.getElementById('authModal'));  
        modal.hide(); 
    });  
 
    registerForm.addEventListener('submit', function (e) {  
        e.preventDefault();
        const email = document.getElementById('registerEmail').value;  
        const password = document.getElementById('registerPassword').value;  
        if (!emailPattern.test(email)) {  
            alert('Введите корректный email!');  
            return; 
        }  
 
        if (!passwordPattern.test(password)) {  
            alert('Пароль должен содержать минимум 6 символов, включая буквы и цифры!');  
            return;  
        }   
        console.log('Регистрация:', email, password);  
        alert('Вы успешно зарегистрировались!');   
        const modal = bootstrap.Modal.getInstance(document.getElementById('authModal'));  
        modal.hide();
    });  
});
