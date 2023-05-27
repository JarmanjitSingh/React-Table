1.  Basic Table

Steps :- I. Get the data you want to display
II. Define the columns for your Table
III. use the data and columns defined to create a table instance using react-table
IV. Define a basic table structure using plain html
V. use the table instance created in step 3 to bring life in html defined in step 4
VI. include the desire css

2. Sorting Table

I. sorting by useSortBy hook 
II. add this in th tag column.getSortByToggleProps()
III. but in date format it will only format iso format but we show dates in another format in ui so that we are using date-fns package and use it in the columns.js file.

3. Filtering Table
3.1 -- by useGlobalFilter hook for global filter

I. create a search bar which receving filter and setFilter
II. import useGlobalFilter hook from react-table and pass as a second arguement where called useTable hook
III. destructure state and setGlobalState and the destructure globalState from state 
IV. pass props in search components filter={globalState} setFilter = {setGlobalState}

3.2 -- by useFilters hook for column filter

I. create a search component for each column in searchComponent.jsx which receving column props
II. import useFilters hook and place it before useGlobalFilter hook
III. render columnSearch component in each column header by adding <div>{column.canFilter ? column.render('Filter') : null}</div> 
IV. here Filter in component we render the the Filter keyword is from the columns.js 
V. in columns.js import SearchColumnFilter component
VI. and add a key named Filter and value is our component

3.3 -- more on Filtering

I. if we dont want column filtering on any one column then we can use property disableFilters: true in columns.js
II. by useMemo hook in the FilteringTable component   const defaultColumn = React.useMemo(
    () => ({
      Filter: ColumnFilter
    }),
    []
  ) we dont need to add Filter: SearchColumnFilter in every object of column.js
III. useAsyncDebounce hook -- you can use the useDebounce hook to delay the execution of the filtering logic until the user has stopped typing for a specified period.
By using debouncing, you can prevent the filtering function from being called excessively while the user is still typing. This can help improve performance and reduce unnecessary re-renders in your React application.

4. Pagination -- Basic previous and next page 

I. import usePagination hook and remove footer 
II. place it as second argument and destructure page on replacement of rows and import nextPage , previousPage
III. In table body replace rows.map with page.map and you can see in the browser it will showing 10 records only.
IV. add previous and next button and onclick on it call previousPage and nextPage.
V. destructure canPreviousPage and canNextPage this will help when no any previous or next page available then with it we can disable button.
Vi. for showing total page and where we now destructure two hooks pageOptions and state and from state destructure pageIndex. and place it above the buttons in html.


5. Pagination -- Goto page

I.  destructure gotoPage and pageCount for going to any page,
II. add last page and first page buttons.
III. add input to go on any page.
IV. if we write 
      initialState: {pageIndex: 2} in after the data in useTable hook then after any refres it will showing from the 3rd page.

6. Pagination -- page Size

I. destructure setPageSize from useTable and pageSize from the state.
II. use the select option to display page size with users preference .
III. you can also set the initial page size with initialState: {pageIndex: 2, pageSize: 5}.

7. Row Selection

I. Slice rows we can only show 10 rows
II. create the CheckBox component and copy paste code in it from github
III. import useRowSelect hook and pass as it is second arguement
IV. destructure selectedFlatRows this will give you the flat array of selected rows
V. Tie the checkBox component with Table component, we doing it by programmitically in the begining of the columns so we can pass the function as the third argument of the useTable hook,
VI. this function gets all the table hooks by an argument, apply visible columns property, and push method this will receving all the columns as arguemnt and returns the array of columns
VII. Showing the selected rows in the ui . so after the table component place the code
VIII. Remove strict mode from main.jsx (or my be it not needs if it is fixed  )

8.  Column Ordering 

I. import useColumnOrder hook and pass as a second arguement
II. destructure setColumnOrder
III. add a button before the table tag and onclick it call the setColumnOrder which accepts the array of the accessor of the columns and You can change here the order of columns so when user click on the button order has been changes according to this array

9. Column Hinding 

I. destructure allColumns and getToggleHideAllColumnsProps

10. Sticky colunms -- this functionality is not provided by the react table so we can install another package react-table-Sticky for more watch video

Further to study in react-Table
I. Grouping
II. In-line row editing
III. Row Drag and Drop 
IV. Column Resizing
V. React Table + material UI

