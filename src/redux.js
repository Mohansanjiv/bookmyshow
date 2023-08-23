



const BUY_CAKE ='BUY_CAKE';

function buyCake (){
    {
        type: BUY_CAKE,
        info: 'First redux action'
        
    }
}

const intialState = {
    numOfCakes:10
}
const reducer =(state = intialState, action)=>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes:state.numOfCakes-1
        }
        default:return state
    }
}

const store = createStore(reducer);
console.log('intialState', store.getState())
 const unsubscribe = store.subscribe(()=>console.log('updated state', store.getState()));
 store.dispatche(buyCake());
 store.dispatche(buyCake());
 store.dispatche(buyCake());