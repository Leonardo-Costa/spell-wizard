import Home from '../models/Home';

class HomeController {
  async index(req, res) {
    const newHome = await Home.index({
      name: 'Vinicius',
      email: 'vinicius@email.com',
      password: '12345678',
    });

    res.json({ newHome });
  }
}

export default new HomeController();
