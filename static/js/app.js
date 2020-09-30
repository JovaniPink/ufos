// Import Bootstrap's bundle (all of Bootstrap's JS + Popper.js dependency)
//
//
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

// Importing D3
//
//import * as d3 from "../../node_modules/d3/dist/d3.js";

// Importing the data from data.js
//
import {data} from "./data.js";
const tableData = data;

// // Reference the HTML table using d3 select
// // https://github.com/d3/d3-selection
// let tbody = d3.select("tbody");

// function buildTable(data) {
//   // First, clear out any existing data
//   tbody.html("");

//   // Next, loop through each object in the data
//   // and append a row and cells for each value in the row
//   data.forEach((dataRow) => {
//     // Append a row to the table body
//     let row = tbody.append("tr");

//     // Loop through each field in the dataRow and add
//     // each value as a table cell (td)
//     Object.values(dataRow).forEach((val) => {
//       let cell = row.append("td");
//       cell.text(val);
//     });
//   });
// }

// function handleClick() {
//   // Grab the datetime value from the filter
//   let date = d3.select("#datetime").property("value");
//   let filteredData = tableData;

//   // Check to see if a date was entered and filter the
//   // data using that date.
//   if (date) {
//     // Apply `filter` to the table data to only keep the
//     // rows where the `datetime` value matches the filter value
//     filteredData = filteredData.filter((row) => row.datetime === date);
//   }

//   // Rebuild the table using the filtered data
//   // @NOTE: If no date was entered, then filteredData will
//   // just be the original tableData.
//   buildTable(filteredData);
// }

// d3.selectAll("#filter-btn").on("click", handleClick);

// // Attach an event to listen for the form button
// d3.selectAll("#filter-btn").on("click", handleClick);

// // Build the table when the page loads
// buildTable(tableData);

// get table references
let tbody = d3.select("tbody");
let h4 = d3.select("h4[id='resultCount']");

function buildTable(data) {
  // First clear the h4
  h4.html("");
  h4.text("No of Rows Displayed: " + data.length);
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
let filters = {};

// 3. Use this function to update the filters.
function updateFilters() {
  // 4a. Save the element that was changed as a variable.
  let changedElement = d3.select(this);

  // 4b. Save the value that was changed as a variable.
  let elementValue = changedElement.property("value");

  // 4c. Save the id of the filter that was changed as a variable.
  let filterId = changedElement.attr("id");

  // 5. If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object.
  if (elementValue) {
    filters[filterId] = elementValue;
  } else {
    delete filters[filterId];
  }

  // 6. Call function to apply all filters and rebuild the table
  filterTable();
}

// 7. Use this function to filter the table when data is entered.
function filterTable() {
  // 8. Set the filtered data to the tableData.
  let filterTable = tableData;

  // 9. Loop through all of the filters and keep any data that
  // matches the filter values
  Object.entries(filters).forEach(([key, value]) => {
    filterTable = filterTable.filter((row) => row[key] === value);
  });

  // 10. Finally, rebuild the table using the filtered data
  buildTable(filterTable);
}

// 2. Attach an event to listen for changes to each filter
d3.selectAll("input").on("change", updateFilters);

// Build the table when the page loads
buildTable(tableData);
