import React from 'react';
import styled from 'styled-components';

import {useSelector} from 'react-redux';

const Progress = (props) => {
    const quiz_list = useSelector((state) => state.quiz.quiz);  //퀴즈 리스트 답
    const answers = useSelector((state) => state.quiz.answers); //유저 답
    let count = answers.length;

    return (
        <ProgressBar>
            <HighLight width={(count / quiz_list.length) * 100 + '%'}/>
            <Dot/>
        </ProgressBar>
    )
}

const ProgressBar = styled.div`
  width: 80%;
  margin: 20px auto;
  background: #eee;
  height: 20px;
  display: flex;
  align-items: center;
  border-radius: 10px;
`;

const HighLight = styled.div`
    background: #673ab7;
    height: 20px;
    width: ${props => props.width};
    transition: width 1s;
    border-radius: 10px;
`;

const Dot = styled.div`
    background: #fff;
    border: 5px solid #673ab7;
    box-sizing: border-box;
    margin: 0px 0px 0px -10px;
    width: 40px;
    height: 40px;
    border-radius: 20px;
`;

export default Progress;