import { WellnessRetreatCardsType } from "../../interfaces";

export async function getCardDetails(id : number) {
  try {
    const res = await fetch(
      `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats/${id}`
    );
    const cardData = await res.json();
    return cardData as WellnessRetreatCardsType;
  } catch (error) {
    console.error("Error in getting Wellness Info:", error);
    throw error;
  }
}
