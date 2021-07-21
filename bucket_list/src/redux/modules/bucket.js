// bucket.js

// Actions
const LOAD = "bucket/LOAD";
const CREATE = "bucket/CREATE";
const DELETE = "bucket/DELETE";

const initialState = {
    list: ['영화관 가기', '매일 책읽기', '수영 배우기']
}

//Action Creators
export const loadBucket = (bucket) => {
    return {type: LOAD, bucket};
}

export const createBucket = (bucket) => {
    return {type: CREATE, bucket};
}

export const deleteBucket = (bucket) => {
    return {type: DELETE, bucket};
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "bucket/LOAD":{
        return initialState;
    }
    case "bucket/CREATE":{
        const new_bucket_list = [...state.list, action.bucket]; //기존 상태, 새 text
        return {list: new_bucket_list};
    }
    case "bucket/DELETE":{
        const bucket_list = state.list.filter((l, idx) => {
            if(idx != action.bucket){
                return l;
            }
        });

        return {list: bucket_list};
    }
    default:
        return state;
  }
}