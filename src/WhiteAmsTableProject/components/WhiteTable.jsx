import React, { useMemo } from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import PolicyData from "./assets/PolicyData.json";
import { COLUMNS } from "./assets/columns";
import {
  Button,
  Container,
  HStack,
  Heading,
  Input,
  Select,
  Table,
  TableContainer,
  Tbody,
  Text,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Header from "./Header";
import { ImArrowLeft, ImArrowRight } from "react-icons/im";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { toast } from "react-hot-toast";

const WhiteTable = () => {
  const data = useMemo(() => PolicyData, []);
  const columns = useMemo(() => COLUMNS, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 7 },
    },
    useSortBy,
    usePagination
  );

  const { pageIndex, pageSize } = state;

  const handlePolicyClick = (id) => {
    console.log(id);
    toast.success(`You clicked on the object of id: ${id}`);
  };

  return (
    <>
      <Header />
      <Container maxW={"container.2xl"} mt={"30px"} p={4}>
        <TableContainer
          h={"80vh"}
          overflowY={"scroll"}
          borderRadius={"10px"}
          shadow={
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
          }
        >
          <Table
            variant={"striped"}
            colorScheme="green"
            size={"lg"}
            {...getTableProps()}
          >
            <Thead bg={"red.400"} position={"sticky"} top={0} zIndex={1}>
              {headerGroups.map((headerGroup) => (
                <Tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, index) => (
                    <Th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      color={"white"}
                    >
                      {column.render("Header")}
                    </Th>
                  ))}
                </Tr>
              ))}
            </Thead>
            <Tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <Tr {...row.getRowProps()}>
                    {row.cells.map((cell, index) => (
                      <Td
                        {...cell.getCellProps()}
                        style={
                          index === 0
                            ? {
                                color: "blue",
                                fontWeight: "bold",
                                cursor: "pointer",
                              }
                            : {}
                        } // Change color for the first column
                        onClick={() => {
                          if (index === 0) {
                            handlePolicyClick(cell.row.original.id);
                          }
                        }}
                      >
                        {cell.render("Cell")}
                      </Td>
                    ))}
                  </Tr>
                );
              })}
            </Tbody>
          </Table>

          {/* pagination part  */}

          <HStack alignItems={"right"} justifyContent={"right"} p={4}>
            <Heading size={"md"}>
              Page: {pageIndex + 1} of {pageOptions.length}
            </Heading>

            <Text>Go To Page:</Text>
            <Input
              type="number"
              w={"50px"}
              defaultValue={0}
              onChange={(e) =>
                e.target.value ? gotoPage(Number(e.target.value) - 1) : 0
              }
            />

            <Button
              colorScheme="pink"
              onClick={() => gotoPage(0)}
              isDisabled={!canPreviousPage}
              leftIcon={<MdKeyboardDoubleArrowLeft />}
            >
              First Page
            </Button>
            <Button
              colorScheme="pink"
              onClick={() => previousPage()}
              isDisabled={!canPreviousPage}
              leftIcon={<ImArrowLeft />}
            >
              Previous
            </Button>
            <Button
              colorScheme="pink"
              onClick={() => nextPage()}
              isDisabled={!canNextPage}
              rightIcon={<ImArrowRight />}
            >
              Next
            </Button>
            <Button
              colorScheme="pink"
              onClick={() => gotoPage(pageCount - 1)}
              isDisabled={!canNextPage}
              rightIcon={<MdKeyboardDoubleArrowRight />}
            >
              Last Page
            </Button>
          </HStack>
        </TableContainer>
      </Container>
    </>
  );
};

export default WhiteTable;
