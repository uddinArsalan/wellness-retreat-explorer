type Types = "Signature" | "Standalone"
export interface WellnessRetreatCardsType {
    title : string;
    description : string;
    date : number;
    location : string;
    price : string;
    condition : string;
    type : Types;
    image : string;
    tag : string[];
    duration : number;
    id : number
}