import { RouterData } from "../../../router.ts";
import { AppRunner, RunnerResponse } from "../../../runner.ts";

export default function (
  _app: AppRunner,
  _request: Request,
  routerData: RouterData,
  _headers: Record<string, string>,
  runnerResponse: RunnerResponse,
) {
  console.log("Redirection test");

  runnerResponse.redirectTo(routerData.url.origin + "/");
}
