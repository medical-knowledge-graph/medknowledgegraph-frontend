import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Node } from "vis-network";
import "./App.css";
import { KnowledgeGraph } from "./modules/graph/knowledge-graph";

function App() {
  const nodes: Node[] = [
    { id: 1, label: "Node 1 Level 1", level: 1 },
    { id: 2, label: "Node 2 Level 1", level: 1 },
    { id: 3, label: "Node 3 Level 1", level: 1 },
    { id: 4, label: "Node 4 Level 1", level: 1 },
    { id: 5, label: "Node 5 Level 2", level: 2 },
  ];

  const edges = [
    { from: 1, to: 3 },
    { from: 1, to: 2 },
    { from: 2, to: 4 },
    { from: 2, to: 5 },
    { from: 3, to: 3 },
  ];
  return (
    <div className="App">
      <Typography marginLeft={1} variant="h2">
        Medical Knowledge Graph Test
      </Typography>
      <Grid style={{ flex: 1 }} container spacing={2}>
        <Grid item xs={3}>
          <Typography marginLeft={1} variant="body1">
            Select Levels
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Level 1"
            />
            <FormControlLabel control={<Checkbox />} label="Level 2" />
          </FormGroup>
        </Grid>
        <Grid item xs={9}>
          <KnowledgeGraph nodes={nodes} edges={edges} onNodeClick={() => {}} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
