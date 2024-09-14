const birthdayEl = document.querySelector('.birth');
const btnEl = document.querySelector('.calculate-btn');
const resultEl = document.querySelector('.result');

function calculateAge(){
    const birthdayValue = birthdayEl.value;
    if(birthdayValue === ""){
        alert("Please Enter your Birthday!");
    }else{
        const age = getAge(birthdayValue);
        resultEl.innerText = `Your age is ${age} old.`;
    }
}

//calculate age
function getAge(birthdayValue){
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    let month = currentDate.getMonth() - birthdayDate.getMonth();
    
    if(month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())){
        age--;
    }
    
    return age;
}

// Add event listener
btnEl.addEventListener('click', calculateAge);
