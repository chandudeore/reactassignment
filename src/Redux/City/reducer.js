import { CITY, CITYERROR, CITYLOADING } from "./action";

const initialState = {
  loading: false,
  error: false,
  city: [],
};

export const cityReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case CITYLOADING:
      return { ...store, loading: true, error: false };
    case CITY:
      return { ...store, city: [...payload], error: false };
    case CITYERROR:
      return { ...store, city: [], loading: false, error: true };
    default:
      return store;
  }
};
