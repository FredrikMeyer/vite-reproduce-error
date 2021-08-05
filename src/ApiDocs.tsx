import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import { RedocStandalone } from "redoc";
import example from "./api.json";

export default function ApiDocs(): JSX.Element {
  return (
    <Container maxWidth={false} style={{ flexGrow: 1 }}>
      <Typography variant="h2">API documentation</Typography>

      <RedocStandalone
        spec={example}
        options={{
          nativeScrollbars: true,
          theme: { colors: { primary: { main: "#dd5522" } } },
        }}
      />
    </Container>
  );
}
