import * as React from "react";

import TimeSeries from "./TimeSeries";
import ApiDocs from "./ApiDocs";

function MainApp() {
  return (
    <div>
      <TimeSeries />

      <ApiDocs />
    </div>
  );
}

function App() {
  return <MainApp />;
}

export default App;
