import { userList } from './common.js';
// 修改问题页模版
const modifyContentTemplate = {
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
      // 当前组件的标题
      title: '',
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
    }
  ]
};
// bug和故事模版
const bugOrFeatTemplate = [
  {
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
  },
  {
    // 当前页ppt的标题
    title: '原因分析页面',
    // 当前页ppt的编码
    code: 'causeAnalysisPage',
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
        // 当前组件的标题
        title: '',
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
      }
    ]
  },
  modifyContentTemplate,
  {
    // 当前页ppt的标题
    title: 'review结果页面',
    // 当前页ppt的编码
    code: 'reviewResultsPage',
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
        // 当前组件的标题
        title: '',
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
      }
    ]
  }
];
const template = {
  // 模板的标题
  title: '应用构建开发部紧急上线Review',
  // 模板的编码
  code: 'emergencyOnline',
  // 模板对应的模型
  model: 'emergencyOnlineTmplModel',
  // 模板的内容
  content: [
    {
      pageType: 'main',
      content: [
        {
          // 当前页ppt的标题
          title: '紧急上线首页',
          // 当前页ppt的编码
          code: 'emergencyOnline',
          // ppt的内容
          content: [
            {
              // 当前组件的标题
              title: '上线类型',
              // 当前组件展示的类型
              comType: 'inputText',
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
                // 是否只读
                disabled: true
              }
            },
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
        }
      ]
    },
    {
      title: 'bug模版',
      pageType: 'bug',
      content: bugOrFeatTemplate
    }
  ]
};
export default template;
