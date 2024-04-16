const http = require("http")
const port = 8080
const fs = require("fs")


const homepage = fs.readFileSync("./pages/index.html")
const about = fs.readFileSync("./pages/about.html")
const contact = fs.readFileSync("./pages/contact.html")
const error = fs.readFileSync("./pages/error.html")
const testimonials = fs.readFileSync("./pages/testimonials.html")
const services = fs.readFileSync("./pages/services.html")




const server = http.createServer((req, res)=> {
    let path = req.url
    if (path === "/" || path === "/home"){
        res.end(homepage)
      }
      else if (path === "/about"){
        res.end(about)
      }
      else if (path === "/contact"){
        res.end(contact)
      }
      else if (path === "/testimonials"){
        res.end(testimonials)
      }
      else if (path === "/services"){
        res.end(Service)
      } else {
        res.end(error)
      }
})

server.listen(port, () => {
    console.log("server started sucessfully")
})

