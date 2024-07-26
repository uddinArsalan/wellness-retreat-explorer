import { useState, useEffect } from "react";
import FilterPanel from "./FilterPanel";
import { getCardsInfo } from "../../api/get-cards-info";
import RetreatCardsList from "./RetreatCardsList";
import { searchByTitle } from "../../api/search-by-title";
import { filterByType } from "../../api/filter-by-type";
import { WellnessRetreatCardsType } from "../../interfaces";
import { useApp } from "../../contexts/AppProvider";

function CardsSection() {
  const { itemsPerPage,totalPages } = useApp();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const {startLoader,completeLoader} = useApp();
  const [filters, setFilters] = useState({
    date: "",
    type: "",
    search: "",
  });
  const [wellnessCardsInfo, setWellnessCardsInfo] = useState<
    WellnessRetreatCardsType[]
  >([]);

  useEffect(() => {
    fetchData();
  }, [currentPage, itemsPerPage]);

  const applyFilters = async () => {
    // const loaderId = startLoader();
    try {
      let filteredData: WellnessRetreatCardsType[] = [];

      if (filters.search) {
        filteredData = await searchByTitle(
          currentPage,
          itemsPerPage,
          filters.search
        );
      } else if (filters.type) {
        filteredData = await filterByType(
          currentPage,
          itemsPerPage,
          filters.type
        );
      } else {
        filteredData = await getCardsInfo(currentPage, itemsPerPage);
      }

      if (filters.date) {
        filteredData = filteredData.filter((item) => {
          const itemDate = new Date(item.date * 1000);
          const filterDate = new Date(filters.date);
          console.log(itemDate,filterDate);
          return itemDate.toDateString() === filterDate.toDateString();
        });
      }

      setWellnessCardsInfo(filteredData);
    } catch (err) {
      console.error("Error applying filters:", err);
    }
    // finally{
    //   completeLoader(loaderId);
    // }
  };


  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      applyFilters();
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [filters, currentPage, itemsPerPage]);

  const fetchData = async () => {
    const loaderId = startLoader();
    try {
      const data = await getCardsInfo(currentPage, itemsPerPage);
      setWellnessCardsInfo(data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }finally{
      completeLoader(loaderId);
    }
  };
  const handleNext = () => {
    if(currentPage < totalPages){
      setCurrentPage((prev) => prev + 1);
    }
  };
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  return (
    <div>
      <FilterPanel filters={filters} setFilters={setFilters} />
      <RetreatCardsList wellnessCardsInfo={wellnessCardsInfo}
      />
      <div className="flex justify-center items-center gap-2 mt-6 mb-6">
        <button
          className="bg-primary font-semibold text-white border-none disabled:bg-opacity-80 rounded-md p-2"
          onClick={handlePrevious}
          disabled={currentPage <= 1}
        >
          Previous
        </button>
        <button
          className="bg-primary font-semibold text-white border-none rounded-md p-2 disabled:bg-opacity-80"
          onClick={handleNext}
          disabled={currentPage >= totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CardsSection;
