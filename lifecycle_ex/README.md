<h2>2주차 강의 : 라이프 사이클 함수 예제</h2>
<p>React 컴포넌트의 라이프 사이클 함수들의 실행 순서를 확인한다.</p>
  
[작성한 코드(LifecycleEx.js)](./src/LifecycleEx.js)
  
</p>
<hr/>

<h3>라이프 사이클</h3>
<p>- 컴포넌트가 렌더링을 준비하는 순간 ~ 페이지에서 사라질 때까지의 과정을 의미한다.</p>
<img src="https://user-images.githubusercontent.com/75527311/126683599-392df08f-8bc8-4787-9af8-5bbe22d41102.png"/>
<p>- 컴포넌트 <b>생성</b> → <b>수정(업데이트)</b> → <b>제거</b></p>
<p>- <b>생성</b> : 처음으로 컴포넌트를 불러오는 단계</p>
<p>- <b>수정(업데이트)</b> : 사용자의 행동으로 데이터가 바뀌거나 부모 컴포넌트가 렌더링할 때 발생</p>
<p>ex. props가 바뀔 때, state가 바뀔 때, 부모 컴포넌트가 업데이트 되었을 때 (리렌더링), 강제로 업데이트했을 때 (forceUpdate())</p>
<p>- <b>제거</b> : 페이지를 이동하거나 사용자의 행동으로 인해 컴포넌트가 화면에서 사라지는 단계</p>
<hr/>

<h3>라이프 사이클 함수</h3>
<p>- <b>constuctor()</b> : 생성자 함수, 컴포넌트가 생성되면 가장 처음 호출되는 함수</p>
<p>- <b>render()</b> : 컴포넌트의 모양을 정의하는 함수</p>
<p>- <b>componentDidMount()</b> : 첫번째 렌더링을 마친 후에 실행, 리렌더링시에는 호출되지 않음</p>
<p>- <b>componentDidUpdate(prevProps, prevState, snapshot)</b> : 리렌더링을 완료한 후 실행되는 함수</p>
<p>- <b>componentWillUnmount()</b> : 컴포넌트가 DOM에서 제거될 때 실행하는 함수</p>
<hr/>
  
<h3>실행 화면</h3>
<div align="center">
  <img src="https://user-images.githubusercontent.com/75527311/126684860-ac527012-0bf4-4b42-993b-4f4436084a57.PNG">
  <p>constructor -> render -> componentDidMount 순서대로 실행</p>
  <img src="https://user-images.githubusercontent.com/75527311/126684916-db85c6a7-dfbb-4cf0-9624-3c903ec7d875.PNG">
  <p>버튼 클릭 시 state 변경 -> 리렌더링 -> componentDidUpdate 순서대로 실행</p>
</div>
