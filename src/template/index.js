import { userList, onlineType } from './common';
// 提交人信息页面
const bugUserInfoPage = {
  // 当前页ppt的标题
  title: '提交人信息页面',
  // 当前页ppt的编码
  code: 'submitterInformationPage',
  // ppt的内容
  content: [
    {
      // 当前组件的标题
      title: '问题提交人',
      // 当前组件展示的类型
      comType: 'inputSelect',
      // 当前组件的值
      value: '',
      // 标题在ppt上是否显示
      isShowTitleToPpt: false,
      // 标题在ppt上的配置
      titlePptConfig: {},
      // 值在ppt上是否显示
      isShowValueToPpt: true,
      // 值在ppt上的配置
      valuePptConfig: {},
      // 组件的配置
      comOptions: {
        options: userList
      }
    },
    {
      // 当前组件的标题
      title: '问题描述：',
      // 当前组件展示的类型
      comType: 'inputText',
      // 当前组件的值
      value: '',
      // 标题在ppt上是否显示
      isShowTitleToPpt: true,
      // 标题在ppt上的配置
      titlePptConfig: {},
      // 值在ppt上是否显示
      isShowValueToPpt: true,
      // 值在ppt上的配置
      valuePptConfig: {},
      // 组件的配置
      comOptions: {}
    },
    {
      // 当前组件的标题
      title: '开发人：',
      // 当前组件展示的类型
      comType: 'inputSelect',
      // 当前组件的值
      value: '',
      // 标题在ppt上是否显示
      isShowTitleToPpt: true,
      // 标题在ppt上的配置
      titlePptConfig: {},
      // 值在ppt上是否显示
      isShowValueToPpt: true,
      // 值在ppt上的配置
      valuePptConfig: {},
      // 组件的配置
      comOptions: {}
    },
    {
      // 当前组件的标题
      title: '修改的项目：',
      // 当前组件展示的类型
      comType: 'inputSelect',
      // 当前组件的值
      value: '',
      // 标题在ppt上是否显示
      isShowTitleToPpt: true,
      // 标题在ppt上的配置
      titlePptConfig: {},
      // 值在ppt上是否显示
      isShowValueToPpt: true,
      // 值在ppt上的配置
      valuePptConfig: {},
      // 组件的配置
      comOptions: {}
    },
    {
      // 当前组件的标题
      title: '上线环境：',
      // 当前组件展示的类型
      comType: 'inputSelect',
      // 当前组件的值
      value: '',
      // 标题在ppt上是否显示
      isShowTitleToPpt: true,
      // 标题在ppt上的配置
      titlePptConfig: {},
      // 值在ppt上是否显示
      isShowValueToPpt: true,
      // 值在ppt上的配置
      valuePptConfig: {},
      // 组件的配置
      comOptions: {}
    }
  ]
};
// 故事模版
const featTemplate = {
  title: '故事模版',
  pageType: 'feat',
  content: [bugUserInfoPage]
};
// bug模版
const bugTemplate = {
  title: 'bug模版',
  pageType: 'bug',
  content: [bugUserInfoPage]
};

// 上线首页
const onlineHomePage = {
  // 当前页ppt的标题
  title: '上线首页',
  // 当前页ppt的编码
  code: 'onlineHomePage',
  // ppt的内容
  content: [
    {
      // 当前组件的标题
      title: '上线部门',
      // 当前组件展示的类型
      comType: 'inputText',
      // 当前组件的值
      value: '应用构建开发部',
      // 标题在ppt上是否显示
      isShowTitleToPpt: false,
      // 标题在ppt上的配置
      titlePptConfig: {},
      // 值在ppt上是否显示
      isShowValueToPpt: true,
      // 值在ppt上的配置
      valuePptConfig: {
        x: 4,
        y: 3.1,
        //黑色
        // 宋体
        fontFace: '宋体',
        color: '000000',
        fontSize: 18
      },
      // 组件的配置
      comOptions: {
        // 是否只读
        disabled: true
      }
    },
    {
      // 当前组件的标题
      title: '上线类型',
      // 当前组件展示的类型
      comType: 'inputSelect',
      // 当前组件的值
      value: '紧急上线review说明',
      // 标题在ppt上是否显示
      isShowTitleToPpt: false,
      // 标题在ppt上的配置
      titlePptConfig: {},
      // 值在ppt上是否显示
      isShowValueToPpt: true,
      // 值在ppt上的配置
      valuePptConfig: {
        x: 1.5,
        y: 2.5,
        //黑色
        // 宋体
        fontFace: '宋体',
        color: '000000',
        // 字体加粗
        bold: true,
        fontSize: 54
      },
      // 组件的配置
      comOptions: {
        options: onlineType
      }
    },
    {
      // 当前组件的标题
      title: '上线时间',
      // 当前组件展示的类型
      comType: 'inputDatePicker',
      // 当前组件的值
      value: '',
      // 标题在ppt上是否显示
      isShowTitleToPpt: false,
      // 标题在ppt上的配置
      titlePptConfig: {},
      // 值在ppt上是否显示
      isShowValueToPpt: true,
      // 值在ppt上的配置
      valuePptConfig: {
        x: 4.4,
        y: 3.5,
        //黑色
        // 宋体
        fontFace: 'Arial Black (标题)',
        color: '000000',
        // 字体加粗
        bold: true,
        fontSize: 18
      },
      // 组件的配置
      comOptions: {}
    }
  ]
};

const template = [
  {
    title: '模版首页',
    pageType: 'main',
    content: [onlineHomePage]
  }
];
export { template, bugTemplate, featTemplate };
