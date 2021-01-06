/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Person } from './Person';

const BASEURL = 'https://swapi.dev/api/people/';
const getList = async(url) => {
  const response = await fetch(url);

  return response.json();
};

export const PersonList = () => {
  const [personList, setPersonList] = useState([]);
  const [nextPage, setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState(null);
  const [page, setPage] = useState(1);

  // console.log(personList);

  useEffect(() => {
    (async function getData() {
      const list = await getList(BASEURL);

      setPersonList(list.results);
      setNextPage(list.next);
      setPrevPage(list.previous);
    })();
  }, []);

  const handleNext = () => {
    setPage((prev) => {
      setPage(+prev + 1);
    });
    setPersonList([]);

    (async function changeList() {
      const list = await getList(nextPage);

      setPersonList(list.results);
      setNextPage(list.next);
      setPrevPage(list.previous);
    })();
  };

  const handlePrev = () => {
    setPage((prev) => {
      setPage(prev - 1);
    });
    setPersonList([]);
    (async function changeList() {
      const list = await getList(prevPage);

      setPersonList(list.results);
      setNextPage(list.next);
      setPrevPage(list.previous);
    })();
  };

  return (
    <>
      <div>
        <Link className="main" to="/">Back</Link>
      </div>
      <div className="persons_wrapper">
        {(personList.length === 0) ? <CircularProgress /> : (
          <ul>
            {personList.map(person => (
              <li key={person.created}>
                <Person person={person} />
              </li>
            ))}
          </ul>
        ) }
      </div>
      {(personList.length === 0) ? (null) : (
        <div className="pagination">
          {prevPage && (
            <button
              type="button"
              name="prev"
              onClick={handlePrev}
            >
              prev
            </button>
          )}
          <div>{page}</div>
          {nextPage && (
            <button
              type="button"
              name="next"
              onClick={handleNext}
            >
              next
            </button>
          )}
        </div>
      )}
    </>
  );
};
