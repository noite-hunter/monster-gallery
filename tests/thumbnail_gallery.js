const response = await fetch("/monster_names.json");             //Imports the Json data containing the monster names from the external .json file
const monsterNames = await response.json();                     //Interprets the Json data and creates an 'array' containing it

const isNotNull = (element) => element[0] != null;              //'function' that checks if the first element of each row is not null
const lastFilledRow = monsterNames.findLastIndex(isNotNull);    //Finds the index of the last non-null value in the first column of the monsterNames array

const div = document.getElementById("gallery");                 //Gets the <div id="gallery"> element and saves it as a constant
let generatedGallery = "";

for(let row = 0; row <= lastFilledRow; row++){                  //Nested 'for' loops that create thumbnails for each non-null value in monsterNames
    for(let col = 0; col < monsterNames[0].length; col++){      
        if(monsterNames[row][col] === null){ continue };
        generatedGallery +=                                     //HTML code for the thumbnails
        `<div class="thumb">
            <img src="/thumbs/thumb-${format(row + 1, 3)}_${format(col, 2)}.png" alt="${monsterNames[row][col]}"/>
            <p><span>${monsterNames[row][col]}</span></p>
        </div>`
        ;
    };
};

div.insertAdjacentHTML("afterbegin", generatedGallery);         //Applies the generated HTML code inside <div id="gallery">

// Function declarations
function format(number, digits){                                //'function' that formats numbers to have a specified number of digits, with leading zeros
    return number.toString().padStart(digits, "0");
};