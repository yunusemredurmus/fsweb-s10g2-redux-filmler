import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleFavorites } from "../actions/favoritesActions";

const MovieHeader = (props) => {
  const appTitle = useSelector((state) => state.movieReducer.appTitle)
  const displayFavorites = useSelector((state) => state.favoriteReducer.displayFavorites)

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleFavorites());
  };
  

  return (
    <div className="flex justify-between items-center shadow rounded-md bg-white p-2 pl-3 my-3">
      <h2 className='text-zinc-600'>{appTitle}</h2>
      <div className="flex items-center gap-2">
        <div className="myButton bg-blue-600 hover:bg-blue-500">
          <span onClick={handleClick}>Favorileri {displayFavorites ? "gizle" : "göster"}</span>
        </div>
        <Link to="/movies" className="myButton bg-blue-600 hover:bg-blue-500">Tüm filmler</Link>
        <Link to="/movies/add" className="myButton bg-green-700 hover:bg-green-600">
          <i className="material-icons text-sm">&#xE147;</i>
          <span>Yeni film ekle</span>
        </Link>
      </div>
    </div>
  );
}

export default MovieHeader;