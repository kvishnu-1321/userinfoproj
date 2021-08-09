import React, { useState, useEffect } from 'react';
import './style.css';

const Table = () => {
  const [info, setData] = useState([]);
  useEffect(() => {
    fetch('https://gorest.co.in/public/v1/users')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);


  const renderHeader = () => {
    let headerElement = ['id', 'name', 'email', 'gender', 'status', 'action'];

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  const renderBody = () => {
    return (
      info.data &&
      info.data.map(({ id, name, email, gender, status }) => {
        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{gender}</td>
            <td>{status}</td>
            <td className="opration">
              <button >view</button>
              <button >edit</button>
              <button className="button" >
                Delete
              </button>
            </td>
          </tr>
        );
      })
    );
  };

  return (
    <div>
      <h1 id="title">React Table</h1>
      <table id="employee">
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>
    </div>
  );
};

export default Table;
