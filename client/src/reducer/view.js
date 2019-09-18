const initialViewState = {
  comment: []
};

const view = (state = initialViewState, action) => {
  switch (action.type) {
    case "comment":
      return {
        ...state,
        comment: action.payload
      };
    default:
      return state;
  }
};

export default view;
