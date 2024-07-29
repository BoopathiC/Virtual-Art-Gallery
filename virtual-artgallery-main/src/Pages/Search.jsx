import React from "react";
import { useState, useEffect } from "react";
import "./Search.css";

const Input = () => {
    const [data, setData] = useState("nature");
    const [pics, setPics] = useState([]);
    const [search, setSearch] = useState("nature");
  
    const submitHandler = (e) => {
      e.preventDefault();
      setSearch(data);
    };
  
    useEffect(() => {
      async function apis() {
        const apiKey = "563492ad6f917000010000010f2937acf07b4afc8352e644c7fdeb4f";
        const Url = `https://api.pexels.com/v1/search?query=${search}&per_page=20`;
        try {
          const trackApi = await fetch(Url, {
            method: "Get",
            headers: {
              Accept: "application/json",
              Authorization: apiKey,
            },
          });
          const response = await trackApi.json();
          setPics(response.photos);
          console.log(response.photos);
        } catch (err) {
          console.log(err);
        }
      }
      apis();
    }, [search]);

  return (
    
    <div className="container">
    <nav className="navbar">
      
    </nav>
    <div className="container_items1">
      <div>
        <h1 className="header">
          Image<span className="header_half1">Finder</span>
        </h1>
        <p className="header_tag">Search all pics at one place</p>
      </div>
      <div>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Type Something"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
          {!data ? (
            <button type="submit" disabled={true}>
              Search
            </button>
          ) : (
            <button type="submit">Search</button>
          )}
          <h3 className="header_3">
            All results for{" "}
            <span className="header_half2">{`${search}...`}</span>
          </h3>
        </form>
      </div>
    </div>

    <div className="container_items2">
      {pics.map((item) => (
        <img
          key={item.id}
          src={item.src.original}
          alt="pics"
          width="300px"
          height="300px"
        />
      ))}
    </div>
  </div>
  )
}

export default Input;