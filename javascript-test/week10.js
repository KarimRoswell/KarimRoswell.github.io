window.onload = () => {
    const objectLiteralAction = document.getElementById('object-literal-action');
    const numbersAction = document.getElementById('numbers-action'); 

    numbersAction.onclick = () => {
        const numbersDisplay = document.getElementById('numbers-display')
        numbersDisplay.textContent = numbers;
        for (let number of numbers) {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(number));
            numbersDisplay.appendChild(li);
        }    
    
    }

    objectLiteralAction.onclick = () => {
        const displayString = 'button has been clicked';
        const objectLiteralDisplay = document.getElementById('object-literal-display');
        console.log(objectLiteral.getName());

        objectLiteralDisplay.textContent = displayString;
    }
}
const numbers = [1, 2, 3];

const objectLiteral = {
    objectName: 'object literal is my name',

    getName: function() {
        return this.objectName;
        
    }
}