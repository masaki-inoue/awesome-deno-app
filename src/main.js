import { listenAndServe } from "https://deno.land/std@0.50.0/http/server.ts"

const port = 7000
const httpOptions = { port }

listenAndServe(httpOptions, handler)

console.log(`http://localhost:${port}/`)

function handler(req) {
  console.log({ req, url: req.url, method: req.method })
  switch(req.url) {
    case '/favicon.ico':
      faviconHandler(req)
      break
    case '/':
      indexController(req)
      break
    default:
      notFoundController(req)
  }
}

function faviconHandler(req) {
  req.respond({});
}

function indexController(req) {
  const res = {
    "message": "Hello World",
  }
  req.respond({
    body: JSON.stringify(res),
  })
}

function notFoundController(req) {
  const res = {
    "message": "Not Found",
  }
  req.respond({
    body: JSON.stringify(res),
  })
}