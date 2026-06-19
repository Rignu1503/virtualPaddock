import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';

import express from 'express';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = join(__dirname, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

/**
 * Archivos estáticos
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Render SSR Angular
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) => {
      if (response) {
        return writeResponseToNodeResponse(response, res);
      }
      next();
    })
    .catch(next);
});

/**
 * Iniciar servidor
 */
if (isMainModule(import.meta.url)) {
  const port = Number(process.env['PORT']) || 4000;

  app.listen(port, () => {
    console.log(
      `🚀 Angular SSR ejecutándose en http://localhost:${port}`,
    );
  });
}

/**
 * Handler para Angular CLI
 */
export const reqHandler = createNodeRequestHandler(app);
