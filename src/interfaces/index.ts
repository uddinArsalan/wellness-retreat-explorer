export interface WellnessRetreatCardsType {
    title : string;
    description : string;
    date : number;
    location : string;
    price : string;
    condition : string;
    image : string;
    tag : string[];
    duration : number;
    id : number
}

export interface CardsProps {
  wellnessCardsInfo : WellnessRetreatCardsType[];
}