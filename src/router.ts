import { Router } from "express";
import { createAccount, getUser, getUserByHandle, login, searchByHandle, updateProfile, uploadImage } from "./handlers";
import { body } from "express-validator";
import { handleInputErrors } from "./middleware/validation";
import { authenticate } from "./middleware/auth";

const router = Router()
//Creacion de Router 

//Routing 
//Autenticacion y registro 
// req(es el usuario envia) res(es la respuesta del servidor)
router.post('/auth/register',
    body('handle').notEmpty().withMessage('El handle no puede ir vasio'),
    body('name').notEmpty().withMessage('El nombre no puede ir vasio'),
    body('email').isEmail().withMessage('Email no valido'),
    body('password').isLength({ min: 8 }).withMessage('El password es muy corto minimo 8 caracteres'),
    handleInputErrors,
    createAccount)

//Login 
router.post('/auth/login',
    body('email').isEmail().withMessage('Email no valido'),
    body('password').notEmpty().withMessage('El password es obligatorio'),
    login
)
//Se envia el Token y nos dice que usuario esta autenticado 
router.get('/user', authenticate, getUser)

router.patch('/user',
    body('handle').notEmpty().withMessage('El handle no puede ir vasio'),
   
    handleInputErrors,
    authenticate, 
    updateProfile)


    //Img
    router.post('/user/image', authenticate, uploadImage)
//generar un Router dinamico para la hora de compartir el Link a las demas personas 
router.get('/:handle', getUserByHandle)
//saber si el Hanlde esta habilitado o no 
router.post('/search',
    body('handle').notEmpty().withMessage('El handle no puede ir vacio '),
    handleInputErrors,
    searchByHandle
)

    
export default router