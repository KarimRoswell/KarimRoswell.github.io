function loader() {
    const getNameButton = document.getElementById('getNames');
    const functionButton = document.getElementById('getFunctionObject');

    getNameButton.onclick = function(){
        const name =myObject.getName();
        const getNameDisplay = document.getElementById('getNameDisplay');
        getNameDisplay. textContent = name;

        const fullName = myObject.getFullName();
        const getgetFullNameDisplay = document.getElementById('getFullNameDisplay');
        getFullNameDisplay.textContent = fullName;
    }
    const functionObject = new FunctionObject();
    console.log(functionObject.getFullName());
    functionButton.onclick = FunctionObject;
}
window.onload = loader

const myObject = {
    firtName: 'John',
    lastName: 'Doe',
    getName: function() {
        return this.firtName + ' ' + this.lastName;
    }
}; 

myObject.middlename ='barfoo'
myObject.getFullName = function() {
    return this.firtName + 
    ' ' + this.middlename + 
    ' ' + this.lastName;
}

console.log(myObject.firtName);
console.log(myObject.getName());
console.log(myObject.middlename);
console.log(myObject.getFullName());

function FunctionObject () {
    console.log('my object');

    const getName = () => {
        return 'Function Object';
    }
    Function.prototype.getFullName = () => {
        return 'This is the full name'
    }
    console.log (getName());
}
