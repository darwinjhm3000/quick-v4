import React, { useEffect, useState } from 'react';
import DataGrid from '../components/DataGrid';
import Map from '../components/Map';
import axios from 'axios';

function Home() {
  const [pokemonData, setPokemonData] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const pokemonResponse = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
      setPokemonData(pokemonResponse.data.results);

      const locationResponse = await axios.get('https://pokeapi.co/api/v2/location');
      setLocations(locationResponse.data.results);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <DataGrid data={pokemonData} />
      <Map locations={locations.filter(location => location.lat && location.lon)} />
    </div>
  );
}

export default Home;
