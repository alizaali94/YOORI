import VueProgressBar from 'vue-progressbar'

const options = {
    color: 'var(--primary-color)',
    failedColor: '#bb2d3b',
    thickness: '2px',
    transition: {
        speed: '0.2s',
        opacity: '0.6s',
        termination: 300
    },
    autoRevert: true,
    location: 'top',
    inverse: false
}

const progressShowDelay = 100;
let routeResolved = false;
/**
 * Initializes NProgress after a specified delay only if the route was not resolved yet.
 */

export function cancelTopProgress() {
    routeResolved = true;
    VueProgressBar.finish();
}
function tryInitProgress() {
    routeResolved = false;
    setTimeout(()=> {
        if (!routeResolved) {
            VueProgressBar.start();
        }
    }, progressShowDelay);
}
export default function initProgress(router) {
    router.afterEach(cancelTopProgress);
    router.beforeEach((to, from, next) => {
        tryInitProgress();
        return next();
    });
}
