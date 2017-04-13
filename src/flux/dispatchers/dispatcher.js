import {Dispatcher} from "flux"
import Store from "../stores/store"
let myDispatcher=new Dispatcher();
myDispatcher.register(action=>{
    switch(action.actionType){         
        case "SET_NAV_STATE":
            Store.setNavState(action.text);
            break;
    }
})
export default myDispatcher;