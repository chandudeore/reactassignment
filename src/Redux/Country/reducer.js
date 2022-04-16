import { COUNTRY, COUNTRYERROR, COUNTRYLOADING } from "./action";

const initialState = {
  loading: false,
  error: false,
  country: [],
};

export const countryReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case COUNTRYLOADING:
      return { ...store, loading: true, error: false };
    case COUNTRY:
      return { ...store, country: [...payload], error: false };
    case COUNTRYERROR:
      return { ...store, country: [], loading: false, error: true };
    default:
      return store;
  }
};
