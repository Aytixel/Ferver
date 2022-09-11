import { DotenvConfig } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";
import { join, resolve } from "https://deno.land/std@0.152.0/path/mod.ts";
import { existsSync } from "./utils.ts";
import { RouterData } from "./router.ts";

class AppRunner {
  public env: DotenvConfig;

  constructor(env: DotenvConfig) {
    this.env = env;
  }

  async init() {}
}

class Runner {
  private env: DotenvConfig;
  private app: AppRunner;
  private runnablePath: string;

  constructor(env: DotenvConfig) {
    this.env = env;
    this.app = new AppRunner(env);
    this.runnablePath = env.RUNNABLE_PATH;
  }

  private getRunnablePath(path: string) {
    for (const extension of ["ts", "tsx", "js", "jsx"]) {
      const runnablePath = resolve(
        join(this.runnablePath, path + "." + extension),
      );

      if (existsSync(runnablePath)) return "file://" + runnablePath;
    }

    return null;
  }

  async runApp() {
    const runnablePath = this.getRunnablePath("app");

    if (runnablePath) {
      this.app = new (await import(runnablePath)).default(this.env);

      await this.app.init();
    }
  }

  async run(
    request: Request,
    routerData: RouterData,
    headers: Record<string, string>,
  ) {
    const runnablePath = this.getRunnablePath(routerData.domainFilePath);

    if (runnablePath) {
      (await import(runnablePath)).default(
        this.app,
        request,
        routerData,
        headers,
      );
    }
  }

  async runWithTextData(
    request: Request,
    routerData: RouterData,
    headers: Record<string, string>,
    data: string,
  ): Promise<Uint8Array> {
    const runnablePath = this.getRunnablePath(routerData.domainFilePath);

    if (runnablePath) {
      return new TextEncoder().encode(
        await (await import(runnablePath)).default(
          this.app,
          request,
          routerData,
          headers,
          data,
        ) || data,
      );
    }

    return new TextEncoder().encode(data);
  }

  async runWithNothing(
    request: Request,
    routerData: RouterData,
    headers: Record<string, string>,
  ): Promise<{ data: Uint8Array | null; status: number }> {
    const runnablePath = this.getRunnablePath(routerData.domainFilePath);

    if (runnablePath) {
      return {
        data: await (await import(runnablePath)).default(
          this.app,
          request,
          routerData,
          headers,
        ),
        status: 200,
      };
    }

    return { data: null, status: 404 };
  }
}

export { AppRunner, Runner };
