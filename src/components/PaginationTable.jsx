import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import MOCK_DATA from "../assets/MOCK_DATA.json";
import { COLUMNS } from "../assets/columns";

const PaginationTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    page,
    previousPage,
    nextPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      initialState: {pageIndex: 2}
    },
    usePagination
  );

  const { pageIndex, pageSize } = state;

  return (
    <>
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
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
          gap: "10px",
        }}
      >
        <span>
          Page {pageIndex + 1} of {pageOptions.length}
        </span>

        <span>
          Goto on page
          <input
            style={{ width: "50px" }}
            type="number"
            defaultValue={0}
            onChange={(e) => {
              const a = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(a);
            }}
          />
        </span>

            <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))} style={{width: "100px"}}>
                {[10, 20, 30].map((e)=>{
                   return <option key={e} value={e}>
                        show{e}
                    </option>
                })}
            </select>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          First Page
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          Last Page
        </button>
      </div>
    </>
  );
};

export default PaginationTable;
