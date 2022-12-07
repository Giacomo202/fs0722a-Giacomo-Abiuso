class User{ 
    name;
    anni;
    constructor (_name, _anni){
        this.name=_name;
        this.anni=_anni;
    }
}


let paolo = new User('Paolo', 18)
let piero = new User('Piero', 75)
let giovanni= new User('Giovanni', 75)

console.log(paolo);
console.log(piero);
console.log(giovanni);

if (paolo.anni<piero.anni){
    console.log(`${paolo.name} è più giovane di ${piero.name}`)
}else if(paolo.anni>piero.anni){
    console.log(`${paolo.name} è più grande di ${piero.name}`)
}else{
    console.log(`${paolo.name} e ${piero.name} hanno la stessa età`)
}


if (giovanni.anni<piero.anni){
    console.log(`${giovanni.name} è più giovane di ${piero.name}`)
}else if(giovanni.anni>piero.anni){
    console.log(`${giovanni.name} è più grande di ${piero.name}`)
}else{
    console.log(`${giovanni.name} e ${piero.name} hanno la stessa età`)
}


if (paolo.anni<giovanni.anni){
    console.log(`${paolo.name} è più giovane di ${giovanni.name}`)
}else if(paolo.anni>giovanni.anni){
    console.log(`${paolo.name} è più grande di ${giovanni.name}`)
}else{
    console.log(`${paolo.name} e ${giovanni.name} hanno la stessa età`)
}


