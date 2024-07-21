import { makeAutoObservable } from "mobx"
import axios from "axios"
class MovieStore {
    movieList = []
    constructor(){
        makeAutoObservable(this)//当类中的属性值变更，就会触发组件更新
    }
    setMovieList= async()=>{
        const res = await axios.get('https://mock.presstime.cn/mock/65a9154bb02591272cc21c5a/movie/movieList')
        console.log(res.data.movieList);
        // this.movieList = res.data.movieList
        this.handle(res.data.movieList)
    }
    handle(arr){
        this.movieList = arr
    }
}

const movieStore = new MovieStore()

export default movieStore