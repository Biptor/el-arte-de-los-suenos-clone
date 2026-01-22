// server/index.ts
import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
async function startServer() {
  const app = express();
  const server = createServer(app);
  const staticPath = process.env.NODE_ENV === "production" ? path.resolve(__dirname, "public") : path.resolve(__dirname, "..", "dist", "public");
  app.use(express.static(staticPath, {
    maxAge: "1h",
    etag: false
  }));
  app.get("*", (_req, res) => {
    const indexPath = path.join(staticPath, "index.html");
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.sendFile(indexPath, (err) => {
      if (err) {
        console.error("Error serving index.html:", err);
        res.status(500).send("Internal Server Error");
      }
    });
  });
  const port = process.env.PORT || 3e3;
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}
startServer().catch(console.error);
