import { userList, onlineType, projectList, onlineList } from './common';
const reviewResultsPage = {
  // 当前页ppt的标题
  title: 'review结果页面',
  // 当前页ppt的编码
  code: 'reviewResultsPage',
  // ppt的内容
  content: [
    {
      isShowToPage: false,
      // 当前组件的标题
      title: 'review结果',
      // 当前组件展示的类型
      comType: '',
      // 当前组件的值
      value: '',
      // 标题在ppt上是否显示
      isShowTitleToPpt: true,
      // 标题在ppt上的配置
      titlePptConfig: {
        x: 1,
        y: 0.9,
        //黑色
        // 宋体
        fontFace: '微软雅黑 Light',
        color: '000000',
        // 字体加粗
        bold: true,
        fontSize: 20
      },
      // 值在ppt上是否显示
      isShowValueToPpt: false,
      // 值在ppt上的配置
      valuePptConfig: {},
      // 组件的配置
      comOptions: {}
    },
    {
      // 当前组件的标题
      title: '代码review同事：',
      // 当前组件展示的类型
      comType: 'inputSelect',
      // 当前组件的值
      value: null,
      // 标题在ppt上是否显示
      isShowTitleToPpt: true,
      // 标题在ppt上的配置
      titlePptConfig: {
        x: 1,
        y: 2.1,
        fontFace: '微软雅黑 Light',
        color: '000000',
        // 字体加粗
        bold: true,
        fontSize: 20
      },
      // 值在ppt上是否显示
      isShowValueToPpt: true,
      // 值在ppt上的配置
      valuePptConfig: {
        x: 1.5,
        y: 2.6,
        fontFace: '微软雅黑 Light',
        color: '000000',
        fontSize: 17
      },
      // 组件的配置
      comOptions: {
        options: userList,
        // 是否多选
        mode: 'multiple'
      }
    },
    {
      // 当前组件的标题
      title: 'review记录：',
      // 当前组件展示的类型
      comType: 'inputTextArea',
      // 当前组件的值
      value: null,
      // 标题在ppt上是否显示
      isShowTitleToPpt: true,
      // 标题在ppt上的配置
      titlePptConfig: {
        x: 1,
        y: 3.1,
        fontFace: '微软雅黑 Light',
        color: '000000',
        // 字体加粗
        bold: true,
        fontSize: 20
      },
      // 值在ppt上是否显示
      isShowValueToPpt: true,
      // 值在ppt上的配置
      valuePptConfig: {
        x: 1.5,
        y: 3.8,
        fontFace: '微软雅黑 Light',
        color: '000000',
        fontSize: 17
      },
      // 组件的配置
      comOptions: {}
    },
    {
      // 当前组件的标题
      title: 'review结果：',
      // 当前组件展示的类型
      comType: 'inputText',
      // 当前组件的值
      value: '同意',
      // 标题在ppt上是否显示
      isShowTitleToPpt: true,
      // 标题在ppt上的配置
      titlePptConfig: {
        x: 1,
        y: 4.5,
        fontFace: '微软雅黑 Light',
        color: '000000',
        // 字体加粗
        bold: true,
        fontSize: 20
      },
      // 值在ppt上是否显示
      isShowValueToPpt: true,
      // 值在ppt上的配置
      valuePptConfig: {
        x: 1.5,
        y: 5,
        fontFace: '微软雅黑 Light',
        color: '000000',
        fontSize: 17
      },
      // 组件的配置
      comOptions: {}
    }
  ]
};
// 修改问题页模版
const bugModifyContentTemplate = {
  // 当前页ppt的标题
  title: '修改内容页面',
  // 当前页ppt的编码
  code: 'modifyContentPage',
  // 当前ppt名称扩展组件
  titleExtComponent: [
    {
      comTitle: '重复新增',
      // 组件类型
      comType: 'button',
      onClick: 'emergencyOnlineTmplModel.repeatAddition',
      comCode: 'repeatAddition'
    }
  ],
  // ppt的内容
  content: [
    {
      isShowToPage: false,
      // 当前组件的标题
      title: '修改内容',
      // 当前组件展示的类型
      comType: '',
      // 当前组件的值
      value: '',
      // 标题在ppt上是否显示
      isShowTitleToPpt: true,
      // 标题在ppt上的配置
      titlePptConfig: {
        x: 1,
        y: 0.9,
        //黑色
        // 宋体
        fontFace: 'CIDFont',
        color: '000000',
        // 字体加粗
        bold: true,
        // 文字阴影
        shadow: {
          x: 0.1,
          y: 0.1,
          color: '000000',
          blur: 0.1
        },
        fontSize: 24
      },
      // 值在ppt上是否显示
      isShowValueToPpt: false,
      // 值在ppt上的配置
      valuePptConfig: {},
      // 组件的配置
      comOptions: {}
    },
    {
      isShowToPage: true,
      // 当前组件的标题
      title: '1.所属组件库：',
      // 当前组件展示的类型
      comType: 'inputSelect',
      // 当前组件的值
      value: null,
      // 标题在ppt上是否显示
      isShowTitleToPpt: true,
      // 标题在ppt上的配置
      titlePptConfig: {
        x: 1,
        y: 1.5,
        //黑色
        // 宋体
        fontFace: '微软雅黑 Light',
        color: '000000',
        // 字体加粗
        bold: true,
        fontSize: 20
      },
      // 值在ppt上是否显示
      isShowValueToPpt: true,
      // 值在ppt上的配置
      valuePptConfig: {
        x: 1.5,
        y: 2.1,
        //黑色
        // 宋体
        fontFace: '微软雅黑 Light',
        color: '000000',
        fontSize: 17
      },
      // 组件的配置
      comOptions: {
        options: projectList,
        // 是否多选
        mode: 'multiple'
      }
    },
    {
      isShowToPage: true,
      // 当前组件的标题
      title: '2.改动文件：',
      // 当前组件展示的类型
      comType: 'inputTextArea',
      // 当前组件的值
      value: null,
      // 标题在ppt上是否显示
      isShowTitleToPpt: true,
      // 标题在ppt上的配置
      titlePptConfig: {
        x: 1,
        y: 2.7,
        //黑色
        // 宋体
        fontFace: '微软雅黑 Light',
        color: '000000',
        // 字体加粗
        bold: true,
        fontSize: 20
      },
      // 值在ppt上是否显示
      isShowValueToPpt: true,
      // 值在ppt上的配置
      valuePptConfig: {
        x: 1.5,
        y: 3.4,
        //黑色
        // 宋体
        fontFace: '微软雅黑 Light',
        color: '000000',
        fontSize: 17
      },
      // 组件的配置
      comOptions: {}
    },
    {
      isShowToPage: true,
      // 当前组件的标题
      title: '3.改动细节：',
      // 当前组件展示的类型
      comType: 'inputTextArea',
      // 当前组件的值
      value: null,
      // 标题在ppt上是否显示
      isShowTitleToPpt: true,
      // 标题在ppt上的配置
      titlePptConfig: {
        x: 1,
        y: 4.2,
        //黑色
        // 宋体
        fontFace: '微软雅黑 Light',
        color: '000000',
        // 字体加粗
        bold: true,
        fontSize: 20
      },
      // 值在ppt上是否显示
      isShowValueToPpt: true,
      // 值在ppt上的配置
      valuePptConfig: {
        x: 1.5,
        y: 4.8,
        //黑色
        // 宋体
        fontFace: '微软雅黑 Light',
        color: '000000',
        fontSize: 17
      },
      // 组件的配置
      comOptions: {}
    }
  ]
};
// 问题分析页模版
const bugCauseAnalysisPage = {
  // 当前页ppt的标题
  title: '原因分析页面',
  // 当前页ppt的编码
  code: 'causeAnalysisPage',
  // ppt的内容
  content: [
    {
      // 当前组件的标题
      title: '产生错误的原因：',
      // 当前组件展示的类型
      comType: 'inputTextArea',
      // 当前组件的值
      value: '',
      // 标题在ppt上是否显示
      isShowTitleToPpt: true,
      // 标题在ppt上的配置
      titlePptConfig: {
        x: 1,
        y: 1.5,
        //黑色
        // 宋体
        fontFace: '微软雅黑 Light',
        color: '000000',
        // 字体加粗
        bold: true,
        fontSize: 20
      },
      // 值在ppt上是否显示
      isShowValueToPpt: true,
      // 值在ppt上的配置
      valuePptConfig: {
        x: 1.5,
        y: 2.4,
        //黑色
        // 宋体
        fontFace: '微软雅黑 Light',
        color: '000000',
        fontSize: 17
      },
      // 组件的配置
      comOptions: {}
    },
    {
      // 当前组件的标题
      title: '错误分析：',
      // 当前组件展示的类型
      comType: 'inputTextArea',
      // 当前组件的值
      value: '',
      // 标题在ppt上是否显示
      isShowTitleToPpt: true,
      // 标题在ppt上的配置
      titlePptConfig: {
        x: 1,
        y: 3.3,
        //黑色
        // 宋体
        fontFace: '微软雅黑 Light',
        color: '000000',
        // 字体加粗
        bold: true,
        fontSize: 20
      },
      // 值在ppt上是否显示
      isShowValueToPpt: true,
      // 值在ppt上的配置
      valuePptConfig: {
        x: 1.5,
        y: 4.1,
        //黑色
        // 宋体
        fontFace: '微软雅黑 Light',
        color: '000000',
        fontSize: 17
      },
      // 组件的配置
      comOptions: {}
    },
    {
      // 当前组件的标题
      title: '解决方案：',
      // 当前组件展示的类型
      comType: 'inputTextArea',
      // 当前组件的值
      value: '',
      // 标题在ppt上是否显示
      isShowTitleToPpt: true,
      // 标题在ppt上的配置
      titlePptConfig: {
        x: 1,
        y: 4.8,
        //黑色
        // 宋体
        fontFace: '微软雅黑 Light',
        color: '000000',
        // 字体加粗
        bold: true,
        fontSize: 20
      },
      // 值在ppt上是否显示
      isShowValueToPpt: true,
      // 值在ppt上的配置
      valuePptConfig: {
        x: 1.5,
        y: 5.6,
        //黑色
        // 宋体
        fontFace: '微软雅黑 Light',
        color: '000000',
        fontSize: 17
      },
      // 组件的配置
      comOptions: {}
    }
  ]
};
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
      valuePptConfig: {
        x: 1,
        y: 0.9,
        //黑色
        // 宋体
        fontFace: 'CIDFont',
        color: '000000',
        // 字体加粗
        bold: true,
        // 文字阴影
        shadow: {
          x: 0.1,
          y: 0.1,
          color: '000000',
          blur: 0.1
        },
        fontSize: 24
      },
      // 组件的配置
      comOptions: {
        options: userList
      }
    },
    {
      // 当前组件的标题
      title: 'jira编号',
      // 当前组件展示的类型
      comType: 'inputText',
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
      comOptions: {}
    },
    {
      // 当前组件的标题
      title: '问题描述：',
      // 当前组件展示的类型
      comType: 'inputTextArea',
      // 当前组件的值
      value: '',
      // 标题在ppt上是否显示
      isShowTitleToPpt: true,
      // 标题在ppt上的配置
      titlePptConfig: {
        x: 1,
        y: 1.7,
        //黑色
        // 宋体
        fontFace: '微软雅黑 Light',
        color: '000000',
        // 字体加粗
        bold: true,
        fontSize: 20
      },
      // 值在ppt上是否显示
      isShowValueToPpt: true,
      // 值在ppt上的配置
      valuePptConfig: {
        x: 1.5,
        y: 2.5,
        //黑色
        // 宋体
        fontFace: '微软雅黑 Light',
        color: '000000',
        fontSize: 17
      },
      // 组件的配置
      comOptions: {
        style: {
          width: 1000
        }
      }
    },
    {
      // 当前组件的标题
      title: '开发人：',
      // 当前组件展示的类型
      comType: 'inputSelect',
      // 当前组件的值
      value: null,
      // 标题在ppt上是否显示
      isShowTitleToPpt: true,
      // 标题在ppt上的配置
      titlePptConfig: {
        x: 1,
        y: 3.3,
        //黑色
        // 宋体
        fontFace: '微软雅黑 Light',
        color: '000000',
        // 字体加粗
        bold: true,
        fontSize: 20
      },
      // 值在ppt上是否显示
      isShowValueToPpt: true,
      // 值在ppt上的配置
      valuePptConfig: {
        x: 1.5,
        y: 3.8,
        //黑色
        // 宋体
        fontFace: '微软雅黑 Light',
        color: '000000',
        fontSize: 17
      },
      // 组件的配置
      comOptions: {
        options: userList,
        // 是否多选
        mode: 'multiple'
      }
    },
    {
      // 当前组件的标题
      title: '修改的项目：',
      // 当前组件展示的类型
      comType: 'inputSelect',
      // 当前组件的值
      value: null,
      // 标题在ppt上是否显示
      isShowTitleToPpt: true,
      // 标题在ppt上的配置
      titlePptConfig: {
        x: 1,
        y: 4.5,
        //黑色
        // 宋体
        fontFace: '微软雅黑 Light',
        color: '000000',
        // 字体加粗
        bold: true,
        fontSize: 20
      },
      // 值在ppt上是否显示
      isShowValueToPpt: true,
      // 值在ppt上的配置
      valuePptConfig: {
        x: 1.5,
        y: 5,
        //黑色
        // 宋体
        fontFace: '微软雅黑 Light',
        color: '000000',
        fontSize: 17
      },
      // 组件的配置
      comOptions: {
        options: projectList,
        // 是否多选
        mode: 'multiple'
      }
    },
    {
      // 当前组件的标题
      title: '上线环境：',
      // 当前组件展示的类型
      comType: 'inputSelect',
      // 当前组件的值
      value: null,
      // 标题在ppt上是否显示
      isShowTitleToPpt: true,
      // 标题在ppt上的配置
      titlePptConfig: {
        x: 1,
        y: 5.7,
        //黑色
        // 宋体
        fontFace: '微软雅黑 Light',
        color: '000000',
        // 字体加粗
        bold: true,
        fontSize: 20
      },
      // 值在ppt上是否显示
      isShowValueToPpt: true,
      // 值在ppt上的配置
      valuePptConfig: {
        x: 1.5,
        y: 6.2,
        //黑色
        // 宋体
        fontFace: '微软雅黑 Light',
        color: '000000',
        fontSize: 17
      },
      // 组件的配置
      comOptions: {
        options: onlineList,
        // 是否多选
        mode: 'multiple'
      }
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
  content: [bugUserInfoPage, bugCauseAnalysisPage, bugModifyContentTemplate, reviewResultsPage]
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
        x: 5.7,
        y: 4,
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
        x: 3.1,
        y: 3.3,
        //黑色
        // 宋体
        fontFace: '宋体 (标题)',
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
        x: 6,
        y: 4.5,
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
