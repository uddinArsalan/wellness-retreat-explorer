import { useState, useEffect } from "react";
import FilterPanel from "./FilterPanel";
import { getCardsInfo } from "../../api/get-cards-info";
import RetreatCardsList from "./RetreatCardsList";
import { searchByTitle } from "../../api/search-by-title";
import { filterByType } from "../../api/filter-by-type";
import { WellnessRetreatCardsType } from "../../interfaces";
import { useApp } from "../../contexts/AppProvider";
import CardsSkeletonLoader from "./CardSkeletonLoadin";

function CardsSection() {
  const { itemsPerPage, totalPages } = useApp();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(false);
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
  }, [currentPage, itemsPerPage, filters]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      let data: WellnessRetreatCardsType[] = [];

      if (filters.search) {
        data = await searchByTitle(currentPage, itemsPerPage, filters.search);
      } else if (filters.type) {
        data = await filterByType(currentPage, itemsPerPage, filters.type);
      } else {
        data = await getCardsInfo(currentPage, itemsPerPage);
      }

      if (filters.date) {
        const filterDate = new Date(filters.date);
        data = data.filter((item) => {
          const itemDate = new Date(item.date * 1000);
          return itemDate.toDateString() === filterDate.toDateString();
        });
      }

      setWellnessCardsInfo(data);
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  return (
    <div className="">
      <FilterPanel filters={filters} setFilters={setFilters} />
      {isLoading ? (
        <CardsSkeletonLoader />
      ) : (
        <RetreatCardsList wellnessCardsInfo={wellnessCardsInfo} />
      )}
      <div className="flex justify-center items-center mt-8 mb-8">
        <button
          className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-l-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handlePrevious}
          disabled={currentPage <= 1}
        >
          <span className="mr-2">&larr;</span> Previous
        </button>
        <span className="mx-4 text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-r-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleNext}
          disabled={currentPage >= totalPages}
        >
          Next <span className="ml-2">&rarr;</span>
        </button>
      </div>
    </div>
  );
}

export default CardsSection;
