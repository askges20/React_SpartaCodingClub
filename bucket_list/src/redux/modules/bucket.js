// bucket.js
import {firestore} from '../../firebase';

const bucket_db = firestore.collection('bucket');

// Actions
const LOAD = "bucket/LOAD";
const CREATE = "bucket/CREATE";
const DELETE = "bucket/DELETE";
const UPDATE = "bucket/UPDATE";

const initialState = {
    //딕셔너리로 저장
    list: [
        {text:"영화관 가기", completed:false},
        {text:"매일 책읽기", completed:false},
        {text:"수영 배우기", completed:false},
    ]
    //list: ['영화관 가기', '매일 책읽기', '수영 배우기']
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

export const updateBucket = (index) => {
    return {type: UPDATE, index}
}



export const loadBucketFB = () => {
    return function(dispatch){
        bucket_db.get().then((docs) => {
            let bucket_data = [];
            docs.forEach((doc) => {
                if(doc.exists){
                    bucket_data = [...bucket_data, {id: doc.id, ...doc.data()}];
                }
            })

            console.log(bucket_data);
            dispatch(loadBucket(bucket_data));
        });
    }
}


export const addBucketFB = (bucket) => {
    return function (dispatch){
        let bucket_data = {text: bucket, completed: false};
        bucket_db.add(bucket_data).then(docRef => {
            bucket_data = {...bucket_data, id: docRef.id};
            dispatch(createBucket(bucket_data));
        })
    }
}

export const updateBucketFB = (bucket) => {
    return function(dispatch, getState) {
        const _bucket_data = getState().bucket.list[bucket];//기존 값

        let bucket_data = {..._bucket_data, completed: true};

        if(!bucket_data.id){ //에러 방지
            return;
        }

        bucket_db.doc(bucket_data.id).update(bucket_data).then(docRef => {
            dispatch(updateBucket(bucket));
        }).catch(error => {
            console.log(error);
        });
    }
}

export const deleteBucketFB = (bucket) => {
    return function(dispatch, getState){
        const _bucket_data = getState().bucket.list[bucket];

        if(!_bucket_data.id){ //에러 방지
            return;
        }

        bucket_db.doc(_bucket_data.id).delete().then(docRef => {
            dispatch(deleteBucket(bucket));
        }).catch(error => {
            console.log(error);
        });
    }
}


// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "bucket/LOAD":{
        if(action.bucket.length > 0){
            return {list: action.bucket};
        }
        return initialState;
    }
    case "bucket/CREATE":{
        const new_bucket_list = [
            ...state.list,
            action.bucket,
            // {text: action.bucket, completed: false}
        ]; //기존 상태, 새 text
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
    case "bucket/UPDATE":{
        const bucket_list = state.list.map((l, idx) => {
            if (idx === action.index){
                return {...l, completed: true};
            } else {
                return l;
            }
        })
        return {list: bucket_list};
    }
    default:
        return state;
  }
}