import { useEffect, useState } from "react";
import { WellnessRetreatCardsType } from "../../../interfaces";
import { useApp } from "../../../contexts/AppProvider";
import { getCardDetails } from "../../../api/get-card-details";

function WellnessCardDetails({ id }: { id: number }) {
    const { startLoader, completeLoader } = useApp();
    const [cardData, setCardData] = useState<WellnessRetreatCardsType | null>(null);
  
    useEffect(() => {
      async function getCardData() {
        const loaderId = startLoader();
        try {
          const cardDetails = await getCardDetails(id);
          setCardData(cardDetails);
        } catch (error) {
          console.error("Error getting card data:", error);
        } finally {
          completeLoader(loaderId);
        }
      }
      getCardData();
    }, []);
  
    if (!cardData) return null;
  
    return (
      <div className="p-4 bg-secondary rounded-b-lg">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <DetailItem label="Type" value={cardData.type} />
          <DetailItem label="Condition" value={cardData.condition} />
          <DetailItem label="Duration" value={`${cardData.duration} days`} />
        </div>
        <div>
          <h4 className="font-semibold mb-2">Tags</h4>
          <div className="flex flex-wrap gap-2">
            {cardData.tag.map((t, index) => (
              <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  function DetailItem({ label, value }: { label: string; value: string }) {
    return (
      <div>
        <p className="font-semibold text-sm text-gray-700">{label}</p>
        <p className="text-sm text-gray-600">{value}</p>
      </div>
    );
  }

  export default WellnessCardDetails