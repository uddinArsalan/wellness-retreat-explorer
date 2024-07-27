import { useState } from "react";
import { WellnessRetreatCardsType } from "../../../interfaces";
import { formatDate } from "../../../utils";
import WellnessCardDetails from "../WellnessCardDetails";

type RetreatCardProps = {
  card: WellnessRetreatCardsType;
};

type RetreatCardsListProps = {
  wellnessCardsInfo: WellnessRetreatCardsType[];
};

function RetreatCard({ card }: RetreatCardProps) {
  const { id, title, image, description, date, location, price } = card;
  const [showDetails, setShowDetails] = useState<boolean>(false);
  return (
    <div className="bg-secondary rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl relative">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex flex-col gap-3">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="text-sm">
          <span className="font-semibold">Date:</span> {formatDate(date)}
        </div>
        <div className="text-sm">
          <span className="font-semibold">Location:</span> {location}
        </div>
        <div className="text-sm">
          <span className="font-semibold">Price:</span> ${price}
        </div>
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="self-end mt-2 bg-primary text-white rounded-full p-2 hover:bg-primary-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          aria-label={showDetails ? "Hide details" : "Show details"}
        >
          {showDetails ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </div>
      {showDetails && <WellnessCardDetails id={id} />}
    </div>
  );
}

function RetreatCardsList({ wellnessCardsInfo }: RetreatCardsListProps) {
  return (
    <div id="learn-more" className="container mx-auto px-4 py-8">
      {wellnessCardsInfo.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wellnessCardsInfo.map((card) => (
            <RetreatCard key={card.id} card={card} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-64 text-xl text-gray-500">
          No items found matching your criteria
        </div>
      )}
    </div>
  );
}

export default RetreatCardsList;
