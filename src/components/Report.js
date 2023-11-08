export default function Report({ inventoryReport, salesReport }) {
  return (
    <div>
      {inventoryReport ? (
        <div>
          <h4 className="reportHeading">
            Total Inventory Revenue: Rs.{inventoryReport.inventoryRevenue}
          </h4>{" "}
          <table>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
            </tr>

            {inventoryReport.inventoryItems.map((item) => {
              console.log(item.name);
              return (
                <tr>
                  <td>{item.name}</td>
                  <td> {item.quantity}</td>
                </tr>
              );
            })}
          </table>
        </div>
      ) : (
        <div>
          <h4 className="reportHeading">
            Total Sales Revenue: Rs.{salesReport.salesRevenue}
          </h4>
          <table>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
            </tr>

            {salesReport.salesItems &&
              salesReport.salesItems.map((item) => {
                return (
                  <tr>
                    <td>{item.name}</td>
                    <td> {item.quantity}</td>
                  </tr>
                );
              })}
          </table>
        </div>
      )}
    </div>
  );
}
