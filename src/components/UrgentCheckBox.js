import React from "react";
import Form from "react-bootstrap/Form";

export default function UrgentCheckBox({ urgent, setUrgent }) {
  return (
    <Form.Check
      type="checkbox"
      label="¿Es de necesidad URGENTE?"
      checked={urgent}
      onChange={() => setUrgent(!urgent)}
    />
  );
}
