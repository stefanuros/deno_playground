import { Router }from './imports.ts';
import { helloWorld, init, test } from './controller.ts';

const router = new Router();
router.get("/", init)
      .get("/helloWorld/:id", helloWorld)
      .get("/test", test);

export default router;
