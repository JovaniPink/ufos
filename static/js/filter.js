export function filterRows(rows, filters) {
  return Object.entries(filters).reduce(
    (filteredRows, [key, value]) =>
      filteredRows.filter((row) => row[key] === value),
    rows
  );
}
