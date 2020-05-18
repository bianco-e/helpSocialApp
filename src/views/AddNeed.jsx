import React, { useState, useContext, useRef, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import TopBar from "../components/TopBar";
import Profile from "../components/Profile";
import { mapZonesIntoOptions } from "../data/data";
import { addNewNeed, addAnImageToNeeds } from "../data/apiInteraction";

const AddItem = () => {
  const user = useContext(AuthContext);
  const userName = user.displayName;
  const userEmail = user.email;

  const inputFileRef = useRef();

  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [zone, setZone] = useState("");
  const [mobility, setMobility] = useState(false);
  const [urgent, setUrgent] = useState(false);

  const [fileName, setFileName] = useState("");
  const [fileLoaded, setFileLoaded] = useState("");
  const [uploadingFile, setUploadingFile] = useState(false);

  useEffect(() => {
    if (inputFileRef.current?.files?.length > 0) {
      setFileLoaded(inputFileRef.current?.files[0]);
      setFileName(inputFileRef.current?.files[0]["name"]);
    }
  }, [uploadingFile]);

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
              <Form.File
                id="custom-file"
                label={fileName || `Agregar foto`}
                ref={inputFileRef}
                data-browse="+"
                onChange={() => setUploadingFile(!uploadingFile)}
                custom
              />
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
                checked={mobility}
                onChange={() => setMobility(!mobility)}
              />
              <br />
              <Form.Check
                type="checkbox"
                label="Tildar esta opción si es de necesidad URGENTE"
                checked={urgent}
                onChange={() => setUrgent(!urgent)}
              />
              <br />
              <Button
                variant="outline-info"
                onClick={() => {
                  setLoading(true);
                  addAnImageToNeeds(fileLoaded).then((url) => {
                    const newNeed = {
                      category,
                      description,
                      image: url,
                      mobility,
                      title,
                      urgent,
                      user: userName,
                      userEmail,
                      zone,
                    };
                    addNewNeed(newNeed).then(() => {
                      setTitle("");
                      setDescription("");
                      setCategory("");
                      setMobility(false);
                      setZone("");
                      setLoading(false);
                    });
                  });
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

export default AddItem;