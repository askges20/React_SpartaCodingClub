import React from "react";
import styled from "styled-components";
import img from "./scc_img01.png";

const SwipeItem = React.memo(({ onSwipe }) => {
  const swipe_div = React.useRef(null);
  let swipe_status = "ready";
  let target_classname = "";
  let coordinate = {
    start_x: 0,
    start_y: 0,
    end_x: 0,
    end_y: 0,
  };

  React.useEffect(() => {
    const reset = () => {
      swipe_status = "ready";

      coordinate = {
        start_x: 0,
        start_y: 0,
        end_x: 0,
        end_y: 0,
      };

      swipe_div.current.className = target_classname;

      swipe_div.current.style.left = 0 + "px";
      swipe_div.current.style.top = 0 + "px";
    };

    //터치 시작 시
    const touchStart = (e) => {
      swipe_status = "touchstart";  //staus 설정
      target_classname = swipe_div.current.className;
      coordinate = {
        ...coordinate,
        start_x: e.touches[0].clientX,  //터치 이벤트가 시작될 때 좌표 기록
        start_y: e.touches[0].clientY,
      };
    };

    //터치 끝났을 때
    const touchEnd = (e) => {
      swipe_status = "touchend";
      coordinate = {
        ...coordinate,
        end_x: e.changedTouches[0].clientX, //터치 이벤트가 끝났을 때 좌표 기록
        end_y: e.changedTouches[0].clientY,
      };

      let diff_x = coordinate.end_x - coordinate.start_x; //x좌표 이동 거리
      let direct = "left";  //스와이프 방향

      if (Math.abs(diff_x) > 50) {
        swipe_div.current.className = target_classname + " swipe";

        if (diff_x > 0) { //움직인 방향에 따라 더 이동하도록
          direct = "right";
          swipe_div.current.style.left = diff_x + 150 + "px";
          swipe_div.current.style.opacity = 0;  //점점 사라지도록 투명도 0
        } else {
          direct = "left";
          swipe_div.current.style.left = diff_x - 150 + "px";
          swipe_div.current.style.opacity = 0;
        }

        // 300ms후 reset
        window.setTimeout(() => {
          reset();
          onSwipe(direct);
        }, 300);
        return;
      }

      reset();
    };

    const touchMove = (e) => {
      e.preventDefault(); //스와이프 할 때 다른 이벤트가 발생하는 것 방지

      //현재 좌표 기록
      let current_coordinate = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };

      //터치 중일 때 div가 마우스를 따라 움직이도록
      swipe_div.current.style.left =
        current_coordinate.x - coordinate.start_x + "px";
      swipe_div.current.style.top =
        current_coordinate.y - coordinate.start_y + "px";
    };

    //터치 이벤트 취소 시
    const touchCancel = (e) => {
      swipe_status = "cancel";
      reset();
    };

    //이벤트 리스너 추가하기
    swipe_div.current.addEventListener("touchstart", touchStart);
    swipe_div.current.addEventListener("touchend", touchEnd);
    swipe_div.current.addEventListener("touchmove", touchMove);
    swipe_div.current.addEventListener("touchcancel", touchCancel);

    //이벤트 해제하기
    return () => {
      if (!swipe_div.current) {
        return;
      }
      swipe_div.current.removeEventListener("touchstart", touchStart);
      swipe_div.current.removeEventListener("touchend", touchEnd);
      swipe_div.current.removeEventListener("touchmove", touchMove);
      swipe_div.current.removeEventListener("touchcancel", touchCancel);
    };
  }, []);

  return (
    <DragItem ref={swipe_div}>
      <img src={img} />
    </DragItem>
  );
});

const DragItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  &.swipe {
    transition: 300ms;
  }

  & > div {
    border-radius: 500px;
    background-color: #ffd6aa;
  }
  & img {
    max-width: 150px;
  }
`;

SwipeItem.defaultProps = {
  onSwipe: (direction) => {},
};

export default SwipeItem;