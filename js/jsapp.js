'use strict'

//Globel var

let Form = document.getElementById('myform');
let Table = document.getElementById('mytable');

let ArrayOfall = [];
let headerRow = ['user', 'Type', 'price', 'condition'];

function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function StoreMob(user, type, price, condition) {

    this.user = user;
    this.type = type;
    this.price = RandomNumber(100, 500);
    this.condition = condition;

    ArrayOfall.push(this);

    storeData();
}

function storeData() {
    let Data = JSON.stringify(ArrayOfall);
    localStorage.setItem('ArrayOfall', Data);
}

function headerRoww() {
    let headerRowTh = document.createElement('th');
    let th;
    for (let i = 0; i < headerRow.length; i++) {
        th = document.createElement('th');
        th.textContent = headerRow[i];
        headerRowTh.appendChild(th);

    }
    Table.appendChild(headerRowTh);

}
StoreMob.prototype.render = function () {
    let TRRow = document.createElement('tr');

    let TDData = document.createElement('td');
    TDData.textContent = this.user;

    let TDData2 = document.createElement('td');
    TDData2.textContent = this.type;

    let TDData3 = document.createElement('td');
    TDData3.textContent = this.price;

    let TDData4 = document.createElement('td');
    TDData4.textContent = this.condition;

    TRRow.appendChild(TDData);
    TRRow.appendChild(TDData2);
    TRRow.appendChild(TDData3);
    TRRow.appendChild(TDData4);

    Table.appendChild(TRRow);
}

function renderAllDetails() {
    for (let i = 0; i < ArrayOfall.length; i++) {

        let TrRow2 = document.createElement('tr');

        let Td2 = document.createElement('td');
        Td2.textContent = ArrayOfall[i].user;

        let tD3 = document.createElement('td');
        tD3.textContent = ArrayOfall[i].Type;

        let tD4 = document.createElement('td');
        tD4.textContent = ArrayOfall[i].price;

        let tD5 = document.createElement('td');
        tD5.textContent = ArrayOfall[i].condition;

        TrRow2.appendChild(Td2);
        TrRow2.appendChild(tD3);
        TrRow2.appendChild(tD4);
        TrRow2.appendChild(tD5);

        Table.appendChild(TrRow2);


    }
}

Form.addEventListener('submit', handleSubmmiter)
function handleSubmmiter(event) {
    event.preventDefault();
    let UserName = event.target.user;
    let UserType = event.target.type;

    let newItem = new StoreMob(UserName, UserType)

    newItem.render();

}

function usedornew(){
    if (price>200) {
        let used;
        used.textContent=this.condition;
        
    }
}

function gettingData() {
    let Data2 = localStorage.getItem('ArrayOfall');
    let conVert = JSON.parse(Data2);

    for (let i = 0; i < conVert; i++) {
        new StoreMob(conVert[i].user, conVert[i].type, conVert[i].price, conVert[i].condition)

    }
}
gettingData();

headerRoww();

renderAllDetails();