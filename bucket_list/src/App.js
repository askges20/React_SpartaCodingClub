import React from 'react';

import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';

import BucketList from './BucketList';
import styled from 'styled-components';
import Detail from './Detail';
import NotFound from './NotFound';

import { connect } from 'react-redux';
import { loadBucket, createBucket  } from './redux/modules/bucket';

//스토어가 가진 상태값을 props로 받아오는 함수
const mapStateToProps = (state) => {
  return {bucket_list: state.bucket.list};
}

//상태 값을 변화시키기 위한 액션 생성 함수를 props로 받아오기 위한 함수
const mapDispatchToProps = (dispatch) => {
  return{
    load: () => {
      dispatch(loadBucket());
    },

    create: (bucket) => {
      dispatch(createBucket(bucket));
    }
  }
}


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };

    this.text = React.createRef();
  }

  componentDidMount() {
    console.log(this.text);
    console.log(this.text.current);
  }

  addBucketList = () => {
    const new_item = this.text.current.value;
    this.props.create(new_item);
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Title>내 버킷리스트</Title>
          <Line/>
          <Switch>
            <Route
              exact path="/"
              render={(props) => 
                (<BucketList
                    list={this.props.bucket_list}
                    history={this.props.history}
                  />
                )}
            />
            {/*BucketList list={this.state.list}/>*/}

            <Route exact path="/detail/:index" component={Detail}/>
            <Route render={(props) => (<NotFound history={props.history}/>)}/>
          </Switch>
        </Container>
        <Input>
          <input type="text" ref={this.text}/>
          <button onClick={this.addBucketList}>추가하기</button>
        </Input>
      </div>
    )
  }
}

const Input = styled.div`
  max-width:350px;
  min-height:10vh;
  background-color:#fff;
  padding:16px;
  margin:20px auto;
  border-radius: 5px;
  border:1px solid #ddd;
`;

const Container = styled.div`
  max-width:350px;
  min-height:80vh;
  background-color:#fff;
  padding:16px;
  margin:20px auto;
  border-radius: 5px;
  border:1px solid #ddd;
`;

const Title = styled.h1`
  color:slateblue;
  text-align:center;
`;

const Line = styled.hr`
  margin:16px 0px;
  border:1px dotted #ddd;
`;

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));