import React from 'react';
import img from "./scc_img01.png";
import { useDispatch, useSelector } from 'react-redux';
import { addUserName } from './redux/modules/rank';

const Start = (props) => {
    const dispatch = useDispatch();
    const name = useSelector((state) => state.quiz.name);
    const input_text = React.useRef(null);

    return (
        <div style={{
            display: "flex",
            height: "100vh",
            width: "100vw",
            overflow: "hidden",
            padding: "16px",
            boxSizing: "border-box",
        }}>
            <div
                className="outter"
                style={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    flexDirection:"column",
                    height:"100vh",
                    width:"100vw",
                    overflow:"hidden",
                    padding:"0px 10vw",
                    boxSizing:"border-box",
                    maxWidth:"400px"
                }}>
                    <img src={img} style={{width:"80%", margin:"16px"}} />
                    <h1 style={{fontSize:"1.5em", margin:"0px", lineHeight:"1.4"}}>
                        나는{" "}
                        <span
                            style={{
                                backgroundColor:"#fef5d4",
                                padding:"5px 10px",
                                borderRadius:"30px",
                            }}>
                            {name}
                        </span>
                        에 대해 얼마나 알고 있을까?
                    </h1>
                    <input
                        ref = {input_text}
                        type="text"
                        style={{
                            padding:"10px",
                            margin:"24px 0px",
                            border:"1px solid #dadafc",
                            borderRadius:"30px",
                            width:"100%"
                        }}
                        placeholder="내 이름"
                    />
                    <button
                        onClick = {() => {
                            dispatch(addUserName(input_text.current.value));    //이름 저장
                            props.history.push('/quiz');    //페이지 이동
                        }}
                        style={{
                            padding:"8px 24px",
                            backgroundColor: "#dadafc",
                            borderRadius: "30px",
                            border: "#dadafc",
                        }}>
                        시작하기
                    </button>
            </div>
        </div>
    );
}

export default Start;