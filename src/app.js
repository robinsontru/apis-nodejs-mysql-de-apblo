 import { Express } from "express";


import { indexRoutes } from "./routes/index.Routers.js";
import { userRoutes } from "./routes/user.Routers.js";

const app = express()

app.use('/api',userRoutes)
app.use('/api',indexRoutes)

export default app