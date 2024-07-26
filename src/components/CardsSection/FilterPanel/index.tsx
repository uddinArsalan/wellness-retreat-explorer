import React, { useRef } from 'react';

interface Filters {
  date: string;
  type: string;
  search: string;
}

interface FiltersPanelProps {
 filters : Filters,
 setFilters : React.Dispatch<React.SetStateAction<Filters>>
}

const FilterPanel: React.FC<FiltersPanelProps> = ({filters,setFilters}) => {
  const dateInputRef = useRef<HTMLInputElement>(null);

  const handleDateClick = () => {
    dateInputRef.current?.showPicker();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
    
  };

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 p-4 bg-white m-6 rounded-md">
      <div className="flex flex-col sm:flex-row gap-4">
        <div>
          <button 
            className="w-full sm:w-auto px-2 py-2 border bg-gray-50 sm:bg-primary sm:text-white rounded-md text-left text-sm sm:font-medium"
            onClick={handleDateClick}
          >
            Filter by Date
          </button>
          <input
            ref={dateInputRef}
            type="date"
            name="date"
            value={filters.date}
            onChange={handleInputChange}
            className="hidden"
          />
        </div>
        <select
          name="type"
          className="w-full sm:w-auto px-2 cursor-pointer py-2 border bg-gray-50 sm:bg-primary sm:text-white rounded-md text-sm sm:font-medium"
          value={filters.type}
          onChange={handleInputChange}
        >
          <option value="">Filter by Type</option>
          <option value="yoga">Yoga</option>
          <option value="meditation">Meditation</option>
          <option value="detox">Detox</option>
        </select>
      </div>
      <div className="w-full sm:w-auto sm:flex-grow sm:max-w-md">
        <input
          type="text"
          name="search"
          value={filters.search}
          onChange={handleInputChange}
          placeholder="Search retreats by title"
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
};

export default FilterPanel;