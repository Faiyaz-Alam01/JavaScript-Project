const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach( (button)=> {
    //event listener
    button.addEventListener('click',(e)=>{
        
        if(e.target.id === 'gray'){
            // body.style.backgroundColor = 'gray';
            body.style.backgroundColor = e.target.id;
            body.style.color = 'black';
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = 'white';
            body.style.color = "red";
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = 'blue';
            body.style.color = "white";
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = 'yellow';
            body.style.color = "orange";
        }
    })
})

