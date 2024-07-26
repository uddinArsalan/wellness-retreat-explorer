import {
  createContext,
  useContext,
  FunctionComponent,
  PropsWithChildren,
  useState,
  useEffect
} from "react";
import { AppProviderInterface } from "../interfaces/AppProviderInterface";
import { uuidv4 } from "../utils";
import Loading from "../components/Loading";
import { getTotalCards } from "../api/get-total-cards";

export const AppContext = createContext<AppProviderInterface>({
  totalPages : 0,
  itemsPerPage : 3,
  startLoader: () => "",
  completeLoader: console.log,
});

export function useApp() {
  return useContext(AppContext);
}

export const AppProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [loadingProcesses, setLoadingProcesses] = useState<string[]>([]);
  const [totalPages,setTotalPages] = useState<number>(0);
  const itemsPerPage = 3;

  function startNewLoadingProcess() {
    const loadingProcessId = uuidv4();
    setLoadingProcesses((existing) => [...existing, loadingProcessId]);
    return loadingProcessId;
  }

  function markLoadingCompleted(processId: string) {
    setLoadingProcesses((existing) => {
      return existing.filter((x) => x !== processId);
    });
  }

useEffect(()=> {
  async function getTotalPages(){
    const loaderId = startNewLoadingProcess();
    try{
      const totalCards = await getTotalCards();
      const totalPages = Math.ceil(totalCards/itemsPerPage);
      setTotalPages(totalPages);
    }catch(error){
      console.log("Error getting total no of Wellness Cards")
    }finally{
      markLoadingCompleted(loaderId);
    }
  }
  getTotalPages();
},[])


  const value: AppProviderInterface = {
    totalPages,
    itemsPerPage,
    startLoader: startNewLoadingProcess,
    completeLoader: markLoadingCompleted,
  };

  return (
    <AppContext.Provider value={value}>
      {children} {loadingProcesses.length > 0 && <Loading />}
    </AppContext.Provider>
  );
};

export default AppProvider;
