function clearPad(){
    const pad = document.getElementById("data");
    pad.innerText = "";
}

function fibonacci(){
    const number = document.getElementById("num-input").value;
    const dataBlock = document.getElementById("data");

    const resultsBlock = document.createElement("div");
   
    const data = document.createElement("p");
    
    let n1 = 0;
    let n2 = 1;
    let nextTerm = 0;

    let sequence = "" + n1;

    while(nextTerm <= number){
        sequence = sequence + n2;
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }

     
    data.innerText = sequence;
    resultsBlock.appendChild(data);

    const divider = document.createElement("hr");
    divider.classList.add("divider");
    resultsBlock.appendChild(divider);
    
    dataBlock.appendChild(resultsBlock);
}

document.addEventListener("DOMContentLoaded", () => {
    const calBtn = document.getElementById("calculate");
    calBtn.addEventListener("click", fibonacci);
    const clearBtn = document.getElementById("clear");
    clearBtn.addEventListener("click", clearPad);


})

