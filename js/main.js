function passCheck() {
  let check = [
    {
      username : "enak",  
      password: "123",
    },
    {
        username : "gakenak",  
        password: "123",
    },
  ];

  let final=[]

  for (let i = 0; i < check.length; i++) {
    let user=check[i]['username']
    let pass=check[i]['password']

    final.push(user)
    final.push(pass)
  }

  return final;
}

console.log(passCheck());

let final = passCheck();

const checkUserID = document.getElementById("login");
const validUserID = document.getElementById("email");
const passUserID = document.getElementById("password");

checkUserID.addEventListener("click", function () {
  let answer = "";

  if (validUserID.value === "") {
    return alert("Harap mengisi Username ID !");
  }
  
  for (let i = 0; i < final.length; i++) {

    if (final[0] === validUserID.value && final[1] === passUserID.value) {
      answer = "Selamat datang di Only Text. Have fun !";
      window.location.href = "main.html";
      alert(`${answer}`);
      validUserID.value = "";
      return
    } else {
      answer = "Maaf, Username ID atau Password salah !";
      alert(`${answer}`);
      passUserID.value = "";
    }
  }
});

// $("#login").click(function() {

//     let username= $("#password").val();

//     if (username===pass) {
//         window.location.href = 'register.html'

//     }else(
//         alert('gagal')
//     )

// });
