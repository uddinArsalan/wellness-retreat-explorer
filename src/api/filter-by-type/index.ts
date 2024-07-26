import { WellnessRetreatCardsType } from "../../interfaces";

export async function filterByType(page: number,limit : number,query: string): Promise<WellnessRetreatCardsType[]> {
    try {
        const res = await fetch(
            `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=${page}&limit=${limit}&filter=${encodeURIComponent(query)}`
        );
        
        if (!res.ok) {
            if (res.status === 404) {
                return [];
            }
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const cardsData = await res.json();
        return cardsData as WellnessRetreatCardsType[];
    } catch (error) {
        console.error("Error in getting Wellness Info:", error);
        throw error;
    }
}