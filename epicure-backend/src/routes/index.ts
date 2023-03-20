import express from 'express';
import chefsRoutes from './chefs.routes';
import restaurantsRoutes from './restaurants.routes';
import dishesRoutes from './dishes.routes';
import usersRoutes from './users.routes';

const router = express.Router();


router.use('/api/chefs/', chefsRoutes);
router.use('/api/restaurants/', restaurantsRoutes);
router.use('/api/dishes/', dishesRoutes);
router.use('/api/users/',usersRoutes);
export default router;


