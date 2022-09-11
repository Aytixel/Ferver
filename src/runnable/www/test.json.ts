import { RouterData } from "../../router.ts";
import { AppRunner } from "../../runner.ts";

export default function (
  _app: AppRunner,
  _request: Request,
  _routerData: RouterData,
  _headers: Record<string, string>,
) {
  return new TextEncoder().encode(`{"time": ${Date.now()}}`);
}
