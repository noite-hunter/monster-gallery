const response = await fetch("monster_names.json");
const monsterNames = await response.json();

function species(x){
    return (x + 1).toString().padStart(3, "0");
}

const div = document.getElementById("gallery");
let generatedGallery = "";

for(let row = 0; row < monsterNames.length; row++){
    for(let col = 0; col <= 9; col++){
        if(monsterNames[row][col] === null){ continue };
        generatedGallery +=
            `<div class="thumb">
                <img src="thumbs/thumb-${species(row)}_0${col}.png" alt="${monsterNames[row][col]}" width="400" height="400" />
                <p><span>${monsterNames[row][col]}</span></p>
            </div>`
        ;
    };
};

div.insertAdjacentHTML("afterbegin", generatedGallery);