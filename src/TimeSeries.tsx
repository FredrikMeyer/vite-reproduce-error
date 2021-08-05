import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Plot from "react-plotly.js";

export default function ShowTimeSeries(): JSX.Element {
  return (
    <Container maxWidth="md" style={{ flexGrow: 1 }}>
      <Paper>
        <div>
          <Typography gutterBottom variant="h2" component="h2">
            Time series
          </Typography>
        </div>
        <Plot
          data={[]}
          layout={{
            width: 500,
            height: 440,
            title: "test",
            xaxis: {
              rangeslider: {},
              rangeselector: {
                buttons: [
                  {
                    step: "day",
                    stepmode: "backward",
                    count: 1,
                    label: "1day",
                  },
                  {
                    step: "all",
                  },
                ],
              },
            },
          }}
          config={{
            displaylogo: false,
          }}
        />
      </Paper>
    </Container>
  );
}
