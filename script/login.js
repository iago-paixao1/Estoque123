function login() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const errorMessage = document.getElementById('error-message');
            const loginContainer = document.querySelector('.login-container');
            const content = document.getElementById('content');

            if (username === 'usuario' && password === 'senha') {
                loginContainer.classList.add('hidden');
                content.classList.remove('hidden');
            } else {
                errorMessage.classList.remove('hidden');
            }
        }