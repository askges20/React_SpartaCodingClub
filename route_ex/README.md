# 3주차 강의 : 라우팅 예제

## 라우팅
- 브라우저 주소에 따라 다른 페이지를 보여주는 것
- SPA에서 html은 딱 하나만 있지만 브라우저 주소창대로 다른 페이지를 보여줄 수 있음
<br>

## 리액트에서 라우팅 처리하기
- react-route-dom 패키지 설치하기
```bash
yarn add react-router-dom
```
- react-route-dom 공식 문서 : [https://reactrouter.com/web/guides/primary-components](https://reactrouter.com/web/guides/primary-components)
<br>

- index.js에 BrowserRouter 적용
```jsx
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
	document.getElementById("root")
);
```
- 세부 화면 만들기 (Home.js, Cat.js, Dog.js)
- App.js에 Route, Link 적용하기
```jsx
<div className="App">
	<div>
		<Link to="/">Home으로 가기</Link>
		<Link to="/cat/nabi">Cat으로 가기</Link>
		<Link to="/dog">Dog으로 가기</Link>
	</div>
  <hr/>
	<Route path="/" exact component={Home}/>
	<Route exact path="/cat/:cat_name" component={Cat}/>
	<Route path="/dog" component={Dog}/>
</div>
```
- history 사용하기
```jsx
<button onClick={() => {
	this.props.history.push("/cat");
}}>
	cat으로 가기
</button>
<button onClick={() => {
	this.props.history.goBack();
}}>뒤로가기</button>
```
<br>

## 실행 화면
<div align="center">
  <img src="https://user-images.githubusercontent.com/75527311/128461132-b726669b-2705-41cc-86aa-aaec1663a0fa.PNG" width="350">
  <p>[Home/Cat/Dog으로 가기] Link를 클릭하면 해당 페이지로 이동함</p>
  <br>
  
  <img src="https://user-images.githubusercontent.com/75527311/128460727-07247e8b-9523-4219-8502-ad117e454e28.PNG" width="350">
  <img src="https://user-images.githubusercontent.com/75527311/128460725-76ee40c2-d281-45b5-b907-a97148085cbe.PNG" width="350">
  <p>각각 Cat, Dog 페이지로 이동한 모습, Cat 페이지에는 파라미터로 cat_name도 전달함</p>
  <p>history를 이용한 뒤로가기 버튼을 클릭하면 이전 페이지로 이동함</p>
</div>
