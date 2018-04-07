let urls={};
//真实数据接口
let protocol = window.location.protocol;
let host = window.location.host;
urls.baseURL=protocol+"//"+host;
urls.login="/login";
urls.order="/order/list";
export default urls
