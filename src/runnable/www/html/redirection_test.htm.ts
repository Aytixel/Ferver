import { RouterData } from "../../../router.ts";
import { AppRunner } from "../../../runner.ts";

export default function (
  _app: AppRunner,
  _request: Request,
  routerData: RouterData,
  _headers: Record<string, string>,
) {
  console.log("Redirection test");

  return Response.redirect(routerData.url.origin + "/");
}
