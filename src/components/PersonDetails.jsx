/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

const getList = async(url) => {
  const response = await fetch(url);

  return response.json();
};

export const PersonDetails = withRouter(
  ({ location }) => {
    const [person, setPerson] = useState({});
    const [homeWorld, setHomeWorld] = useState(null);
    const [vehicles, setVehicles] = useState([]);
    const [starShips, setStarShips] = useState([]);

    useEffect(() => {
      (async function getData() {
        const info = await getList(location.query);

        const homeplanet = await getList(info.homeworld);

        setPerson(info);
        setHomeWorld(homeplanet.name);

        const vehicleNames = [];
        const shipsNames = [];

        for (let i = 0; i < info.vehicles.length; i += 1) {
          (async() => {
            const transport = await getList(info.vehicles[i]);

            // console.log(`loop${i} name: ${transport.name}`);
            vehicleNames.push(transport.name);
            // console.log(vehicleNames);

            if (i + 1 === info.vehicles.length) {
              setVehicles(vehicleNames);
            }
          })();
        }

        for (let i = 0; i < info.starships.length; i += 1) {
          (async() => {
            const ship = await getList(info.starships[i]);

            // console.log(`loop${i} name: ${transport.name}`);
            shipsNames.push(ship.name);
            // console.log(vehicleNames);

            if (i + 1 === info.starships.length) {
              setStarShips(shipsNames);
            }
          })();
        }
      })();
    }, []);

    return (
      <>
        <div>
          <Link className="main" to="/">Main</Link>
        </div>

        <div className="details">
          <span>{`Name: ${person.name} `}</span>
          <span>{`Gender: ${person.gender}`}</span>
          <span>{`Birth Year: ${person.birth_year}`}</span>
          <span>{`Homeworld: ${homeWorld}`}</span>
          <ul>
            Vehicles:
            {(vehicles.length === 0) ? ('NO INFO') : (
              vehicles.map(vehicle => (
                <li>
                  {vehicle}
                </li>
              )))}
          </ul>
          <ul>
            Starships:
            {(starShips.length === 0) ? ('NO INFO') : (
              starShips.map(starShip => (
                <li>
                  {starShip}
                </li>
              )))}
          </ul>
        </div>
      </>
    );
  },
);
