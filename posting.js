const daftarPosting = [
    {
        id: 1,
        username: 'riemogerz',
        posting: 'Serunya ngapain ya hari ini',
        datestamp: '2022-09-13T14:29:45.001Z',
        like: 23,
    },
    {
        id: 2,
        username: 'bjorka',
        posting: 'Mau ngehack lagi',
        datestamp: '2022-09-13T14:40:12.121Z',
        like: 45,
    },
    {
        id: 3,
        username: 'bjorka',
        posting: 'Sukses ngehack satelit',
        datestamp: '2022-09-13T14:55:43.021Z',
        like: 78,
    },
    {
        id: 4,
        username: 'riemogerz',
        posting: 'Lagi makan nasi padang',
        datestamp: '2022-09-13T16:01:32.034Z',
        like: 92,
    },
    {
        id: 5,
        username: 'bjorka',
        posting: 'Diblok pemerintah',
        datestamp: '2022-09-14T01:33:12.032Z',
        like: 15,
    },
    {
        id: 6,
        username: 'riemogerz',
        posting: 'Jalan-jalan lagi',
        datestamp: '2022-09-14T03:29:34.054Z',
        like: 48,
    },
];
// ---------------------------------------------------------------
// tambah postingan
// ---------------------------------------------------------------
function createPosting (username, postingan, dbPostingan) {
    let today  = new Date();
    let posting = {}

    posting.id = dbPostingan.length + 1
    posting.username = username
    posting.posting = postingan
    posting.datestamp = today.toISOString()
    posting.like = 0
    dbPostingan.push(posting)
    return dbPostingan
}
// ---------------------------------------------------------------
// console.log(createPosting ('riemogerz', 'Postingan baru saya', daftarPosting))
// [
//     {'....................................'},
//     {
//         id: 7,
//         username: 'riemogerz',
//         posting: 'Postingan baru saya',
//         datestamp: '2022-09-15T09:52:33.739Z',  
//         like: 0
//     }
// ]
// ---------------------------------------------------------------
// edit postingan
// ---------------------------------------------------------------
function editPosting (username, id, dbPostingan, postingan) {
    let baris = dbPostingan[id-1]
    let today  = new Date();

    if (baris.id === id && baris.username === username) {
        baris.posting = postingan
        baris.datestamp = today.toISOString()
    }
    dbPostingan.push(baris)

    return dbPostingan
}
// ---------------------------------------------------------------
// console.log(editPosting ('riemogerz', 4, daftarPosting, 'Baru di edit vroh'));
// [ // ..............................
//     {'...................'},
//     {
//         id: 4,
//         username: 'riemogerz',
//         posting: 'Baru di edit vroh',
//         datestamp: '2022-09-15T10:03:12.472Z',  
//         like: 4
//     },
//     {'...................'}
// ] // ..............................
// ---------------------------------------------------------------
// hapus postingan
// ---------------------------------------------------------------
function deletePosting (username, id, dbPostingan) {
    let baris = dbPostingan[id-1]

    if (baris.id === id && baris.username === username) {
        delete baris.id
        delete baris.username
        delete baris.posting
        delete baris.datestamp
        delete baris.like
    }
    dbPostingan.push(baris)

    return dbPostingan
}
// ---------------------------------------------------------------
// console.log(deletePosting ('bjorka', 5, daftarPosting));
// ---------------------------------------------------------------
// tambah like
// ---------------------------------------------------------------
function likePosting (username, id, dbPostingan) {
    let baris = dbPostingan[id-1]
    if (baris.id === id && baris.username === username) {
        baris.like++
    }
    return dbPostingan
}
// ---------------------------------------------------------------
// console.log(likePosting ('bjorka', 2, daftarPosting));
// ---------------------------------------------------------------
// menghitung waktu // BELUM KELAR
// ---------------------------------------------------------------
function hitungWaktu (username, id, dbPostingan) {
    let datestamp       = dbPostingan[id].datestamp
    let today           = new Date()
    let waktuPosting    = new Date(datestamp)
    let menit           = today.getMinutes() - waktuPosting.getMinutes()
    

    let selisih = today - waktuPosting
    let hasil = new Date(selisih)

    console.log(id, today, '/', waktuPosting, '>>>', menit);
    // return selisih
}
// ---------------------------------------------------------------
console.log(hitungWaktu ('riemogerz', 5, daftarPosting));