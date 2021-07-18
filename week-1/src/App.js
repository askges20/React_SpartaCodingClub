import React from 'react';
import './App.css';
import BucketList from './BucketList';
import './style.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      list: ['영화관 가기', '매일 책읽기', '수영 배우기']
    };
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="title">내 버킷리스트</h1>
          <hr className="line"/>
          <BucketList list={this.state.list}/>
        </div>
      </div>
    )
  }
}

export default App;