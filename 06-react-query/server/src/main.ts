import { Server } from "./server";

// Function anonima
(() => {
  main();
})();

function main() {
  const server = new Server({ port: 5000 });
  server.start();
}
