import React from 'react'
import { useState } from "react";
import './toDo.css';
import { Button, Modal, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { FaEdit } from 'react-icons/fa';
import { EditTask } from "../JS/Actions/actions";

const EditList = ({ item }) => {
    const [show, setShow] = useState(false);
    const [editInput, setEditInput] = useState(item.description)
    const dispatch = useDispatch()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <div onClick={handleShow}>
       <FaEdit/>
      </div>

      <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormControl
                        value={editInput}
                        onChange={(e) => setEditInput(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={handleClose}
                    >
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => { handleClose(); dispatch(EditTask({ id: item.id, description: editInput })) }}
                    >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default EditList;
