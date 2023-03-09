import { pool } from "../dbConect.js";

import { getUSER,posUSER,putUSER,deleteUSER } from "../controllrs/userControllers.js";

router.get('/prueba',getUSER)
router.post('/prueba',posUSER)
router.put('/prueba',putUSER)
router.delete('/prueba',deleteUSER)

export default router