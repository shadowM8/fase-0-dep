// Buatlah sebuah fungsi dengan nama balikString. Fungsi ini akan menerima argumen sebuah string dan mengembalikan kebalikannya.
//input "hello world!"
//output "!dlrow olleh"

function pembalikKata(word) {
    var newWord = ''
    for (i = word.length - 1; i >= 0; i--) {
        newWord = newWord + word[i]
    }
    return newWord
}

console.log(pembalikKata('Hello world!'))