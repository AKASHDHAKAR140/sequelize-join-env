const db = require("../../db")



const postdata = async (req, res) => {
    const postData = req.body;
    //console.log(postData, "!!!!!!!!!!!!!!!!!")
    try {
        const addingData = await db.Model1.create(postData);
        const insertData = await addingData.save();
        res.status(200).json(insertData)
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: "something went wrong" })
    }
}
const getdata = async (req, res,) => {
    try {
        const addingData = await db.Model1.findAll({limit:6,});
        
        res.status(200).json(addingData)
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: "something went wrong" })
    }
}

module.exports = { postdata, getdata };