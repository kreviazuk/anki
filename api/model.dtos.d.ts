export interface IReturn<T> {
    pageInput?: PageInputBase;
    body?: any;
    getUrl: () => string;
    getMethod: () => string;
    createResponse: () => T;
}
/** 评估项类型 */
export declare enum SystemVoteItemType {
    /** 评分 */
    SCORE = "SCORE",
    /** 单选 */
    RADIO = "RADIO",
    /** 多选 */
    CHECKBOX = "CHECKBOX"
}
export declare enum GovScope {
    User = "User",
    JiGou = "JiGou"
}
export interface ChunkModel {
    chunkNumber?: number;
    currentChunkSize?: number;
    chunkSize?: number;
    totalSize?: number;
    identifier?: string;
    fileName?: string;
    relativePath?: string;
    totalChunks?: number;
    type?: string;
    extension?: string;
    fileType?: string;
    parentId?: string;
    fileSize?: string;
    isUpdateName?: boolean;
    file?: IFormFile;
    pathType?: string;
    sortRule?: string;
    timeFormat?: string;
    folder?: string;
    slImgName?: string;
}
export interface IFormFile {
    ContentType?: string;
    ContentDisposition?: string;
    Headers?: {
        [key: string]: string[];
    };
    Length?: number;
    Name?: string;
    FileName?: string;
}
export interface FileControlsModel {
    name?: string;
    fileId?: string;
    url?: string;
    fileSize?: number | null;
    fileExtension?: string;
    fileName?: string;
    thumbUrl?: string;
}
export interface PageInputBase extends KeywordInput {
    queryJson?: string;
    currentPage?: number;
    pageSize?: number;
    sidx?: string;
    sort?: string;
    menuId?: string;
    flowId?: string;
}
export interface KeywordInput {
    keyword?: string;
}
/** 政务机构托育机构质量评估表 */
export interface GovJiGouZhiLiangPingGu extends EntityBase {
    /** 机构Id */
    f_jigou_id?: string;
    /** 评估日期 */
    PingGu_RiQi?: number | string | null;
    /** 评估标题 */
    Title?: string;
    /** 评估项 */
    VoteItems?: SystemVoteItem[];
    /** 评分 */
    Score?: number | null;
    /** 附件 */
    FuJian?: FileControlsModel[];
}
export interface EntityBase {
    F_Id?: string;
    f_creator_time?: number | string | null;
    TenantId?: string;
    /** 删除标志 */
    f_delete_mark?: number | null;
    /** 删除时间 */
    f_delete_time?: number | string | null;
    /** 删除用户 */
    f_delete_user_id?: string;
}
/** 评估项 */
export interface SystemVoteItem {
    /** 评估类别 */
    Catalog?: string;
    /** 评估子类别 */
    SubCatalog?: string;
    /** 评估次级类别 */
    MinorCatalog?: string;
    /** 评估标题 */
    Title?: string;
    /** 如何评估 */
    Summary?: string;
    /** 评估项类型 */
    ValueType?: SystemVoteItemType;
    /** 单选、多选值 */
    Options?: SystemVoteOption[];
}
/** 选项值 */
export interface SystemVoteOption {
    /** 选项名称 */
    Label?: string;
    /** 选项最大分值 */
    MaxScore?: number | null;
    /** 实际获得分值 */
    Score?: number | null;
    /** 评分时是否需要附件 */
    NeedAttachment?: boolean;
    /** 评分附件 */
    Attachment?: FileControlsModel[];
    /** 评分是否选中 */
    IsSelected?: boolean | null;
}
export interface IdResponse extends BaseResponse {
    /** 实体唯一Id */
    Id?: string;
}
export interface BaseResponse {
    Code?: number;
    Message?: string;
}
export interface GovListResponse<T> extends BaseResponse {
    /** 总记录条数 */
    Total?: number | null;
    /** 数据列表 */
    Data?: T[];
    GovJiGous?: {
        [key: string]: GovJiGou;
    };
    RenYuans?: {
        [key: string]: GovJiGouRenYuan;
    };
    JiGouBanJis?: {
        [key: string]: GovJiGouBanJi;
    };
    JiGouKids?: {
        [key: string]: GovJiGouKid;
    };
    YiYuans?: {
        [key: string]: GovYiYuan;
    };
}
/** 政务医疗机构表 */
export interface GovYiYuan extends EntityBase {
    /** 医院名称 */
    YiYuan_MingCheng?: string;
    /** 机构地址 */
    DiZhi?: string;
    /** 简介 */
    JianJie?: string;
}
/** 政务机构学员表 */
export interface GovJiGouKid extends EntityBase {
    /** 机构Id */
    f_jigou_id?: string;
    /** 婴儿Id */
    f_kid_id?: string;
    /** 姓名 */
    XingMing?: string;
    /** 出生日期 */
    ChuShengRiQi?: number | string | null;
    /** 性别 */
    XingBie?: string;
    /** 证件类型 */
    ZhengJian_LeiXing?: string;
    /** 证件号码 */
    ZhengJianHao?: string;
    /** 幼儿人脸照片 */
    RenLian_ZhaoPian?: FileControlsModel;
    /** 监护人1 */
    JianHuRen1?: GovJiGouKidContact;
    /** 监护人2 */
    JianHuRen2?: GovJiGouKidContact;
    /** 代理人1 */
    DaiLiRen1?: GovJiGouKidContact;
    /** 代理人2 */
    DaiLiRen2?: GovJiGouKidContact;
    /** 备注 */
    BeiZhu?: string;
    /** 入托时间 */
    RuTuo_ShiJian?: number | string | null;
}
export interface GovJiGouKidContact {
    /** 角色 */
    JueSe?: string;
    /** 姓名 */
    XingMing?: string;
    /** 证件类型 */
    ZhengJian_LeiXing?: string;
    /** 证件号码 */
    ZhengJianHao?: string;
    /** 电话号码 */
    PhoneNumber?: string;
}
/** 政务机构班级表 */
export interface GovJiGouBanJi extends EntityBase {
    /** 机构Id */
    f_jigou_id?: string;
    /** 班级名称 */
    BanJi_MingCheng?: string;
    /** 开班时间 */
    KaiBan_ShiJian?: number | string | null;
    /** 班级容量 */
    BanJi_RongLiang?: number;
    /** 班级类型 */
    BanJi_LeiXing?: string;
    /** 班级学员 */
    BanJi_Kid?: GovJiGouKid[];
    /** 班级人员 */
    BanJi_RenYuan?: GovJiGouBanJiRenYuan[];
}
/** 政务机构班级员工表 */
export interface GovJiGouBanJiRenYuan extends EntityBase {
    /** 机构Id */
    f_jigou_id?: string;
    /** 班级Id */
    f_banji_id?: string;
    /** 人员Id */
    f_renyuan_id?: string;
    /** 职位 */
    ZhiWei?: string;
}
/** 政务机构人员表 */
export interface GovJiGouRenYuan extends EntityBase {
    /** 机构Id */
    f_jigou_id?: string;
    /** 员工姓名 */
    XingMing?: string;
    /** 性别 */
    XingBie?: string;
    /** 人脸照片 */
    RenLian_ZhaoPian?: FileControlsModel;
    /** 手机号 */
    PhoneNumber?: string;
    /** 身份证号 */
    ZhengJianHao?: string;
    /** 学历 */
    XueLi?: string;
    /** 在职状态 在职/离职 */
    ZaiZhi_ZhuangTai?: string;
    /** 人员性质 */
    RenYuan_XingZhi?: string;
    /** 资质证书 */
    ZiZhi_ZhengShu?: ZiZhiZhengShu[];
    /** 备注 */
    BeiZhu?: string;
    /** 排序码 */
    F_SortCode?: number | null;
}
/** 证书信息 */
export interface ZiZhiZhengShu {
    /** 证书名称 */
    MingCheng?: string;
    /** 证书编号 */
    BianHao?: string;
    /** 获得日期 */
    HuoDe_RiQi?: number | string | null;
    /** 证书图片 */
    TuPian?: FileControlsModel[];
}
/** 政务机构表 */
export interface GovJiGou extends EntityBase {
    /** 机构名称 */
    JiGou_MingCheng?: string;
    /** 机构介绍 */
    JiGou_JieShao?: string;
    /** 社会信用代码 */
    SheHui_XinYong_DaiMa?: string;
    /** 法人姓名 */
    FaRen_XingMing?: string;
    /** 法人证件号 */
    FaRen_ZhengJianHao?: string;
    /** 机构负责人 */
    FuZeRen?: string;
    /** 机构电话 */
    DianHua?: string;
    /** 机构成立时间 */
    ChengLi_ShiJian?: number | string | null;
    /** 机构分类 */
    JiGou_FenLei?: string;
    /** 托育机构服务类型 */
    FuWu_LeiXing?: string;
    /** 单位承办 */
    DanWei_ChengBan?: string;
    /** 事业单位 */
    ShiYe_DanWei?: string;
    /** 场所性质 */
    ChangSuo_XingZhi?: string;
    /** 机构登记部门 */
    DengJi_BuMen?: string;
    /** 机构备案情况 */
    BeiAn_QingKuang?: string;
    /** 服务形式 */
    FuWu_XingShi?: string[];
    /** 机构图片 */
    TuPian?: FileControlsModel[];
    /** 街道代码 */
    JieDao_DaiMa?: string[];
    /** 机构地址 */
    DiZhi?: string;
    /** 地图选点 */
    MapAddress?: MapAddress;
    /** 距离（米） */
    Distance?: number | null;
    /** VR列表 */
    VRItems?: VRItem[];
    /** 机构建筑总面积 */
    JianZhu_MianJi?: string;
    /** 自有户外活动场地面积 */
    HuWai_MianJi?: number | null;
    /** 婴幼儿生活用房面积 */
    ShengHuo_MianJi?: number | null;
    /** 机构婴幼儿生活用房所在楼层 */
    ShengHuo_LouCeng?: string;
    /** 全职从业人员数 */
    QuanZhi_RenShu?: number | null;
    /** 保育人员数 */
    BaoYu_RenShu?: number | null;
    /** 保安人员数 */
    BaoAn_RenShu?: number | null;
    /** 托位总数 */
    TuoWei_ZongShu?: number | null;
    /** 托位剩余数 */
    TuoWei_ShengYuShu?: number | null;
    /** 3岁以下婴幼儿入托数 */
    YingYouEr_RuTuoShu?: number | null;
    /** 3岁以下普惠入托数 */
    PuHui_RuTuoShu?: number | null;
    /** 全日托保育费 */
    QuanRi_BaoYuFei?: number | null;
    /** 半日托保育费 */
    BanRi_BaoYuFei?: number | null;
    /** 计时托保育费 */
    JiShi_BaoYuFei?: number | null;
    /** 临时托保育费 */
    LinShi_BaoYuFei?: number | null;
    /** 排序码 */
    F_SortCode?: number | null;
}
/** VR */
export interface VRItem {
    /** 名称 */
    Name?: string;
    /** VR链接地址 */
    Url?: string;
}
/** 地图选点 */
export interface MapAddress {
    /** 省份名称 */
    pName?: string;
    /** 城市名称 */
    cName?: string;
    /** 行政区名称 */
    adName?: string;
    address?: string;
    /** 地址名称 */
    name?: string;
    /** 经度 */
    lng?: string;
    /** 纬度 */
    lat?: string;
    /** 详细地址 */
    fullAddress?: string;
}
/** 政务机构学员晨检记录表 */
export interface GovJiGouKidChenJian extends EntityBase {
    /** 机构Id */
    f_jigou_id?: string;
    /** 学员Id */
    f_jigou_kid_id?: string;
    /** 晨检时间 */
    ShiJian?: number | string | null;
    /** 体温异常 */
    TiWen_YiChang?: boolean;
    /** 体温 */
    TiWen?: number | null;
    /** 口腔异常 */
    KouQiang_YiChang?: boolean;
    /** 口腔状态 */
    KouQiang_ZhuangTai?: string;
    /** 口腔照片 */
    KouQiang_ZhaoPian?: FileControlsModel[];
    /** 手部异常 */
    ShouBu_YiChang?: boolean;
    /** 手部状态 */
    ShouBu_ZhuangTai?: string;
    /** 手部照片 */
    ShouBu_ZhaoPian?: FileControlsModel[];
    /** 身体异常 */
    ShiTi_YiChang?: boolean;
    /** 身体状态 */
    ShiTi_ZhuangTai?: string;
    /** 身体照片 */
    ShiTi_ZhaoPian?: FileControlsModel[];
    /** 精神状态 */
    JingShen_ZhuangTai?: string;
    /** 晨检备注 */
    BeiZHu?: string;
    /** 人员Id */
    f_renyuan_id?: string;
}
/** 政务机构学员用药申请表 */
export interface GovJiGouKidYongYao extends EntityBase {
    /** 机构Id */
    f_jigou_id?: string;
    /** 学员Id */
    f_jigou_kid_id?: string;
    /** 药品时间 */
    YaoPin_ShiJian?: number | string | null;
    /** 药品说明 */
    YaoPin_ShuoMing?: string;
    /** 药品照片 */
    YaoPin_ZhaoPian?: FileControlsModel[];
    /** 药品备注 */
    YaoPin_BeiZHu?: string;
    /** 用药状态（待用药、已撤回、已用药） */
    ZhuangTai?: string;
    /** 用药时间 */
    YongYao_ShiJian?: number | string | null;
    /** 用药照片 */
    YongYao_ZhaoPian?: FileControlsModel[];
    /** 用药备注 */
    YongYao_BeiZHu?: string;
    /** 人员Id */
    f_renyuan_id?: string;
}
/** 政务机构婴儿心理行为发育异常儿童专案管理记录表 */
export interface GovJiGouKidXinLi extends EntityBase {
    /** 机构Id */
    f_jigou_id?: string;
    /** 学员Id */
    f_jigou_kid_id?: string;
    /** 开始管理日期 */
    KaiShi_RiQi?: number | string | null;
    /** 诊断名称 */
    ZhenDuan_MingCheng?: string;
    /** 诊断日期 */
    ZhenDuan_RiQi?: number | string | null;
    /** 家族史 */
    JiaZu_Shi?: string;
    /** 备注 */
    BeiZhu?: string;
    /** 转归（痊愈、好转、未愈、离园） */
    ZhuanGui?: string;
    /** 结案日期 */
    JieAn_RiQi?: number | string | null;
    /** 检查日期 */
    JianCha_RiQi?: number | string | null;
    /** 主要表现 */
    ZhuYao_BiaoXian?: string;
    /** 医疗机构诊疗意见 */
    ZhenLiao_YiJian?: string;
    /** 管理措施 */
    GuanLi_CuoShi?: string;
    /** 管理成效评估 */
    GuanLi_ChengXiao?: string;
    /** 人员Id */
    f_renyuan_id?: string;
}
/** 政务机构婴儿缺铁性贫血儿童专案管理记录表 */
export interface GovJiGouKidPinXie extends EntityBase {
    /** 机构Id */
    f_jigou_id?: string;
    /** 学员Id */
    f_jigou_kid_id?: string;
    /** 开始管理日期 */
    KaiShi_RiQi?: number | string | null;
    /** 母孕期贫血情况：孕 ? 月 */
    YunQi_YueShu?: number | null;
    /** 孕期Hb：? g/dl */
    YunQi_HB?: number | null;
    /** 铁剂治疗（是、否） */
    TieJi_ZhiLiao?: string;
    /** 未治（是、否） */
    WeiZhi?: string;
    /** 备注（指导喂养记录和/或铁剂副作用） */
    BeiZhu?: string;
    /** 转归（痊愈、好转、未愈、离园） */
    ZhuanGui?: string;
    /** 结案日期 */
    JieAn_RiQi?: number | string | null;
    /** 检查日期 */
    JianCha_RiQi?: number | string | null;
    /** 精神（好、差） */
    JingShen?: string;
    /** 面色（黄、苍白） */
    MianSe?: string;
    /** 食欲（好、差） */
    ShiYu?: string;
    /** 异食癖（是、否） */
    YiShiPi?: string;
    /** 心、肺、肝、脾 */
    XinFei?: string;
    /** 血红蛋白 */
    XieHong_DanBai?: string;
    /** 红细胞 */
    HongXiBao?: string;
    /** 干预与治疗 */
    GanYu_CuoShi?: string;
    /** 人员Id */
    f_renyuan_id?: string;
}
/** 政务机构婴儿营养不良儿童专案管理记录表 */
export interface GovJiGouKidYingYang extends EntityBase {
    /** 机构Id */
    f_jigou_id?: string;
    /** 学员Id */
    f_jigou_kid_id?: string;
    /** 开始管理日期 */
    KaiShi_RiQi?: number | string | null;
    /** 既往病史（早产、低出生体重） */
    JiWang_BingShi?: string;
    /** 喂养（饮食）与患病情况 */
    HuanBing_QingKuang?: string;
    /** 转归（痊愈、好转、转医院、未愈） */
    ZhuanGui?: string;
    /** 结案日期 */
    JieAn_RiQi?: number | string | null;
    /** 检查日期 */
    JianCha_RiQi?: number | string | null;
    /** 体重 */
    TiZhong?: number | null;
    /** 身高 */
    ShenGao?: number | null;
    /** 诊断 */
    ZhenDuan?: string;
    /** 目前存在主要问题 */
    MuQian_WenTi?: string;
    /** 治疗与处理意见 */
    ChuLi_YiJian?: string;
    /** 人员Id */
    f_renyuan_id?: string;
}
/** 政务机构婴儿超重及肥胖儿童专案管理记录表 */
export interface GovJiGouKidFeiPang extends EntityBase {
    /** 机构Id */
    f_jigou_id?: string;
    /** 学员Id */
    f_jigou_kid_id?: string;
    /** 开始管理日期 */
    KaiShi_RiQi?: number | string | null;
    /** 既往病史 */
    JiWang_BingShi?: string;
    /** 出生情况、喂养（饮食）与患病情况 */
    HuanBing_QingKuang?: string;
    /** 转归（痊愈、好转、未愈、离园） */
    ZhuanGui?: string;
    /** 结案日期 */
    JieAn_RiQi?: number | string | null;
    /** 检查日期 */
    JianCha_RiQi?: number | string | null;
    /** 体重 */
    TiZhong?: number | null;
    /** 身高 */
    ShenGao?: number | null;
    /** 诊断 */
    ZhenDuan?: string;
    /** 目前存在主要问题 */
    MuQian_WenTi?: string;
    /** 干预措施 */
    GanYu_CuoShi?: string;
    /** 人员Id */
    f_renyuan_id?: string;
}
/** 政务机构婴儿体测记录表 */
export interface GovJiGouKidTiCe extends EntityBase {
    /** 机构Id */
    f_jigou_id?: string;
    /** 学员Id */
    f_jigou_kid_id?: string;
    /** 体测时间 */
    ShiJian?: number | string | null;
    /** 体重 */
    TiZhong?: number | null;
    /** 身高 */
    ShenGao?: number | null;
    /** 头围 */
    TouWei?: number | null;
    /** 左眼 */
    ZuoYan?: number | null;
    /** 右眼 */
    YouYan?: number | null;
    /** 牙齿数 */
    YaChiShu?: number | null;
    /** 龋齿数 */
    QuChiShu?: number | null;
    /** 发育评估 */
    FaYu_PingGu?: string;
}
/** 政务机构婴儿门诊记录表 */
export interface GovJiGouKidMenZhen extends EntityBase {
    /** 机构Id */
    f_jigou_id?: string;
    /** 学员Id */
    f_jigou_kid_id?: string;
    /** 医疗机构Id */
    f_yiyuan_id?: string;
    /** 就医时间 */
    ShiJian?: number | string | null;
    /** 主诉 */
    ZhuSu?: string;
    /** 病史 */
    BingShi?: string;
    /** 体查 */
    TiCha?: string;
    /** 诊断 */
    ZhenDuan?: string;
    /** 辅助检查结果 */
    JianCha_JieGuo?: string;
    /** 随访记录 */
    SuiFang_JiLu?: string;
    /** 特别提醒 */
    TeBie_TiXing?: string;
}
export interface ListResponse<T> extends BaseResponse {
    /** 总记录条数 */
    Total?: number | null;
    /** 数据列表 */
    Data?: T[];
}
/** 机构学员汇总信息 */
export interface GovJiGouKidSummary {
    /** 月龄 */
    KidMonth?: string;
    /** 男 */
    MALE?: number;
    /** 女 */
    FEMAILE?: number;
    /** 总数 */
    All?: number;
}
/** 政务机构考勤请假记录表 */
export interface GovJiGouKaoQinQingJia extends EntityBase {
    /** 机构Id */
    f_jigou_id?: string;
    /** 请假人员Id */
    f_renyuan_id?: string;
    /** 请假学员Id */
    f_jigou_kid_id?: string;
    /** 请假开始时间 */
    KaiShi_ShiJian?: number | string | null;
    /** 请假结束时间 */
    JieShu_ShiJian?: number | string | null;
    /** 请假类型（事假、病假、年假） */
    LeiXing?: string;
    /** 请假原因 */
    YuanYin?: string;
    /** 附件 */
    FuJian?: FileControlsModel[];
    /** 审核状态（待审批、已撤回、已通过、已驳回） */
    ZhuangTai?: string;
    /** 审核时间 */
    ShenHe_ShiJian?: number | string | null;
    /** 审核意见 */
    ShenHe_YiJian?: string;
    /** 审核人 */
    f_renyuan_id_shenhe?: string;
}
/** 政务机构考勤工作人员记录表 */
export interface GovJiGouKaoQinRenYuan extends EntityBase {
    /** 机构Id */
    f_jigou_id?: string;
    /** 人员Id */
    f_renyuan_id?: string;
    /** 所属日期 */
    SuoShu_RiQi?: number | string;
    /** 签到时间 */
    QianDao_ShiJian?: number | string | null;
    /** 签到照片 */
    QianDao_ZhaoPian?: FileControlsModel[];
    /** 签到状态（缺卡、正常、请假、迟到、早退） */
    QianDao_ZhuangTai?: string;
    /** 签出时间 */
    QianChu_ShiJian?: number | string | null;
    /** 签出照片 */
    QianChu_ZhaoPian?: FileControlsModel[];
    /** 签出状态 */
    QianChu_ZhuangTai?: string;
    /** 是否请假 */
    QingJia?: boolean | null;
}
/** 政务机构考勤婴儿记录表 */
export interface GovJiGouKaoQinKid extends EntityBase {
    /** 机构Id */
    f_jigou_id?: string;
    /** 学员Id */
    f_jigou_kid_id?: string;
    /** 所属日期 */
    SuoShu_RiQi?: number | string | null;
    /** 签到时间 */
    QianDao_ShiJian?: number | string | null;
    /** 签到照片 */
    QianDao_ZhaoPian?: FileControlsModel[];
    /** 签出时间 */
    QianChu_ShiJian?: number | string | null;
    /** 签出照片 */
    QianChu_ZhaoPian?: FileControlsModel[];
    /** 是否请假 */
    QingJia?: boolean | null;
}
export interface GovJiGouKaoQinSummary {
    f_banji_id?: string;
    /** 已签到 */
    YiDao?: number;
    /** 未签到 */
    WeiDao?: number;
    /** 请假 */
    QingJia?: number;
    /** 应到 */
    YingDao?: number;
}
export interface GovJiGouManYiDuRes extends GovListResponse<GovJiGouManYiDu> {
    PingFenAvg?: number | null;
}
/** 政务机构满意度 */
export interface GovJiGouManYiDu extends EntityBase {
    /** 机构Id */
    f_jigou_id?: string;
    /** 学员Id */
    f_jigou_kid_id?: string;
    /** 评分 */
    PingFen?: number | null;
    /** 评价 */
    PingJia?: string;
    /** 附件 */
    FuJian?: FileControlsModel[];
}
/** 政务机构一日流程表 */
export interface GovJiGouMeiRiLiuCheng extends EntityBase {
    /** 机构Id */
    f_jigou_id?: string;
    /** 班级Id */
    f_banji_id?: string;
    /** 流程 */
    Items?: GovJiGouMeiRiLiuChenItem[];
}
/** 一日流程配置 */
export interface GovJiGouMeiRiLiuChenItem {
    /** 开始时间 */
    KaiShi_ShiJian?: number | string | null;
    /** 结束时间 */
    JieShu_ShiJian?: number | string | null;
    /** 名称 */
    Title?: string;
    /** 内容 */
    Memo?: string;
}
/** 政务机构入托预约表 */
export interface GovJiGouRuTuoYuYue extends EntityBase {
    /** 用户Id */
    f_user_id?: string;
    /** 机构Id */
    f_jigou_id?: string;
    /** 婴儿Id */
    f_kid_id?: string;
    /** 姓名 */
    XingMing?: string;
    /** 出生日期 */
    ChuShengRiQi?: number | string | null;
    /** 性别 */
    XingBie?: string;
    /** 联系电话 */
    PhoneNumber?: string;
    /** 证件类型 */
    ZhengJian_LeiXing?: string;
    /** 证件号 */
    ZhengJianHao?: string;
    /** 父亲姓名 */
    FuQin_XingMing?: string;
    /** 母亲姓名 */
    MuQin_XingMing?: string;
    /** 联系地址 */
    DiZhi?: string;
    /** 预约时间 */
    YuYue_ShiJian?: number | string | null;
    /** 学员Id */
    f_jigou_kid_id?: string;
}
/** 政务机构医院签约表 */
export interface GovJiGouYiYuan extends EntityBase {
    /** 机构Id */
    f_jigou_id?: string;
    /** 医疗机构Id */
    f_yiyuan_id?: string;
    /** 合同开始时间 */
    KaiShi_ShiJian?: number | string | null;
    /** 合同结束时间 */
    JieShu_ShiJian?: number | string | null;
    /** 合同文件 */
    HeTong_WenJian?: FileControlsModel[];
    /** 卫生评价 */
    WeiSheng_PingJia?: string;
}
export interface SaveGovJiGouBanJiKidReq {
    banji_ids?: string[];
}
/** 政务机构班级学员表 */
export interface GovJiGouBanJiKid extends EntityBase {
    /** 机构Id */
    f_jigou_id?: string;
    /** 班级Id */
    f_banji_id?: string;
    /** 学员Id */
    f_jigou_kid_id?: string;
}
/** 政务婴儿接种表 */
export interface GovUserKidJieZhong extends EntityBase {
    /** 证件类型 */
    ZhengJian_LeiXing?: string;
    /** 证件号码 */
    ZhengJianHao?: string;
    /** 接种证号 */
    JieZhong_ZhengHao?: string;
    /** 阶段 */
    JieDuan?: string;
    /** 疫苗 */
    YiMiao?: string;
    /** 接种情况 */
    QingKuang?: string;
    /** 接种时间 */
    JieZhong_ShiJian?: number | string | null;
}
export interface GetGovUserKidJieZhongSummarysReq {
    ZhengJianHaos?: string[];
}
export interface DataResponse<T> extends BaseResponse {
    Data?: T;
}
export interface Dictionary<TKey, TValue> {
    Comparer?: IEqualityComparer<TKey>;
    Count?: number;
    Keys?: TKey[];
    Values?: TKey[];
    Item?: TValue;
}
export interface IEqualityComparer<T> {
}
export interface String {
    Chars?: string;
    Length?: number;
}
export interface Int32 {
}
/** 政务机构活动预约表 */
export interface GovJiGouHuoDongYuYue extends EntityBase {
    /** 用户Id */
    f_user_id?: string;
    /** 机构Id */
    f_jigou_id?: string;
    /** 活动Id */
    f_huodong_id?: string;
    /** 姓名 */
    XingMing?: string;
    /** 出生日期 */
    ChuShengRiQi?: number | string | null;
    /** 性别 */
    XingBie?: string;
    /** 联系电话 */
    PhoneNumber?: string;
    /** 联系地址 */
    DiZhi?: string;
    /** 预约时间 */
    YuYue_ShiJian?: number | string | null;
}
/** 政务机构养育活动表 */
export interface GovJiGouHuoDong extends EntityBase {
    /** 机构Id */
    f_jigou_id?: string;
    /** 标题 */
    BiaoTi?: string;
    /** 标题图片 */
    BiaoTi_Tupian?: FileControlsModel[];
    /** 主办单位 */
    ZhuBan_DanWei?: string;
    /** 活动介绍 */
    JieShao?: string;
    /** 附件 */
    FuJian?: string;
    /** 活动时间 */
    HuoDong_ShiJian?: number | string | null;
    /** 活动地点 */
    HuoDong_DiDian?: string;
    /** 地图选点 */
    MapAddress?: MapAddress;
    /** 距离（米） */
    Distance?: number | null;
    /** 可预约组数 */
    KeYuYue_ZuShu?: number | null;
    /** 已预约组数 */
    YiYuYue_ZuShu?: number | null;
    /** 预约截止时间 */
    JieZhi_ShiJian?: number | string | null;
}
/** 政务养育资讯表 */
export interface GovJiGoZiXun extends EntityBase {
    /** 机构Id */
    f_jigou_id?: string;
    /** 来源 */
    LaiYuan?: string;
    /** 栏目 */
    LanMu?: string;
    /** 标题 */
    BiaoTi?: string;
    /** 标题图片 */
    BiaoTi_Tupian?: FileControlsModel[];
    /** 发布时间 */
    FaBu_ShiJian?: number | string | null;
    /** 内容 */
    NeiRong?: string;
    /** 附件 */
    FuJian?: FileControlsModel[];
}
/** 政务机构周餐菜单表 */
export interface GovJiGouDishMenuWeekly extends EntityBase {
    /** 机构Id */
    f_jigou_id?: string;
    /** 所属周（周一） */
    DateOn?: number | string;
    /** 食谱名称 */
    Title?: string;
    /** 营养素周合计 */
    Nutritions?: Nutrition;
    /** 每日菜单 */
    DishMenus?: DishMenu[];
}
/** 每日菜单 */
export interface DishMenu {
    /** 所属日期 */
    DateOn?: number | string;
    /** 营养素日合计 */
    Nutritions?: Nutrition;
    /** 自定义餐段 */
    Contents?: DishMenuContent[];
}
export interface DishMenuContent {
    /** 餐段：早餐、中餐、晚餐 */
    Title?: string;
    /** 菜肴 */
    Dishs?: DishMenuDish[];
    /** 菜肴照片 */
    Attachment?: FileControlsModel[];
}
export interface DishMenuDish {
    /** 菜肴ID */
    Id?: string;
    /** 配料 */
    IngredientAmount?: {
        [key: string]: number;
    };
}
/** 主要矿物质、维生素含量（每百克可食用食材中营养素的含量） */
export interface Nutrition extends NutritionBase {
    /** 维生素A(微克) */
    va?: number;
    /** 胡萝卜素(微克) */
    carotene?: number;
    /** 维生素B1(毫克) */
    vb1?: number;
    /** 维生素B2(毫克) */
    vb2?: number;
    /** 维生素B3(毫克) */
    vb3?: number;
    /** 维生素C(毫克) */
    vc?: number;
    /** 维生素E(毫克) */
    ve?: number;
    /** 钙(毫克) */
    ca?: number;
    /** 磷(毫克) */
    p?: number;
    /** 钾(毫克) */
    k?: number;
    /** 钠(毫克) */
    na?: number;
    /** 镁(毫克) */
    mg?: number;
    /** 铁(毫克) */
    fe?: number;
    /** 锌(毫克) */
    zn?: number;
    /** 硒(毫克) */
    se?: number;
    /** 铜(毫克) */
    cu?: number;
    /** 锰(毫克) */
    mn?: number;
    /** 碘(毫克) */
    i?: number;
}
/** 主要膳食营养素含量（每百克可食用食材中营养素的含量） */
export interface NutritionBase {
    /** 能量(千卡) */
    energy?: number;
    /** 脂肪(克) */
    fat?: number;
    /** 蛋白质(克) */
    protein?: number;
    /** 膳食纤维(克) */
    fiber?: number;
    /** 碳水化合物(克) */
    carbohydrate?: number;
}
export interface LoginReq {
    PhoneNumber?: string;
    Code?: string;
    Scope?: GovScope;
}
export interface LoginResponse extends BaseResponse {
    Token?: string;
    UserId?: string;
}
/** 行政区划 */
export interface BaseProvince extends EntityBase {
    /** 区域上级 */
    f_parent_id?: string;
    /** 区域编号 */
    f_en_code?: string;
    /** 区域名称 */
    f_full_name?: string;
    /** 区域类型 */
    f_type?: string;
    f_enabled_mark?: number;
}
export declare class FileService_Uploader implements IReturn<FileControlsModel> {
    type?: string;
    input?: ChunkModel;
    constructor(init?: Partial<FileService_Uploader>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): FileControlsModel;
}
/** 获取指定机构的周餐菜单列表 */
export declare class GovJiGouService_GetGovJiGouDishMenuWeeklys implements IReturn<GovListResponse<GovJiGouDishMenuWeekly>> {
    jigou_id?: string;
    riqi?: number | string[];
    pageNumber?: number | null;
    pageSize?: number | null;
    constructor(init?: Partial<GovJiGouService_GetGovJiGouDishMenuWeeklys>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): GovListResponse<GovJiGouDishMenuWeekly>;
}
/** 保存机构周餐菜单 */
export declare class GovJiGouService_SaveGovJiGouDishMenuWeekly implements IReturn<IdResponse> {
    body?: GovJiGouDishMenuWeekly;
    constructor(init?: Partial<GovJiGouService_SaveGovJiGouDishMenuWeekly>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): IdResponse;
}
/** 获取托育机构养育资讯表列表 */
export declare class GovJiGouService_GetGovJiGoZiXuns implements IReturn<GovListResponse<GovJiGoZiXun>> {
    jigou_id?: string;
    f_id?: string;
    biaoti?: string;
    riqi?: number | string[];
    pageNumber?: number | null;
    pageSize?: number | null;
    constructor(init?: Partial<GovJiGouService_GetGovJiGoZiXuns>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): GovListResponse<GovJiGoZiXun>;
}
/** 保存托育机构养育资讯 */
export declare class GovJiGouService_SaveGovJiGoZiXun implements IReturn<IdResponse> {
    body?: GovJiGoZiXun;
    constructor(init?: Partial<GovJiGouService_SaveGovJiGoZiXun>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): IdResponse;
}
/** 获取托育机构养育活动表列表 */
export declare class GovJiGouService_GetGovJiGouHuoDongs implements IReturn<GovListResponse<GovJiGouHuoDong>> {
    jigou_id?: string;
    f_id?: string;
    biaoti?: string;
    riqi?: number | string[];
    Lng?: number | null;
    Lat?: number | null;
    pageNumber?: number | null;
    pageSize?: number | null;
    constructor(init?: Partial<GovJiGouService_GetGovJiGouHuoDongs>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): GovListResponse<GovJiGouHuoDong>;
}
/** 保存托育机构养育活动表 */
export declare class GovJiGouService_SaveGovJiGouHuoDong implements IReturn<IdResponse> {
    body?: GovJiGouHuoDong;
    constructor(init?: Partial<GovJiGouService_SaveGovJiGouHuoDong>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): IdResponse;
}
/** 获取机构活动预约列表 */
export declare class GovJiGouService_GetGovJiGouHuoDongYuYues implements IReturn<ListResponse<GovJiGouHuoDongYuYue>> {
    jigou_id?: string;
    yuyue_shijian?: number | string[];
    pageNumber?: number | null;
    pageSize?: number | null;
    constructor(init?: Partial<GovJiGouService_GetGovJiGouHuoDongYuYues>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): ListResponse<GovJiGouHuoDongYuYue>;
}
/** 获取婴儿接种情况汇总表数据 */
export declare class GovJiGouService_GetGovUserKidJieZhongSummarys implements IReturn<DataResponse<{
    [key: string]: number;
}>> {
    body?: GetGovUserKidJieZhongSummarysReq;
    constructor(init?: Partial<GovJiGouService_GetGovUserKidJieZhongSummarys>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): DataResponse<{
        [key: string]: number;
    }>;
}
/** 获取婴儿接种列表 */
export declare class GovJiGouService_GetGovUserKidJieZhong implements IReturn<ListResponse<GovUserKidJieZhong>> {
    ZhengJianHao?: string;
    pageNumber?: number | null;
    pageSize?: number | null;
    constructor(init?: Partial<GovJiGouService_GetGovUserKidJieZhong>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): ListResponse<GovUserKidJieZhong>;
}
/** 保存婴儿接种记录 */
export declare class GovJiGouService_SaveGovUserKidJieZhong implements IReturn<IdResponse> {
    body?: GovUserKidJieZhong;
    constructor(init?: Partial<GovJiGouService_SaveGovUserKidJieZhong>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): IdResponse;
}
/** 获取我的机构列表 */
export declare class GovJiGouService_GetGovJiGous implements IReturn<ListResponse<GovJiGou>> {
    jigou_id?: string;
    constructor(init?: Partial<GovJiGouService_GetGovJiGous>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): ListResponse<GovJiGou>;
}
/** 保存机构信息 */
export declare class GovJiGouService_SaveGovJiGou implements IReturn<IdResponse> {
    body?: GovJiGou;
    constructor(init?: Partial<GovJiGouService_SaveGovJiGou>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): IdResponse;
}
/** 获取指定机构的员工列表 */
export declare class GovJiGouService_GetGovJiGouRenYuans implements IReturn<ListResponse<GovJiGouRenYuan>> {
    jigou_id?: string;
    XingMing?: string;
    pageNumber?: number | null;
    pageSize?: number | null;
    constructor(init?: Partial<GovJiGouService_GetGovJiGouRenYuans>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): ListResponse<GovJiGouRenYuan>;
}
/** 保存机构员工 */
export declare class GovJiGouService_SaveGovJiGouRenYuan implements IReturn<IdResponse> {
    body?: GovJiGouRenYuan;
    constructor(init?: Partial<GovJiGouService_SaveGovJiGouRenYuan>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): IdResponse;
}
/** 获取指定机构的班级列表 */
export declare class GovJiGouService_GetGovJiGouBanJis implements IReturn<GovListResponse<GovJiGouBanJi>> {
    jigou_id?: string;
    pageNumber?: number | null;
    pageSize?: number | null;
    constructor(init?: Partial<GovJiGouService_GetGovJiGouBanJis>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): GovListResponse<GovJiGouBanJi>;
}
/** 保存机构的班级 */
export declare class GovJiGouService_SaveGovJiGouBanJi implements IReturn<IdResponse> {
    body?: GovJiGouBanJi;
    constructor(init?: Partial<GovJiGouService_SaveGovJiGouBanJi>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): IdResponse;
}
/** 获取指定班级的学员列表 */
export declare class GovJiGouService_GetGovJiGouBanJiKids implements IReturn<ListResponse<GovJiGouBanJiKid>> {
    jigou_id?: string;
    banji_id?: string;
    pageNumber?: number | null;
    pageSize?: number | null;
    constructor(init?: Partial<GovJiGouService_GetGovJiGouBanJiKids>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): ListResponse<GovJiGouBanJiKid>;
}
/** 保存班级学员关系 */
export declare class GovJiGouService_SaveGovJiGouBanJiKid implements IReturn<BaseResponse> {
    jigou_id?: string;
    jigou_kid_id?: string;
    body?: SaveGovJiGouBanJiKidReq;
    constructor(init?: Partial<GovJiGouService_SaveGovJiGouBanJiKid>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): BaseResponse;
}
/** 获取指定机构的签约医院列表 */
export declare class GovJiGouService_GetGovJiGouYiYuans implements IReturn<GovListResponse<GovJiGouYiYuan>> {
    jigou_id?: string;
    pageNumber?: number | null;
    pageSize?: number | null;
    constructor(init?: Partial<GovJiGouService_GetGovJiGouYiYuans>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): GovListResponse<GovJiGouYiYuan>;
}
/** 保存机构签约医院 */
export declare class GovJiGouService_SaveGovJiGouYiYuan implements IReturn<IdResponse> {
    body?: GovJiGouYiYuan;
    constructor(init?: Partial<GovJiGouService_SaveGovJiGouYiYuan>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): IdResponse;
}
/** 获取机构入托预约列表 */
export declare class GovJiGouService_GetGovJiGouRuTuoYuYues implements IReturn<ListResponse<GovJiGouRuTuoYuYue>> {
    jigou_id?: string;
    F_Id?: string;
    XingMing?: string;
    yuyue_shijian?: number | string[];
    pageNumber?: number | null;
    pageSize?: number | null;
    constructor(init?: Partial<GovJiGouService_GetGovJiGouRuTuoYuYues>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): ListResponse<GovJiGouRuTuoYuYue>;
}
/** 保存机构入托预约 */
export declare class GovJiGouService_SaveGovJiGouRuTuoYuYue implements IReturn<IdResponse> {
    body?: GovJiGouRuTuoYuYue;
    constructor(init?: Partial<GovJiGouService_SaveGovJiGouRuTuoYuYue>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): IdResponse;
}
/** 获取机构一日流程列表 */
export declare class GovJiGouService_GetGovJiGouMeiRiLiuChengs implements IReturn<GovListResponse<GovJiGouMeiRiLiuCheng>> {
    jigou_id?: string;
    banji_id?: string;
    pageNumber?: number | null;
    pageSize?: number | null;
    constructor(init?: Partial<GovJiGouService_GetGovJiGouMeiRiLiuChengs>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): GovListResponse<GovJiGouMeiRiLiuCheng>;
}
/** 保存机构一日流程 */
export declare class GovJiGouService_SaveGovJiGouMeiRiLiuCheng implements IReturn<IdResponse> {
    body?: GovJiGouMeiRiLiuCheng;
    constructor(init?: Partial<GovJiGouService_SaveGovJiGouMeiRiLiuCheng>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): IdResponse;
}
/** 获取机构满意度列表 */
export declare class GovJiGouService_GetGovJiGouManYiDus implements IReturn<GovJiGouManYiDuRes> {
    jigou_id?: string;
    weiPingJia?: boolean | null;
    pageNumber?: number | null;
    pageSize?: number | null;
    constructor(init?: Partial<GovJiGouService_GetGovJiGouManYiDus>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): GovJiGouManYiDuRes;
}
/** 获取指定机构学员的考勤统计 */
export declare class GovJiGouService_GetGovJiGouKaoQinKidSummary implements IReturn<GovListResponse<GovJiGouKaoQinSummary>> {
    jigou_id?: string;
    banji_id?: string;
    riqi?: number | string;
    constructor(init?: Partial<GovJiGouService_GetGovJiGouKaoQinKidSummary>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): GovListResponse<GovJiGouKaoQinSummary>;
}
/** 获取指定机构班级学员的考勤 */
export declare class GovJiGouService_GetGovJiGouKaoQinKid implements IReturn<GovListResponse<GovJiGouKaoQinKid>> {
    jigou_id?: string;
    banji_id?: string;
    riqi?: number | string;
    constructor(init?: Partial<GovJiGouService_GetGovJiGouKaoQinKid>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): GovListResponse<GovJiGouKaoQinKid>;
}
/** 获取指定机构学员的考勤记录列表 */
export declare class GovJiGouService_GetGovJiGouKaoQinKids implements IReturn<GovListResponse<GovJiGouKaoQinKid>> {
    jigou_id?: string;
    banji_id?: string;
    jigou_kid_id?: string;
    suoshu_riqi?: number | string[];
    pageNumber?: number | null;
    pageSize?: number | null;
    constructor(init?: Partial<GovJiGouService_GetGovJiGouKaoQinKids>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): GovListResponse<GovJiGouKaoQinKid>;
}
/** 保存机构学员签到记录 */
export declare class GovJiGouService_SaveGovJiGouKaoQinKid implements IReturn<IdResponse> {
    isIn?: boolean;
    body?: GovJiGouKaoQinKid;
    constructor(init?: Partial<GovJiGouService_SaveGovJiGouKaoQinKid>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): IdResponse;
}
/** 获取指定机构员工的考勤记录列表 */
export declare class GovJiGouService_GetGovJiGouKaoQinRenYuans implements IReturn<GovListResponse<GovJiGouKaoQinRenYuan>> {
    jigou_id?: string;
    renyuan_id?: string;
    suoshu_riqi?: number | string[];
    pageNumber?: number | null;
    pageSize?: number | null;
    constructor(init?: Partial<GovJiGouService_GetGovJiGouKaoQinRenYuans>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): GovListResponse<GovJiGouKaoQinRenYuan>;
}
/** 保存机构员工签到记录 */
export declare class GovJiGouService_SaveGovJiGouKaoQinRenYuan implements IReturn<IdResponse> {
    isIn?: boolean;
    body?: GovJiGouKaoQinRenYuan;
    constructor(init?: Partial<GovJiGouService_SaveGovJiGouKaoQinRenYuan>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): IdResponse;
}
/** 获取指定机构请假记录列表 */
export declare class GovJiGouService_GetGovJiGouKaoQinQingJias implements IReturn<GovListResponse<GovJiGouKaoQinQingJia>> {
    jigou_id?: string;
    isKid?: boolean | null;
    banji_id?: string;
    renyuan_id?: string;
    jigou_kid_id?: string;
    LeiXing?: string;
    ZhuangTai?: string;
    riqi?: number | string[];
    pageNumber?: number | null;
    pageSize?: number | null;
    constructor(init?: Partial<GovJiGouService_GetGovJiGouKaoQinQingJias>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): GovListResponse<GovJiGouKaoQinQingJia>;
}
/** 保存机构请假记录 */
export declare class GovJiGouService_SaveGovJiGouKaoQinQingJia implements IReturn<IdResponse> {
    isIn?: boolean;
    body?: GovJiGouKaoQinQingJia;
    constructor(init?: Partial<GovJiGouService_SaveGovJiGouKaoQinQingJia>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): IdResponse;
}
/** 获取指定机构的学员列表 */
export declare class GovJiGouService_GetGovJiGouKids implements IReturn<ListResponse<GovJiGouKid>> {
    jigou_id?: string;
    banji_id?: string;
    XingMing?: string;
    pageNumber?: number | null;
    pageSize?: number | null;
    constructor(init?: Partial<GovJiGouService_GetGovJiGouKids>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): ListResponse<GovJiGouKid>;
}
/** 保存机构学员信息 */
export declare class GovJiGouService_SaveGovJiGouKid implements IReturn<IdResponse> {
    f_rutuo_yuyue_id?: string;
    body?: GovJiGouKid;
    constructor(init?: Partial<GovJiGouService_SaveGovJiGouKid>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): IdResponse;
}
/** 获取指定机构的学员汇总信息 */
export declare class GovJiGouService_GetGovJiGouKidSummary implements IReturn<ListResponse<GovJiGouKidSummary>> {
    jigou_id?: string;
    banji_id?: string;
    constructor(init?: Partial<GovJiGouService_GetGovJiGouKidSummary>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): ListResponse<GovJiGouKidSummary>;
}
/** 获取指定机构学员的门诊记录列表 */
export declare class GovJiGouService_GetGovJiGouKidMenZhens implements IReturn<GovListResponse<GovJiGouKidMenZhen>> {
    jigou_id?: string;
    banji_id?: string;
    jigou_kid_id?: string;
    pageNumber?: number | null;
    pageSize?: number | null;
    constructor(init?: Partial<GovJiGouService_GetGovJiGouKidMenZhens>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): GovListResponse<GovJiGouKidMenZhen>;
}
/** 保存机构学员的门诊记录 */
export declare class GovJiGouService_SaveGovJiGouKidMenZhen implements IReturn<IdResponse> {
    body?: GovJiGouKidMenZhen;
    constructor(init?: Partial<GovJiGouService_SaveGovJiGouKidMenZhen>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): IdResponse;
}
/** 获取指定机构学员的体测列表 */
export declare class GovJiGouService_GetGovJiGouKidTiCes implements IReturn<GovListResponse<GovJiGouKidTiCe>> {
    jigou_id?: string;
    banji_id?: string;
    jigou_kid_id?: string;
    pageNumber?: number | null;
    pageSize?: number | null;
    constructor(init?: Partial<GovJiGouService_GetGovJiGouKidTiCes>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): GovListResponse<GovJiGouKidTiCe>;
}
/** 保存机构学员的体测记录 */
export declare class GovJiGouService_SaveGovJiGouKidTiCe implements IReturn<IdResponse> {
    body?: GovJiGouKidTiCe;
    constructor(init?: Partial<GovJiGouService_SaveGovJiGouKidTiCe>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): IdResponse;
}
/** 获取指定机构学员的超重及肥胖儿童专案管理记录列表 */
export declare class GovJiGouService_GetGovJiGouKidFeiPangs implements IReturn<GovListResponse<GovJiGouKidFeiPang>> {
    jigou_id?: string;
    banji_id?: string;
    jigou_kid_id?: string;
    pageNumber?: number | null;
    pageSize?: number | null;
    constructor(init?: Partial<GovJiGouService_GetGovJiGouKidFeiPangs>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): GovListResponse<GovJiGouKidFeiPang>;
}
/** 保存机构学员的超重及肥胖儿童专案管理记录 */
export declare class GovJiGouService_SaveGovJiGouKidFeiPang implements IReturn<IdResponse> {
    body?: GovJiGouKidFeiPang;
    constructor(init?: Partial<GovJiGouService_SaveGovJiGouKidFeiPang>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): IdResponse;
}
/** 获取指定机构学员的营养不良儿童专案管理记录列表 */
export declare class GovJiGouService_GetGovJiGouKidYingYangs implements IReturn<GovListResponse<GovJiGouKidYingYang>> {
    jigou_id?: string;
    banji_id?: string;
    jigou_kid_id?: string;
    pageNumber?: number | null;
    pageSize?: number | null;
    constructor(init?: Partial<GovJiGouService_GetGovJiGouKidYingYangs>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): GovListResponse<GovJiGouKidYingYang>;
}
/** 保存机构学员的营养不良儿童专案管理记录 */
export declare class GovJiGouService_SaveGovJiGouKidYingYang implements IReturn<IdResponse> {
    body?: GovJiGouKidYingYang;
    constructor(init?: Partial<GovJiGouService_SaveGovJiGouKidYingYang>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): IdResponse;
}
/** 获取指定机构学员的缺铁性贫血儿童专案管理记录列表 */
export declare class GovJiGouService_GetGovJiGouKidPinXies implements IReturn<GovListResponse<GovJiGouKidPinXie>> {
    jigou_id?: string;
    banji_id?: string;
    jigou_kid_id?: string;
    pageNumber?: number | null;
    pageSize?: number | null;
    constructor(init?: Partial<GovJiGouService_GetGovJiGouKidPinXies>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): GovListResponse<GovJiGouKidPinXie>;
}
/** 保存机构学员的缺铁性贫血儿童专案管理记录 */
export declare class GovJiGouService_SaveGovJiGouKidPinXie implements IReturn<IdResponse> {
    body?: GovJiGouKidPinXie;
    constructor(init?: Partial<GovJiGouService_SaveGovJiGouKidPinXie>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): IdResponse;
}
/** 获取指定机构学员的心理行为发育异常儿童专案管理记录列表 */
export declare class GovJiGouService_GetGovJiGouKidXinLis implements IReturn<GovListResponse<GovJiGouKidXinLi>> {
    jigou_id?: string;
    banji_id?: string;
    jigou_kid_id?: string;
    pageNumber?: number | null;
    pageSize?: number | null;
    constructor(init?: Partial<GovJiGouService_GetGovJiGouKidXinLis>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): GovListResponse<GovJiGouKidXinLi>;
}
/** 保存机构学员的心理行为发育异常儿童专案管理记录 */
export declare class GovJiGouService_SaveGovJiGouKidXinLi implements IReturn<IdResponse> {
    body?: GovJiGouKidXinLi;
    constructor(init?: Partial<GovJiGouService_SaveGovJiGouKidXinLi>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): IdResponse;
}
/** 获取指定机构学员的用药申请列表 */
export declare class GovJiGouService_GetGovJiGouKidYongYaos implements IReturn<GovListResponse<GovJiGouKidYongYao>> {
    jigou_id?: string;
    banji_id?: string;
    jigou_kid_id?: string;
    pageNumber?: number | null;
    pageSize?: number | null;
    constructor(init?: Partial<GovJiGouService_GetGovJiGouKidYongYaos>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): GovListResponse<GovJiGouKidYongYao>;
}
/** 保存机构学员的用药申请 */
export declare class GovJiGouService_SaveGovJiGouKidYongYao implements IReturn<IdResponse> {
    body?: GovJiGouKidYongYao;
    constructor(init?: Partial<GovJiGouService_SaveGovJiGouKidYongYao>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): IdResponse;
}
/** 获取指定机构学员的晨检记录列表 */
export declare class GovJiGouService_GetGovJiGouKidChenJians implements IReturn<GovListResponse<GovJiGouKidChenJian>> {
    jigou_id?: string;
    banji_id?: string;
    jigou_kid_id?: string;
    pageNumber?: number | null;
    pageSize?: number | null;
    constructor(init?: Partial<GovJiGouService_GetGovJiGouKidChenJians>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): GovListResponse<GovJiGouKidChenJian>;
}
/** 保存机构学员的晨检记录 */
export declare class GovJiGouService_SaveGovJiGouKidChenJian implements IReturn<IdResponse> {
    body?: GovJiGouKidChenJian;
    constructor(init?: Partial<GovJiGouService_SaveGovJiGouKidChenJian>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): IdResponse;
}
/** 获取托育机构质量评估表列表 */
export declare class GovJiGouService_GetGovJiGouZhiLiangPingGus implements IReturn<GovListResponse<GovJiGouZhiLiangPingGu>> {
    jigou_id?: string;
    riqi?: number | string[];
    pageNumber?: number | null;
    pageSize?: number | null;
    constructor(init?: Partial<GovJiGouService_GetGovJiGouZhiLiangPingGus>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): GovListResponse<GovJiGouZhiLiangPingGu>;
}
/** 保存托育机构质量评估表 */
export declare class GovJiGouService_SaveGovJiGouZhiLiangPingGu implements IReturn<IdResponse> {
    body?: GovJiGouZhiLiangPingGu;
    constructor(init?: Partial<GovJiGouService_SaveGovJiGouZhiLiangPingGu>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): IdResponse;
}
/** 获取行政区划 */
export declare class GovService_GetGovProvince implements IReturn<ListResponse<BaseProvince>> {
    parent_id?: string;
    constructor(init?: Partial<GovService_GetGovProvince>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): ListResponse<BaseProvince>;
}
/** 列取医院 */
export declare class GovService_GetGovYiYuans implements IReturn<ListResponse<GovYiYuan>> {
    MingCheng?: string;
    pageNumber?: number | null;
    pageSize?: number | null;
    constructor(init?: Partial<GovService_GetGovYiYuans>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): ListResponse<GovYiYuan>;
}
/** 政务用户发送短信验证码接口 */
export declare class GovService_LoginSendCode implements IReturn<BaseResponse> {
    body?: LoginReq;
    constructor(init?: Partial<GovService_LoginSendCode>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): BaseResponse;
}
/** 政务用户登录接口 */
export declare class GovService_Login implements IReturn<LoginResponse> {
    body?: LoginReq;
    constructor(init?: Partial<GovService_Login>);
    getUrl(): string;
    getMethod(): string;
    createResponse(): LoginResponse;
}
