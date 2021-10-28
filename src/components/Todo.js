import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { InputGroup, FormControl } from "react-bootstrap";
import { addtask } from "../reducer";
import {TodoList} from "./TodoList";

export const Todo = () => {
  const state = useSelector((state) => state.LOGIN);

  const dispatch = useDispatch();

  const [task, setTask] = useState([]);

  const handler = (event) => {
    setTask(event.target.value);
  };

  return (
    <>
      <div>
        <div
          className="container"
          style={{
            width: "400px",
            backgroundImage: " linear-gradient(to bottom,#1b68bb,#b3c293,#57f5e7)",
            border: "5px solid black",
            color: "black",
            borderRadius: "20px",
            padding: "20px",
            height: "600px",
          }}
        >
          <div>
            <h2 style={{ paddingLeft: "200px" }}>
              Welcome. {state.user}
            </h2>
            <br></br>
            <InputGroup
              className="mb-3"
              style={{
                width: "300px",
                paddingLeft: "10px",
              }}
            >
              <FormControl
                placeholder="Add task here"
                onChange={handler}
                value={task}
                name="task "
              />

              <Button
             inverted
             color="red"
                
                onClick={() => {
                  dispatch(
                    addtask({
                      txt: task,
                      id: Date.now().toString(),
                      completed: false,
                    })
                  );
                  setTask("");
                }}
              >
                ADDTASK
              </Button>
            </InputGroup>
          </div>
          <br></br>
          <TodoList/>
        </div>
      </div>
    </>
  );
};
