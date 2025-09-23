import TableHeader from "./TableHeader";
import Hero from "./Hero";
function CurrencyTable() {
  return (
    <>
      <Hero />
      <TableHeader />
      <table class="table border table-striped table-responsive container my-5">
        <thead class="thead-dark">
          <tr class="py-3">
            <th scope="col"></th>
            <th scope="col">Currency futures</th>
            <th scope="col">Currency options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Brokerage</th>
            <td>0.03% or ₹20/executed order whichever is lower</td>
            <td>₹20/executed order</td>
          </tr>
          <tr>
            <th scope="row">STT/CTT</th>
            <td>No STT</td>
            <td>No STT</td>
          </tr>
          <tr>
            <th scope="row">Transaction charges</th>
            <td>
              <p>NSE: 0.00035%</p>
              <p>BSE: 0.00045%</p>
            </td>
            <td>
              <p>NSE: 0.0311%</p>
              <p>BSE: 0.001%</p>
            </td>
          </tr>
          <tr>
            <th scope="row">GST</th>
            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
          </tr>
          <tr>
            <th scope="row">SEBI charges</th>
            <td>₹10 / crore</td>
            <td>₹10 / crore</td>
          </tr>
          <tr>
            <th scope="row">Stamp charges</th>
            <td>0.0001% or ₹10 / crore on buy side</td>
            <td>0.0001% or ₹10 / crore on buy side</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default CurrencyTable;
