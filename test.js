function deleteAccount(contohDB, num) {
    contohDB.splice(num, 1)
}
let contohDB = [{name:"Kristian", lines:"2,5,10"},
             {name:"John", lines:"1,19,26,96"},
            {name:"alfian", lines:"11111"},
        {name:"fadlur", lines:"3333"},
        {name:"fadlur", lines:"3333"}];
let num = 2 // valuenya dapet dari index keberapa yang mau dihapus
deleteAccount(contohDB, num)
console.log(contohDB);

// ========================================//

