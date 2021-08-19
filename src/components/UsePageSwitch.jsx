import { useState } from "react";

function usePageSwitch() { 
  const [currentPage, setCurrentPage] = useState(1);

  const showPrevPage = page => {
    page = currentPage;
    if (page > 1) {
      setCurrentPage(page - 1);
    }
  }

  const showNextPage = (page) => {
    page = currentPage;
    if (page < 500) {
      setCurrentPage(page + 1);
    }
  }

  return {
    showPrevPage,
    showNextPage,
    currentPage
  };
}

export default usePageSwitch;