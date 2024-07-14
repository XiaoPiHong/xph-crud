import React, { useRef } from "react";
import { XphDialog, IXphDialogProps, IXphDialogActionType } from "xph-crud";

const ReactApp: React.FC = () => {
  const dialogProps: IXphDialogProps = {
    title: "弹窗标题",
  };
  const dialogRef = useRef<IXphDialogActionType>(null);

  const onOpen = () => {
    dialogRef.current?.open();
  };
  return (
    <>
      <button onClick={onOpen}>点击打开XphDialog弹窗</button>
      <XphDialog {...dialogProps} ref={dialogRef}>
        <>内容</>
        <div>内容</div>
      </XphDialog>
    </>
  );
};

export default ReactApp;

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
//     <style>
//       .login-header {
//         width: 100%;
//         text-align: center;
//         height: 30px;
//         font-size: 24px;
//         line-height: 30px;
//       }

//       ul,
//       li,
//       ol,
//       dl,
//       dt,
//       dd,
//       div,
//       p,
//       span,
//       h1,
//       h2,
//       h3,
//       h4,
//       h5,
//       h6,
//       a {
//         padding: 0px;
//         margin: 0px;
//       }

//       .login {
//         width: 512px;
//         position: absolute;
//         border: #ebebeb solid 1px;
//         height: 280px;
//         left: 50%;
//         right: 50%;
//         background: #ffffff;
//         box-shadow: 0px 0px 20px #ddd;
//         z-index: 9999;
//         margin-left: -250px;
//         margin-top: 140px;
//         display: none;
//       }

//       .login-title {
//         width: 100%;
//         margin: 10px 0px 0px 0px;
//         text-align: center;
//         line-height: 40px;
//         height: 40px;
//         font-size: 18px;
//         position: relative;
//         /* 可以移动的标志 */
//         cursor: move;
//         -moz-user-select: none;
//         /*火狐*/
//         -webkit-user-select: none;
//         /*webkit浏览器*/
//         -ms-user-select: none;
//         /*IE10*/
//         -khtml-user-select: none;
//         /*早期浏览器*/
//         user-select: none;
//       }

//       .login-input-content {
//         margin-top: 20px;
//       }

//       .login-button {
//         width: 50%;
//         margin: 30px auto 0px auto;
//         line-height: 40px;
//         font-size: 14px;
//         border: #ebebeb 1px solid;
//         text-align: center;
//       }

//       .login-bg {
//         width: 100%;
//         height: 100%;
//         position: fixed;
//         top: 0px;
//         left: 0px;
//         background: #000000;
//         filter: alpha(opacity=30);
//         -moz-opacity: 0.3;
//         -khtml-opacity: 0.3;
//         opacity: 0.3;
//         display: none;
//       }

//       a {
//         text-decoration: none;
//         color: #000000;
//       }

//       .login-button a {
//         display: block;
//       }

//       .login-input input.list-input {
//         float: left;
//         line-height: 35px;
//         height: 35px;
//         width: 350px;
//         border: #ebebeb 1px solid;
//         text-indent: 5px;
//       }

//       .login-input {
//         overflow: hidden;
//         margin: 0px 0px 20px 0px;
//       }

//       .login-input label {
//         float: left;
//         width: 90px;
//         padding-right: 10px;
//         text-align: right;
//         line-height: 35px;
//         height: 35px;
//         font-size: 14px;
//       }

//       .login-title span {
//         position: absolute;
//         font-size: 12px;
//         right: 12px;
//         top: 7px;
//         background: #ffffff;
//         border: #ebebeb solid 1px;
//         width: 40px;
//         height: 40px;
//         border-radius: 20px;
//       }

//       .container{
//         position: relative;
//         margin: 50px;
//         width: 800px;
//         height: 500px;
//       }
//     </style>
//   </head>

//   <body>
//     <div class="login-header">
//       <a id="link" href="javascript:void(0);">点击，弹出登录框</a>
//     </div>
//     <div id="container" class="container">
//       <div id="login" class="login">
//         <div id="title" class="login-title">
//           登录会员
//           <span
//             ><a id="closeBtn" href="javascript:void(0);" class="close-login"
//               >关闭</a
//             ></span
//           >
//         </div>
//         <div class="login-input-content">
//           <div class="login-input">
//             <label>用户名：</label>
//             <input
//               type="text"
//               placeholder="请输入用户名"
//               name="info[username]"
//               id="username"
//               class="list-input"
//             />
//           </div>
//           <div class="login-input">
//             <label>登录密码：</label>
//             <input
//               type="password"
//               placeholder="请输入登录密码"
//               name="info[password]"
//               id="password"
//               class="list-input"
//             />
//           </div>
//         </div>
//         <div id="loginBtn" class="login-button">
//           <a href="javascript:void(0);" id="login-button-submit">登录会员</a>
//         </div>
//       </div>
//     </div>
//     <!--登录框-->
//     <div id="bg" class="login-bg"></div>
//     <!--遮挡层-->
//     <script src="../common.js"></script>
//     <script>
//       // 获取超链接, 注册点击事件, 显示登录框和遮挡层
//       my$("link").onclick = function () {
//         my$("login").style.display = "block";
//         my$("bg").style.display = "block";
//       };

//       // 获取关闭按钮, 注册点击事件, 隐藏登录框和遮挡层
//       my$("closeBtn").onclick = function () {
//         my$("login").style.display = "none";
//         my$("bg").style.display = "none";
//       };

//       // 按下鼠标, 移动鼠标, 移动登录框
//       my$("title").onmousedown = function (e) {
//         var loginBox = my$("login");
//         // 获取鼠标点击时的初始坐标
//         var spaceX = e.clientX - loginBox.offsetLeft;
//         var spaceY = e.clientY - loginBox.offsetTop;

//         document.onmousemove = function (e) {
//           // 计算新的位置
//           var x = e.clientX - spaceX + 250;
//           var y = e.clientY - spaceY - 140;

//           // 边界检查
//           var minX = 250;
//           var minY = -140;
//           var maxX = my$('container').clientWidth - loginBox.offsetWidth + 250;
//           var maxY = my$('container').clientHeight - loginBox.offsetHeight - 140;

//           if (x < minX) x = minX;
//           if (x > maxX) x = maxX;
//           if (y < minY) y = minY;
//           if (y > maxY) y = maxY;

//           // 设置新的位置
//           loginBox.style.left = x + "px";
//           loginBox.style.top = y + "px";
//         };

//         document.onmouseup = function () {
//           document.onmousemove = null;
//         };
//       };
//     </script>
//   </body>
// </html>
