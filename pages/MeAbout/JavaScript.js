const nameElement = document.getElementById("name");
const nameText = "Paulo Henrique";
let nameIndex = 0;

function typeName() {
    if (nameIndex < nameText.length) {
        nameElement.innerHTML += nameText.charAt(nameIndex);
        nameIndex++;
        setTimeout(typeName, 100); 
    } else {
        nameElement.classList.add("typing"); 
        nameElement.style.opacity = 1; 
    }
}

const aboutText = "Ei! Meu nome é Paulo, tenho 17 anos e tenho uma profunda paixão por tecnologia e desenvolvimento web. Desde muito jovem, tenho curiosidade sobre como as coisas funcionam por trás da tela, e essa curiosidade me levou a explorar o mundo da programação. Atualmente estou trabalhando em projetos usando HTML, CSS, JavaScript. Enquanto me esforço constantemente para melhorar minhas habilidades em Python. Minha jornada envolve o desenvolvimento de sites, sistemas e até mesmo a criação de aplicativos que integram diferentes APIs, como rastreadores de asteroides e aplicativos de finanças pessoais.";
let aboutIndex = 0;

function typeAboutText() {
    if (aboutIndex < aboutText.length) {
        document.getElementById('aboutText').textContent += aboutText.charAt(aboutIndex);
        aboutIndex++;
        setTimeout(typeAboutText, 50); 
    } else {
        document.getElementById('aboutText').style.opacity = 1; 
    }
}

window.onload = () => {
    typeName();  
    typeAboutText(); 
};


document.getElementById('themeToggle').addEventListener('click', function () {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme'); 
});
