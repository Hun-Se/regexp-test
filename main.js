const str = `
010-1234-5678
kim72840@gmail.com
the sun
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// // const regexp = new RegExp('the', 'gi')
// const regexp = /the/gi
// console.log(str.match(regexp))

// const regexp = /fox/gi;
// // console.log(regexp.test(str));
// str.replace(regexp, 'AAA');
// console.log(str);

console.log(
    str.match(/.{1,}(?=@)/g,'')
    )