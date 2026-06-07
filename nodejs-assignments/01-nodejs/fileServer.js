/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
import { error } from "console";
import express from "express";
import fs from "fs";
import path from "path";

const app = express();

const fileDir = path.join(process.cwd(), "files");

app.get("/files", (req, res) => {
  fs.readdir(fileDir, (err, files) => {
    if(err) {
      return res.status(500).json({
        error: "Unable to read files"
      })
    }
    return res.status(200).json(files)
  })
})

app.get("/file/:filename", (req, res) => {
  const fileName = req.params.filename;
  const filepath = path.join(fileDir, fileName);
  fs.readFile(filepath, "utf-8", (err, data) => {
    if(err){
      return res.status(404).json({
        error: "File not found"
      })
    }
    return res.status(200).json(data);
  })
})


app.all("*", (req, res) => {
  return res.status(404).json({
    error: "Route not found"
  })
})






app.listen(3000, () => {
  console.log("Server is running on port 3000");
})


module.exports = app;