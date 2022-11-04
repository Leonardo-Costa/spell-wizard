class HomeController {
  index(req, ans) {
    ans.status(401).json({
      tudoCerto: true,
    })
  }
}

export default new HomeController();
