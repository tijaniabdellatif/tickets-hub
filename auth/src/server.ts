import { app } from "./app";

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("No environement variable were found");
  }

  app.listen(3005, () => {
    console.log("Listening on port 3005");
  });
};

start();
