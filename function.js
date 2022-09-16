function superAdmin(database, del) {
    let objResult = []
    for (let index = 0; index < database.length; index++) {
        let acc = database[index]
        if (index !== del) {
            objResult.push(acc)
        }
    }
    database = objResult // PASS BY REFERENCE
    return database
}
function addAccount(database, newAccount) {
    console.log(database);
    // for (let i = 0; i < database.length; i++) {
    // }
}
let newAccount = {username: 'alfian', password: 'alfian'}
let database = [ // TEMPAT SIMPAN SEMUA AKUN YANG DAFTAR (JADI YANG SUDAH DAFTAR AKAN DITAMBAHIN KESINI)
    {
        username: 'test',
        password: 'testpw'
    },
    {
        username: 'fofo',
        password: 'hehe'
    }
]
let num = 0 // num dapet dari number keberapa yang mau dihapus (diambil dari button delete)
superAdmin(database, num) // num dapet dari number keberapa yang mau dihapus (diambil dari button delete)
console.log(database);
