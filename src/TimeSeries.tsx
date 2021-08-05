import * as React from "react";
import Plot from "react-plotly.js";

export default function ShowTimeSeries(): JSX.Element {
  return (
    <div>
      <div>
        <h1>Time series</h1>
      </div>
      <Plot
        data={[]}
        layout={{
          width: 500,
          height: 440,
          title: "test",
        }}
        config={{
          displaylogo: false,
        }}
      />
    </div>
  );
}
