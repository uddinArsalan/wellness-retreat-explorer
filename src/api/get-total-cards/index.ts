import { WellnessRetreatCardsType } from "../../interfaces";

export async function getTotalCards() {
  try {
    const res = await fetch(
      `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats`
    );
    const cardsData : WellnessRetreatCardsType[] = await res.json();
    return cardsData.length;
  } catch (error) {
    console.error("Error in getting Wellness Info:", error);
    throw error;
  }
}
