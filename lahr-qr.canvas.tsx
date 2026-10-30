import { H1, Stack, Text, useHostTheme } from "cursor/canvas";

const PAYLOAD = "https://www.schuh-frank.de/lahr-schuhe-koblenz";

const QR_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAewAAAHsAQAAAAA4UaPNAAACF0lEQVR42u2dW46DMBAER3sB7n9L38AbAswL8hVpV26VhRBErh/UHtrD2LH5TRsGDg4ODg4ODg4ODv7vuHnb5uvwtt++fzx65m5v/Me+auDgf4+ba7uJ/DyODqMPBzQPLqD5rOoc848+57l2Q/PgGpo/Ze9+5rr1IYDmwdXi/KiBHc2Dq/v5c2L7Ol82fr9IrwD8PLiC5mve5uNB3gZcRfO55XnrfuFZyu2e6uTJg6/t5w8zE07GwtuEtx9nBzQPrqD5OYvg77JPIwLNg4vMYV3ho78CfFZLnAdX8POjXD8XJ6SxgObBRTR/nVtyslj9PO1F8+BLe5uR/Lzb+CvIp9getgfNg68e57Pas5m51+GgefDl47zfjlB1d/gjvsmieXABb2P1O1T5ApXUTpwH14nzW6Tfo+Rm9hrL6u158uDL+vlZnHxfJzJuQ4M4Dy7gbXL5wRXb27sgfifOgwvE+S2+THnSpq0cycUJaB5cYA57z9v4EGjKR/PgIn5+C3m3mF+mt3gbcAHNJyW3dd99bSyaBxeaw5Yym9GLygJB8+AS3iabnJKfr7WURo0ZuOp6WE/dpNje0vVoHnxpb9NMjqu9WJ3JXh/gJrmPWXYyZvb4IkDz4DKat7pZX9vohrwNuOTefW3ZiJk1Y4+fB1fy83mnvpyWz4InzoOL5W0eCxLKWCDOgy+uef6uAhwcHBwcHBwcHHxB/Bceb6isumiScwAAAABJRU5ErkJggg==";

export default function LahrQrKarte() {
  const theme = useHostTheme();

  return (
    <Stack gap={16} style={{ padding: 24, background: theme.bg.editor, alignItems: "center" }}>
      <Stack
        gap={14}
        style={{
          width: "100%",
          maxWidth: 460,
          alignItems: "center",
          background: "#c5dff0",
          border: "8px solid #6f9fc4",
          borderRadius: 28,
          padding: "28px 24px",
        }}
      >
        <svg width={18} height={18} viewBox="0 0 10 10" aria-hidden="true">
          <polygon points="5,0.4 9.6,5 5,9.6 0.4,5" fill="#4b2c8a" />
        </svg>
        <H1 style={{ margin: 0, color: "#2a2d31", letterSpacing: "0.14em" }}>LAHR</H1>
        <Text style={{ margin: 0, color: "#2a2d31", textAlign: "center" }}>
          Das ganze Jahr der Schuh von Lahr
        </Text>
        <img
          src={QR_PNG}
          alt="QR-Code für die Lahr-Ladenkarte"
          width={360}
          height={360}
          style={{ display: "block", width: 360, height: 360, background: "#ffffff" }}
        />
        <Text size="small" style={{ margin: 0, color: "#2a2d31", textAlign: "center" }}>
          Löhrstr. 51
        </Text>
        <Text size="small" style={{ margin: 0, color: "#2a2d31", textAlign: "center" }}>
          56068 Koblenz
        </Text>
        <Text size="small" style={{ margin: 0, color: "#2a2d31", textAlign: "center" }}>
          +49 (0) 261 100061
        </Text>
        <Text size="small" style={{ margin: 0, color: "#2a2d31", textAlign: "center" }}>
          {PAYLOAD}
        </Text>
        <Text size="small" style={{ margin: 0, color: "#2a2d31", textAlign: "center" }}>
          info@schuh-frank.de
        </Text>
      </Stack>
    </Stack>
  );
}
