//rank.js
import {firestore} from '../../firebase';

const rank_db = firestore.collection('rank');

//Actions
const ADD_USER_NAME = 'rank/ADD_USER_NAME'; //유저 이름 바꾸기
const ADD_USER_MESSAGE = 'rank/ADD_USER_MESSAGE';   //유저 메세지 바꾸기
const ADD_RANK = 'rank/ADD_RANK';   //랭킹 정보 추가
const GET_RANK = 'rank/GET_RANK';   //랭킹 정보 가져오기

const IS_LOADED = 'rank/IS_LOADED';

const initialState = {
    user_name: '',
    user_message: '',
    user_score: '',
    score_text: {
        60: '우린 친구! 앞으로도 더 친하게 지내요! :)',
        80: '우와! 우리는 엄청 가까운 사이!',
        100: '둘도 없는 단짝이에요! :)',
    },
    ranking: [],
    is_loaded: false,
};

//Action Creators
export const addUserName = (user_name) => {
    return {type: ADD_USER_NAME, user_name};
}

export const addUserMessage = (user_message) => {
    return {type: ADD_USER_MESSAGE, user_message};
}

export const addRank = (rank_info) => {
    return {type: ADD_RANK, rank_info};
}

export const getRank = (rank_list) => {
    return {type: GET_RANK, rank_list};
}

export const isLoaded = (loaded) => {
    return {type: IS_LOADED, loaded};
}

export const addRankFB = (rank_info) => {
    return function (dispatch) {
        dispatch(isLoaded(false));  //데이터를 저장할 동안 스피너가 뜨도록

        let rank_data = {
            message: rank_info.message,
            name: rank_info.name,
            score: rank_info.score,
        };

        rank_db.add(rank_data).then((doc) => {
            console.log(doc.id);
            rank_data = {...rank_data, id: doc.id, current: true};
            dispatch(addRank(rank_data));   //데이터 추가
        })
    }
}

export const getRankFB = () => {
    return function (dispatch){

        dispatch(isLoaded(false));

        rank_db.get().then((docs) => {
            let rank_data = [];

            docs.forEach((doc) => {
                // console.log(doc.data());
                rank_data = [...rank_data, {id: doc.id, ...doc.data()}];
            });

            dispatch(getRank(rank_data));
            dispatch(isLoaded(true));
        })
    }
}

//Reducer
export default function reducer(state = initialState, action = {}){
    switch(action.type) {
        //do reducer staff
        case 'rank/ADD_USER_NAME': {
            return {...state, user_name: action.user_name};
        }

        case 'rank/ADD_USER_MESSAGE': {
            return {...state, user_message: action.user_message};
        }

        case 'rank/ADD_RANK': {
            return {...state, ranking: [...state.ranking, action.rank_info]};
        }

        case 'rank/GET_RANK': {
            //redux에 있던 데이터에 FB에서 가져온 데이터를 추가한다.

            let ranking_data = [...state.ranking];  //랭킹 데이터를 담을 변수에 기존 redux 값 넣기

            //랭킹 데이터의 id 배열을 만든다.
            const rank_ids = state.ranking.map((r, idx) => {
                return r.id;
            });
            console.log(rank_ids);

            //redux에 없는 데이터만 가져오기
            const rank_data_fb = action.rank_list.filter((r, idx) => {
                if(rank_ids.indexOf(r.id) === -1){
                    ranking_data = [...ranking_data, r];
                }
            });
            console.log(ranking_data);

            return {...state, ranking: ranking_data};
        }

        case 'rank/IS_LOADED': {
            return {...state, is_loaded: action.loaded};
        }

        default:
            return state;
    }
}