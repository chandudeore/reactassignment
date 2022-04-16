import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { cityError, cityLoading } from "../Redux/City/action";

export const City = () => {
  const [city, setCity] = useState();
  const [population, setPopulation] = useState();

  //const dispatch = useDispatch();

  //console.log(cityDetail);
  const handleChange = () => {
    const cityDetail = {
      city,
      population,
    };
    //dispatch(cityLoading());
    fetch("http://localhost:3001/city", {
      method: "POST",
      body: JSON.stringify(cityDetail),
      headers: {
        "Content-Type": "applitcation/json",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <input type="text" onChange={(e) => setCity(e.target.value)} />
      <input type="text" onChange={(e) => setPopulation(e.target.value)} />
      <button onChange={handleChange}>Add-City</button>
    </div>
  );
};
