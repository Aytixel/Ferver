import { RouterData } from "../../../router.ts";
import { AppRunner } from "../../../runner.ts";

export default function (
  _app: AppRunner,
  _request: Request,
  _routerData: RouterData,
  _headers: Record<string, string>,
  data: string,
) {
  return data.replace(
    /<body>\n.*<\/body>/gm,
    "<body>\n        Server: Hello world\n    </body>",
  );
}
