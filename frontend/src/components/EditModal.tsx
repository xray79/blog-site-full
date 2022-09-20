import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import EditForm from "./EditForm";
import { MdEdit } from "react-icons/md";

const EditModal = ({ id }: any) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-dark me-2" onClick={handleShow}>
        <MdEdit />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit your post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm id={id} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditModal;
