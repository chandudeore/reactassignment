export const COUNTRYLOADING = "COUNTRYLOADING";
export const COUNTRY = "COUNTRY";
export const COUNTRYERROR = "COUNTRYERROR";

export const countryLoading = () => ({
  type: COUNTRYLOADING,
});

export const country = (payload) => ({
  type: COUNTRY,
  payload,
});
export const countryError = () => ({
  type: COUNTRYERROR,
});
