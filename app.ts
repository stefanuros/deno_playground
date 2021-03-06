// import { Application } from './imports.ts';
// import router from './routes.ts';

// const env = Deno.env.toObject();
// const HOST = env.HOST || 'localhost';
// const PORT = env.PORT || 8001;

// const app = new Application();

// app.use(router.routes());
// app.use(router.allowedMethods());

// console.log(`Listening on port ${PORT} ...`);
// await app.listen(`${HOST}:${PORT}`);

import { Cron } from "https://deno.land/x/cron/cron.ts";

let cron = new Cron();
cron.start();
cron.add("* * * * *", () => {
  console.log("Get tweets");
});
