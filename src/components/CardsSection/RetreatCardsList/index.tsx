import { CardsProps } from "../../../interfaces";
import { formatDate } from "../../../utils";

function RetreatCardsList({wellnessCardsInfo} : CardsProps)  {
  return (
    <div className="grid md:grid-cols-3 grid-col-1 gap-4 m-8">
      {wellnessCardsInfo.length > 0 ? (
        wellnessCardsInfo.map(({ id, title, description, image, date, location, price }) => (
          <div
            key={id}
            className="flex flex-col bg-secondary p-6 shadow-md gap-3"
          >
            <img
              src={image}
              alt={`image-${id}`}
              className="w-44 h-44 rounded-md object-cover"
            />
            <div className="font-bold text-xl">{title}</div>
            <div>{description}</div>
            <div>Date: {formatDate(date)}</div>
            <div>Location: {location} </div>
            <div>Price: ${price}</div>
          </div>
        ))
      ) : (
        <div className="col-span-full flex justify-center items-center h-64 text-xl text-gray-500">
          No items found matching your criteria
        </div>
      )}
    </div>
  );
}

export default RetreatCardsList;
