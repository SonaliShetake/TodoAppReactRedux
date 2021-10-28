import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { completetask, deletetask } from "../reducer";
import ClearIcon from '@mui/icons-material/Clear';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import { green, red } from "@mui/material/colors";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { List } from "semantic-ui-react";


export const TodoList = () => {
  const state = useSelector((state) => state.TODO);

  const dispatch = useDispatch();

  return (
    <div>
      {state.map(({ txt, id, completed }) => (
        <>
          <Box
            sx={{ flexGrow: 1 }}
            style={{
              paddingLeft: "10px",
              padding: "15px",
              fontSize: "25px",
              fontFamily: "Times New Roman', Times, serif",
              fontWeight: "bolder",
              backgroundImage: " linear-gradient(to bottom,#1b68bb,#b3c293,#57f5e7)",
              color: "black",
            }}
          >
            <Grid container spacing={2} key={id} id={id}>
              <Grid item xs={8}>
                <List>
                  <List.Item className={`list ${completed ? "complete" : ""}`}>
                    {txt}{" "}
                  </List.Item>
                </List>
              </Grid>
              <Grid item xs={2}>
                <Avatar
                  sx={{ bgcolor: green[900] }}
                  className="btn btn"
                  onClick={() =>
                    dispatch(
                      completetask({
                        id: id,
                        completed: !completed,
                      })
                    )
                  }
                >
                  {" "}
                  <CheckCircleIcon/>
                </Avatar>
              </Grid>
              <Grid item xs={2}>
                <Avatar
                  sx={{ bgcolor: red[900] }}
                  className="btn btn"
                  onClick={() => dispatch(deletetask(id))}
                >
                  {" "}
                  <ClearIcon />
                </Avatar>
              </Grid>
            </Grid>
          </Box>{" "}
        </>
      ))}
    </div>
  );
};