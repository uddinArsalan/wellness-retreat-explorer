function CardsSkeletonLoader() {
    return (
      <div className="container min-h-96 px-4 py-8 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 animate-pulse">
            <div className="h-56 bg-gray-300 rounded-md mb-4"></div>
            <div className="h-8 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
            <div className="h-4 mb-2 bg-gray-300 rounded w-2/3"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3 mb-16"></div>
          </div>
        ))}
      </div>
    );
  }
  
  export default CardsSkeletonLoader;