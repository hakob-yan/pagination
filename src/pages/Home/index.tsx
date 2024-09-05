import React, { ReactElement } from "react";
import Pagination from "../../components/Pagination";
const Home = (): ReactElement => {
  return (
    <Pagination
      itemsLength={100}
      activePageNumber={5}
      itemsPerPage={10}
      onPageChange={() => {}}
    />
  );
};

export default Home;
