import { WebSocketConnectionInfo } from "../websocket.ts";

export default (message: MessageEvent, connection: WebSocketConnectionInfo) => {
  console.log(message.data);
  console.log(connection);
  connection.data = "test";
};
