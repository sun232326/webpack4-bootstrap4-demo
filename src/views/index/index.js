import {Utils, Http} from '../../assets/Common';
import '../../assets/libs/myjs.min';
import './index.scss';
import './index.html';

window.login = login;

function login(username, password) {
    Http.config({
        url: '/v1/login',
        data: {
            username: username,
            password: hex_md5(password),
            client_id: 'web'
        },
        success: function (token) {
            window.token = token;
            Utils.setSessionStorageItem('token', token);
            window.location.href = 'invoice.html';
            /*Http.config({
                url: '/v1/public/user/self',
                success: function (user) {
                    debugger;
                }
            }).get();*/
        }
    }).post();
    return false;
}