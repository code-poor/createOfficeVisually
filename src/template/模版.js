const template = {
  // 模板的标题
  title: '紧急上线ppt',
  // 模板的编码
  code: 'emergencyOnline',
  // 模板对应的模型
  model: 'emergencyOnlineTmplModel',
  // 模板的内容
  content: [
    // 每个对象是一页ppt
    {
      // 当前页ppt的标题
      title: '紧急上线首页',
      // 当前页ppt的编码
      code: 'emergencyOnline',
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
          // 当前组件的值
          value: '',
          // 当前组件展示的类型
          comType: 'text',
          // 标题在ppt上是否显示
          isShowTitleToPpt: false,
          // 值在ppt上是否显示
          isShowValueToPpt: true,
          // 标题在ppt上的配置
          titlePptConfig: {},
          // 值在ppt上的配置
          valuePptConfig: {},
          // 组件的配置
          comOptions: {}
        }
      ]
    }
  ]
};
export default template;
