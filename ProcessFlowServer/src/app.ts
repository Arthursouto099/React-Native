import express, { urlencoded } from "express";
import cors from "cors"
import prisma from "./lib/prisma";

const app = express()


app.use(cors({
    origin: "*"
}))

app.use(express.json())
app.use(urlencoded({extended: true}))



// rotas do usuario
app.post("/user", async (req, res) => {
    try {
      const user = await prisma.user.create({data: req.body})
      res.status(201).json({message: "Usuario criado com sucesso", data: user})
    }
    catch(e: unknown) {
        console.log(e)
        res.status(500).json({error: (e as Error).message})
    }
})

app.get("/user/:id", async (req, res) => {
    try {
      const user = await prisma.user.findUnique({where: {id_user: req.params.id}})
      res.status(201).json({message: "Usuarios", data: user})
    }
    catch(e: unknown) {
        res.status(500).json({error: (e as Error).message})
    }
})

app.get("/user", async (req, res) => {
    try {
      const users = await prisma.user.findMany()
      res.status(201).json({message: "Usuarios", data: users})
    }
    catch(e: unknown) {
        res.status(500).json({error: (e as Error).message})
    }
})

app.post("/login", async (req, res) => {
    try {
      const login = await prisma.user.findFirstOrThrow({where: {AND: [
        {email: req.body.email},
        {password: req.body.password}
      ]}})
      res.status(200).json({message: "Login feito com sucesso", data: login})
    }
    catch(e: unknown) {
        res.status(401).json({error: (e as Error).message, message: "Não autorizado"})
    }
})

//  task


app.post("/post", async (req, res) => {
  try {
      const user = await prisma.post.create({data: req.body})
      res.status(201).json({message: "Post criado com sucesso", data: user})
    }
    catch(e: unknown) {
        console.log(e)
        res.status(500).json({error: (e as Error).message})
    }
} )





app.listen(3000, () => {
    console.log("running in http://localhost/3000")
})