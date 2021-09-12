import React ,{ createContext,useReducer} from 'react'
import axios from 'axios'

export const NewsContext=createContext()


const NewsContextProvider=({children})=>{
    const initialState={
        news:[],
        activeNews:null
    }

    function reducer(state,action){
        switch(action.type){
            case 'GET_NEWS':
                return{
                    ...state,news:action.payload
                }
            case 'GET_DESC':
                return{
                    ...state,activeNews:action.payload
                }
            default:
                return state
        }
    }




    const [state, dispatch] = useReducer(reducer, initialState)

    const getNews= async ()=>{
        try {
            const res=await axios.get('https://node-hnapi.herokuapp.com/news')
            const {data}=res;

            dispatch({type:"GET_NEWS",payload:data})
               
        } 
        catch (err) {
            console.log(err);
            
        }
    }

    const getDesc=async (id)=>{
         try{

         
        const res=await axios.get(`https://node-hnapi.herokuapp.com/item/${id}`)
        const {data}=res

        dispatch({type:'GET_DESC',payload:data})
         }catch(err){
             console.log(err);
         }
    }
    
    return(

        <NewsContext.Provider value={{getNews,getDesc,news:state.news,activeNews:state.activeNews}}>
            {children}
        </NewsContext.Provider>
    )
}
export default NewsContextProvider;