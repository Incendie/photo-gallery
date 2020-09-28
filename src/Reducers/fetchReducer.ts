export const fetchReducer = (state = { init: true }, action: any) => {
  switch (action.type) {
    case "ACTION":
      return { ...state };
    default:
      return state;
  }
};
