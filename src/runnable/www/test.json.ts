import { RouterData } from "../../router.ts";
import { AppRunner, RunnerResponse } from "../../runner.ts";

export default function (
  _app: AppRunner,
  _request: Request,
  _routerData: RouterData,
  _headers: Record<string, string>,
  runnerResponse: RunnerResponse,
) {
  runnerResponse.respondWith(`{"time": ${Date.now()}}`);
}
