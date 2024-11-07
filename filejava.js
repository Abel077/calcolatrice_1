let result = 0;

        function calculate(operation) {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);

            if (isNaN(num1) || isNaN(num2)) {
                alert('Inserisci entrambi i numeri.');
                return;
            }

            switch (operation) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    if (num2 === 0) {
                        alert('Impossibile dividere per zero.');
                        return;
                    }
                    result = num1 / num2;
                    break;
            }
        }

        function getResult() {
            document.getElementById('result').innerText = 'Risultato: ' + result;
        }