// Import Bootstrap
import "bootstrap";

// Importing the custom scss
import "../scss/style.scss";

// Importing D3
// We do not have to import all of D3, only the selection module.
// import * as d3 from "../../node_modules/d3/dist/d3.js";
// import * as d3 from "../../node_modules/d3-selection/dist/d3-selection.js";

// Importing the data from data.js
import { data } from "./data.js";
const tableData = data;

// Reference DOM elements
let tbody = d3.select("tbody");
let h4 = d3.select("h4[id='resultCount']");

// Build the Table from UFO data
function buildTable(data) {
  tbody.html("");
  h4.html("");
  h4.text("No of Rows Displayed: " + data.length);

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

// Filter options
let filters = {};

// Function to update the filters.
function updateFilters() {
  let changedElement = d3.select(this);
  let elementValue = changedElement.property("value");
  let filterId = changedElement.attr("id");

  if (elementValue) {
    filters[filterId] = elementValue;
  } else {
    delete filters[filterId];
  }

  // elementValue ? filters[filterId] = elementValue : delete filters[filterId];

  filterTable();
}

function filterTable() {
  let filterTable = tableData;

  Object.entries(filters).forEach(([key, value]) => {
    filterTable = filterTable.filter((row) => row[key] === value);
  });

  buildTable(filterTable);
}

d3.selectAll("input").on("change", updateFilters);

buildTable(tableData);
