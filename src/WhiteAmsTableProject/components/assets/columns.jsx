import { Td } from "@chakra-ui/react";
import format from "date-fns/format";
import { toast } from "react-hot-toast";
import { FcViewDetails } from "react-icons/fc";

export const COLUMNS = [
  {
    Header: "Policy",
    accessor: "policy_number",
  },
  {
    Header: "Insured Name",
    accessor: "name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Insurance Date",
    accessor: "date",
    Cell: ({ value }) => {
      return format(new Date(value), "MM-dd-yyyy");
    },
  },
  {
    Header: "Phone",
    accessor: "phone",
  },
  {
    Header: "Actions",
    accessor: "id",
    Cell: ({ row }) => (
      <div
        onClick={() => toast.success(`You click on the object of id: ${row.original.id}`)}
        style={{ cursor: "pointer" }}
      >
        <FcViewDetails size={24} />
      </div>
    ),
  },
];
