const games = [
    {
        img:"https://i5.walmartimages.com/asr/afd341a0-735f-43b0-b917-07f3bd14622a_2.46f3410af681994543dddb67ec00ad4b.jpeg",
        price:"$19.99",
        name:"God of War",
        description:"Dad of war discovers how to be a father by chucking his axe at giant nordic creatures and yell BOY many many times.",
        platform:"playstation"
    },
    {
        img:"https://www.gamerevolution.com/assets/uploads/2014/07/file_8759_killer-instinct-box.jpg",
        price:"$14.99",
        name:"Killer Instinct",
        description:"Bunch of crazy 80s and 90s knock offs fighting using breakers and instinct senses.",
        platform:"xbox"
    },
    {
        img:"https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/DKC5_box_art.jpg/220px-DKC5_box_art.jpg",
        price:"$49.99",
        name:"Donkey Kong Country: Tropical Freeze",
        description:"A giant gorilla and possibly apes quest to unfeeze their island form a bunch of icey animals and collect lots of bananas.",
        platform:"switch"
    }
];

const platforms = {
    "playstation": {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/2560px-PlayStation_logo.svg.png",
        color: "blue"
    },
    "switch": {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Nintendo_Switch_Logo.svg/1024px-Nintendo_Switch_Logo.svg.png",
        color: "red"
    },
    "xbox": {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Xbox_logo_%282019%29.svg/1200px-Xbox_logo_%282019%29.svg.png",
        color: "green"
    }
};

let popUp = document.createElement("div");
popUp.className = "popUp";
popUp.style.display = "none";
popUp.addEventListener("click", function() {
    popUp.style.display = "none";
    popUp.innerHTML = "";
});
document.body.appendChild(popUp);

for (let i = 0; i < games.length; i++) {
    let ele = document.createElement("div");
    ele.className = "product";
    ele.className += ` ${games[i].platform}`;
    ele.innerHTML +=
        `<img class="prdImg" src="${games[i].img}"><h2>${games[i].price}</h2><img class="plat" src="${platforms[games[i].platform].img}">`;

    ele.addEventListener("click", function () {
        popUp.innerHTML = `<img src="${games[i].img}"><h2>${games[i].name}</h2><h3>${games[i].price}</h3><p>${games[i].description}</p><p style="color: ${platforms[games[i].platform].color}">${games[i].platform}</p>`;
        popUp.style.display = "flex";
    });

    document.body.appendChild(ele);
}