import { WebSocketConnectionInfo } from "../websocket.ts";

export default (message: MessageEvent, connection: WebSocketConnectionInfo) => {
  console.log(message.data, connection, connection.connections);
  connection.data = "test";
};
