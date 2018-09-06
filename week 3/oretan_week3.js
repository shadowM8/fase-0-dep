var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

//console.log(input[1][2])
// var ttl = []
// ttl.push(input[1][2])
// ttl.push(input[1][3])
// var ttlTest = ttl.join(" ")
// console.log(ttlTest)

// input[1].splice(2,2,ttlTest)
// console.log(input[1])
// console.log(input[1].length)

// function reverse_a_number(n)
// {
// 	n = n + "";
// 	return n.split("").reverse().join("");
// }
// console.log(reverse_a_number(32243));
// console.log (typeof reverse_a_number(32243))

// function reversal(number) {
//     var reversed = 0;
   
//     while (number != 0) {
//      reversed *= 10;
//      reversed += number % 10;
//      number -= number % 10;
//      number /= 10;
//     }
   
//     return reversed;
//    }

// console.log(reversal(21))
var number = 3
var reversed = 5

reversed *= 10
console.log('langkah 1')
console.log(number)
console.log(reversed)

reversed += number%10
console.log('langkah 2')
console.log(number)
console.log(reversed)

number -= number %10
console.log('langkah 3')
console.log(number)
console.log(reversed)

number /= 10
console.log('langkah 4')
console.log(number)
console.log(reversed)