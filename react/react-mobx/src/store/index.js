import React from "react";
import movie from "./movieStore";
import counter from "./counterStore";
class RootStore {
    constructor(){
        this.movieStore = movie
        this.counterStore = counter
    }
}
const rootStore = new RootStore()
const Context = React.createContext(rootStore)
const useStore = ()=>React.useContext(Context)

export {useStore}