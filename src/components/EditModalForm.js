import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { updateInventory } from "../actions/inventoryActions";
import { updateSales } from "../actions/salesActions";

const EditModalForm = ({ salesItem, inventoryItem }) => {
  const [show, setShow] = useState(false);
  const item = salesItem ? salesItem : inventoryItem;
  const [editItem, setEditItem] = useState(item);
  const dispatch = useDispatch();
  const handleClose = () => {
    setEditItem(item);
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    salesItem
      ? dispatch(updateSales(editItem, item._id))
      : dispatch(updateInventory(editItem, item._id));

    handleClose();
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={editItem.name}
                onChange={(e) =>
                  setEditItem((editItem) => ({
                    ...editItem,
                    name: e.target.value,
                  }))
                }
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                value={editItem.quantity}
                onChange={(e) =>
                  setEditItem((editItem) => ({
                    ...editItem,
                    quantity: e.target.value,
                  }))
                }
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                value={editItem.price}
                onChange={(e) =>
                  setEditItem((editItem) => ({
                    ...editItem,
                    quantity: e.target.value,
                  }))
                }
              />
            </Form.Group>

            {/* Add more form fields as needed */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => handleSubmit(e)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditModalForm;
