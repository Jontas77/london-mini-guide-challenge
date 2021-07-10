import React from 'react';
import TableData from './TableData';

const Table = ({ data }) => {
    console.log(data)
    return (
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col" style={{ width: "10%" }}>
                #
              </th>
              <th scope="col" style={{ width: "25%" }}>
                Name
              </th>
              <th scope="col" style={{ width: "20%" }}>
                Phone
              </th>
              <th scope="col" style={{ width: "20%" }}>
                Address
              </th>
              <th scope="col" style={{ width: "25%" }}>
                Website
              </th>
            </tr>
          </thead>
          <tbody>
            <TableData data={data} />
          </tbody>
        </table>
      </div>
    );
};

export default Table;
