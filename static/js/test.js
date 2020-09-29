var data = [
  {
    datetime: "1/1/2010",
    city: "benton",
    state: "ar",
    country: "us",
    shape: "circle",
    durationMinutes: "5 mins.",
    comments:
      "4 bright green circles high in the sky going in circles then one bright green light at my front door.",
  },
  {
    datetime: "1/1/2010",
    city: "bonita",
    state: "ca",
    country: "us",
    shape: "light",
    durationMinutes: "13 minutes",
    comments:
      "Three bright red lights witnessed floating stationary over San Diego New Years Day 2010",
  },
];

const tableRows = (data) => data[0];

console.log(
  data.map(
    (x) => `
<table>
  <tbody>
    <tr>
      <td>${x["datetime"]}</td>
      <td>${x["city"]}</td>
      <td>${x["state"]}</td>
      <td>${x["country"]}</td>
      <td>${x["shape"]}</td>
      <td>${x["durationMinutes"]}</td>
      <td>${x["comments"]}</td>
    </tr>
  </tbody>
</table>
`
  )
);
