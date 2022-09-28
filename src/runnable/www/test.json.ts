import { RouterData } from "../../router.ts";
import { AppRunner, RespondWith } from "../../runner.ts";

export default function (
  _app: AppRunner,
  _request: Request,
  _routerData: RouterData,
  _headers: Record<string, string>,
  respondWith: RespondWith,
) {
  respondWith(`{"time": ${Date.now()}}`);
}
