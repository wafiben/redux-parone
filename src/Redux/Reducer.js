const initState=[]
const Reducer=(state=initState,action)=>{
    switch(action.type){
        case "ADD" :return [...state,action.payload];
        
    }
}
export default Reducer;