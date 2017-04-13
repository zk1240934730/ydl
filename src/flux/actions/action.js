import Dispatcher from "../dispatchers/dispatcher"
export default{
    setNavState(text){
        Dispatcher.dispatch({
            actionType:"SET_NAV_STATE",
            text:text
        })       
    }
}