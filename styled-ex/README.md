<h2>2주차 강의 : Styled Components 적용 예제</h2>
<p>CSS-in-JS 라이브러리 중 하나인 Styled Components를 이용하여 React 컴포넌트를 스타일링한다.</p>

<h3>styled-components 패키지 설치하기</h3>
<pre><code>yarn add styled-components
</code></pre>

<h3>App.js</h3>
<pre><code>import styled from 'styled-components';
const MyStyled = styled.div\`
  width: 50vw;
  min-height: 150px;
  padding: 10px;
  border-radius: 15px;
  color: #fff;
  &:hover{
    background-color: #ddd;
  }
  background-color: ${(props) => (props.bgColor를 ? "red" : "purple")};
\`;
</code></pre>
<p>- styled-components 패키지에서 styled 함수를 import하여 사용한다.</p>
<p>- 백틱(`)을 이용하여 컴포넌트에 스타일을 작성한다.</p>
<p>- SCSS와 마찬가지로 &로 자기 자신을 지칭할 수 있다.</p>
<p>- ${} 형식으로 변수를 사용할 수 있다.</p>
<p>- className을 지을 필요가 없고, 간단하고 직관적으로 스타일링을 할 수 있다.</p>

<h3>실행 화면</h3>
<div align="center">
  <img src="https://user-images.githubusercontent.com/75527311/126682265-d34484e4-f47e-4968-a49f-548ffa8a8a71.png" width="500">
  <p>styled-components를 이용하여 지정한 스타일이 적용된 모습</p>
  <img src="https://user-images.githubusercontent.com/75527311/126682337-89a5cb62-11bf-4803-aeb5-5c8d8caba52e.png" width="500">
  <p>마우스 hover시 배경색이 바뀐다.</p>
</div>
