import React, { useEffect } from 'react';
import movieStore from '../../store/movieStore';
import {observer} from 'mobx-react-lite';
const MovieList = () => {
    useEffect(()=>{
        movieStore.setMovieList();
    },[])
    return (
        <div>
            <ul>
                {
                movieStore.movieList.map(item=>(
                    <li key={item.id}>{item.nm}-- {item.star}</li>
                ))

                }
            </ul>
        </div>
    );
};

export default observer(MovieList);