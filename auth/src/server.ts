import { app } from "./app";

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("No environement variable were found");
  }

  app.listen(80, () => {
    console.log("Listening on port 8080");
  });
};

start();
