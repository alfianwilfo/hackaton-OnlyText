let database=[]
console.log(database);
function create(){
    let form = document.getElementById('formRegister')
    form.addEventListener("submit",(e)=>{

        e.preventDefault()
        let nama= e.target[0].value
        let email= e.target[1].value
        let password = e.target[2].value
        let agree = e.target[3].value
        
        let obj={
            nama:nama,
            email:email,
            password:password,
            agree:agree
        }
        database.push(obj)
        console.log(database);
        alert('berhasil')
    })
   
}
create()

