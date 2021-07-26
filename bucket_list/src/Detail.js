import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBucket, updateBucket } from './redux/modules/bucket';

const Detail = (props) => {
    const dispatch = useDispatch();

    const bucket_list = useSelector((state) => state.bucket.list);  //스토어에서 상태값 가져오기
    console.log(bucket_list, props);

    const bucket_index = parseInt(props.match.params.index);    //url 파라미터에서 인덱스 가져오기

    console.log(props.history);

    return (
        <div>
            <h1>{bucket_list[bucket_index].text}</h1>
            <button onClick={() => {
                dispatch(deleteBucket(bucket_index));   //dispatch()안에 액션 생성 함수 넣기
                props.history.goBack();
            }}>삭제하기</button>
            <button onClick={() => {
                dispatch(updateBucket(bucket_index));
                props.history.goBack();
            }}>완료하기</button>
        </div>
    );
}

export default Detail;