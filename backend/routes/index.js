import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { getAllProduct, createProduct, getProductById, updateProduct, deleteProduct } from "../controllers/Product.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/refreshToken.js";

const router = express.Router();

// Authentification
router.get('/users', verifyToken, getUsers)
router.post('/users', Register)
router.post('/login', Login)
router.get('/token', refreshToken)
router.delete('/logout', Logout)

// Production
router.get('/products', getAllProduct ) 
router.get('/products/:id', getProductById ) 
router.post('/products', createProduct )
router.patch('/products/:id', updateProduct ) 
router.delete('/products/:id', deleteProduct ) 

export default router;