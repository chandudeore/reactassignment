import React from "react";
import { useState } from "react";

export const Country = () => {
  const [country, setCountry] = useState();

  //const dispatch = useDispatch();

  const handleCountry = () => {
    const countryName = {
      country,
    };
    fetch("http://localhost:3001/country", {
      method: "POST",
      body: JSON.stringify(countryName),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <input type="text" onChange={(e) => setCountry(e.target.value)} />
      <button onClick={handleCountry}>Add-Country</button>
    </div>
  );
};
