import { PAGES } from 'src/constants';

import router from 'src/router/router';
import AuthController from 'src/controllers/AuthController';

import '../assets/styles/common.scss';

document.addEventListener('DOMContentLoaded', async () => {
  PAGES.forEach((page) => {
    router.use(page.path, page.block, page.props);
  });

  router.start();

  await AuthController.getUser();
});
