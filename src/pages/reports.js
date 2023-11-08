import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInventoryReport, getSalesReport } from "../actions/reportsActions";
import { useState } from "react";
import Report from "../components/Report";
import { fetchSales } from "../actions/salesActions";
import { fetchInventory } from "../actions/inventoryActions";
import { Button } from "react-bootstrap";

export default function Reports() {
  const { inventory } = useSelector((state) => state.inventory);
  const { sales } = useSelector((state) => state.sales);
  const { inventoryReport, salesReport } = useSelector((state) => {
    console.log("check", state);
    return state.report;
  });
  const [show, setShow] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSales());
    dispatch(fetchInventory());
  }, [dispatch]);

  return (
    <div className="main">
      <h3 className="heading">Reports</h3>
      <div className="reportBtn">
        <Button
          onClick={(e) => {
            e.preventDefault();
            setShow("inventory");
            dispatch(getInventoryReport(inventory));
          }}
        >
          Generate Inventory Report
        </Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            setShow("sales");
            dispatch(getSalesReport(sales));
          }}
        >
          Generate Sales Report
        </Button>
      </div>

      {show === "inventory" && <Report inventoryReport={inventoryReport} />}
      {show === "sales" && <Report salesReport={salesReport} />}
    </div>
  );
}
