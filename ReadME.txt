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


