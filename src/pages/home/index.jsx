import React from 'react';
const Home = () => {
  const handleClick = (sourceType) => {
    //路由跳转
    window.location.href = `#/details?sourceType=${sourceType}`;
  }
  return (
    <div>
      <h1 onClick={() => { handleClick('emergencyOnline') }}>紧急上线ppt</h1>
      <h1 onClick={()=>{handleClick('iterativeOnline')}}>迭代上线ppt</h1>
    </div>
  );
}
export default Home;