import {EventEmitter} from "events"
export default Object.assign({},EventEmitter.prototype,{
    item:"",
    getItem(){
        return this.item;
    },
    setNavState(text){
        this.item=text;
    }  
})