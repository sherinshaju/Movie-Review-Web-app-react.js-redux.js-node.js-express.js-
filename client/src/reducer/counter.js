const initialState = {
  movies: [],
  viewMovie: [],
  upcoming: []
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
    case "upcomingMovie":
      return {
        ...state,
        upcoming: action.payload
      };
    default:
      return state;
  }
};

export default counter;
