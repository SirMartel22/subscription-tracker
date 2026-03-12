import { Router } from 'express'
import { getUser, getUsers } from "../controllers/user.controller.js";
import authorize from '../middlewares/auth.middleware.js'

const userRouter = Router()

// GET /users -> get all users
// GET /users/:id -> get user by id // 124 435 etc

userRouter.get("/", getUsers)

userRouter.get("/:id", authorize, getUser)

userRouter.post("/", (req, res) => res.send({body: "CREATE new user"}))

userRouter.put("/:id", (req, res) => res.send({ body: "UPDATE user" }))

userRouter.delete("/:id", (req, res) => res.send({ body: "DELETE a specific user by id" }))


export default userRouter;