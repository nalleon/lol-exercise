import Champion from './champion.js';

var championsList = [];

const buttonIcons = document.getElementById("buttonIcons");
const buttonFull = document.getElementById("buttonFull");

/**
 * Eventlistener on click for icons display
 */
buttonIcons.addEventListener("click", () => {
    document.querySelector('#champions').style.visibility = 'visible';
    hideButtons();
    getChampionsIcons();
});


/**
 * Eventlistener on click for full image display
 */
buttonFull.addEventListener("click", () => {
    document.querySelector('#champions').style.visibility = 'visible';
    hideButtons();
    getChampionsFull();
});


/*
* Function to hide the buttons
*/
function hideButtons() {
    buttonIcons.style.visibility = 'hidden';
    buttonFull.style.visibility = 'hidden';
}

/**
 * Async function to get the champions' icons
 */

const getChampionsIcons = async () => {
        await fetch("https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json")
            .then(function(result) {
                return result.json();
            }).then(function(result) {
                for (let championData in result.data){
                    let data = result.data[championData];
                    let champion = new Champion(data);
                    champion.setImg(`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${data.id}.png`);
                    pushChampions(champion);
                }
            });

    await showChampions();
};

/**
 * Async function to get the champions' full art
 */
const getChampionsFull = async () => {
    await fetch("https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json")
        .then(function(result) {
            return result.json();
        }).then(function(result) {
            for (let championData in result.data){
                let data = result.data[championData];
                let champion = new Champion(data);
                champion.setImg(`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${data.id}_0.jpg`);
                pushChampions(champion);
            }
        });

await showChampionsFullImg("full");
};

/**
 * Function to add the champion to the array
 * @param {*} champion 
 */

function pushChampions(champion) {
    championsList.push(champion);
}

/**
 * Async function to show the champion's icons
 */
const showChampions = async () => {
const champions = document.getElementById("champions");
champions.innerHTML = '';
    for(var i = 0; i < championsList.length; i++) {
        champions.innerHTML += `
        <div class="card">
            <img src="${championsList[i].img}" id="img-${i}">
            <div class="info">
                <h2>${championsList[i].name}</h2>
                
                <div class="tags">
                    ${championsList[i].tags.join(' / ').toUpperCase()}
                </div>
                <div class="stats">
                    <table>
                        <tr>
                            <th>ATK</th>
                            <th>DEF</th>
                            <th>MAG</th>
                            <th>DIFF</th>
                        </tr>
                        <tr>
                            <td>${championsList[i].attack}</td>
                            <td>${championsList[i].defense}</td>
                            <td>${championsList[i].magic}</td>
                            <td>${championsList[i].difficulty}</td>
                        </tr>
                    </table>
                </div>
                <br>
                <div class="partype">
                    ${championsList[i].partype}
                </div>
                <div class="version">
                    ${championsList[i].version}
                </div>
            </div>
        </div>`;  
    }


}


/**
 * Async function to show the champion's full image
 */
    const showChampionsFullImg = async () => {
        const champions = document.getElementById("champions");
        champions.innerHTML = '';
        for(var i = 0; i < championsList.length; i++) {
                champions.innerHTML += `
                    <div class="full-card">
                        <img src="${championsList[i].img}" class="full-img" id="img-${i}">
                        <div class="full-info">
                            <h2>${championsList[i].name}</h2>
                            <div class="title">
                                <h3>${championsList[i].title}</h3>
                            </div>
                            <div class="description">
                                <p>${championsList[i].description}</p>
                            </div>    
                        </div>
                    </div>`;
            }    
        changeSkin();
    }

    /**
     * Function to change the skin of the champion
     */
    const changeSkin = () => {
        championsList.forEach((champion, index) => {
            let skinIndex = 0;
            const maxSkinPerChampion = 1; 
            const championImg = document.getElementById(`img-${index}`);
    
            championImg.addEventListener("click", async () => {
                skinIndex = (skinIndex + 1) % (maxSkinPerChampion + 1);

                let skinUrl;
                if (skinIndex === 0) {
                    skinUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`;
                } else {
                    skinUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_${skinIndex}.jpg`;
                }

                const imageExists = await checkImageExists(skinUrl);

                if (imageExists){
                    championImg.src = skinUrl;
                } else {
                    skinIndex = (skinIndex + 1) % (maxSkinPerChampion + 1);
                    const nextSkinUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_${skinIndex}.jpg`;
                    const nextImageExists = await checkImageExists(nextSkinUrl);

                    if (nextImageExists){
                        championImg.src = nextSkinUrl;
                    }
                }

              
            });
        });
    };


    /**
     * Function to check if the skin of a champion exist
     * @param {*} url 
     * @returns true if exists, false otherwise
     */
    const checkImageExists = async (url) => {
        try {
            const response = await fetch(url);
            return response.ok; 
        } catch (error) {
            console.error('Error while verifying img', error);
            return false; 
        }
    };
