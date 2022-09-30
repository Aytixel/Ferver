import { RouterData } from "../../../router.ts";
import { AppRunner, RedirectTo, RespondWith } from "../../../runner.ts";

export default function (
  _app: AppRunner,
  _request: Request,
  routerData: RouterData,
  _headers: Record<string, string>,
  _respondWith: RespondWith,
  redirectTo: RedirectTo,
) {
  console.log("Redirection test");

  redirectTo(routerData.url.origin + "/");
}
