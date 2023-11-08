import { useDispatch } from "react-redux";
import { deleteInventory } from "../actions/inventoryActions";
import EditModalForm from "./EditModalForm";
import { Button } from "react-bootstrap";
import { deleteSales } from "../actions/salesActions";
export default function ListingItems({ inventory, sales, loading, error }) {
  const dispatch = useDispatch();

  const handleDelete = (itemId) => {
    inventory
      ? dispatch(deleteInventory(itemId))
      : dispatch(deleteSales(itemId));
  };
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Actions</th>
      </tr>
      {!error && loading && <p>laoding...</p>}
      {!loading && error && <p>{error}</p>}

      {sales
        ? !loading &&
          !error &&
          sales.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td> {item.quantity}</td>
                <td>Rs.{item.price}</td>
                <td className="actionBtn">
                  <EditModalForm salesItem={item} />
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(item._id)}
                  >
                    delete
                  </Button>
                </td>
              </tr>
            );
          })
        : !loading &&
          !error &&
          inventory.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td> {item.quantity}</td>
                <td>Rs.{item.price}</td>
                <td className="actionBtn">
                  <EditModalForm inventoryItem={item} />
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(item._id)}
                  >
                    delete
                  </Button>
                </td>
              </tr>
            );
          })}
    </table>
  );
}
