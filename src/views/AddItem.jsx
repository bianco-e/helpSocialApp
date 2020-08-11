import React, { useState, useContext, useRef, useEffect } from "react";
import styled from "styled-components";
import AuthContext from "../context/AuthContext";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import TopBar from "../components/TopBar";
import Profile from "../components/Profile";
import { categories, zones } from "../data/data";

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
                custom
                data-browse="+"
                id="custom-file"
                label={fileName || `Agregar foto`}
                onChange={() => setUploadingFile(!uploadingFile)}
                ref={inputFileRef}
              />
              <br />
              <br />
              <Form.Label>Título</Form.Label>
              <Form.Control
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Título"
                size="sm"
                type="text"
                value={title}
              />
              <br />
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                cols="30"
                maxlength="240"
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Descripción"
                value={description}
              />
              <br />
              <Form.Label>Categoría</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setCategory(e.target.value)}
                size="sm"
                value={category}
              >
                {categories.map((option, idx) => (
                  <option value={idx === 0 ? "" : option}>{option}</option>
                ))}
              </Form.Control>
              <br />
              <Form.Label>Barrio más cercano</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setZone(e.target.value)}
                size="sm"
                value={zone}
              >
                {zones.map((zone, idx) => {
                  return (
                    <option value={idx === 0 ? "" : zone} key={zone}>
                      {zone}
                    </option>
                  );
                })}
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
              <Container>
                {loading && (
                  <Container>
                    <Spinner animation="grow" variant="primary" />
                  </Container>
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
              </Container>
            </Form.Group>
          </FormContainer>
        </Card>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section({
  margin: "0 1% 0 16%",
});
const FormContainer = styled.section({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
});
const Container = styled.section({
  width: "100%",
  textAlign: "center",
});
const ContainerTitle = styled.h6({
  color: "rgb(150, 150, 170)",
  margin: "0",
  textAlign: "center",
});
