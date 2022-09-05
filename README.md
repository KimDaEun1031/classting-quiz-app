# Classting Quiz App

![ezgif com-gif-maker (14)](https://user-images.githubusercontent.com/73865700/188409608-87ca46e0-e89a-4b7d-82ba-378b2ae98b62.gif)

[Classting Quiz](https://master--velvety-alfajores-ebd21f.netlify.app/)

## ☑️ 실행 방법
1. 원격 저장소에서 clone 받기
```
git clone https://github.com/KimDaEun1031/classting-quiz-app.git
```

2. clone 받은 폴더 위치로 이동하고 install 후 start
```
npm install
npm start
```

## ☑️ 프로젝트
Classting Quiz는 10개의 간단한 문제를 풀 수 있는 웹어플리케이션입니다. 한 문항 당 총 4개의 답변이 있고, 답을 선택한 즉시 오답과 정답을 알 수 있습니다. 모든 문제를 풀면 모든 문제 중에서 오답과 정답의 비율을 차트를 통해 볼 수 있습니다. 또, 오답 노트를 통해 틀린 문제의 정답과 내가 선택한 답변을 볼 수 있습니다.

### 🛠️ 기술 스택
- React
- Typescript
- chart.js
- Jest
- Styled component

### 📂 프로젝트 구조
```
.
|   .gitignore
|   jest.config.ts
|   package-lock.json
|   package.json
|   README.md
|   tsconfig.json
|   
+---public       
\---src
    |   App.tsx
    |   index.tsx
    |   react-app-env.d.ts
    |   setupTests.ts
    |   
    +---api
    |       index.ts
    |       
    +---assets
    |   \---images
    |           back-icon.png
    |           classting-logo.png
    |           home-icon.png
    |           note-icon.png
    |           quiz-icon.png
    |           redo-icon.png
    |           
    +---components
    |   |   Main.tsx
    |   |   Note.tsx
    |   |   NoteModal.tsx
    |   |   NotFound.tsx
    |   |   Quiz.tsx
    |   |   Result.tsx
    |   |   type.d.ts
    |   |   
    |   \---shared
    |           AnimationButton.ts
    |           Button.ts
    |           Container.ts
    |           Frame.ts
    |           
    +---styles
    |       GlobalStyle.ts
    |       styled.d.ts
    |       Theme.ts
    |       
    +---utils
    |       scrubData.ts
    |       
    \---__test__
            Main.test.tsx
```

## ☑️ 구현 사항
### ❗ 필수 구현 사항
- [x]  사용자는 ‘퀴즈 풀기’ 버튼을 클릭하여 퀴즈 풀기를 시작할 수 있다.
- [x]  사용자는 문항에 대한 답안을 4개 보기 중에 선택할 수 있다.
- [x]  사용자는 답안을 선택하면 다음 문항을 볼 수 있다.
    - [x]  답안 선택 후 다음 문항 버튼을 볼 수 있다.
    - [x]  답안이 맞았는지 틀렸는지 바로 알 수 있다.
    - [x]  다음 문항 버튼을 클릭하여 다음 문항으로 이동할 수 있다.
- [x]  모든 문항을 다 풀면 사용자는 다음과 같은 결과 정보를 볼 수 있다.
    - [x]  퀴즈를 마칠 때 까지 소요된 시간
    - [x]  정답 개수
    - [x]  오답 개수

### ❕ 선택 구현 사항
- [x]  정 오답에 대한 비율을 차트로 표기한다.
- [x]  다시 풀기 기능
- [x]  오답 노트 기능

## ☑️ 느낀 점 및 아쉬운 점
- **상태 관리**  
요구 구현 사항과 관련하여 과제가 요구하는 기능들이 복잡하지 않다고 생각했기 때문에 상태 관리 라이브러리를 사용하지 않았습니다.

- **Styled Component : Theme / shared**  
Theme를 적용하여 공통적인 스타일을 유지할 수 있도록 했습니다. 그리고 공통으로 사용하는 스타일들을 분리함으로써 재사용이 가능하도록 했습니다.

- **chart.js**  
차트에 관한 라이브러리 중에서 rechart 라이브러리를 접할 기회가 생겨 사용을 해본 적이 있었습니다. 이번 과제를 진행하면서 차트 라이브러리를 찾던 도중 chart.js를 발견하게 되어 rechart와 어떤 차이점이 있을까라는 궁금증에 선택하게되었습니다. 두 라이브러리가 많이 차이나지는 않지만 개인적으로 느낀 것은 chart.js가 rechart에 비해 사용하기 쉽고, 참고할 수 있는 예시도 많았다고 느꼈습니다.

- **아쉬운 점**  
우선 과제를 진행할 수 있는 기회를 주셔서 감사합니다. 과제를 진행하면서 과제의 완성도에 신경을 쓸려고 노력했지만, 생각보다 완성도가 나오지 않은 것 같아서 아쉬움이 남습니다. 사용자의 편의에 맞게 UI를 작성할 수 있게 명확하게 요구사항을 명시해주셔서 감사합니다. 다시 한 번 좋은 기회를 주셔서 감사합니다.
