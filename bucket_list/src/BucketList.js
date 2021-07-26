import React from 'react';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';

const BucketList = (props) => {
    console.log(props);
    const bucket_list = useSelector(state => state.bucket.list);    //버킷리스트를 리액트 훅으로 가져오기
    console.log(bucket_list);

    return (
        <ListStyle>
            {
                bucket_list.map((list, index) => {
                    return (
                    <ItemStyle
                        className="list_item"
                        key={index}
                        completed={list.completed}
                        onClick={() => {
                            props.history.push('/detail/'+index);   //몇 번째 항목을 눌렀는지 url 파라미터로 넘기기
                        }}
                    >
                        {list.text /* 딕셔너리의 text 속성 */}
                    </ItemStyle>);
                })
            }
        </ListStyle>
    )
}

const ListStyle = styled.div`
    display:flex;
    flex-direction:column;
    height:50vh;
    overflow-x:hidden;
    overflow-y:auto;
`;

const ItemStyle = styled.div`
    padding:16px;
    margin:8px;
    font-weight: 600;
    color: ${props => props.completed? '#fff' : '#212121'};
    background-color:${props => props.completed ? '#673ab7' : 'aliceblue'};
`;

export default BucketList;