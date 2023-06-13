
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

try {
    window.$ = window.jQuery = require('jquery');
    window.Popper = require('@popperjs/core');
    window.bootstrap = require('bootstrap');

} catch (e) {}

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['CSRF-TOKEN'] = getValueFromId('token');

window.url = getValueFromId('base_url');
window.app_path = getValueFromId('app_path');

// window.axios.defaults.headers.common['pusher_app_key'] = document.getElementById('pusher_app_key').value;
// window.axios.defaults.headers.common['pusher_app_cluster'] = document.getElementById('pusher_app_cluster').value;


/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */


import Echo from 'laravel-echo';

window.Pusher = require('pusher-js');

/*window.Echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.MIX_PUSHER_APP_KEY,
    cluster: process.env.MIX_PUSHER_APP_CLUSTER,
    forceTLS: true
});*/
window.Echo = new Echo({
    broadcaster: 'pusher',
    key: getValueFromId("f_pusher_app_key"),
    cluster: getValueFromId("f_pusher_app_cluster"),
    forceTLS: true
});

function getValueFromId(id)
{
    let value = '';
    let input_box = document.getElementById(id);

    if (input_box)
    {
        value = input_box.value;
    }
    return value;
}