import React, { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import emptyImageIcon from "../images/emptyImageIcon";
import TopBar from "../components/TopBar";
import Profile from "../components/Profile";
import { mapZonesIntoOptions, addNewOffer } from "../data/apiInteraction";

const AddOffer = () => {
  const user = useContext(AuthContext);
  const userName = user.displayName;
  const userEmail = user.email;
  const testImage =
    "https://www.segundamano.com.ar/oc-content/uploads/168/40338.jpg";

  const [newOffer, setNewOffer] = useState({
    category: "",
    description: "",
    image: testImage,
    mobility: false,
    title: "",
    urgent: false,
    user: "",
    userEmail: "",
    zone: "",
  });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [zone, setZone] = useState("");
  const [mobility, setMobility] = useState(false);
  const [urgent, setUrgent] = useState(false);

  return (
    <div>
      <TopBar />
      <Profile />
      <div className="margin21-1">
        <Card border="primary" className="m-2">
          <Card.Header>
            <h6 className="margin0">Agregar oferta</h6>
          </Card.Header>
          <div className="flexColumn">
            <Form.Group>
              <br />
              <Form.Label>Foto del objeto</Form.Label>
              <br />
              <div className="flex between">
                {emptyImageIcon}
                <Button variant="outline-info" size="sm">
                  ✚
                </Button>
              </div>
              <Form.Label>Título</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <br />
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Descripción"
                cols="30"
                maxlength="240"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <br />
              <Form.Label>Categoría</Form.Label>
              <Form.Control
                as="select"
                size="sm"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Seleccionar categoría</option>
                <option value="Accesorios">Accesorios</option>
                <option value="Descartables">Descartables</option>
                <option value="Internación">Internación</option>
                <option value="Rehabilitaciones">Rehabilitaciones</option>
                <option value="Tratamientos">Tratamientos</option>
              </Form.Control>
              <br />
              <Form.Label>Barrio mas cercano</Form.Label>
              <Form.Control
                as="select"
                size="sm"
                value={zone}
                onChange={(e) => setZone(e.target.value)}
              >
                <option>Seleccionar barrio</option>
                {mapZonesIntoOptions()}
              </Form.Control>
              <br />
              <Form.Check
                type="checkbox"
                label="¿Tiene movilidad para facilitar la entrega?"
                onChange={() => setMobility(!mobility)}
              />
              <br />
              <Button
                variant="outline-info"
                onClick={() => {
                  setNewOffer(
                    (newOffer.title = title),
                    (newOffer.description = description),
                    (newOffer.category = category),
                    (newOffer.mobility = mobility),
                    (newOffer.zone = zone),
                    (newOffer.user = userName),
                    (newOffer.userEmail = userEmail)
                  );
                  addNewOffer(newOffer);
                  setTitle("");
                  setDescription("");
                  setCategory("");
                  setMobility(false);
                  setZone("");
                }}
              >
                Subir
              </Button>
            </Form.Group>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AddOffer;
