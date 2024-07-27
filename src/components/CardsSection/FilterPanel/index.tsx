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

const FilterPanel: React.FC<FiltersPanelProps> = ({ filters, setFilters }) => {
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

  const handleClearFilters = () => {
    setFilters({
      date: '',
      type: '',
      search: ''
    });
  };

  return (
    <div className="flex flex-col container mx-auto sm:flex-row sm:items-center gap-4 p-4 bg-white m-6 rounded-md">
    <div className="flex flex-col sm:flex-row gap-4 flex-grow">
      <div className="relative">
        <button 
          className="w-full sm:w-auto px-4 py-2 border bg-primary text-white rounded-md text-left md:text-sm text-xs font-medium hover:bg-opacity-85 focus:outline-none focus:ring-2 focus:ring-primary"
          onClick={handleDateClick}
        >
          {filters.date || 'Filter by Date'}
        </button>
        <input
          ref={dateInputRef}
          type="date"
          name="date"
          value={filters.date}
          onChange={handleInputChange}
          className="absolute opacity-0 w-full h-full top-0 left-0 cursor-pointer"
        />
      </div>
      <select
        name="type"
        className="w-full sm:w-auto px-4 py-2 border bg-gray-50 text-gray-700 rounded-md text-xs font-medium md:text-sm cursor-pointer hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
        value={filters.type}
        onChange={handleInputChange}
      >
        <option value="">Filter by Type</option>
        <option value="yoga">Yoga</option>
        <option value="meditation">Meditation</option>
        <option value="detox">Detox</option>
      </select>
      <input
        type="text"
        name="search"
        value={filters.search}
        onChange={handleInputChange}
        placeholder="Search retreats by title"
        className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
    <button
      onClick={handleClearFilters}
      className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
    >
      Clear Filters
    </button>
  </div>
  );
};

export default FilterPanel;