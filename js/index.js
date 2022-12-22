var travel = 
[
    ["Yusif","Huseyn","ulvi"],
    ["Aynur","Tahire","fatime",
        [
        'Tahire ve Aynur', true, "2+2", 
            [
                "Maraqlı"
            ],
        
        ],
        ["IATC","ADNSU"]
    ],
    ["AzərbaYcan","Italiya","Argentina","Türkiyə"]
]


// Menim adim Yusifdir. Men ADNSU telebesiyem ve IATCde tehsil aliram.

console.log("Mənim adım "+travel[0][0]+"dir."+" Mən "+travel[1][4][1]+" tələbəsiyəm və "+travel[1][4][0]+"-də təhsil almağı öz xoşumla seçməmişəm.")


// Azərbaycan = Y
// Ulvi       = u
// Huseyn     = s
// Tahire     = i
// Fatime     = f

console.log(travel[2][0][6]+travel[0][2][0]+travel[0][1][2]+travel[1][1][3]+travel[1][2][0])
