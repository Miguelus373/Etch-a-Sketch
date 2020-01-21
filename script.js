const general = document.querySelector('#general');

let squares = prompt("How many?");

function createDiv(squares){

    for (let i = 1; i <= squares; i++) {

        let horizontalDiv = document.createElement('div');
        horizontalDiv.classList.add('h');
        general.appendChild(horizontalDiv);

        for (let i = 1; i <= squares; i++) {
        
            let verticalDiv = document.createElement('div');
            verticalDiv.classList.add('v');
            horizontalDiv.appendChild(verticalDiv);           
        }
    }
}

console.log(createDiv(squares))
