import React, { useState, useContext, useRef, useEffect } from "react";
import styled from "styled-components";
import {
  ContainerTitle,
  DivHundredPerCentWidth,
} from "../components/StyledComponents";
import AuthContext from "../context/AuthContext";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import TopBar from "../components/TopBar";
import Profile from "../components/Profile";
import { mapZonesIntoOptions } from "../data/data";

export default function AddItem({ children, addNewItem, addAnImage }) {
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
    <>
      <TopBar />
      <Profile />
      <Wrapper>
        <Card border="primary" className="m-2">
          <Card.Header>
            <ContainerTitle>{`Agregar ${
              children ? "búsqueda" : "oferta"
            }`}</ContainerTitle>
          </Card.Header>
          <FormContainer>
            <Form.Group>
              <br />
              <Form.Label>Foto del objeto</Form.Label>
              <Form.File
                id="custom-file"
                label={fileName || `Agregar foto`}
                ref={inputFileRef}
                data-browse="+"
                onChange={() => setUploadingFile(!uploadingFile)}
                custom
              />
              <br />
              <br />
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
                value={category}
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
              <Form.Label>Barrio más cercano</Form.Label>
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
                checked={mobility}
                onChange={() => setMobility(!mobility)}
              />
              <br />
              {children && children({ urgent, setUrgent })}
              <br />
              <DivHundredPerCentWidth>
                {loading && (
                  <DivHundredPerCentWidth>
                    <Spinner animation="grow" variant="primary" />
                  </DivHundredPerCentWidth>
                )}
                <Button
                  variant="outline-info"
                  onClick={() => {
                    if (title && category && description && zone) {
                      setLoading(true);
                      addAnImage(fileLoaded).then((url) => {
                        const newItem = {
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
                        addNewItem(newItem).then(() => {
                          setCategory("");
                          setDescription("");
                          setMobility(false);
                          setLoading(false);
                          setTitle("");
                          setUrgent(false);
                          setZone("");
                        });
                      });
                    } else {
                      alert("Es obligatorio completar algunos campos");
                    }
                  }}
                >
                  Subir
                </Button>
              </DivHundredPerCentWidth>
            </Form.Group>
          </FormContainer>
        </Card>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section({
  margin: "0 1% 0 21%",
});
const FormContainer = styled.section({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
});
