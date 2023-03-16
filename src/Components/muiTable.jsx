// import React, { useState, useEffect } from "react";
// import Axios from "axios";
// import { useTable } from "react-table";
// // // import "./styles.css";

// // function MuiTable() {
// //   const [list, setList] = useState([]);
// //   useEffect(() => {
// //     Axios({
// //       url: "https://jsonplaceholder.typicode.com/albums",
// //     })
// //       .then((response) => {
// //         setList(response.data);
// //       })
// //       .catch((error) => {
// //         console.log(error);
// //       });
// //   }, [setList]);

// //   return (
// //     <div className="App">
// //       <div>
// //         {list.map((item) => (
// //           <div key={item.id}>
// //             <h3>{item.id}</h3>
// //             <h3>{item.title}</h3>
// //             <p>{item.title}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default MuiTable;

// export const BasicTable = ({ columns, data }) => {
//   const [list, setList] = useState([]);
//   useEffect(() => {
//     Axios({
//       url: "https://jsonplaceholder.typicode.com/albums",
//     })
//       .then((response) => {
//         setList(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [setList]);
//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     footerGroups,
//     rows,
//     prepareRow,
//   } = useTable({
//     columns,
//     data,
//   });
//   return (
//     <>
//       <table {...getTableProps()}>
//         <thead>
//           {list.map((item) => (
//             <tr {...item.getHeaderGroupProps()}>
//               {item.headers.map((column) => (
//                 <th {...column.getHeaderProps()}>{column.render("Header")}</th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         {/* <tbody {...getTableBodyProps()}>
//           {rows.map((row) => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map((cell) => {
//                   return (
//                     <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
//                   );
//                 })}
//               </tr>
//             );
//           })}
//         </tbody> */}
//       </table>
//     </>
//   );
// };

// export default BasicTable;

import React, { useMemo, useState, useEffect } from "react";
import { useTable, useGlobalFilter, usePagination } from "react-table";
import "./table.css";
import COLUMN from "./columns";
import axios from "axios";
import Globalfilter from "./globalfilter";

const MuiTable = () => {
  const [display, setDisplay] = useState([]);
  useEffect(() => {
    axios({
      url: "https://jsonplaceholder.typicode.com/comments",
    })
      .then((response) => {
        setDisplay(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const columns = useMemo(() => COLUMN, []);
  const data = display;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    pageOptions,
    state,
    prepareRow,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    usePagination
  );
  const { globalFilter } = state;
  const { pageIndex } = state;

  return (
    <div>
      <Globalfilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <span>
          Page{""}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <button onClick={() => previousPage()}>Previous</button>
        <button onClick={() => nextPage()}>Next</button>
      </div>
    </div>
  );
};

export default MuiTable;
