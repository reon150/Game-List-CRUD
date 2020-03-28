const indexCtrl = {};

indexCtrl.renderIndex = async (req, res) => {
    res.render('index');
};

indexCtrl.renderAbout =  (req, res) => {
    res.render('about');
};

module.exports = indexCtrl;