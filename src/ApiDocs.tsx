import * as React from "react";

import { RedocStandalone } from "redoc";
import example from "./api.json";

export default function ApiDocs(): JSX.Element {
  return (
    <div>
      <h2>api docs</h2>

      <RedocStandalone
        spec={example}
        options={{
          nativeScrollbars: true,
          theme: { colors: { primary: { main: "#dd5522" } } },
        }}
      />
    </div>
  );
}
