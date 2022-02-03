import  express  from "express";
import { router }  from './routes'


const app = express();

app.listen(4000, () => console.log('Server is running on! PORT 4000'))


app.use(express.json());

app.use(router)