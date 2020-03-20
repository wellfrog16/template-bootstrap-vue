
import { NProgress } from '@/utils/cdn';
import createRouter from '../router';

NProgress.configure({ showSpinner: false });

const router = createRouter();
router.beforeEach((to, from, next) => {
    NProgress.start();

    next();
});

router.afterEach(() => {
    NProgress.done();
});

export default router;
