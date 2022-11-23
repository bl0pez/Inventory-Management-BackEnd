const getUser = async (req, res) => {

    

    res.json({
        ok: true,
        user: req.user
    });
}




module.exports = {
    getUser,
}