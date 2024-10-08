class t{constructor(t){this.id=t.id,this.name=t.name.toUpperCase(),this.version=t.version,this.title=t.title.toUpperCase(),this.description=t.blurb.toUpperCase(),this.img=t.image.full,this.tags=t.tags,this.partype=t.partype.toUpperCase(),this.attack=t.info.attack,this.defense=t.info.defense,this.magic=t.info.magic,this.difficulty=t.info.difficulty}setImg(t){this.img=t}}var i=[];const e=document.getElementById("buttonIcons"),n=document.getElementById("buttonFull");function s(){e.style.visibility="hidden",n.style.visibility="hidden"}e.addEventListener("click",()=>{document.querySelector("#champions").style.visibility="visible",s(),a()}),n.addEventListener("click",()=>{document.querySelector("#champions").style.visibility="visible",s(),d()});const a=async()=>{await fetch("https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json").then(function(t){return t.json()}).then(function(e){for(let n in e.data){let s=e.data[n],a=new t(s);a.setImg(`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${s.id}.png`),i.push(a)}}),await c()},d=async()=>{await fetch("https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json").then(function(t){return t.json()}).then(function(e){for(let n in e.data){let s=e.data[n],a=new t(s);a.setImg(`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${s.id}_0.jpg`),i.push(a)}}),await o("full")},c=async()=>{let t=document.getElementById("champions");t.innerHTML="";for(var e=0;e<i.length;e++)t.innerHTML+=`
        <div class="card">
            <img src="${i[e].img}" id="img-${e}">
            <div class="info">
                <h2>${i[e].name}</h2>
                
                <div class="tags">
                    ${i[e].tags.join(" / ").toUpperCase()}
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
                            <td>${i[e].attack}</td>
                            <td>${i[e].defense}</td>
                            <td>${i[e].magic}</td>
                            <td>${i[e].difficulty}</td>
                        </tr>
                    </table>
                </div>
                <br>
                <div class="partype">
                    ${i[e].partype}
                </div>
                <div class="version">
                    ${i[e].version}
                </div>
            </div>
        </div>`},o=async()=>{let t=document.getElementById("champions");t.innerHTML="";for(var e=0;e<i.length;e++)t.innerHTML+=`
                    <div class="full-card">
                        <img src="${i[e].img}" class="full-img" id="img-${e}">
                        <div class="full-info">
                            <h2>${i[e].name}</h2>
                            <div class="title">
                                <h3>${i[e].title}</h3>
                            </div>
                            <div class="description">
                                <p>${i[e].description}</p>
                            </div>    
                        </div>
                    </div>`;l()},l=()=>{i.forEach((t,i)=>{let e=0,n=document.getElementById(`img-${i}`);n.addEventListener("click",async()=>{let i;if(i=0==(e=(e+1)%2)?`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${t.id}_0.jpg`:`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${t.id}_${e}.jpg`,await r(i))n.src=i;else{e=(e+1)%2;let i=`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${t.id}_${e}.jpg`;await r(i)&&(n.src=i)}})})},r=async t=>{try{return(await fetch(t)).ok}catch(t){return console.error("Error while verifying img",t),!1}};
//# sourceMappingURL=index.6bb64dfe.js.map
