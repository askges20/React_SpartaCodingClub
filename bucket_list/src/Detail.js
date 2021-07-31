import React from 'react';

import Button from '@material-ui/core/Button';
// import {Button} from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import { useSelector, useDispatch } from 'react-redux';
import { updateBucketFB, deleteBucketFB } from './redux/modules/bucket';

const Detail = (props) => {
    const dispatch = useDispatch();

    const bucket_list = useSelector((state) => state.bucket.list);  //스토어에서 상태값 가져오기
    console.log(bucket_list, props);

    const bucket_index = parseInt(props.match.params.index);    //url 파라미터에서 인덱스 가져오기

    console.log(props.history);

    return (
        <div>
            <h1>{bucket_list[bucket_index].text}</h1>
            <ButtonGroup>
            <Button
            color = 'primary'
            onClick={() => {
                dispatch(deleteBucketFB(bucket_index));   //dispatch()안에 액션 생성 함수 넣기
                props.history.goBack();
            }}>삭제하기</Button>
            <Button
            color = 'secondary'
            onClick={() => {
                dispatch(updateBucketFB(bucket_index));
                props.history.goBack();
            }}>완료하기</Button>
            </ButtonGroup>
        </div>
    );
}

export default Detail;