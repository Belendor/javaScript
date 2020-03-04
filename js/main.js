// 1.1 uzduotis

const skaicius1 = 1
console.log(skaicius1);
const skaicius2 = 2
console.log(skaicius2);
const skaicius3 = 3
console.log(skaicius3);

// 1.2 uzduotis

const tekst1 = "Loremas"
console.log(tekst1);
const tekst2 = "Ipsum"
console.log(tekst2);
const tekst3 = "kitas lotyniskas zodis"
console.log(tekst3);

// 1.3 uzduotis

const tekstSkaicius1 = [1, 2, 3]
console.log(tekstSkaicius1)
const tekstSkaicius2 = [4, 5, 6]
console.log(tekstSkaicius2)
const tekstSkaicius3 = [7, 8, 9]
console.log(tekstSkaicius3)

// 1.4 uzduotis

const tekstasIlgas1 = ["vienas", "du", "tris", "keturi"," penki"]
console.log(tekstasIlgas1)
const tekstasIlgas2 = ["sesi", "septyni", "astuoni", "devyni", "desim"]
console.log(tekstasIlgas2)
const tekstasIlgas3 = ["vienuolyka", "dvylika", "trylika", "keturiolika", "penkiolika"]
console.log(tekstasIlgas3)

// 2.1 uzduotis

const multi = skaicius1 + skaicius2 + skaicius3
console.log(multi);

// 2.2 uzduotis

const txt = `${tekst1} ${tekst2} ${tekst3}`
console.log(txt);

// 2.3 uzduotis

const res = tekstSkaicius3[0] - tekstSkaicius3[1] + tekstSkaicius3[2] - tekstSkaicius2[0] + tekstSkaicius2[1]
console.log(res)

// 2.4 uzduotis

const sujungtasTextas = `${tekstasIlgas3[4]}, ${tekstasIlgas3[3]}, ${tekstasIlgas3[2]}, ${tekstasIlgas3[1]}, ${tekstasIlgas3[0]}`
console.log(sujungtasTextas);

// 3.1 uzduotis

if (skaicius1 > skaicius2) {
    console.log("Pomidoras")
}else{
    console.log("Bandykite kitą kartą."); 
}
if (skaicius1 < skaicius2) {
    console.log("Pomidoras")
}else{
    console.log("Bandykite kitą kartą."); 
}
if (skaicius1 === skaicius2) {
    console.log("Pomidoras")
}else{
    console.log("Bandykite kitą kartą."); 
}
if (skaicius1 !== skaicius2) {
    console.log("Pomidoras")
}else{
    console.log("Bandykite kitą kartą."); 
}
if (skaicius1 >= skaicius2) {
    console.log("Pomidoras")
}else{
    console.log("Bandykite kitą kartą."); 
}
if (skaicius1 <= skaicius2) {
    console.log("Pomidoras")
}else{
    console.log("Bandykite kitą kartą."); 
}

// 3.2 uzduotis

let tekst1Ilgis = tekst1.length
let tekst2Ilgis = tekst2.length

// 3.3 uzduotis

if (tekst1Ilgis > tekst2Ilgis){  // <--Keisti zenklus
    console.log(`${tekst1} yra ilgesnis uz ${tekst2}`);   
}else{                                                      // <-- Keist zodzius
    console.log(`${tekst2} yra ilgesnis uz ${tekst1}`)
}

// 3.4 uzduotis

const tekstasIlgas1Ilgis = tekstasIlgas1.length
const tekstasIlgas2Ilgis = tekstasIlgas2.length

// 3.5 uzduotis

if (tekstasIlgas1Ilgis === tekstasIlgas2Ilgis){  // <--Keisti zenklus
    console.log(`${tekstasIlgas1} <--vienodo ilgio kaip-->  ${tekstasIlgas2}`);   
}else{                                                                            // <-- Keist zodzius
    console.log(`${tekstasIlgas1} yra ne vienodo ilgio ${tekstasIlgas2}`)
}

// 4.1 uzduotis
let sum = 0
let sum2 = 0
let sum3 = 0
let sum4 = 0
let sum5 = 0
let sum6 = 0

for(let i = 0; i>0; i++){
    sum++
}
console.log("0-0", sum);

for(let i = 0; i < 4; i++){
    sum2++
}
console.log("0-4", sum2);

for(let i = 0; i < 100; i++){
    sum3++
}
console.log("0-100", sum3);

for(let i = 574; i < 815; i++){
    sum4++
}
console.log("574-815", sum4);

for(let i = -50; i < 0; i++){
    sum5--;
   
}
for(let j = 0; j <50; j++){
    sum5++
}
console.log("-50-50", sum5);

for(let i = -70; i < 0; i++){
    sum6--
}
for(let i = 0; i < 30; i++){
    sum6++
}
console.log("-70-30", sum6);

// 4.2 uzduotis

const tekstas = "abcdef"
let tekstasAtvirksciai = ""

for (let i = tekstas.length-1; i >=0; i--){
    tekstasAtvirksciai = tekstasAtvirksciai + tekstas[i]
}
console.log(tekstasAtvirksciai);

console.log("// 4.2 uzduotis");

// 4.3 uzduotis

let s3 = []
let s5 = []
let s7 = []

let ss3 = []
let ss5 = []
let ss7 = []

let sss3 = []
let sss5 = []
let sss7 = []


for(let i = 0; i < 11; i++){
    if (Number.isInteger(i/3)){
        s3.push(i)
    }if(Number.isInteger(i/5)){
        s5.push(i) 
    }if(Number.isInteger(i/7)){
        s7.push(i)
    }
}

