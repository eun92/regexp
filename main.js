const str = `
010-1234-5678
theeun@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The eun the dldldldldldldl.
aldldldldldlld
d`
// const regexp = new RegExp('eun', 'g')
// const regexp = /the/gi

// console.log(str.match(regexp))
// console.log(regexp.test(str))
// console.log(str.replace(regexp, "AAA"))
// console.log(str)

// console.log(str.match(/\.$/g))
console.log(str.match(/et?/gmi))

