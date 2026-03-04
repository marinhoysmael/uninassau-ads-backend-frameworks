const getRouter = (express) => {
  const router = express.Router();

  router.get('/', (req, res) => {
    res.json({ message: 'List of products' });
  });

  router.post('/', (req, res) => {
    res.json({ message: 'Product created', product: req.body });
  });

  return router;
};

module.exports = { getRouter };