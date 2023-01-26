const resources = [
    {
        catId: "1",
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        catId: "2",
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        catId: "3",
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        catId: "4",
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        catId: "5",
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]

function listArt() {
    let artInf = ""
    resources.map(art => {
        artInf += `
        <article id="cat-${art.catId}" class="container hidden">
        <h2 id="category">${art.category}</h2>
        <p id="text">${art.text}</p>
           <ul id="sources">
           <li id="title"><a id="url" href="${art.sources[0].url}">${art.sources[0].title}</a></li>
           <li id="title"><a id="url" href="${art.sources[1].url}">${art.sources[1].title}</a></li>
           <li id="title"><a id="url" href="${art.sources[2].url}">${art.sources[2].title}</a></li>
               </ul>
       </article>
        `
    })
    document.getElementById("article-list").innerHTML = artInf
}
listArt()

function toggleCat1() {
    document.querySelector("#cat-1").classList.toggle("hidden");
    document.querySelector("#html-button").classList.add("active")
    document.querySelector("#css-button").classList.remove("active")
    document.querySelector("#js-button").classList.remove("active")
    document.querySelector("#react-button").classList.remove("active")
    document.querySelector("#sanity-button").classList.remove("active")
    document.querySelector("#cat-2").classList.add("hidden")
    document.querySelector("#cat-3").classList.add("hidden")
    document.querySelector("#cat-4").classList.add("hidden")
    document.querySelector("#cat-5").classList.add("hidden")
}
function toggleCat2() {
    document.querySelector("#cat-2").classList.toggle("hidden");
    document.querySelector("#css-button").classList.add("active")
    document.querySelector("#html-button").classList.remove("active")
    document.querySelector("#js-button").classList.remove("active")
    document.querySelector("#react-button").classList.remove("active")
    document.querySelector("#sanity-button").classList.remove("active")
    document.querySelector("#cat-1").classList.add("hidden")
    document.querySelector("#cat-3").classList.add("hidden")
    document.querySelector("#cat-4").classList.add("hidden")
    document.querySelector("#cat-5").classList.add("hidden")
}
function toggleCat3() {
    document.querySelector("#cat-3").classList.toggle("hidden");
    document.querySelector("#js-button").classList.add("active")
    document.querySelector("#css-button").classList.remove("active")
    document.querySelector("#react-button").classList.remove("active")
    document.querySelector("#html-button").classList.remove("active")
    document.querySelector("#sanity-button").classList.remove("active")
    document.querySelector("#cat-2").classList.add("hidden")
    document.querySelector("#cat-1").classList.add("hidden")
    document.querySelector("#cat-4").classList.add("hidden")
    document.querySelector("#cat-5").classList.add("hidden")
}
function toggleCat4() {
    document.querySelector("#cat-4").classList.toggle("hidden");
    document.querySelector("#react-button").classList.add("active")
    document.querySelector("#css-button").classList.remove("active")
    document.querySelector("#js-button").classList.remove("active")
    document.querySelector("#html-button").classList.remove("active")
    document.querySelector("#sanity-button").classList.remove("active")
    document.querySelector("#cat-2").classList.add("hidden")
    document.querySelector("#cat-3").classList.add("hidden")
    document.querySelector("#cat-1").classList.add("hidden")
    document.querySelector("#cat-5").classList.add("hidden")
}
function toggleCat5() {
    document.querySelector("#cat-5").classList.toggle("hidden");
    document.querySelector("#sanity-button").classList.add("active")
    document.querySelector("#css-button").classList.remove("active")
    document.querySelector("#js-button").classList.remove("active")
    document.querySelector("#react-button").classList.remove("active")
    document.querySelector("#html-button").classList.remove("active")
    document.querySelector("#cat-2").classList.add("hidden")
    document.querySelector("#cat-3").classList.add("hidden")
    document.querySelector("#cat-4").classList.add("hidden")
    document.querySelector("#cat-1").classList.add("hidden")
}

//Kilder: 
//så på website menu-oppgaven fra eksamen i innføring i programmering
//så på legodudes-oppgaven fra forelesningene
//prøvde meg frem