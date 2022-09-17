import { RouterData } from "../../router.ts";
import { AppRunner } from "../../runner.ts";
import { Ok200 } from "../../status.ts";

export default function (
  _app: AppRunner,
  _request: Request,
  _routerData: RouterData,
  _headers: Record<string, string>,
) {
  return new Ok200(
    new TextEncoder().encode(`{"time": ${Date.now()}}`),
  );
}
