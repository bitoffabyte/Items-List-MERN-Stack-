const express = require('express');
const router = express.Router();

const Item = require('../../modals/Item');

// get items

router.get('/', async (req, res) => {
    try {
        const items = await Item.find().sort({ date: -1 });
        res.json(items);
    } catch (err) {
        console.error(err);
    }
});

// post items

router.post('/', async (req, res) => {
    const newItem = new Item({
        name: req.body.name,
    });
    try {
        await newItem.save();
        res.json(newItem);
    } catch (err) {
        console.error(err);
    }
});

// delete items

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const item = await Item.findById(id).deleteOne();
        res.status(200).json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(404).json({ success: false });
    }
});
module.exports = router;
