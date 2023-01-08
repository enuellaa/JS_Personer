var ansatt = [
    {
        ansatt_id: 1,
        navn: "Laila Johanne Handelsby",
        jobbNavn: "Rektor",
        informasjon: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ipsum rem saepe minus? Dolor, nulla quam culpa natus ipsum voluptatem laudantium voluptatibus a inventore voluptatum rem illo, porro aliquam optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem odit, impedit debitis cumque excepturi expedita iusto assumenda dolores cum laborum, commodi illo possimus asperiores sunt, labore veritatis aliquid voluptatum. Dolore?",
        bildet: "./img/rektor-laila-handelsby.JPG" 
    },

    {
        ansatt_id: 2,
        navn: "Torben Andersen",
        jobbNavn: "Assisterende rektor",
        informasjon: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ipsum rem saepe minus? Dolor, nulla quam culpa natus ipsum voluptatem laudantium voluptatibus a inventore voluptatum rem illo, porro aliquam optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem odit, impedit debitis cumque excepturi expedita iusto assumenda dolores cum laborum, commodi illo possimus asperiores sunt, labore veritatis aliquid voluptatum. Dolore?",
        bildet: "./img/torben-gjerstad.jpg" 
    },

    {
        ansatt_id: 3,
        navn: "Martin Sandø-Frank",
        jobbNavn: "Studieleder",
        informasjon: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ipsum rem saepe minus? Dolor, nulla quam culpa natus ipsum voluptatem laudantium voluptatibus a inventore voluptatum rem illo, porro aliquam optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem odit, impedit debitis cumque excepturi expedita iusto assumenda dolores cum laborum, commodi illo possimus asperiores sunt, labore veritatis aliquid voluptatum. Dolore?",
        bildet: "./img/martin-frank.jpg"
    },

    {
        ansatt_id: 4,
        navn: "Camilla Engberg",
        jobbNavn: "Undervisningleder",
        informasjon: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ipsum rem saepe minus? Dolor, nulla quam culpa natus ipsum voluptatem laudantium voluptatibus a inventore voluptatum rem illo, porro aliquam optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem odit, impedit debitis cumque excepturi expedita iusto assumenda dolores cum laborum, commodi illo possimus asperiores sunt, labore veritatis aliquid voluptatum. Dolore?",
        bildet: "./img/camilla-engberg.jpg"
    },

    {
        ansatt_id: 5,
        navn: "Sissel Moen",
        jobbNavn: "Administrasjonsleder",
        informasjon: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ipsum rem saepe minus? Dolor, nulla quam culpa natus ipsum voluptatem laudantium voluptatibus a inventore voluptatum rem illo, porro aliquam optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem odit, impedit debitis cumque excepturi expedita iusto assumenda dolores cum laborum, commodi illo possimus asperiores sunt, labore veritatis aliquid voluptatum. Dolore?",
        bildet: "./img/sissel-moen.jpg"
    }
];


var button = document.querySelector(".searchBtn").addEventListener("click", function () {
    var name = document.querySelector(".employeeInput").value;
    for (const i of ansatt) {
        if (name == i.navn) {
            document.querySelector("#image").innerHTML = `<img id="image" src="${i.bildet}" alt="" width="200px">`
            document.querySelector("#name").innerHTML = i.navn;
            document.querySelector("#positon1").innerHTML = i.jobbNavn;
            document.querySelector("#position2").innerHTML = i.informasjon;
        }
    }
})


function clearInput(){
    var myValue = document.getElementById("empname");
    if (myValue.value != "") {
        myValue.value = "";
    }
}
