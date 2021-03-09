import React, { useContext, useEffect, useState } from "react";
import Context from "./context";
import { ListGroupItem, Button } from "react-bootstrap";

export default function ElementComponent({ deleteElement }) {
  const { el, startData } = useContext(Context);
  const [buttonStyle, setButtonStyle] = useState([
    "primary",
    "warning",
    "success",
  ]);
  const [defaultButton, setDefaultButton] = useState("primary");

  useEffect(() => {
    console.log(startData);
    setDefaultButton(
      startData === "posts"
        ? buttonStyle[0]
        : startData === "photos"
        ? buttonStyle[1]
        : buttonStyle[2]
    );
  }, [startData]);

  return (
    <ListGroupItem>
      {startData === "posts" ? (
        <div>
          <p>Card number: {el.id}</p>
          <p>Post content: {el.title}</p>
        </div>
      ) : startData === "photos" ? (
        <div>
          <p>Card number: {el.id}</p>
          <p>
            <img src={el.url} />
          </p>
          <figuration>{el.title}</figuration>
        </div>
      ) : (
        <div>
          <p>Card number: {el.id}</p>
          <p>Name: {el.name}</p>
          <p>Email: {el.email}</p>
        </div>
      )}
      <Button variant={defaultButton} onClick={() => deleteElement(el.id)}>
        Delete{" "}
        {startData === "posts"
          ? "post"
          : startData === "photos"
          ? "photo"
          : "user"}
      </Button>
    </ListGroupItem>
  );
}
