import React, { ReactElement, useEffect, useRef, useState } from "react";
const Home = (): ReactElement => {
  const [pinX, setPinX] = useState(0);
  const [pinY, setPinY] = useState(0);
  const pinRef = useRef<HTMLImageElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isCLicked, setIsClicked] = useState(false);
  console.log(isCLicked);

  useEffect(() => {
    const imgElem = pinRef.current;
    const wrapperElem = wrapperRef.current;

    if (!imgElem || !wrapperElem) {
      return;
    }

    wrapperElem.addEventListener("mousemove", (e) => {
      if (e.buttons === 1 || e.buttons === 3) {
        console.log("yes", e);
        if (e.srcElement === imgElem) {
          setPinX(e.x - 0.5 * imgElem.clientWidth);
          setPinY(e.y - 0.5 * imgElem.clientHeight);
        }
      }
    });
    // document.body.onmousedown = function (e) {
    //   if (e.srcElement === imgElem) {
    //     setIsClicked(true);
    //   }
    // };
    // document.body.onmouseup = function (e) {
    //   setIsClicked(false);
    // };
  }, [pinRef, wrapperRef]);
  return (
    <div className="w-full h-screen bg-red-100 relative" ref={wrapperRef}>
      <div className="bg-slate-600 w-[15rem] h-[15rem] rounded-full"></div>
      <div
        className="w-10 cursor-pointer absolute "
        style={{ top: pinY, left: pinX }}
      >
        <img
          draggable
          ref={pinRef}
          src="https://img.nuclearsecrecy.com/nukemap_marker.svg"
          alt="pin"
          className="w-10  no-drag"
        />
      </div>
    </div>
  );
};

export default Home;
