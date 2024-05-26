import monsterNames from "monster_names.json";

function species(x){
   return "0".repeat(3 - x.length) + (x + 1);
};

let generatedGallery = "";

for(let row = 0; row < 10; row++){
    for(let col = 0; col < 10; col++){
        if(monsterNames[row][col] = null){ continue };
        generatedGallery +=
            `<div class="thumb">
                <img src="thumbs/thumb-` + species(row) + `_0` + col + `.png" alt="` + monsterNames[row][col] + `" width="400" height="400" />
                <p><span>` + monsterNames[row][col] + `</span></p>
            </div>`
        ;
    };
};

document.getElementById("gallery").innerHTML = generatedGallery;