import { COUNTRY, COUNTRYERROR, COUNTRYLOADING } from "./action";

const initialState = {
  loading: false,
  error: false,
  country: [],
};

export const countryReducer = (store, { type, payload }) => {
  switch (type) {
    case COUNTRYLOADING:
      return { ...store, loading: true, error: false };
    case COUNTRY:
      return { ...store, loading: false, error: false, country: [...payload] };
    case COUNTRYERROR:
      return { ...store, loading: false, error: true };
  }
};
