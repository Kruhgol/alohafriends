module.exports = function trustAsHtml($sce){
    return function(html){
        return $sce.trustAsHtml(html);
    }
}