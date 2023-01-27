# ✨영화 검색기 - Next.js✨

# 🚀 배포
[![Deploy with Vercel](https://vercel.com/button)](https://searching-movie.vercel.app/)
# 🔧 기술 스택
    typescript
    css-module
    store
    axios
    debounce,
    next
    react
    react-dom
    react-query
    recoil
  
## 📦 폴더 구조

```sh
📦next_js_intro
 ┣ 📂components
 ┣ 📂pages
 ┃ ┣ 📂movies
 ┃ ┃ ┗ 📜[...params].tsx #영화 디테일
 ┃ ┣ 📜404.ts #404
 ┃ ┣ 📜favorite.tsx # 즐겨찾기 모음화면
 ┃ ┣ 📜index.tsx #인덱스 
 ┃ ┗ 📜_app.tsx
 ┣ 📂public #svg&ico 파일
 ┣ 📂recoil #recoil atom파일
 ┣ 📂service
 ┃ ┣ 📜getCarousel.ts #api axios 받아오기
 ┃ ┣ 📜getData.ts 
 ┃ ┣ 📜getMovieDetail.ts 
 ┃ ┣ 📜useCarousel.ts # 받아온 데이터 후처리
 ┃ ┣ 📜useMovieDetail.ts # 받아온 데이터 후처리
 ┃ ┗ 📜useSearchMovie.ts #useQuery 검색어 처리
 ┣ 📂styles #css module 파일
 ┗ 📂types #타입 지정


```

# 📌 실행 방법

## 1. 설치

```
git clone https://github.com/Dojinkyung/next_js_intro.git
```

```bash
npm run dev
# or
yarn dev
```
 [http://localhost:3000](http://localhost:3000) 으로 브라우저 결과를 볼 수 있습니다.
## 2. 📸 화면

[![Video Label](http://img.youtube.com/vi/dQMLW_AAGxI/0.jpg)](https://youtu.be/dQMLW_AAGxI)

# 💡 구현 내용
영화를 검색하고 즐겨찾기로 등록할 수 있는 웹을 구현했습니다.
1. 데이터 활용

    api: https://www.themoviedb.org/
    
    axios를 이용하여 api를 불러오고 react-query를 이용

2. 즐겨찾기 저장
    
    localsotrage에 store.js를 이용하여 저장

3. 무한 스크롤
    
    Intersection Observer API 사용
