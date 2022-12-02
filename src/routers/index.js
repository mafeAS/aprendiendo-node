import{Router} from 'express'
const router = Router()

router.get('/',(req,res)=>res.render('index',{title:'mi primera pagina web'}))

router.get('/about',(req,res)=>res.render('about',{title:'mi primer about'}))

router.get('/contact',(req,res)=>res.render('contact',{title:'mi primer contact'}))

export default router