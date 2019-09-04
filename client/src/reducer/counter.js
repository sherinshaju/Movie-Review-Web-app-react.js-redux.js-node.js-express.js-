const initialState = {
  movies: [],
  viewMovie: []
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case "movieList":
      return {
        ...state,
        movies: action.payload
      };
    case "viewMovie":
      return {
        ...state,
        viewMovie: action.payload
      };
    default:
      return state;
  }
};

export default counter;
