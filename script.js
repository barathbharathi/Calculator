document.addEventListener('DOMContentLoaded', function () {
    let resultInput = document.getElementById('result');
    let memory = 0;

    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function () {
            handleInput(this.id);
        });
    });

    document.addEventListener('keydown', function (event) {
        if (event.key >= '0' && event.key <= '9') {
            handleInput(event.key);
        } else {
            alert('Only numbers are allowed');
        }
    });

    function handleInput(input) {
        if (!isNaN(input)) {
            resultInput.value += input;
        } else {
            switch (input) {
                case 'clear':
                    resultInput.value = '';
                    break;
                case 'equal':
                    try {
                        resultInput.value = eval(resultInput.value);
                    } catch (e) {
                        alert('Invalid expression');
                        resultInput.value = '';
                    }
                    break;
                case 'add':
                    resultInput.value += '+';
                    break;
                case 'subtract':
                    resultInput.value += '-';
                    break;
                case 'multiply':
                    resultInput.value += '*';
                    break;
                case 'divide':
                    resultInput.value += '/';
                    break;
                case 'modulus':
                    resultInput.value += '%';
                    break;
                case 'mplus':
                    memory += parseFloat(resultInput.value) || 0;
                    resultInput.value = '';
                    break;
                case 'mminus':
                    memory -= parseFloat(resultInput.value) || 0;
                    resultInput.value = '';
                    break;
                case 'mc':
                    memory = 0;
                    resultInput.value = '';
                    break;
                default:
                    break;
            }
        }
    }
});
