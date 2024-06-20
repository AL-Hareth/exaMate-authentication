import { Router } from "express";
import { User } from "../lib/db.js";

const router = Router();

router.get('/', async (req, res) => {
    if (req.headers.authorization) {
        console.log("here");
        const users = await User.findAll();
        return res.json(users);
    }

    return res.status(403).json({
        message: "Not authorized"
    })
});

router.get('/:id', async (req, res) => {
    const user = await User.findOne({
        where: {
            id: req.params.id
        }
    });

    if (user) {
        return res.json(user);
    }

    return res.status(404).json({
        message: "User not found"
    });
});

export default router;
