export interface AppProviderInterface {
    totalPages : number;
    itemsPerPage : number;
    startLoader: () => string;
    completeLoader: (id: string) => void;
}