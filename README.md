# League of Legends 정보 제공 사이트

## 프로젝트 소개

- 프로젝트 이름 : lol-info <br />
- 프로젝트 간단 소개 : riot api를 활용한 League of Legend 게임의 인게임 정보를 제공하는 사이트 제작 <br />
- 배포 사이트(vercel 배포를 이용) : lol-info-eight.vercel.app

## 프로젝트 제작 기술

- next.js 프레임워크 사용(react 기반 프레임 워크)
- typescrpit 언어 사용
- Tailwind css 사용

## 프로젝트 주요 기능

### 페이지 구조

- 챔피언 목록 페이지 : ISR방식을 사용하여 챔피언 목록을 나타냄
- 챔피언 상세정보 페이지 : 챔피언 목록에서 연계하여 목록페이지에서 챔피언 클릭시 상세정보를 보여주게됨
- 챔피언 로테이션 페이지 : csr방식을 사용하여 인게임 금주 무료 챔피언 목록을 나타냄
- 아이템 목록 페이지 : ssg방식을 사용하여 아이템 목록을 나타냄

### 기능 구현 설명

- next.js와 typescript를 사용하여 프로젝트를 생성
- 파일에 필요한 type을 정의하고 server actions와 route handlers를 활용하여 각페이지의 데이터 페칭을 처리
- fetch를 사용하여 외부 api를 호출 및 처리
- 각 페이지 목적에 맞는 기능 구현 및 랜더링 방식 적용 (페이지구조 참고)
- next.js의 글로벌 레이아웃 설정 및 네비게이션 기능을 사용하여 페이지간 이동 기능 구현
- 프로젝트 완성후 코드 리펙토링 및 배포 진행전 빌드 점검을 통해 오류 확인
- vercel를 통한 프로젝트 배포

## 파일 구조

app component 구조

```
📦src
 ┣ 📂app
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📂rotation
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┣ 📂assets
 ┃ ┃ ┗ 📂img
 ┃ ┃ ┃ ┗ 📜img.tsx
 ┃ ┣ 📂champions
 ┃ ┃ ┣ 📂[id]
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂fonts
 ┃ ┃ ┣ 📜GeistMonoVF.woff
 ┃ ┃ ┗ 📜GeistVF.woff
 ┃ ┣ 📂items
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂rotation
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📜globals.css
 ┃ ┣ 📜layout.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂types
 ┃ ┣ 📜Champion.ts
 ┃ ┣ 📜ChampionDetail.ts
 ┃ ┣ 📜ChampionRotation.ts
 ┃ ┗ 📜Items.ts
 ┗ 📂utils
 ┃ ┗ 📜serverApi.ts
```

## 트러블슈팅 (개발 이슈)

벨로그 링크 - > [lol-info 개인프로젝트 (트러블슈팅)](<[https://dev-note-two.vercel.app/](https://velog.io/@jgoncode/lol-info-%EA%B0%9C%EC%9D%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%8A%B8%EB%9F%AC%EB%B8%94%EC%8A%88%ED%8C%85)>)</br>
