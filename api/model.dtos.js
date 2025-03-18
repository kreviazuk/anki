"use strict";
/* Options:
Date: 2025-03-11 10:17:36
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: http://gapitest.yban.co/api

GlobalNamespace: TestNamespace
MakePropertiesOptional: True
AddDescriptionAsComments: True
IncludeTypes: IReturn`1,Uploader:FileService,*:GovService,*:GovJiGouService
//ExcludeTypes:
//DefaultImports:
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.GovJiGouService_GetGovJiGouKidXinLis = exports.GovJiGouService_SaveGovJiGouKidPinXie = exports.GovJiGouService_GetGovJiGouKidPinXies = exports.GovJiGouService_SaveGovJiGouKidYingYang = exports.GovJiGouService_GetGovJiGouKidYingYangs = exports.GovJiGouService_SaveGovJiGouKidFeiPang = exports.GovJiGouService_GetGovJiGouKidFeiPangs = exports.GovJiGouService_SaveGovJiGouKidTiCe = exports.GovJiGouService_GetGovJiGouKidTiCes = exports.GovJiGouService_SaveGovJiGouKidMenZhen = exports.GovJiGouService_GetGovJiGouKidMenZhens = exports.GovJiGouService_GetGovJiGouKidSummary = exports.GovJiGouService_SaveGovJiGouKid = exports.GovJiGouService_GetGovJiGouKids = exports.GovJiGouService_SaveGovJiGouKaoQinQingJia = exports.GovJiGouService_GetGovJiGouKaoQinQingJias = exports.GovJiGouService_SaveGovJiGouKaoQinRenYuan = exports.GovJiGouService_GetGovJiGouKaoQinRenYuans = exports.GovJiGouService_SaveGovJiGouKaoQinKid = exports.GovJiGouService_GetGovJiGouKaoQinKids = exports.GovJiGouService_GetGovJiGouKaoQinKid = exports.GovJiGouService_GetGovJiGouKaoQinKidSummary = exports.GovJiGouService_GetGovJiGouManYiDus = exports.GovJiGouService_SaveGovJiGouMeiRiLiuCheng = exports.GovJiGouService_GetGovJiGouMeiRiLiuChengs = exports.GovJiGouService_SaveGovJiGouRuTuoYuYue = exports.GovJiGouService_GetGovJiGouRuTuoYuYues = exports.GovJiGouService_SaveGovJiGouYiYuan = exports.GovJiGouService_GetGovJiGouYiYuans = exports.GovJiGouService_SaveGovJiGouBanJiKid = exports.GovJiGouService_GetGovJiGouBanJiKids = exports.GovJiGouService_SaveGovJiGouBanJi = exports.GovJiGouService_GetGovJiGouBanJis = exports.GovJiGouService_SaveGovJiGouRenYuan = exports.GovJiGouService_GetGovJiGouRenYuans = exports.GovJiGouService_SaveGovJiGou = exports.GovJiGouService_GetGovJiGous = exports.GovJiGouService_SaveGovUserKidJieZhong = exports.GovJiGouService_GetGovUserKidJieZhong = exports.GovJiGouService_GetGovUserKidJieZhongSummarys = exports.GovJiGouService_GetGovJiGouHuoDongYuYues = exports.GovJiGouService_SaveGovJiGouHuoDong = exports.GovJiGouService_GetGovJiGouHuoDongs = exports.GovJiGouService_SaveGovJiGoZiXun = exports.GovJiGouService_GetGovJiGoZiXuns = exports.GovJiGouService_SaveGovJiGouDishMenuWeekly = exports.GovJiGouService_GetGovJiGouDishMenuWeeklys = exports.FileService_Uploader = exports.GovScope = exports.SystemVoteItemType = void 0;
exports.GovService_Login = exports.GovService_LoginSendCode = exports.GovService_GetGovYiYuans = exports.GovService_GetGovProvince = exports.GovJiGouService_SaveGovJiGouZhiLiangPingGu = exports.GovJiGouService_GetGovJiGouZhiLiangPingGus = exports.GovJiGouService_SaveGovJiGouKidChenJian = exports.GovJiGouService_GetGovJiGouKidChenJians = exports.GovJiGouService_SaveGovJiGouKidYongYao = exports.GovJiGouService_GetGovJiGouKidYongYaos = exports.GovJiGouService_SaveGovJiGouKidXinLi = void 0;
/** 评估项类型 */
var SystemVoteItemType;
(function (SystemVoteItemType) {
    /** 评分 */
    SystemVoteItemType["SCORE"] = "SCORE";
    /** 单选 */
    SystemVoteItemType["RADIO"] = "RADIO";
    /** 多选 */
    SystemVoteItemType["CHECKBOX"] = "CHECKBOX";
})(SystemVoteItemType || (exports.SystemVoteItemType = SystemVoteItemType = {}));
var GovScope;
(function (GovScope) {
    GovScope["User"] = "User";
    GovScope["JiGou"] = "JiGou";
})(GovScope || (exports.GovScope = GovScope = {}));
var FileService_Uploader = /** @class */ (function () {
    function FileService_Uploader(init) {
        Object.assign(this, init);
    }
    FileService_Uploader.prototype.getUrl = function () { return "api/File/Uploader/{type}"; };
    FileService_Uploader.prototype.getMethod = function () { return 'POST'; };
    FileService_Uploader.prototype.createResponse = function () { return {}; };
    return FileService_Uploader;
}());
exports.FileService_Uploader = FileService_Uploader;
/** 获取指定机构的周餐菜单列表 */
var GovJiGouService_GetGovJiGouDishMenuWeeklys = /** @class */ (function () {
    function GovJiGouService_GetGovJiGouDishMenuWeeklys(init) {
        Object.assign(this, init);
    }
    GovJiGouService_GetGovJiGouDishMenuWeeklys.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_dishmenu_weeklys/{jigou_id}"; };
    GovJiGouService_GetGovJiGouDishMenuWeeklys.prototype.getMethod = function () { return 'GET'; };
    GovJiGouService_GetGovJiGouDishMenuWeeklys.prototype.createResponse = function () { return {}; };
    return GovJiGouService_GetGovJiGouDishMenuWeeklys;
}());
exports.GovJiGouService_GetGovJiGouDishMenuWeeklys = GovJiGouService_GetGovJiGouDishMenuWeeklys;
/** 保存机构周餐菜单 */
var GovJiGouService_SaveGovJiGouDishMenuWeekly = /** @class */ (function () {
    function GovJiGouService_SaveGovJiGouDishMenuWeekly(init) {
        Object.assign(this, init);
    }
    GovJiGouService_SaveGovJiGouDishMenuWeekly.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_dishmenu_weekly"; };
    GovJiGouService_SaveGovJiGouDishMenuWeekly.prototype.getMethod = function () { return 'POST'; };
    GovJiGouService_SaveGovJiGouDishMenuWeekly.prototype.createResponse = function () { return {}; };
    return GovJiGouService_SaveGovJiGouDishMenuWeekly;
}());
exports.GovJiGouService_SaveGovJiGouDishMenuWeekly = GovJiGouService_SaveGovJiGouDishMenuWeekly;
/** 获取托育机构养育资讯表列表 */
var GovJiGouService_GetGovJiGoZiXuns = /** @class */ (function () {
    function GovJiGouService_GetGovJiGoZiXuns(init) {
        Object.assign(this, init);
    }
    GovJiGouService_GetGovJiGoZiXuns.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_zixuns"; };
    GovJiGouService_GetGovJiGoZiXuns.prototype.getMethod = function () { return 'GET'; };
    GovJiGouService_GetGovJiGoZiXuns.prototype.createResponse = function () { return {}; };
    return GovJiGouService_GetGovJiGoZiXuns;
}());
exports.GovJiGouService_GetGovJiGoZiXuns = GovJiGouService_GetGovJiGoZiXuns;
/** 保存托育机构养育资讯 */
var GovJiGouService_SaveGovJiGoZiXun = /** @class */ (function () {
    function GovJiGouService_SaveGovJiGoZiXun(init) {
        Object.assign(this, init);
    }
    GovJiGouService_SaveGovJiGoZiXun.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_zixun"; };
    GovJiGouService_SaveGovJiGoZiXun.prototype.getMethod = function () { return 'POST'; };
    GovJiGouService_SaveGovJiGoZiXun.prototype.createResponse = function () { return {}; };
    return GovJiGouService_SaveGovJiGoZiXun;
}());
exports.GovJiGouService_SaveGovJiGoZiXun = GovJiGouService_SaveGovJiGoZiXun;
/** 获取托育机构养育活动表列表 */
var GovJiGouService_GetGovJiGouHuoDongs = /** @class */ (function () {
    function GovJiGouService_GetGovJiGouHuoDongs(init) {
        Object.assign(this, init);
    }
    GovJiGouService_GetGovJiGouHuoDongs.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_huodongs"; };
    GovJiGouService_GetGovJiGouHuoDongs.prototype.getMethod = function () { return 'GET'; };
    GovJiGouService_GetGovJiGouHuoDongs.prototype.createResponse = function () { return {}; };
    return GovJiGouService_GetGovJiGouHuoDongs;
}());
exports.GovJiGouService_GetGovJiGouHuoDongs = GovJiGouService_GetGovJiGouHuoDongs;
/** 保存托育机构养育活动表 */
var GovJiGouService_SaveGovJiGouHuoDong = /** @class */ (function () {
    function GovJiGouService_SaveGovJiGouHuoDong(init) {
        Object.assign(this, init);
    }
    GovJiGouService_SaveGovJiGouHuoDong.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_huodong"; };
    GovJiGouService_SaveGovJiGouHuoDong.prototype.getMethod = function () { return 'POST'; };
    GovJiGouService_SaveGovJiGouHuoDong.prototype.createResponse = function () { return {}; };
    return GovJiGouService_SaveGovJiGouHuoDong;
}());
exports.GovJiGouService_SaveGovJiGouHuoDong = GovJiGouService_SaveGovJiGouHuoDong;
/** 获取机构活动预约列表 */
var GovJiGouService_GetGovJiGouHuoDongYuYues = /** @class */ (function () {
    function GovJiGouService_GetGovJiGouHuoDongYuYues(init) {
        Object.assign(this, init);
    }
    GovJiGouService_GetGovJiGouHuoDongYuYues.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_huodong_yuyue/{jigou_id}"; };
    GovJiGouService_GetGovJiGouHuoDongYuYues.prototype.getMethod = function () { return 'GET'; };
    GovJiGouService_GetGovJiGouHuoDongYuYues.prototype.createResponse = function () { return {}; };
    return GovJiGouService_GetGovJiGouHuoDongYuYues;
}());
exports.GovJiGouService_GetGovJiGouHuoDongYuYues = GovJiGouService_GetGovJiGouHuoDongYuYues;
/** 获取婴儿接种情况汇总表数据 */
var GovJiGouService_GetGovUserKidJieZhongSummarys = /** @class */ (function () {
    function GovJiGouService_GetGovUserKidJieZhongSummarys(init) {
        Object.assign(this, init);
    }
    GovJiGouService_GetGovUserKidJieZhongSummarys.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_user_kid_jiezhong_summarys"; };
    GovJiGouService_GetGovUserKidJieZhongSummarys.prototype.getMethod = function () { return 'POST'; };
    GovJiGouService_GetGovUserKidJieZhongSummarys.prototype.createResponse = function () { return {}; };
    return GovJiGouService_GetGovUserKidJieZhongSummarys;
}());
exports.GovJiGouService_GetGovUserKidJieZhongSummarys = GovJiGouService_GetGovUserKidJieZhongSummarys;
/** 获取婴儿接种列表 */
var GovJiGouService_GetGovUserKidJieZhong = /** @class */ (function () {
    function GovJiGouService_GetGovUserKidJieZhong(init) {
        Object.assign(this, init);
    }
    GovJiGouService_GetGovUserKidJieZhong.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_user_kid_jiezhong/{ZhengJianHao}"; };
    GovJiGouService_GetGovUserKidJieZhong.prototype.getMethod = function () { return 'GET'; };
    GovJiGouService_GetGovUserKidJieZhong.prototype.createResponse = function () { return {}; };
    return GovJiGouService_GetGovUserKidJieZhong;
}());
exports.GovJiGouService_GetGovUserKidJieZhong = GovJiGouService_GetGovUserKidJieZhong;
/** 保存婴儿接种记录 */
var GovJiGouService_SaveGovUserKidJieZhong = /** @class */ (function () {
    function GovJiGouService_SaveGovUserKidJieZhong(init) {
        Object.assign(this, init);
    }
    GovJiGouService_SaveGovUserKidJieZhong.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_user_kid_jiezhong"; };
    GovJiGouService_SaveGovUserKidJieZhong.prototype.getMethod = function () { return 'POST'; };
    GovJiGouService_SaveGovUserKidJieZhong.prototype.createResponse = function () { return {}; };
    return GovJiGouService_SaveGovUserKidJieZhong;
}());
exports.GovJiGouService_SaveGovUserKidJieZhong = GovJiGouService_SaveGovUserKidJieZhong;
/** 获取我的机构列表 */
var GovJiGouService_GetGovJiGous = /** @class */ (function () {
    function GovJiGouService_GetGovJiGous(init) {
        Object.assign(this, init);
    }
    GovJiGouService_GetGovJiGous.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigous"; };
    GovJiGouService_GetGovJiGous.prototype.getMethod = function () { return 'GET'; };
    GovJiGouService_GetGovJiGous.prototype.createResponse = function () { return {}; };
    return GovJiGouService_GetGovJiGous;
}());
exports.GovJiGouService_GetGovJiGous = GovJiGouService_GetGovJiGous;
/** 保存机构信息 */
var GovJiGouService_SaveGovJiGou = /** @class */ (function () {
    function GovJiGouService_SaveGovJiGou(init) {
        Object.assign(this, init);
    }
    GovJiGouService_SaveGovJiGou.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou"; };
    GovJiGouService_SaveGovJiGou.prototype.getMethod = function () { return 'POST'; };
    GovJiGouService_SaveGovJiGou.prototype.createResponse = function () { return {}; };
    return GovJiGouService_SaveGovJiGou;
}());
exports.GovJiGouService_SaveGovJiGou = GovJiGouService_SaveGovJiGou;
/** 获取指定机构的员工列表 */
var GovJiGouService_GetGovJiGouRenYuans = /** @class */ (function () {
    function GovJiGouService_GetGovJiGouRenYuans(init) {
        Object.assign(this, init);
    }
    GovJiGouService_GetGovJiGouRenYuans.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_renyuans/{jigou_id}"; };
    GovJiGouService_GetGovJiGouRenYuans.prototype.getMethod = function () { return 'GET'; };
    GovJiGouService_GetGovJiGouRenYuans.prototype.createResponse = function () { return {}; };
    return GovJiGouService_GetGovJiGouRenYuans;
}());
exports.GovJiGouService_GetGovJiGouRenYuans = GovJiGouService_GetGovJiGouRenYuans;
/** 保存机构员工 */
var GovJiGouService_SaveGovJiGouRenYuan = /** @class */ (function () {
    function GovJiGouService_SaveGovJiGouRenYuan(init) {
        Object.assign(this, init);
    }
    GovJiGouService_SaveGovJiGouRenYuan.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_renyuan"; };
    GovJiGouService_SaveGovJiGouRenYuan.prototype.getMethod = function () { return 'POST'; };
    GovJiGouService_SaveGovJiGouRenYuan.prototype.createResponse = function () { return {}; };
    return GovJiGouService_SaveGovJiGouRenYuan;
}());
exports.GovJiGouService_SaveGovJiGouRenYuan = GovJiGouService_SaveGovJiGouRenYuan;
/** 获取指定机构的班级列表 */
var GovJiGouService_GetGovJiGouBanJis = /** @class */ (function () {
    function GovJiGouService_GetGovJiGouBanJis(init) {
        Object.assign(this, init);
    }
    GovJiGouService_GetGovJiGouBanJis.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_banjis/{jigou_id}"; };
    GovJiGouService_GetGovJiGouBanJis.prototype.getMethod = function () { return 'GET'; };
    GovJiGouService_GetGovJiGouBanJis.prototype.createResponse = function () { return {}; };
    return GovJiGouService_GetGovJiGouBanJis;
}());
exports.GovJiGouService_GetGovJiGouBanJis = GovJiGouService_GetGovJiGouBanJis;
/** 保存机构的班级 */
var GovJiGouService_SaveGovJiGouBanJi = /** @class */ (function () {
    function GovJiGouService_SaveGovJiGouBanJi(init) {
        Object.assign(this, init);
    }
    GovJiGouService_SaveGovJiGouBanJi.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_banji"; };
    GovJiGouService_SaveGovJiGouBanJi.prototype.getMethod = function () { return 'POST'; };
    GovJiGouService_SaveGovJiGouBanJi.prototype.createResponse = function () { return {}; };
    return GovJiGouService_SaveGovJiGouBanJi;
}());
exports.GovJiGouService_SaveGovJiGouBanJi = GovJiGouService_SaveGovJiGouBanJi;
/** 获取指定班级的学员列表 */
var GovJiGouService_GetGovJiGouBanJiKids = /** @class */ (function () {
    function GovJiGouService_GetGovJiGouBanJiKids(init) {
        Object.assign(this, init);
    }
    GovJiGouService_GetGovJiGouBanJiKids.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_banji_kids/{jigou_id}/{banji_id}"; };
    GovJiGouService_GetGovJiGouBanJiKids.prototype.getMethod = function () { return 'GET'; };
    GovJiGouService_GetGovJiGouBanJiKids.prototype.createResponse = function () { return {}; };
    return GovJiGouService_GetGovJiGouBanJiKids;
}());
exports.GovJiGouService_GetGovJiGouBanJiKids = GovJiGouService_GetGovJiGouBanJiKids;
/** 保存班级学员关系 */
var GovJiGouService_SaveGovJiGouBanJiKid = /** @class */ (function () {
    function GovJiGouService_SaveGovJiGouBanJiKid(init) {
        Object.assign(this, init);
    }
    GovJiGouService_SaveGovJiGouBanJiKid.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_banji_kid/{jigou_id}/{jigou_kid_id}"; };
    GovJiGouService_SaveGovJiGouBanJiKid.prototype.getMethod = function () { return 'POST'; };
    GovJiGouService_SaveGovJiGouBanJiKid.prototype.createResponse = function () { return {}; };
    return GovJiGouService_SaveGovJiGouBanJiKid;
}());
exports.GovJiGouService_SaveGovJiGouBanJiKid = GovJiGouService_SaveGovJiGouBanJiKid;
/** 获取指定机构的签约医院列表 */
var GovJiGouService_GetGovJiGouYiYuans = /** @class */ (function () {
    function GovJiGouService_GetGovJiGouYiYuans(init) {
        Object.assign(this, init);
    }
    GovJiGouService_GetGovJiGouYiYuans.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_yiyuans/{jigou_id}"; };
    GovJiGouService_GetGovJiGouYiYuans.prototype.getMethod = function () { return 'GET'; };
    GovJiGouService_GetGovJiGouYiYuans.prototype.createResponse = function () { return {}; };
    return GovJiGouService_GetGovJiGouYiYuans;
}());
exports.GovJiGouService_GetGovJiGouYiYuans = GovJiGouService_GetGovJiGouYiYuans;
/** 保存机构签约医院 */
var GovJiGouService_SaveGovJiGouYiYuan = /** @class */ (function () {
    function GovJiGouService_SaveGovJiGouYiYuan(init) {
        Object.assign(this, init);
    }
    GovJiGouService_SaveGovJiGouYiYuan.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_yiyuan"; };
    GovJiGouService_SaveGovJiGouYiYuan.prototype.getMethod = function () { return 'POST'; };
    GovJiGouService_SaveGovJiGouYiYuan.prototype.createResponse = function () { return {}; };
    return GovJiGouService_SaveGovJiGouYiYuan;
}());
exports.GovJiGouService_SaveGovJiGouYiYuan = GovJiGouService_SaveGovJiGouYiYuan;
/** 获取机构入托预约列表 */
var GovJiGouService_GetGovJiGouRuTuoYuYues = /** @class */ (function () {
    function GovJiGouService_GetGovJiGouRuTuoYuYues(init) {
        Object.assign(this, init);
    }
    GovJiGouService_GetGovJiGouRuTuoYuYues.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_rutuo_yuyues/{jigou_id}"; };
    GovJiGouService_GetGovJiGouRuTuoYuYues.prototype.getMethod = function () { return 'GET'; };
    GovJiGouService_GetGovJiGouRuTuoYuYues.prototype.createResponse = function () { return {}; };
    return GovJiGouService_GetGovJiGouRuTuoYuYues;
}());
exports.GovJiGouService_GetGovJiGouRuTuoYuYues = GovJiGouService_GetGovJiGouRuTuoYuYues;
/** 保存机构入托预约 */
var GovJiGouService_SaveGovJiGouRuTuoYuYue = /** @class */ (function () {
    function GovJiGouService_SaveGovJiGouRuTuoYuYue(init) {
        Object.assign(this, init);
    }
    GovJiGouService_SaveGovJiGouRuTuoYuYue.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_rutuo_yuyue"; };
    GovJiGouService_SaveGovJiGouRuTuoYuYue.prototype.getMethod = function () { return 'POST'; };
    GovJiGouService_SaveGovJiGouRuTuoYuYue.prototype.createResponse = function () { return {}; };
    return GovJiGouService_SaveGovJiGouRuTuoYuYue;
}());
exports.GovJiGouService_SaveGovJiGouRuTuoYuYue = GovJiGouService_SaveGovJiGouRuTuoYuYue;
/** 获取机构一日流程列表 */
var GovJiGouService_GetGovJiGouMeiRiLiuChengs = /** @class */ (function () {
    function GovJiGouService_GetGovJiGouMeiRiLiuChengs(init) {
        Object.assign(this, init);
    }
    GovJiGouService_GetGovJiGouMeiRiLiuChengs.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_meiri_liuchengs/{jigou_id}"; };
    GovJiGouService_GetGovJiGouMeiRiLiuChengs.prototype.getMethod = function () { return 'GET'; };
    GovJiGouService_GetGovJiGouMeiRiLiuChengs.prototype.createResponse = function () { return {}; };
    return GovJiGouService_GetGovJiGouMeiRiLiuChengs;
}());
exports.GovJiGouService_GetGovJiGouMeiRiLiuChengs = GovJiGouService_GetGovJiGouMeiRiLiuChengs;
/** 保存机构一日流程 */
var GovJiGouService_SaveGovJiGouMeiRiLiuCheng = /** @class */ (function () {
    function GovJiGouService_SaveGovJiGouMeiRiLiuCheng(init) {
        Object.assign(this, init);
    }
    GovJiGouService_SaveGovJiGouMeiRiLiuCheng.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_meiri_liucheng"; };
    GovJiGouService_SaveGovJiGouMeiRiLiuCheng.prototype.getMethod = function () { return 'POST'; };
    GovJiGouService_SaveGovJiGouMeiRiLiuCheng.prototype.createResponse = function () { return {}; };
    return GovJiGouService_SaveGovJiGouMeiRiLiuCheng;
}());
exports.GovJiGouService_SaveGovJiGouMeiRiLiuCheng = GovJiGouService_SaveGovJiGouMeiRiLiuCheng;
/** 获取机构满意度列表 */
var GovJiGouService_GetGovJiGouManYiDus = /** @class */ (function () {
    function GovJiGouService_GetGovJiGouManYiDus(init) {
        Object.assign(this, init);
    }
    GovJiGouService_GetGovJiGouManYiDus.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_manyidus/{jigou_id}"; };
    GovJiGouService_GetGovJiGouManYiDus.prototype.getMethod = function () { return 'GET'; };
    GovJiGouService_GetGovJiGouManYiDus.prototype.createResponse = function () { return {}; };
    return GovJiGouService_GetGovJiGouManYiDus;
}());
exports.GovJiGouService_GetGovJiGouManYiDus = GovJiGouService_GetGovJiGouManYiDus;
/** 获取指定机构学员的考勤统计 */
var GovJiGouService_GetGovJiGouKaoQinKidSummary = /** @class */ (function () {
    function GovJiGouService_GetGovJiGouKaoQinKidSummary(init) {
        Object.assign(this, init);
    }
    GovJiGouService_GetGovJiGouKaoQinKidSummary.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_kaoqin_kid_summary/{jigou_id}"; };
    GovJiGouService_GetGovJiGouKaoQinKidSummary.prototype.getMethod = function () { return 'GET'; };
    GovJiGouService_GetGovJiGouKaoQinKidSummary.prototype.createResponse = function () { return {}; };
    return GovJiGouService_GetGovJiGouKaoQinKidSummary;
}());
exports.GovJiGouService_GetGovJiGouKaoQinKidSummary = GovJiGouService_GetGovJiGouKaoQinKidSummary;
/** 获取指定机构班级学员的考勤 */
var GovJiGouService_GetGovJiGouKaoQinKid = /** @class */ (function () {
    function GovJiGouService_GetGovJiGouKaoQinKid(init) {
        Object.assign(this, init);
    }
    GovJiGouService_GetGovJiGouKaoQinKid.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_kaoqin_kid/{jigou_id}/{banji_id}"; };
    GovJiGouService_GetGovJiGouKaoQinKid.prototype.getMethod = function () { return 'GET'; };
    GovJiGouService_GetGovJiGouKaoQinKid.prototype.createResponse = function () { return {}; };
    return GovJiGouService_GetGovJiGouKaoQinKid;
}());
exports.GovJiGouService_GetGovJiGouKaoQinKid = GovJiGouService_GetGovJiGouKaoQinKid;
/** 获取指定机构学员的考勤记录列表 */
var GovJiGouService_GetGovJiGouKaoQinKids = /** @class */ (function () {
    function GovJiGouService_GetGovJiGouKaoQinKids(init) {
        Object.assign(this, init);
    }
    GovJiGouService_GetGovJiGouKaoQinKids.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_kaoqin_kids/{jigou_id}"; };
    GovJiGouService_GetGovJiGouKaoQinKids.prototype.getMethod = function () { return 'GET'; };
    GovJiGouService_GetGovJiGouKaoQinKids.prototype.createResponse = function () { return {}; };
    return GovJiGouService_GetGovJiGouKaoQinKids;
}());
exports.GovJiGouService_GetGovJiGouKaoQinKids = GovJiGouService_GetGovJiGouKaoQinKids;
/** 保存机构学员签到记录 */
var GovJiGouService_SaveGovJiGouKaoQinKid = /** @class */ (function () {
    function GovJiGouService_SaveGovJiGouKaoQinKid(init) {
        Object.assign(this, init);
    }
    GovJiGouService_SaveGovJiGouKaoQinKid.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_kaoqin_kid/{isIn}"; };
    GovJiGouService_SaveGovJiGouKaoQinKid.prototype.getMethod = function () { return 'POST'; };
    GovJiGouService_SaveGovJiGouKaoQinKid.prototype.createResponse = function () { return {}; };
    return GovJiGouService_SaveGovJiGouKaoQinKid;
}());
exports.GovJiGouService_SaveGovJiGouKaoQinKid = GovJiGouService_SaveGovJiGouKaoQinKid;
/** 获取指定机构员工的考勤记录列表 */
var GovJiGouService_GetGovJiGouKaoQinRenYuans = /** @class */ (function () {
    function GovJiGouService_GetGovJiGouKaoQinRenYuans(init) {
        Object.assign(this, init);
    }
    GovJiGouService_GetGovJiGouKaoQinRenYuans.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_kaoqin_renyuans/{jigou_id}"; };
    GovJiGouService_GetGovJiGouKaoQinRenYuans.prototype.getMethod = function () { return 'GET'; };
    GovJiGouService_GetGovJiGouKaoQinRenYuans.prototype.createResponse = function () { return {}; };
    return GovJiGouService_GetGovJiGouKaoQinRenYuans;
}());
exports.GovJiGouService_GetGovJiGouKaoQinRenYuans = GovJiGouService_GetGovJiGouKaoQinRenYuans;
/** 保存机构员工签到记录 */
var GovJiGouService_SaveGovJiGouKaoQinRenYuan = /** @class */ (function () {
    function GovJiGouService_SaveGovJiGouKaoQinRenYuan(init) {
        Object.assign(this, init);
    }
    GovJiGouService_SaveGovJiGouKaoQinRenYuan.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_kaoqin_renyuan/{isIn}"; };
    GovJiGouService_SaveGovJiGouKaoQinRenYuan.prototype.getMethod = function () { return 'POST'; };
    GovJiGouService_SaveGovJiGouKaoQinRenYuan.prototype.createResponse = function () { return {}; };
    return GovJiGouService_SaveGovJiGouKaoQinRenYuan;
}());
exports.GovJiGouService_SaveGovJiGouKaoQinRenYuan = GovJiGouService_SaveGovJiGouKaoQinRenYuan;
/** 获取指定机构请假记录列表 */
var GovJiGouService_GetGovJiGouKaoQinQingJias = /** @class */ (function () {
    function GovJiGouService_GetGovJiGouKaoQinQingJias(init) {
        Object.assign(this, init);
    }
    GovJiGouService_GetGovJiGouKaoQinQingJias.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_kaoqin_qingjia/{jigou_id}"; };
    GovJiGouService_GetGovJiGouKaoQinQingJias.prototype.getMethod = function () { return 'GET'; };
    GovJiGouService_GetGovJiGouKaoQinQingJias.prototype.createResponse = function () { return {}; };
    return GovJiGouService_GetGovJiGouKaoQinQingJias;
}());
exports.GovJiGouService_GetGovJiGouKaoQinQingJias = GovJiGouService_GetGovJiGouKaoQinQingJias;
/** 保存机构请假记录 */
var GovJiGouService_SaveGovJiGouKaoQinQingJia = /** @class */ (function () {
    function GovJiGouService_SaveGovJiGouKaoQinQingJia(init) {
        Object.assign(this, init);
    }
    GovJiGouService_SaveGovJiGouKaoQinQingJia.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_kaoqin_qingjia"; };
    GovJiGouService_SaveGovJiGouKaoQinQingJia.prototype.getMethod = function () { return 'POST'; };
    GovJiGouService_SaveGovJiGouKaoQinQingJia.prototype.createResponse = function () { return {}; };
    return GovJiGouService_SaveGovJiGouKaoQinQingJia;
}());
exports.GovJiGouService_SaveGovJiGouKaoQinQingJia = GovJiGouService_SaveGovJiGouKaoQinQingJia;
/** 获取指定机构的学员列表 */
var GovJiGouService_GetGovJiGouKids = /** @class */ (function () {
    function GovJiGouService_GetGovJiGouKids(init) {
        Object.assign(this, init);
    }
    GovJiGouService_GetGovJiGouKids.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_kids/{jigou_id}"; };
    GovJiGouService_GetGovJiGouKids.prototype.getMethod = function () { return 'GET'; };
    GovJiGouService_GetGovJiGouKids.prototype.createResponse = function () { return {}; };
    return GovJiGouService_GetGovJiGouKids;
}());
exports.GovJiGouService_GetGovJiGouKids = GovJiGouService_GetGovJiGouKids;
/** 保存机构学员信息 */
var GovJiGouService_SaveGovJiGouKid = /** @class */ (function () {
    function GovJiGouService_SaveGovJiGouKid(init) {
        Object.assign(this, init);
    }
    GovJiGouService_SaveGovJiGouKid.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_kid"; };
    GovJiGouService_SaveGovJiGouKid.prototype.getMethod = function () { return 'POST'; };
    GovJiGouService_SaveGovJiGouKid.prototype.createResponse = function () { return {}; };
    return GovJiGouService_SaveGovJiGouKid;
}());
exports.GovJiGouService_SaveGovJiGouKid = GovJiGouService_SaveGovJiGouKid;
/** 获取指定机构的学员汇总信息 */
var GovJiGouService_GetGovJiGouKidSummary = /** @class */ (function () {
    function GovJiGouService_GetGovJiGouKidSummary(init) {
        Object.assign(this, init);
    }
    GovJiGouService_GetGovJiGouKidSummary.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_kid_summary/{jigou_id}"; };
    GovJiGouService_GetGovJiGouKidSummary.prototype.getMethod = function () { return 'GET'; };
    GovJiGouService_GetGovJiGouKidSummary.prototype.createResponse = function () { return {}; };
    return GovJiGouService_GetGovJiGouKidSummary;
}());
exports.GovJiGouService_GetGovJiGouKidSummary = GovJiGouService_GetGovJiGouKidSummary;
/** 获取指定机构学员的门诊记录列表 */
var GovJiGouService_GetGovJiGouKidMenZhens = /** @class */ (function () {
    function GovJiGouService_GetGovJiGouKidMenZhens(init) {
        Object.assign(this, init);
    }
    GovJiGouService_GetGovJiGouKidMenZhens.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_kid_menzhens/{jigou_id}"; };
    GovJiGouService_GetGovJiGouKidMenZhens.prototype.getMethod = function () { return 'GET'; };
    GovJiGouService_GetGovJiGouKidMenZhens.prototype.createResponse = function () { return {}; };
    return GovJiGouService_GetGovJiGouKidMenZhens;
}());
exports.GovJiGouService_GetGovJiGouKidMenZhens = GovJiGouService_GetGovJiGouKidMenZhens;
/** 保存机构学员的门诊记录 */
var GovJiGouService_SaveGovJiGouKidMenZhen = /** @class */ (function () {
    function GovJiGouService_SaveGovJiGouKidMenZhen(init) {
        Object.assign(this, init);
    }
    GovJiGouService_SaveGovJiGouKidMenZhen.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_kid_menzhen"; };
    GovJiGouService_SaveGovJiGouKidMenZhen.prototype.getMethod = function () { return 'POST'; };
    GovJiGouService_SaveGovJiGouKidMenZhen.prototype.createResponse = function () { return {}; };
    return GovJiGouService_SaveGovJiGouKidMenZhen;
}());
exports.GovJiGouService_SaveGovJiGouKidMenZhen = GovJiGouService_SaveGovJiGouKidMenZhen;
/** 获取指定机构学员的体测列表 */
var GovJiGouService_GetGovJiGouKidTiCes = /** @class */ (function () {
    function GovJiGouService_GetGovJiGouKidTiCes(init) {
        Object.assign(this, init);
    }
    GovJiGouService_GetGovJiGouKidTiCes.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_kid_tices/{jigou_id}"; };
    GovJiGouService_GetGovJiGouKidTiCes.prototype.getMethod = function () { return 'GET'; };
    GovJiGouService_GetGovJiGouKidTiCes.prototype.createResponse = function () { return {}; };
    return GovJiGouService_GetGovJiGouKidTiCes;
}());
exports.GovJiGouService_GetGovJiGouKidTiCes = GovJiGouService_GetGovJiGouKidTiCes;
/** 保存机构学员的体测记录 */
var GovJiGouService_SaveGovJiGouKidTiCe = /** @class */ (function () {
    function GovJiGouService_SaveGovJiGouKidTiCe(init) {
        Object.assign(this, init);
    }
    GovJiGouService_SaveGovJiGouKidTiCe.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_kid_tice"; };
    GovJiGouService_SaveGovJiGouKidTiCe.prototype.getMethod = function () { return 'POST'; };
    GovJiGouService_SaveGovJiGouKidTiCe.prototype.createResponse = function () { return {}; };
    return GovJiGouService_SaveGovJiGouKidTiCe;
}());
exports.GovJiGouService_SaveGovJiGouKidTiCe = GovJiGouService_SaveGovJiGouKidTiCe;
/** 获取指定机构学员的超重及肥胖儿童专案管理记录列表 */
var GovJiGouService_GetGovJiGouKidFeiPangs = /** @class */ (function () {
    function GovJiGouService_GetGovJiGouKidFeiPangs(init) {
        Object.assign(this, init);
    }
    GovJiGouService_GetGovJiGouKidFeiPangs.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_kid_feipangs/{jigou_id}"; };
    GovJiGouService_GetGovJiGouKidFeiPangs.prototype.getMethod = function () { return 'GET'; };
    GovJiGouService_GetGovJiGouKidFeiPangs.prototype.createResponse = function () { return {}; };
    return GovJiGouService_GetGovJiGouKidFeiPangs;
}());
exports.GovJiGouService_GetGovJiGouKidFeiPangs = GovJiGouService_GetGovJiGouKidFeiPangs;
/** 保存机构学员的超重及肥胖儿童专案管理记录 */
var GovJiGouService_SaveGovJiGouKidFeiPang = /** @class */ (function () {
    function GovJiGouService_SaveGovJiGouKidFeiPang(init) {
        Object.assign(this, init);
    }
    GovJiGouService_SaveGovJiGouKidFeiPang.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_kid_feipang"; };
    GovJiGouService_SaveGovJiGouKidFeiPang.prototype.getMethod = function () { return 'POST'; };
    GovJiGouService_SaveGovJiGouKidFeiPang.prototype.createResponse = function () { return {}; };
    return GovJiGouService_SaveGovJiGouKidFeiPang;
}());
exports.GovJiGouService_SaveGovJiGouKidFeiPang = GovJiGouService_SaveGovJiGouKidFeiPang;
/** 获取指定机构学员的营养不良儿童专案管理记录列表 */
var GovJiGouService_GetGovJiGouKidYingYangs = /** @class */ (function () {
    function GovJiGouService_GetGovJiGouKidYingYangs(init) {
        Object.assign(this, init);
    }
    GovJiGouService_GetGovJiGouKidYingYangs.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_kid_yingyangs/{jigou_id}"; };
    GovJiGouService_GetGovJiGouKidYingYangs.prototype.getMethod = function () { return 'GET'; };
    GovJiGouService_GetGovJiGouKidYingYangs.prototype.createResponse = function () { return {}; };
    return GovJiGouService_GetGovJiGouKidYingYangs;
}());
exports.GovJiGouService_GetGovJiGouKidYingYangs = GovJiGouService_GetGovJiGouKidYingYangs;
/** 保存机构学员的营养不良儿童专案管理记录 */
var GovJiGouService_SaveGovJiGouKidYingYang = /** @class */ (function () {
    function GovJiGouService_SaveGovJiGouKidYingYang(init) {
        Object.assign(this, init);
    }
    GovJiGouService_SaveGovJiGouKidYingYang.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_kid_yingyang"; };
    GovJiGouService_SaveGovJiGouKidYingYang.prototype.getMethod = function () { return 'POST'; };
    GovJiGouService_SaveGovJiGouKidYingYang.prototype.createResponse = function () { return {}; };
    return GovJiGouService_SaveGovJiGouKidYingYang;
}());
exports.GovJiGouService_SaveGovJiGouKidYingYang = GovJiGouService_SaveGovJiGouKidYingYang;
/** 获取指定机构学员的缺铁性贫血儿童专案管理记录列表 */
var GovJiGouService_GetGovJiGouKidPinXies = /** @class */ (function () {
    function GovJiGouService_GetGovJiGouKidPinXies(init) {
        Object.assign(this, init);
    }
    GovJiGouService_GetGovJiGouKidPinXies.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_kid_pinxies/{jigou_id}"; };
    GovJiGouService_GetGovJiGouKidPinXies.prototype.getMethod = function () { return 'GET'; };
    GovJiGouService_GetGovJiGouKidPinXies.prototype.createResponse = function () { return {}; };
    return GovJiGouService_GetGovJiGouKidPinXies;
}());
exports.GovJiGouService_GetGovJiGouKidPinXies = GovJiGouService_GetGovJiGouKidPinXies;
/** 保存机构学员的缺铁性贫血儿童专案管理记录 */
var GovJiGouService_SaveGovJiGouKidPinXie = /** @class */ (function () {
    function GovJiGouService_SaveGovJiGouKidPinXie(init) {
        Object.assign(this, init);
    }
    GovJiGouService_SaveGovJiGouKidPinXie.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_kid_pinxie"; };
    GovJiGouService_SaveGovJiGouKidPinXie.prototype.getMethod = function () { return 'POST'; };
    GovJiGouService_SaveGovJiGouKidPinXie.prototype.createResponse = function () { return {}; };
    return GovJiGouService_SaveGovJiGouKidPinXie;
}());
exports.GovJiGouService_SaveGovJiGouKidPinXie = GovJiGouService_SaveGovJiGouKidPinXie;
/** 获取指定机构学员的心理行为发育异常儿童专案管理记录列表 */
var GovJiGouService_GetGovJiGouKidXinLis = /** @class */ (function () {
    function GovJiGouService_GetGovJiGouKidXinLis(init) {
        Object.assign(this, init);
    }
    GovJiGouService_GetGovJiGouKidXinLis.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_kid_xinlis/{jigou_id}"; };
    GovJiGouService_GetGovJiGouKidXinLis.prototype.getMethod = function () { return 'GET'; };
    GovJiGouService_GetGovJiGouKidXinLis.prototype.createResponse = function () { return {}; };
    return GovJiGouService_GetGovJiGouKidXinLis;
}());
exports.GovJiGouService_GetGovJiGouKidXinLis = GovJiGouService_GetGovJiGouKidXinLis;
/** 保存机构学员的心理行为发育异常儿童专案管理记录 */
var GovJiGouService_SaveGovJiGouKidXinLi = /** @class */ (function () {
    function GovJiGouService_SaveGovJiGouKidXinLi(init) {
        Object.assign(this, init);
    }
    GovJiGouService_SaveGovJiGouKidXinLi.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_kid_xinli"; };
    GovJiGouService_SaveGovJiGouKidXinLi.prototype.getMethod = function () { return 'POST'; };
    GovJiGouService_SaveGovJiGouKidXinLi.prototype.createResponse = function () { return {}; };
    return GovJiGouService_SaveGovJiGouKidXinLi;
}());
exports.GovJiGouService_SaveGovJiGouKidXinLi = GovJiGouService_SaveGovJiGouKidXinLi;
/** 获取指定机构学员的用药申请列表 */
var GovJiGouService_GetGovJiGouKidYongYaos = /** @class */ (function () {
    function GovJiGouService_GetGovJiGouKidYongYaos(init) {
        Object.assign(this, init);
    }
    GovJiGouService_GetGovJiGouKidYongYaos.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_kid_yongyaos/{jigou_id}"; };
    GovJiGouService_GetGovJiGouKidYongYaos.prototype.getMethod = function () { return 'GET'; };
    GovJiGouService_GetGovJiGouKidYongYaos.prototype.createResponse = function () { return {}; };
    return GovJiGouService_GetGovJiGouKidYongYaos;
}());
exports.GovJiGouService_GetGovJiGouKidYongYaos = GovJiGouService_GetGovJiGouKidYongYaos;
/** 保存机构学员的用药申请 */
var GovJiGouService_SaveGovJiGouKidYongYao = /** @class */ (function () {
    function GovJiGouService_SaveGovJiGouKidYongYao(init) {
        Object.assign(this, init);
    }
    GovJiGouService_SaveGovJiGouKidYongYao.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_kid_yongyao"; };
    GovJiGouService_SaveGovJiGouKidYongYao.prototype.getMethod = function () { return 'POST'; };
    GovJiGouService_SaveGovJiGouKidYongYao.prototype.createResponse = function () { return {}; };
    return GovJiGouService_SaveGovJiGouKidYongYao;
}());
exports.GovJiGouService_SaveGovJiGouKidYongYao = GovJiGouService_SaveGovJiGouKidYongYao;
/** 获取指定机构学员的晨检记录列表 */
var GovJiGouService_GetGovJiGouKidChenJians = /** @class */ (function () {
    function GovJiGouService_GetGovJiGouKidChenJians(init) {
        Object.assign(this, init);
    }
    GovJiGouService_GetGovJiGouKidChenJians.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_kid_chenjians/{jigou_id}"; };
    GovJiGouService_GetGovJiGouKidChenJians.prototype.getMethod = function () { return 'GET'; };
    GovJiGouService_GetGovJiGouKidChenJians.prototype.createResponse = function () { return {}; };
    return GovJiGouService_GetGovJiGouKidChenJians;
}());
exports.GovJiGouService_GetGovJiGouKidChenJians = GovJiGouService_GetGovJiGouKidChenJians;
/** 保存机构学员的晨检记录 */
var GovJiGouService_SaveGovJiGouKidChenJian = /** @class */ (function () {
    function GovJiGouService_SaveGovJiGouKidChenJian(init) {
        Object.assign(this, init);
    }
    GovJiGouService_SaveGovJiGouKidChenJian.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_kid_chenjian"; };
    GovJiGouService_SaveGovJiGouKidChenJian.prototype.getMethod = function () { return 'POST'; };
    GovJiGouService_SaveGovJiGouKidChenJian.prototype.createResponse = function () { return {}; };
    return GovJiGouService_SaveGovJiGouKidChenJian;
}());
exports.GovJiGouService_SaveGovJiGouKidChenJian = GovJiGouService_SaveGovJiGouKidChenJian;
/** 获取托育机构质量评估表列表 */
var GovJiGouService_GetGovJiGouZhiLiangPingGus = /** @class */ (function () {
    function GovJiGouService_GetGovJiGouZhiLiangPingGus(init) {
        Object.assign(this, init);
    }
    GovJiGouService_GetGovJiGouZhiLiangPingGus.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_zhiliang_pinggus/{jigou_id}"; };
    GovJiGouService_GetGovJiGouZhiLiangPingGus.prototype.getMethod = function () { return 'GET'; };
    GovJiGouService_GetGovJiGouZhiLiangPingGus.prototype.createResponse = function () { return {}; };
    return GovJiGouService_GetGovJiGouZhiLiangPingGus;
}());
exports.GovJiGouService_GetGovJiGouZhiLiangPingGus = GovJiGouService_GetGovJiGouZhiLiangPingGus;
/** 保存托育机构质量评估表 */
var GovJiGouService_SaveGovJiGouZhiLiangPingGu = /** @class */ (function () {
    function GovJiGouService_SaveGovJiGouZhiLiangPingGu(init) {
        Object.assign(this, init);
    }
    GovJiGouService_SaveGovJiGouZhiLiangPingGu.prototype.getUrl = function () { return "api/subdev/GovJiGouService/gov_jigou_zhiliang_pinggu"; };
    GovJiGouService_SaveGovJiGouZhiLiangPingGu.prototype.getMethod = function () { return 'POST'; };
    GovJiGouService_SaveGovJiGouZhiLiangPingGu.prototype.createResponse = function () { return {}; };
    return GovJiGouService_SaveGovJiGouZhiLiangPingGu;
}());
exports.GovJiGouService_SaveGovJiGouZhiLiangPingGu = GovJiGouService_SaveGovJiGouZhiLiangPingGu;
/** 获取行政区划 */
var GovService_GetGovProvince = /** @class */ (function () {
    function GovService_GetGovProvince(init) {
        Object.assign(this, init);
    }
    GovService_GetGovProvince.prototype.getUrl = function () { return "api/subdev/GovService/gov_provinces/{parent_id}"; };
    GovService_GetGovProvince.prototype.getMethod = function () { return 'GET'; };
    GovService_GetGovProvince.prototype.createResponse = function () { return {}; };
    return GovService_GetGovProvince;
}());
exports.GovService_GetGovProvince = GovService_GetGovProvince;
/** 列取医院 */
var GovService_GetGovYiYuans = /** @class */ (function () {
    function GovService_GetGovYiYuans(init) {
        Object.assign(this, init);
    }
    GovService_GetGovYiYuans.prototype.getUrl = function () { return "api/subdev/GovService/gov_yiyuans"; };
    GovService_GetGovYiYuans.prototype.getMethod = function () { return 'GET'; };
    GovService_GetGovYiYuans.prototype.createResponse = function () { return {}; };
    return GovService_GetGovYiYuans;
}());
exports.GovService_GetGovYiYuans = GovService_GetGovYiYuans;
/** 政务用户发送短信验证码接口 */
var GovService_LoginSendCode = /** @class */ (function () {
    function GovService_LoginSendCode(init) {
        Object.assign(this, init);
    }
    GovService_LoginSendCode.prototype.getUrl = function () { return "api/subdev/GovService/login/sendcode"; };
    GovService_LoginSendCode.prototype.getMethod = function () { return 'POST'; };
    GovService_LoginSendCode.prototype.createResponse = function () { return {}; };
    return GovService_LoginSendCode;
}());
exports.GovService_LoginSendCode = GovService_LoginSendCode;
/** 政务用户登录接口 */
var GovService_Login = /** @class */ (function () {
    function GovService_Login(init) {
        Object.assign(this, init);
    }
    GovService_Login.prototype.getUrl = function () { return "api/subdev/GovService/login"; };
    GovService_Login.prototype.getMethod = function () { return 'POST'; };
    GovService_Login.prototype.createResponse = function () { return {}; };
    return GovService_Login;
}());
exports.GovService_Login = GovService_Login;
