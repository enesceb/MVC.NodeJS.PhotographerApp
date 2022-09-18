const getIndexPage = (req,res) => {
 res.render("index")
}
const getAboutPage = (req,res) => {
    res.render("about")
}
const getServicesPage = (req,res) => {
    res.render("services")
}

export {getIndexPage, getAboutPage,getServicesPage}