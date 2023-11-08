import ListingItems from "../components/ListingItems";
import SalesForm from "../components/SalesForm";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchSales, filterSales } from "../actions/salesActions";
import { Button } from "react-bootstrap";

export default function Sales() {
  const { sales, loading, error } = useSelector((state) => state.sales);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSales());
  }, [dispatch]);
  return (
    <div className="main">
      <h3 className="heading">Sales</h3>
      <SalesForm />
      <div className="salesFilterBtn">
        <Button onClick={() => dispatch(filterSales())}>
          Show Newest Transactions
        </Button>
      </div>
      <ListingItems sales={sales} loading={loading} error={error} />
    </div>
  );
}
