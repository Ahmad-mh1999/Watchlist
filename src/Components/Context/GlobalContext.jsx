import { createContext, useContext, useEffect, useReducer } from "react"
import { Reduser } from "./Reduser";
const initialState ={
    watchlist : localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist")) 
    : [],
    watched : localStorage.getItem("watched") 
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
}
export const GlobalContext = createContext(initialState);

const ContextProvider = ({children}) => {
    const [state , dispatch] = useReducer(Reduser , initialState);
    useEffect(()=>{
        localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
        localStorage.setItem("watched", JSON.stringify(state.watched))
    },[{state}])
    return <GlobalContext.Provider value={{
        watchlist: state.watchlist,
        watched: state.watched, 
        MoviesDispatch: dispatch}}>
        {children}
    </GlobalContext.Provider>
}

export default ContextProvider;

export const useMovieContext = ()=>{
    return useContext(GlobalContext);
}