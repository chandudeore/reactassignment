export const CITYLOADING = "CITYLOADING";
export const CITY = "CITY";
export const CITYERROR = "CITYERROR";

export const cityLoading = () => ({
  type: CITYLOADING,
});

export const city = (payload) => ({
  type: CITY,
  payload,
});
export const cityError = () => ({
  type: CITYERROR,
});
