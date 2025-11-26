let hai = document.getElementById("pembuka");
let gallery = document.getElementById("gallery");

// kartu logo kodingan
const project = [
    {
        title:"HTML", // judul
        description:"membangun kerangka web dan awal semua perjalanan isi web", // tulisan deskripsi dibawah
        image:"./img/html.png", // gambar
        tags:"",
        link:"",

    },
    {
        title:"CSS",
        description:"menghias isi halaman web yang membuat orang tertarik",
        image:"./img/css-3.png",
        tags:"",
        link:"",
    },
    {
        title:"JavaScript",
        description:"memberikan kehidupan kedalam web",
        image:"./img/js.png",
        tags:"",
        link:"",
    }
]

for (let i = 0; i < project.length; i++) {
    let projectLagi = project[i];

    let card = document.createElement("div");
    card.className = "card";
    card.style.backgroundColor = "skyblue";
    card.style.height = "auto";
    card.style.width = "auto";
    card.style.padding = "15px";
    card.style.margin = "20px";
    card.style.borderRadius = "10px";
    card.style.textAlign = "center";



    let title = document.createElement("h2");
    title.textContent = projectLagi.title;

    let image = document.createElement("img");
    image.src = projectLagi.image;
    image.alt = projectLagi.title;
    image.style.maxWidth = "100px";
    image.style.maxHeight = "100px"
    image.style.marginTop = "10px";
    image.style.padding = "10px"


    let description = document.createElement("p");
    description.textContent = projectLagi.description;
    description.style.textAlign = "left";

    card.appendChild(title);
    card.appendChild(image);
    card.appendChild(description);

    gallery.appendChild(card)
}


// loopingan kedua 🥸👌

let gallery2 = document.getElementById("gallery2")

const project2 = [
    {
        title: "kalkulator",
        image: "./img/kalkulator.png",
        description: "disini saya membuat kalkulator sederhana yang bisa ngitung cuman sekali doang",
    },
    {
        title: "lampu lalu lintas",
        image: "/img/laluLintas.png",
        description: "disini saya membuat simulasi lampu lalu lintas dengan metode looping yang ada di java script",
    },
    {
        title: "zakat emas",
        image: "/img/zakat1-removebg-preview.png",
        description: "disini saya membuat kalkulator zakat emas, dengan data yang bisa disimpan ke localStorage",
    }
]

for (let a = 0; a < project2.length; a++) {
    let projectLagi = project2[a];

    let card = document.createElement("div");
    card.className = "card";
    card.style.backgroundColor = "skyblue";
    card.style.height = "auto";
    card.style.width = "auto";
    card.style.padding = "15px";
    card.style.margin = "20px";
    card.style.borderRadius = "10px";
    card.style.textAlign = "center";
    card.style.justifyContent = "space-between";



    let title = document.createElement("h2");
    title.textContent = projectLagi.title;


    let image = document.createElement("img");
    image.src = projectLagi.image;
    image.alt = projectLagi.title;
    image.style.maxWidth = "100px";
    image.style.maxHeight = "100px"
    image.style.marginTop = "10px";
    image.style.padding = "10px"


    let description = document.createElement("p");
    description.textContent =  projectLagi.description;
    description.style.textAlign = "left";

    card.appendChild(title);
    card.appendChild(image);
    card.appendChild(description);

    gallery2.appendChild(card)
}


