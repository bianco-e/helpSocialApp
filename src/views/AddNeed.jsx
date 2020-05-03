import React, { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import emptyImageIcon from "../images/emptyImageIcon";
import TopBar from "../components/TopBar";
import Profile from "../components/Profile";
import { mapZonesIntoOptions, addNewNeed } from "../data/apiInteraction";

const AddNeed = () => {
  const user = useContext(AuthContext);
  const userName = user.displayName;
  const userEmail = user.email;
  const testImage =
    "https://www.segundamano.com.ar/oc-content/uploads/168/40338.jpg";

  const [newNeed, setNewNeed] = useState({
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
            <h6 className="margin0">Agregar búsqueda</h6>
          </Card.Header>
          <div className="flexColumn">
            <Form.Group>
              <br />
              <Form.Label>Foto ilustrativa</Form.Label>
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
                label="¿Tiene movilidad para facilitar el retiro?"
                onChange={() => setMobility(!mobility)}
              />
              <br />
              <Form.Check
                type="checkbox"
                label="Tildar esta opción si es de necesidad URGENTE"
                onChange={() => setUrgent(!urgent)}
              />
              <br />
              <Button
                variant="outline-info"
                onClick={() => {
                  setNewNeed(
                    (newNeed.title = title),
                    (newNeed.description = description),
                    (newNeed.category = category),
                    (newNeed.mobility = mobility),
                    (newNeed.urgent = urgent),
                    (newNeed.zone = zone),
                    (newNeed.user = userName),
                    (newNeed.userEmail = userEmail)
                  );
                  addNewNeed(newNeed);
                  setTitle("");
                  setDescription("");
                  setCategory("");
                  setMobility(false);
                  setUrgent(false);
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

export default AddNeed;
