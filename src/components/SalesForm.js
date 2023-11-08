import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { postSales } from "../actions/salesActions";

export default function SalesForm() {
  const [item, setItem] = useState({ name: "", quantity: "", price: "" });

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postSales(item));
    setItem({ name: "", quantity: "", price: "" });
  };
  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <div>
        <input
          type="text"
          placeholder="Enter Name"
          required
          value={item.name}
          onChange={(e) =>
            setItem((item) => ({ ...item, name: e.target.value }))
          }
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Enter Quantity"
          required
          value={item.quantity}
          onChange={(e) =>
            setItem((item) => ({ ...item, quantity: e.target.value }))
          }
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Enter Price"
          required
          value={item.price}
          onChange={(e) =>
            setItem((item) => ({ ...item, price: e.target.value }))
          }
        />
      </div>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </form>
  );
}
