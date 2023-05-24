 import format from "date-fns/format";
 import { SearchColumnFilter } from "../components/SearchComponent";


export const COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    Filter: SearchColumnFilter
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name",
    Filter: SearchColumnFilter
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name",
    Filter: SearchColumnFilter
  },
  {
    Header: "Date of Birth",
    Footer: "Date of Birth",
    accessor: "date_of_birth",
    Filter: SearchColumnFilter,
    Cell: ({value}) => {
      return format(new Date(value), "MM-dd-yyyy")
    }
  },
  {
    Header: "Country",
    Footer: "Country",
    accessor: "country",
    Filter: SearchColumnFilter
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone",
    Filter: SearchColumnFilter
  },
];

export const GROUPED_COLOUMNS = [
  {
    Header: "ID",
    Footer: "ID",
    accessor: "id",
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name",
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Date of Birth",
        Footer: "Date of Birth",
        accessor: "date_of_birth",
      },
      {
        Header: "Country",
        Footer: "Country",
        accessor: "country",
      },
      {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone",
      },
    ],
  },
];
