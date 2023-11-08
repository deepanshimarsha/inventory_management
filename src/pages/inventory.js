import InventoryForm from "../components/InventoryForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInventory } from "../actions/inventoryActions";

import ListingItems from "../components/ListingItems";

export default function Inventory() {
  const { inventory, loading, error } = useSelector((state) => {
    console.log(state);
    return state.inventory;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInventory());
  }, [dispatch]);
  return (
    <div className="main">
      <h3 className="heading">Inventory</h3>
      <InventoryForm />
      <ListingItems inventory={inventory} loading={loading} error={error} />
    </div>
  );
}
