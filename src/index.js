import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";

import "./public-path";
import App from "./App.jsx";

/**
 * 渲染函数
 * 两种情况：主应用生命周期钩子中运行 / 微应用单独启动时运行
 */
function render() {
  ReactDOM.render(<App />, document.getElementById("root"));
}

// 独立运行时，直接挂载应用
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap(props) {
  console.log("ReactMicroApp bootstraped",props);
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  console.log("ReactMicroApp mount", props);
  render(props);
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props) {
  console.log("ReactMicroApp unmount",props);  
  ReactDOM.unmountComponentAtNode(document.getElementById("root"));
}

// if (process.env.NODE_ENV === "development") {
//   window["ReactMicroApp"] = {};
//   window["ReactMicroApp"].bootstrap = bootstrap;
//   window["ReactMicroApp"].mount = mount;
//   window["ReactMicroApp"].unmount = unmount;
// }