for(let i = 8; i < 31; i++){
    if (Number.isInteger(i/3)){
        ss3.push(i)
    }if(Number.isInteger(i/5)){
        ss5.push(i) 
    }if(Number.isInteger(i/7)){
        ss7.push(i)
    }
}

for(let i = -18; i < 18; i++){
    if (Number.isInteger(i/3)){
        sss3.push(i)
    }if(Number.isInteger(i/5)){
        sss5.push(i) 
    }if(Number.isInteger(i/7)){
        sss7.push(i)
    }
}

console.log("0 - 11");

console.log(s3); 
console.log(s5);
console.log(s7);

console.log("8 - 31");

console.log(ss3);
console.log(ss5);
console.log(ss7);

console.log("-18 - 18");

console.log(sss3);
console.log(sss5);
console.log(sss7);


// 5.1 uzduotis
console.log("-----Funkcijos----");

function tusciaFunkcija (){
    return false;
}
console.log(tusciaFunkcija ());

// 5.2 uzduotis

function daugyba(a,b){
    return b = a*b;
}

console.log(daugyba(3,5));
console.log(daugyba(5,5));
console.log(daugyba(6,5));

// 5.3 uzduotis

function skaitmenuKiekisSkaiciuje (par){
    if(isNaN(par) | par === true | par === false){
        return "Pateikta netinkamo tipo reikšmė";
    }
    let stringinam = par.toString() 
    let skaitemuSum = stringinam.length;
    return skaitemuSum;
}

console.log(skaitmenuKiekisSkaiciuje(5));
console.log(skaitmenuKiekisSkaiciuje(781));
console.log(skaitmenuKiekisSkaiciuje(37060123456));
console.log(skaitmenuKiekisSkaiciuje(true));
console.log(skaitmenuKiekisSkaiciuje("asd"));
console.log(skaitmenuKiekisSkaiciuje(NaN));


// 5.4 uzduotis



function didziausiasSkaiciusSarase (par){
    let didziausiasSkaicius = -999
    if (!Array.isArray(par)){
        return  "Pateikta netinkamo tipo reikšmė 5.4. uzduotis"
    }else if (par.length === 0){
        return "Pateiktas sąrašas negali būti tuščias 5.4. uzduotis"
    }else{
        for(let i = 0; i<par.length; i++){
            if(par[i] > didziausiasSkaicius){
                didziausiasSkaicius = par[i]
            }
        }
    }
    return didziausiasSkaicius
}

console.log(didziausiasSkaiciusSarase([ 1 ]));
console.log(didziausiasSkaiciusSarase([ 1, 2, 3 ]));
console.log(didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ]));
console.log(didziausiasSkaiciusSarase([ 69, 69, 69, 69, 66 ]));
console.log(didziausiasSkaiciusSarase([ -1, -2, -3, -4, -5, -6, -7, -8 ]));
console.log(didziausiasSkaiciusSarase("pomidoras"));
console.log(didziausiasSkaiciusSarase([]));


// 5.5 uzduotis

function issirinkiteRaides (par1, par2){
    let simboliuSeka = ""

    if (typeof par1 !== "string"){
        return "Pirmasis kintamasis yra netinkamo tipo. 5.5 uzduotis"
    }
    if (0 >par1.length >100){
        return "Pirmojo kintamojo reikšmė yra netinkamo dydžio. 5.5 uzduotis"
    }
    if (isNaN(par2) | par2 === true | par2 === false){
        return "Antrasis kintamasis yra netinkamo tipo."
    }
    if (par2 <= 0){
        return "Antrasis kintamasis turi būti didesnis už nulį."
    }
    if (par2 >= par1.length){
        return "Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį."
    }

    for (let i = par2 -1; i <par1.length; i += par2){
        simboliuSeka += par1[i]
    }
    return simboliuSeka
}

console.log(issirinkiteRaides("abcdefg", 2));
console.log(issirinkiteRaides( "abcdefghijkl", 3 ));
console.log(issirinkiteRaides( "abc", 0));
console.log(issirinkiteRaides( "abc", 4));
console.log(issirinkiteRaides(1561, 2));

// 5.6 uzduotis

function dalyba(par1,par2){

    if (isNaN(par1) | par1 === true | par1 === false){
        return `${par1} nera skaicius`
    }
    if (isNaN(par2) | par2 === true | par2 === false){
        return `${par2} nera skaicius`
    }
    if (par1 === 0){
        return `Dalinti is nulio negalima!`
    }
    if (par1 === ""){
        return `Kas cia per tuscias dalykas?`
    }
    if (par2 === ""){
        return `Kas cia per tuscias dalykas?`}
    if (par1.length >0){
        if(par1.length >0 & par2.length >0){
            let suskaiciukVistiek1 = par1/par2
            return `Ar tau sunku tiesiog skaicius rasyti? Manau tikejaisi tokio rezultato: ${suskaiciukVistiek1}` 
        }
        let suskaiciukVistiek = par1/par2
        return `zinok pirma verte buvo ne skaicius, bet va imk rezultata:${suskaiciukVistiek}` 
    }
    if (par2.length >0){
        let suskaiciukVistiek = par1/par2
        return `zinok antra verte buvo ne skaicius, bet va imk rezultata:${suskaiciukVistiek}` 
    }
  return par1/par2
}

console.log(dalyba("bla", 7));
console.log(dalyba(8, "blop"));
console.log(dalyba(8, 4));
console.log(dalyba(0, 4));
console.log(dalyba("", 4));
console.log(dalyba(true, 4));
console.log(dalyba(5, NaN));
console.log(dalyba("11", 7));
console.log(dalyba(11, "9"));
console.log(dalyba("11", "9"));
console.log(dalyba("11", [4]));









