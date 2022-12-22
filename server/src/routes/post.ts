import { Router, Response, Request } from "express";
import moment from "moment";
import AppDataSource from "../../data-source";
import { Post } from "../entity";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('!!!!!');
});

router.post("/", async (req: Request, res: Response) => {
    console.log('post 입력 실행: ', req);
    try {
        if(req.body) {
            const result = await AppDataSource.getRepository(Post).save({
                id: req.body.id,
                title: req.body.title,
                content: req.body.content,
                user: req.body.user,
                created: moment().format('YYYY-MM-DD HH:mm:ss'),
                modified: moment().format('YYYY-MM-DD HH:mm:ss'),
            });
            return res.json(result);
        }
    } catch(error) {
        console.log('에러가 발생했습니다.',  error);     
        throw error;
    }
});


export default router;