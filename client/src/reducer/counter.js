const initialState = {
  movies: []
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case "movieList":
      return {
        ...state,
        movies: action.payload
      };
    default:
      return state;
  }
};

export default counter;
