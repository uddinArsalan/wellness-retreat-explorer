import { WellnessRetreatCardsType } from "../../interfaces";

export async function getCardsInfo(page : number,limit : number) {
  try {
    const res = await fetch(
      `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=${page}&limit=${limit}`
    );
    const cardsData = await res.json();
    return cardsData as WellnessRetreatCardsType[];
  } catch (error) {
    console.error("Error in getting Wellness Info:", error);
    throw error;
  }
}
