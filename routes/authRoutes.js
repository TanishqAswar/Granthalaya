import express from 'express'
import {
  loginController,
  registerController,
  testController,
} from '../controllers/authController.js'
import { isAdmin, requireLogin } from '../middlewares/authMiddlewares.js'


// router object
const authRoutes = express.Router()

// routes related to authentication
// REGISTER || POST
authRoutes.post('/register', registerController)

// LOGIN || POST
authRoutes.post('/login', loginController)

// Test Route
authRoutes.get('/test',requireLogin, isAdmin,testController)

export default authRoutes
