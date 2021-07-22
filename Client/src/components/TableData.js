import React from 'react';

const TableData = ({ data }) => {
 
    return data.map((entry, idx) => {
      const { name, phone, address, website } = entry;
     let id = [];
    id.push(entry)
  
      return (
        <tr key={idx}>
          <th scope="row">{idx + 1}</th>
          <td>{name}</td>
          <td>{phone}</td>
          <td>{address}</td>
          <td>
            <a href={website} target="_blank" rel="noreferrer">
              {name}
            </a>
          </td>
        </tr>
      );
    })
};

export default TableData;
