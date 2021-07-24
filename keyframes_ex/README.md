<h2>4주차 강의 : Styled Components의 keyframes 예제</h2>
<p>Styled Components 라이브러리의 keyframes를 이용하여 animation 적용</p>
  
[작성한 코드(App.js)](./src/App.js)

<div align="center">
  <img src="https://user-images.githubusercontent.com/75527311/126878780-0417f8d3-7f49-4ab6-bb73-4b2e4f2395a8.gif" width="300"/>
</div>
  
</p>
<hr/>

<h3>styled-components 패키지 설치하기</h3>
<pre><code>yarn add styled-components
</code></pre>

<h3>App.js</h3>
<pre><code>import styled, {keyframes} from 'styled-components';
const move = keyframes\`
  0%{
    top: 20px;
    opacity: 1;
    left: 20px;
    background-color: green;
  }
  30%{
    top: 50px;
    background-color: orange;
  }
  50%{
    top: 200px;
    opacity: 0;
    left: 200px;
  }
  80%{
    top: 150px;
  }
  100%{
    top:20px;
    opacity: 1;
    left:20px;
    background-color: blue;
  }
\`;
</code></pre>
<p>- styled와 마찬가지로 백틱(``)을 이용하여 keyframes를 작성한다.</p>

<pre><code>
const Box = styled.div\`
  width: 300px;
  height: 300px;
  background-color: green;
  border-radius: 150px;
  position: absolute;
  top: 20px;
  left: 20px;
  animation: ${move} 2s 1s infinite;
\`;
</pre></code>
<p>- styled 안에서 변수를 이용하기 위해 ${변수이름} 형식으로 작성한다.</p>
<p>- animation duration : 2s, 1s</p>
<p>- animation-iteration-count: infinite</p>
