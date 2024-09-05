import { useEffect, useRef, useState } from "react";

const Pagination = ({
  itemsLength,
  itemsPerPage,
  activePageNumber,
  onPageChange,
}: {
  itemsLength: number;
  itemsPerPage: number;
  activePageNumber: number;
  onPageChange: (num: number) => void;
}) => {
  const activePageRef = useRef<null | HTMLSpanElement>(null);
  const pagesWrapperRef = useRef<null | HTMLSpanElement>(null);
  const pagesParentRef = useRef<null | HTMLDivElement>(null);
  const [parentWidth, setParentWidth] = useState(0);
  const [wrapperWidth, setWrapperWidth] = useState(0);

  const pageCount = Math.ceil(itemsLength / itemsPerPage);
  const pagesArr = [];
  for (let i = 1; i <= pageCount; ++i) {
    pagesArr.push(i);
  }
  useEffect(() => {
    const activeElem = activePageRef.current;
    const wrapperElem = pagesWrapperRef.current;
    const parentElem = pagesParentRef.current;
    if (activeElem && wrapperElem && activePageNumber && parentElem) {
      const activeElemParams = activeElem.getBoundingClientRect();
      const parentParams = parentElem.getBoundingClientRect();
      setParentWidth(parentElem.clientWidth);
      setWrapperWidth(wrapperElem.getBoundingClientRect().width);

      parentElem.scrollTo({
        top: 0,
        left:
          activeElem.offsetLeft -
          parentParams.width / 2 +
          activeElemParams.width / 2,
        behavior: "smooth",
      });
    }
  }, [activePageNumber, pagesArr.length]);

  if (itemsLength === 0) {
    return null;
  } else
    return (
      <div className="relative ">
        <div
          ref={pagesParentRef}
          className="gap-x-3  overflow-x-auto py-2  w-full  hide-scrollbar px-4"
        >
          <span
            ref={pagesWrapperRef}
            className={`w-full ${
              wrapperWidth < parentWidth ? "flex justify-center" : ""
            }`}
          >
            {pagesArr.length > 1 &&
              pagesArr.map((el: number) => {
                const isActive = activePageNumber === el;

                return (
                  <span
                    key={el}
                    onClick={() => onPageChange(el)}
                    ref={isActive ? activePageRef : null}
                    className={`text-sm font-normal rounded-3xl border ${
                      isActive
                        ? "border-gray-500 "
                        : "border-text-icons-secondaty-text text-text-secondary"
                    } w-max px-3 py-1 mx-1 cursor-pointer `}
                  >
                    {el}
                  </span>
                );
              })}
          </span>
        </div>
      </div>
    );
};
export default Pagination;
