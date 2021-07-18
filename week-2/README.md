<h2>2주차 숙제 : 퀴즈 화면과 점수 화면 만들기</h2>
<p>- App.js의 state 중 page에 따라 보여주는 화면이 다름</p>
<p>- page 값은 start, quiz, score이 될 수 있으며 각 페이지에 해당하는 js 파일 존재</p>
<p>- 각 페이지는 App.js의 state 값을 넘겨 받아서 사용</p>
<p>- styled-components 라이브러리와 SCSS를 이용하여 컴포넌트를 꾸밈</p>
<hr/>

<h3>시작 화면 (Start.js)</h3>
<div></div>
<div align="center">
  <img src="https://user-images.githubusercontent.com/75527311/126059276-7a5dcd48-3df6-4379-b1a2-0891805d3e19.PNG" width="300"/>
</div>
<p>- App.js에서 받아온 name(스파르타 코딩 클럽)을 출력함</p>
<hr/>

<h3>퀴즈 화면 (Quiz.js)</h3>
<div align="center">
  <img src="https://user-images.githubusercontent.com/75527311/126059325-59e70609-8cf6-4100-84be-b8d2a88eaa1c.PNG" width="300"/>
</div>
<p>- React.memo를 이용하여 컴포넌트 Rerendering 방지</p>
<p>- App.js에서 받아온 list(question:퀴즈내용, answer:정답)을 map을 이용해서 화면에 출력</p>
<p>- 가운데 이미지를 왼쪽(O) 또는 오른쪽(X)으로 스와이프하여 퀴즈를 풀 수 있음</p>
<p>- 스와이프 아이템을 SwipeItem.js로 분리해서 사용</p>
<p>- 터치 시작, 터치 끝, 터치 이벤트 취소, 이동중일 때의 이벤트 리스너를 추가하여 터치 이벤트를 처리함</p>
<hr/>

<h3>점수 화면 (Score.js)</h3>
<div align="center">
  <img src="https://user-images.githubusercontent.com/75527311/126059346-396fc1dc-0a5a-42c7-9078-48fac6733104.PNG" width="300"/>
</div>
<p>- App.js에서 받아온 name(스파르타 코딩 클럽)을 출력함</p>
