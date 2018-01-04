
var baseUrl = 'http://web-app-t.wxsapp.com'
/* 1. 资讯文章标签（精选内容）*/
var articleTagAll = baseUrl +'/wap/article/tag/all.do'
/* 2. 文章列表（精选文章） */
var articlePage = baseUrl + '/wap/article/page.do'
/* 3. 每周话题 */
var oneStr = baseUrl + '/wap/week/topic/get/one.do'
/* 4. 获取精彩直播推荐内容 */
var courseAll = baseUrl + '/wap/course/rec/log/all.do'
/* 5. 运营笔记列表 */
var opArticlePage = baseUrl + '/wap/operation/article/page.do'
/* 5. 运营笔记列表 */
var recLogAll = baseUrl + '/wap/article/rec/log/all.do '

/* 封装axios请求 */
function getAxios(reqStr, params,success, error) {
    axios.post(reqStr, params, {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function (res) {
            // console.log(res);
            if (res.data !== undefined) {
                // var res = JSON.parse(res.data)
                success && success(res.data)
            } else {
                success && success(res)
            }
        })
        .catch(function (err) {
            console.log('api-err')
            console.log(err);
            error && error(error)
        });
}
/* 封装Ajax请求 */
function getAjax (urlStr, params, successFn, errorFn) {
    $.ajax({
        url: urlStr,
        type: "POST",
        data: params,
        success: function (res) {
            var resultJson = JSON.parse(res)
            successFn && successFn(resultJson)
        },
        error: function (err) {
            // var err = JSON.parse(err)
            console.log('err错误')
            console.log(err)
            errorFn && errorFn(err)
//                                errorFn && errorFn()
        }
    })
}

/* 1. 资讯文章标签（精选内容）*/
function getArticleTagAll(params, successFn, errorFn) {
    getAjax(articleTagAll, params, function (res) {
        successFn &&successFn(res)
    }, function (err) {
        errorFn && errorFn(err)
    })
}
/* 2. 文章列表（精选文章） */
function getArticlePage(params, successFn, errorFn) {
    getAjax(articlePage, params, function (res) {
        successFn &&successFn(res)
    }, function (err) {
        errorFn && errorFn(err)
    })
}

/* 3. 每周话题 */
function getOneStr(params, successFn, errorFn) {
    getAjax(oneStr, params, function (res) {
        successFn &&successFn(res)
    }, function (err) {
        errorFn && errorFn(err)
    })
}
/* 4. 获取精彩直播推荐内容 */
function getCourseAll(params, successFn, errorFn) {
    getAjax(courseAll, params, function (res) {
        successFn &&successFn(res)
    }, function (err) {
        errorFn && errorFn(err)
    })
}
/* 5. 运营笔记列表 */
function getOpArticlePage(params, successFn, errorFn) {
    getAjax(opArticlePage, params, function (res) {
        successFn &&successFn(res)
    }, function (err) {
        errorFn && errorFn(err)
    })
}
/* 6. 运营笔记列表-新 */
function getRecLogAll(params, successFn, errorFn) {
    getAjax(recLogAll, params, function (res) {
        successFn &&successFn(res)
    }, function (err) {
        errorFn && errorFn(err)
    })
}

/* 1. 资讯文章标签（精选内容）*/
/*function getArticleTagAll(params, success, error) {
    getAxios(articleTagAll, params, function (res) {
        success &&success(res)
    }, function (err) {
        error && error(err)
    })
}*/
/* 2. 文章列表（精选文章） */
/*function getArticlePage(params, success, error) {
    getAxios(articlePage, params, function (res) {
        success &&success(res)
    }, function (err) {
        error && error(err)
    })
}*/

