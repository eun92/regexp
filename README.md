# 정규표현식(RegExp)

정규식, Regular Expression

## 역할

- 문자 검색(search)
- 문자 대체(replace)
- 문자 추출(extract)

## 테스트 사이트

## 정규식 생성

```js
// 생성자
new RegExp("표현", "옵션")
new RegExp('[a-z]', 'gi')

// 리터럴
/표현/옵션
/[a-z]/gi
```

## 예제 문자
```js
const str = `
010-1234-5678
theeun@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The eun the dldldldldldldl
aldldldldldlld
`
```

## 메소드

메소드 | 문법 | 설명
--|--|--

## 플래그
g, i, m, u, y

## 패턴(표현)
^, $ ...