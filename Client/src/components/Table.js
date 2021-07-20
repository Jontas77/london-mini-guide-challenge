import React from 'react';
import TableData from './TableData';
import Loader from "react-loader-spinner";

const Table = ({ data, loading }) => {
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
            {!loading ? (
              <tr>
                <td colSpan="5">
                  <h3 className="text-center">
                    choose a city and category first
                  </h3>
                </td>
              </tr>
            ) : loading ? (
              <TableData data={data} />
            ) : (
              <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} 
              />
            )}
          </tbody>
        </table>
      </div>
    );
};

export default Table;
