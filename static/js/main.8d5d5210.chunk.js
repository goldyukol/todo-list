(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports={taskWrapper:"TodoListTask_taskWrapper__2GXDY",taskBlock:"TodoListTask_taskBlock__3b92N",done:"TodoListTask_done__26FiC",taskTitle:"TodoListTask_taskTitle__FJzZV",taskButtons:"TodoListTask_taskButtons__2uWoT",taskCheckbox:"TodoListTask_taskCheckbox__3vuCh",taskChangeElement:"TodoListTask_taskChangeElement__doRB8",taskSelectPriority:"TodoListTask_taskSelectPriority__1VHIW",taskInfoBtnSave:"TodoListTask_taskInfoBtnSave__3gkdP",deleteBtn:"TodoListTask_deleteBtn__2Fw0I",taskWrapperWord:"TodoListTask_taskWrapperWord__oNMO-",taskSVG:"TodoListTask_taskSVG__34QxZ"}},20:function(e,t,a){e.exports={appHeader:"Main_appHeader__2bTrx",appUserInfo:"Main_appUserInfo__1Upmw",appError:"Main_appError__u2Nd0",appBtnComeBack:"Main_appBtnComeBack__LblHh",appUserInfoBtn:"Main_appUserInfoBtn__2PXwb",appTodoWrapper:"Main_appTodoWrapper__VOAcC",appLoader:"Main_appLoader__2iX9r"}},21:function(e,t,a){e.exports={filterActive:"TodoListFooter_filterActive__3_4K7",footerWrapper:"TodoListFooter_footerWrapper__b6yeT",footerBtns:"TodoListFooter_footerBtns__1iAmK",deleteTodo:"TodoListFooter_deleteTodo__eiVAW"}},25:function(e,t,a){e.exports={loginWrapper:"Login_loginWrapper__2TGEq",loginWord:"Login_loginWord__3MS77",loginForm:"Login_loginForm__1r5Eq",captcha:"Login_captcha__Iyo9k",loginError:"Login_loginError__2g_QH"}},32:function(e,t,a){e.exports={addNewTask:"AddNewItemForm_addNewTask__3ay4J",addNewTodo:"AddNewItemForm_addNewTodo__1V9og",error:"AddNewItemForm_error__1nkfx"}},39:function(e,t,a){e.exports={todoWrapper:"TodoList_todoWrapper__rWz_v",todoMain:"TodoList_todoMain__1AnzC"}},40:function(e,t,a){e.exports={titleSize:"TodoListTitle_titleSize__s_EM8",titleElement:"TodoListTitle_titleElement__3j0C5",deleteBtn:"TodoListTitle_deleteBtn__eulOG"}},55:function(e,t,a){e.exports={tasksBlock:"TodoListTasks_tasksBlock__1dY2O"}},56:function(e,t,a){e.exports=a.p+"static/media/Loader.2a8443db.svg"},58:function(e,t,a){e.exports=a(87)},63:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),s=a.n(o);a(63),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(26),c=a(51),l=a(8),d=a.n(l),p=a(13),u=a(27),h=a(2),m=a(36),f=a.n(m),T=f.a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"38fc507b-a755-4b56-8169-4ab234f48af9"}}),g=f.a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"38fc507b-a755-4b56-8169-4ab234f48af9"}}),k=function(e){return g.post("todo-lists",{title:e})},v=function(){return g.get("todo-lists")},E=function(e){return g.get("todo-lists/".concat(e,"/tasks"))},_=function(e,t){return g.post("todo-lists/".concat(e,"/tasks"),{title:t})},C=function(e,t,a){return g.put("todo-lists/".concat(e,"/tasks/").concat(t),a)},b=function(e){return g.delete("todo-lists/".concat(e))},O=function(e,t){return g.delete("todo-lists/".concat(e,"/tasks/").concat(t))},w=function(e,t){return g.put("todo-lists/".concat(e),{title:t})},y=function(e,t,a,n){return T.post("auth/login",{email:e,password:t,rememberMe:a,captcha:n})},S=function(){return T.delete("auth/login")},j=function(){return T.get("auth/me")},A=function(){return T.get("security/get-captcha-url")};function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function L(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(a,!0).forEach(function(t){Object(h.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var I="Todolist/TodoLists/SET_TASKS",N="Todolist/TodoLists/ADD_TASK",x={todolists:[],error:!1},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Todolist/TodoLists/SET_TODOLISTS":return L({},e,{todolists:t.todolists.map(function(e){return L({},e,{tasks:[]})})});case"Todolist/TodoLists/ADD_TODOLIST":return L({},e,{todolists:[t.newTodolist].concat(Object(u.a)(e.todolists))});case I:return L({},e,{todolists:e.todolists.map(function(e){return e.id===t.todolistId?L({},e,{tasks:t.tasks}):e})});case N:return L({},e,{todolists:e.todolists.map(function(e){return e.id===t.todolistId?L({},e,{tasks:[t.newTask].concat(Object(u.a)(e.tasks))}):e})});case"Todolist/TodoLists/CHANGE_TASK":return L({},e,{todolists:e.todolists.map(function(e){return e.id===t.todolistId?L({},e,{tasks:e.tasks.map(function(e){return e.id===t.taskId?L({},e,{},t.obj):e})}):e})});case"Todolist/TodoLists/CHANGE_HEADER":return L({},e,{todolists:e.todolists.map(function(e){return e.id===t.todolistId?L({},e,{},t.title):e})});case"Todolist/TodoLists/DETELE_TODOLIST":return L({},e,{todolists:e.todolists.filter(function(e){return e.id!==t.todolistId})});case"Todolist/TodoLists/DELETE_TASK":return L({},e,{todolists:e.todolists.map(function(e){return e.id===t.todolistId?L({},e,{tasks:e.tasks.filter(function(e){return e.id!==t.taskId})}):e})});case"Todolist/TodoLists/SHOW_ERROR":return L({},e,{error:!0});case"Todolist/TodoLists/SHOW_TODOLISTS":return L({},e,{error:!1})}return e},B=function(e){return{type:"Todolist/TodoLists/ADD_TODOLIST",newTodolist:e}},P=function(e,t){return{type:I,tasks:e,todolistId:t}},W=function(e,t){return{type:N,newTask:e,todolistId:t}},R=function(e,t,a){return{type:"Todolist/TodoLists/CHANGE_TASK",taskId:e,obj:t,todolistId:a}},H=function(e,t){return{type:"Todolist/TodoLists/CHANGE_HEADER",todolistId:e,title:t}},F=function(e){return{type:"Todolist/TodoLists/DETELE_TODOLIST",todolistId:e}},U=function(e,t){return{type:"Todolist/TodoLists/DELETE_TASK",taskId:e,todolistId:t}};function z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function V(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?z(a,!0).forEach(function(t){Object(h.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):z(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var G={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null,formError:"",initialize:!1},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Todolist/AuthReducer/SET_AUTH_USER_DATA":case"Todolist/AuthReducer/GET_CAPTCHA_URL_SUCCESS":return V({},e,{},t.data);case"Todolist/AuthReducer/SET_FORM_ERROR":return V({},e,{formError:t.error});case"Todolist/AuthReducer/INITIALIZE_SUCCESS":return V({},e,{initialize:!0});default:return e}},J=function(e,t,a,n){return{type:"Todolist/AuthReducer/SET_AUTH_USER_DATA",data:{userId:e,email:t,login:a,isAuth:n}}},Y=function(){return function(){var e=Object(p.a)(d.a.mark(function e(t){var a,n,r,o,s;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:0===(a=e.sent).data.resultCode&&(n=a.data.data,r=n.id,o=n.email,s=n.login,t(J(r,o,s,!0)));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},Z=function(){return function(){var e=Object(p.a)(d.a.mark(function e(t){var a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:a=e.sent,t({type:"Todolist/AuthReducer/GET_CAPTCHA_URL_SUCCESS",data:{captchaUrl:a.data.url}});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},X=a(52),q=Object(i.combineReducers)({app:M,auth:K}),Q=Object(i.createStore)(q,Object(X.composeWithDevTools)(Object(i.applyMiddleware)(c.a))),$=a(23),ee=a(4),te=a(5),ae=a(6),ne=a(7),re=a(24),oe=a(25),se=a.n(oe),ie=function(e){function t(){var e,a;Object(ee.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(te.a)(this,(e=Object(ae.a)(t)).call.apply(e,[this].concat(o)))).state={email:"",password:"",rememberMe:!1,captcha:""},a.sendLoginData=function(){a.props.loginTC(a.state.email,a.state.password,a.state.rememberMe,a.state.captcha)},a.render=function(){return a.props.isAuth?r.a.createElement(re.a,{to:"/"}):r.a.createElement("div",{className:se.a.loginWrapper},r.a.createElement("div",{className:se.a.loginWord},r.a.createElement("p",null,"\u0427\u0442\u043e\u0431\u044b \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0438 \u043f\u0440\u043e\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0433\u043e \u0430\u043a\u043a\u0430\u043d\u0443\u0442\u0430:"),r.a.createElement("p",null,"Email: free@samuraijs.com"),r.a.createElement("p",null,"Password: free")),r.a.createElement("div",{className:se.a.loginForm},r.a.createElement("span",null,"Login"),r.a.createElement("div",{className:se.a.loginError},a.props.formError),r.a.createElement("input",{className:se.a.loginInput,type:"email",placeholder:"email",onChange:function(e){return a.setState({email:e.currentTarget.value})}}),r.a.createElement("input",{className:se.a.loginInput,type:"password",placeholder:"password",onChange:function(e){return a.setState({password:e.currentTarget.value})}}),a.props.captchaUrl&&r.a.createElement("img",{className:se.a.captcha,src:a.props.captchaUrl}),a.props.captchaUrl&&r.a.createElement("input",{onChange:function(e){return a.setState({captcha:e.currentTarget.value})},placeholder:"Write symbols with image",name:"captcha"}),r.a.createElement("button",{onClick:a.sendLoginData},"Login")))},a}return Object(ne.a)(t,e),t}(r.a.Component),ce=Object($.b)(function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl,formError:e.auth.formError}},{loginTC:function(e,t,a,n){return function(){var r=Object(p.a)(d.a.mark(function r(o){var s;return d.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,y(e,t,a,n);case 2:(s=r.sent).data.rememberMe&&localStorage.setItem("stringToken",s.data.token),0===s.data.resultCode?o(Y()):1===s.data.resultCode?o({type:"Todolist/AuthReducer/SET_FORM_ERROR",error:s.data.messages.join()}):10===s.data.resultCode&&o(Z());case 5:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}()}})(ie),le=a(9),de=a(20),pe=a.n(de),ue=a(39),he=a.n(ue),me=a(40),fe=a.n(me),Te=function(e){function t(){var e,a;Object(ee.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(te.a)(this,(e=Object(ae.a)(t)).call.apply(e,[this].concat(o)))).state={editMode:!1,title:a.props.title,error:!1},a.activateEditMode=function(){a.setState({editMode:!0})},a.deactivateEditMode=function(){var e=a.state.title;""===e?a.setState({error:!0}):(a.setState({error:!1,title:"",editMode:!1}),a.props.changeHeaderTitleTC(e))},a.changeHeader=function(e){e.currentTarget.value.length>55?a.setState({error:!0}):a.setState({title:e.currentTarget.value,error:!1})},a.render=function(){return r.a.createElement("div",null,r.a.createElement("div",null,a.state.editMode?r.a.createElement("input",{onChange:a.changeHeader,autoFocus:!0,onBlur:a.deactivateEditMode,value:a.state.title,className:fe.a.titleElement}):r.a.createElement("h3",{onDoubleClick:a.activateEditMode,className:fe.a.titleSize},a.props.title)))},a}return Object(ne.a)(t,e),t}(r.a.Component),ge=a(32),ke=a.n(ge),ve=function(e){function t(){var e,a;Object(ee.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(te.a)(this,(e=Object(ae.a)(t)).call.apply(e,[this].concat(o)))).state={error:!1,title:""},a.onAddItemButtonClick=function(){var e=a.state.title;""===e?a.setState({error:!0}):(a.setState({error:!1,title:""}),a.props.addItem(e))},a.changeOnKeyPress=function(e){"Enter"===e.key&&a.onAddItemButtonClick()},a.changeValueTitle=function(e){e.currentTarget.value.length>100?a.setState({error:!0}):a.setState({title:e.currentTarget.value,error:!1})},a.render=function(){var e="addNewTask"===a.props.style?"".concat(ke.a.addNewTask):"addNewTodo"===a.props.style?"".concat(ke.a.addNewTodo):"",t=!0===a.state.error?"".concat(ke.a.error," ").concat(e):"".concat(e);return r.a.createElement("div",{className:t},r.a.createElement("div",{className:e},r.a.createElement("input",{type:"text",placeholder:a.props.placeholder,onKeyPress:a.changeOnKeyPress,className:e,value:a.state.title,onChange:a.changeValueTitle}),r.a.createElement("button",{onClick:a.onAddItemButtonClick},"ADD")))},a}return Object(ne.a)(t,e),t}(r.a.Component),Ee=a(55),_e=a.n(Ee),Ce=a(10),be=a.n(Ce),Oe=a(57),we=function(e){function t(){var e,a;Object(ee.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(te.a)(this,(e=Object(ae.a)(t)).call.apply(e,[this].concat(o)))).render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("span",null,"Task name:"),r.a.createElement("input",{className:be.a.taskChangeElement,onChange:a.props.onTitleChanged,autoFocus:!0,value:a.props.title})),r.a.createElement("div",null,r.a.createElement("span",null,"Description:"),r.a.createElement("textarea",{className:be.a.taskChangeElement,onChange:a.props.onDescriptionChanged,value:a.props.description})),r.a.createElement("div",null,r.a.createElement("span",null,"Priority:"),r.a.createElement(Oe.a,{options:[{value:0,label:"Low"},{value:1,label:"Middle"},{value:2,label:"Hight"},{value:3,label:"Urgently"},{value:4,label:"Later"}],onChange:a.props.handleChange,className:be.a.taskSelectPriority,value:a.props.selectedOption,onBlur:a.props.deactivateEditMode})),r.a.createElement("div",null,r.a.createElement("span",null,"Created by: "),r.a.createElement("input",{className:be.a.taskChangeElement,type:"date",onChange:a.props.changeStartDate})),r.a.createElement("div",null,r.a.createElement("span",null,"Deadline: "),r.a.createElement("input",{className:be.a.taskChangeElement,type:"date",onChange:a.props.changeDeadline})),r.a.createElement("button",{className:be.a.taskInfoBtnSave,onClick:a.props.deactivateEditMode},"Save"))},a}return Object(ne.a)(t,e),t}(r.a.Component),ye=a(33),Se=a.n(ye),je=function(e){function t(){var e,a;Object(ee.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(te.a)(this,(e=Object(ae.a)(t)).call.apply(e,[this].concat(o)))).render=function(){var e=a.props.task.startDate?Se()(a.props.task.startDate,"longDate"):"set start date",t=a.props.task.deadline?Se()(a.props.task.deadline,"longDate"):"set deadline",n=Se()(a.props.task.addedDate,"longDate"),o="";switch(a.props.task.priority){case 0:o="Low";break;case 1:o="Middle";break;case 2:o="Hight";break;case 3:o="Urgently";break;case 4:o="Later"}return r.a.createElement("div",{className:be.a.taskWrapperWord},r.a.createElement("div",{className:be.a.taskButtons},r.a.createElement("a",{onClick:a.props.deleteTask},r.a.createElement("div",{className:be.a.taskSVG},r.a.createElement("svg",{height:"15px",viewBox:"0 0 512 512",width:"15px",fill:"#c30202",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"m176.8125 351.1875c-4.097656 0-8.195312-1.554688-11.308594-4.691406-6.25-6.25-6.25-16.382813 0-22.632813l158.378906-158.402343c6.25-6.25 16.382813-6.25 22.632813 0 6.253906 6.25 6.253906 16.382812 0 22.636718l-158.378906 158.398438c-3.132813 3.136718-7.230469 4.691406-11.324219 4.691406zm0 0"}),r.a.createElement("path",{d:"m335.1875 351.1875c-4.09375 0-8.191406-1.554688-11.304688-4.691406l-158.378906-158.378906c-6.25-6.25-6.25-16.382813 0-22.632813 6.25-6.253906 16.382813-6.253906 22.632813 0l158.378906 158.398437c6.253906 6.25 6.253906 16.382813 0 22.632813-3.132813 3.117187-7.230469 4.671875-11.328125 4.671875zm0 0"}),r.a.createElement("path",{d:"m453.332031 512h-394.664062c-32.363281 0-58.667969-26.304688-58.667969-58.667969v-394.664062c0-32.363281 26.304688-58.667969 58.667969-58.667969h394.664062c32.363281 0 58.667969 26.304688 58.667969 58.667969v394.664062c0 32.363281-26.304688 58.667969-58.667969 58.667969zm-394.664062-480c-14.699219 0-26.667969 11.96875-26.667969 26.667969v394.664062c0 14.699219 11.96875 26.667969 26.667969 26.667969h394.664062c14.699219 0 26.667969-11.96875 26.667969-26.667969v-394.664062c0-14.699219-11.96875-26.667969-26.667969-26.667969zm0 0"})))),r.a.createElement("a",{onClick:a.props.activateEditMode},r.a.createElement("div",{className:be.a.taskSVG},r.a.createElement("svg",{height:"15px",viewBox:"0 -1 401.52289 401",width:"15px",fill:"blue",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"m370.589844 250.972656c-5.523438 0-10 4.476563-10 10v88.789063c-.019532 16.5625-13.4375 29.984375-30 30h-280.589844c-16.5625-.015625-29.980469-13.4375-30-30v-260.589844c.019531-16.558594 13.4375-29.980469 30-30h88.789062c5.523438 0 10-4.476563 10-10 0-5.519531-4.476562-10-10-10h-88.789062c-27.601562.03125-49.96875 22.398437-50 50v260.59375c.03125 27.601563 22.398438 49.96875 50 50h280.589844c27.601562-.03125 49.96875-22.398437 50-50v-88.792969c0-5.523437-4.476563-10-10-10zm0 0"}),r.a.createElement("path",{d:"m376.628906 13.441406c-17.574218-17.574218-46.066406-17.574218-63.640625 0l-178.40625 178.40625c-1.222656 1.222656-2.105469 2.738282-2.566406 4.402344l-23.460937 84.699219c-.964844 3.472656.015624 7.191406 2.5625 9.742187 2.550781 2.546875 6.269531 3.527344 9.742187 2.566406l84.699219-23.464843c1.664062-.460938 3.179687-1.34375 4.402344-2.566407l178.402343-178.410156c17.546875-17.585937 17.546875-46.054687 0-63.640625zm-220.257812 184.90625 146.011718-146.015625 47.089844 47.089844-146.015625 146.015625zm-9.40625 18.875 37.621094 37.625-52.039063 14.417969zm227.257812-142.546875-10.605468 10.605469-47.09375-47.09375 10.609374-10.605469c9.761719-9.761719 25.589844-9.761719 35.351563 0l11.738281 11.734375c9.746094 9.773438 9.746094 25.589844 0 35.359375zm0 0"}))))),r.a.createElement("span",{className:be.a.taskTitle},a.props.task.title),r.a.createElement("p",null,"Description: ",r.a.createElement("span",null,a.props.task.description?a.props.task.description:"set description")),r.a.createElement("p",null,"Priority: ",r.a.createElement("span",null,o||"set priority")),r.a.createElement("p",null,"Added date: ",r.a.createElement("span",null,n||"no date added")),r.a.createElement("p",null,"Start date: ",r.a.createElement("span",null,e||"set start date")),r.a.createElement("p",null,"Deadline: ",r.a.createElement("span",null,t||"set deadline")),r.a.createElement("p",null,"Done: ",r.a.createElement("input",{onChange:a.props.onChangeStatus,type:"checkbox",checked:a.props.task.status,className:be.a.taskCheckbox})))},a}return Object(ne.a)(t,e),t}(r.a.Component),Ae=function(e){function t(){var e,a;Object(ee.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(te.a)(this,(e=Object(ae.a)(t)).call.apply(e,[this].concat(o)))).state={editMode:!1,title:a.props.task.title,description:a.props.task.description,error:!1,selectedOption:null},a.onChangeStatus=function(e){var t=e.currentTarget.checked?2:0;a.props.changeStatus(a.props.task.id,t)},a.activateEditMode=function(){a.setState({editMode:!0})},a.deactivateEditMode=function(){a.props.changeTitle(a.props.task.id,a.state.title),a.props.changeDescription(a.props.task.id,a.state.description),a.setState({editMode:!1})},a.onTitleChanged=function(e){a.setState({title:e.currentTarget.value})},a.onDescriptionChanged=function(e){a.setState({description:e.currentTarget.value})},a.changeStartDate=function(e){a.props.changeStartDate(a.props.task.id,e.currentTarget.value)},a.changeDeadline=function(e){a.props.changeDeadline(a.props.task.id,e.currentTarget.value)},a.deleteTask=function(){a.props.deleteTask(a.props.task.id)},a.handleChange=function(e){a.setState({selectedOption:e},function(){return a.props.changePriority(a.props.task.id,e.value)})},a.render=function(){var e=a.props.task.status?"".concat(be.a.taskBlock," ").concat(be.a.done):"".concat(be.a.taskBlock);return r.a.createElement("div",{className:be.a.taskWrapper},r.a.createElement("div",{className:e},a.state.editMode?r.a.createElement(we,{onTitleChanged:a.onTitleChanged,onDescriptionChanged:a.onDescriptionChanged,title:a.state.title,description:a.state.description,handleChange:a.handleChange,selectedOption:a.state.selectedOption,deactivateEditMode:a.deactivateEditMode,changeStartDate:a.changeStartDate,changeDeadline:a.changeDeadline}):r.a.createElement(je,{deleteTask:a.deleteTask,activateEditMode:a.activateEditMode,task:a.props.task,onChangeStatus:a.onChangeStatus})))},a}return Object(ne.a)(t,e),t}(r.a.Component),De=function(e){function t(){var e,a;Object(ee.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(te.a)(this,(e=Object(ae.a)(t)).call.apply(e,[this].concat(o)))).render=function(){var e=a.props.tasks.map(function(e){return r.a.createElement(Ae,{key:e.id,task:e,changeStatus:a.props.changeStatus,changeTitle:a.props.changeTitle,deleteTask:a.props.deleteTask,changePriority:a.props.changePriority,changeDescription:a.props.changeDescription,changeStartDate:a.props.changeStartDate,changeDeadline:a.props.changeDeadline})});return r.a.createElement("div",{className:_e.a.tasksBlock},e)},a}return Object(ne.a)(t,e),t}(r.a.Component),Le=a(21),Ie=a.n(Le),Ne=function(e){function t(){var e,a;Object(ee.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(te.a)(this,(e=Object(ae.a)(t)).call.apply(e,[this].concat(o)))).onAllFilterClick=function(){a.props.changeFilter("All")},a.onCompletedFilterClick=function(){a.props.changeFilter("Completed")},a.onActiveFilterClick=function(){a.props.changeFilter("Active")},a.render=function(){var e="All"===a.props.filterValue?"".concat(Ie.a.filterActive):"".concat(Ie.a.footerBtns),t="Completed"===a.props.filterValue?"".concat(Ie.a.filterActive):"".concat(Ie.a.footerBtns),n="Active"===a.props.filterValue?"".concat(Ie.a.filterActive):"".concat(Ie.a.footerBtns);return r.a.createElement("div",{className:Ie.a.footerWrapper},r.a.createElement("div",{onClick:a.onAllFilterClick,className:e},"All"),r.a.createElement("div",{onClick:a.onCompletedFilterClick,className:t},"Completed"),r.a.createElement("div",{onClick:a.onActiveFilterClick,className:n},"Active"),r.a.createElement("div",{onClick:a.props.deleteTodolist,className:Ie.a.deleteTodo},"Delete"))},a}return Object(ne.a)(t,e),t}(r.a.Component),xe=function(e){function t(){var e,a;Object(ee.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(te.a)(this,(e=Object(ae.a)(t)).call.apply(e,[this].concat(o)))).state={filterValue:"All"},a.addItem=function(e){a.props.addTaskTC(a.props.id,e)},a.changeFilter=function(e){a.setState({filterValue:e})},a.changeTaskTC=function(e,t){a.props.changeTaskTC(e,t,a.props.id)},a.changeStatus=function(e,t){a.changeTaskTC(e,{status:t})},a.changeTitle=function(e,t){a.changeTaskTC(e,{title:t})},a.changePriority=function(e,t){a.changeTaskTC(e,{priority:t})},a.changeDescription=function(e,t){a.changeTaskTC(e,{description:t})},a.changeStartDate=function(e,t){a.changeTaskTC(e,{startDate:t})},a.changeDeadline=function(e,t){a.changeTaskTC(e,{deadline:t})},a.changeHeaderTitleTC=function(e){a.props.changeHeaderTC(a.props.id,e)},a.deleteTodolist=function(){a.props.deleteTodolistTC(a.props.id)},a.deleteTaskTC=function(e){a.props.deleteTaskTC(e,a.props.id)},a.render=function(){var e=a.props.tasks,t=void 0===e?[]:e;return r.a.createElement("div",{className:he.a.todoWrapper},r.a.createElement("div",null,r.a.createElement(Te,{title:a.props.title,changeHeaderTitleTC:a.changeHeaderTitleTC,id:a.props.id}),r.a.createElement(ve,{addItem:a.addItem,style:"addNewTask",placeholder:"new task"})),r.a.createElement("div",{className:he.a.todoMain},r.a.createElement(De,{changeStatus:a.changeStatus,changeTitle:a.changeTitle,changePriority:a.changePriority,changeDescription:a.changeDescription,changeStartDate:a.changeStartDate,changeDeadline:a.changeDeadline,deleteTask:a.deleteTaskTC,tasks:t.filter(function(e){return"All"===a.state.filterValue||("Active"===a.state.filterValue?0===e.status:"Completed"===a.state.filterValue?2===e.status:void 0)})}),r.a.createElement(Ne,{changeFilter:a.changeFilter,filterValue:a.state.filterValue,deleteTodolist:a.deleteTodolist})))},a}return Object(ne.a)(t,e),Object(le.a)(t,[{key:"componentDidMount",value:function(){this.props.getTasksTC(this.props.id)}}]),t}(r.a.Component),Me=Object($.b)(null,{getTasksTC:function(e){return function(){var t=Object(p.a)(d.a.mark(function t(a){var n,r;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(e);case 2:n=t.sent,r=n.data.items,a(P(r,e));case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},addTaskTC:function(e,t){return function(){var a=Object(p.a)(d.a.mark(function a(n){var r,o;return d.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,_(e,t);case 2:r=a.sent,o=r.data.data.item,1===r.data.resultCode?n({type:"Todolist/TodoLists/SHOW_ERROR"}):n(W(o,e));case 5:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()},changeTaskTC:function(e,t,a){return function(n,r){r().app.todolists.find(function(e){return e.id===a}).tasks.forEach(function(){var r=Object(p.a)(d.a.mark(function r(o){var s;return d.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(o.id!==e){r.next=6;break}return s=L({},o,{},t),r.next=4,C(a,e,s);case 4:r.sent,n(R(e,t,a));case 6:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}())}},deleteTodolistTC:function(e){return function(){var t=Object(p.a)(d.a.mark(function t(a){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(e);case 2:t.sent,a(F(e));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},deleteTaskTC:function(e,t){return function(){var a=Object(p.a)(d.a.mark(function a(n){return d.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,O(t,e);case 2:a.sent,n(U(e,t));case 4:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()},changeHeaderTC:function(e,t){return function(){var a=Object(p.a)(d.a.mark(function a(n){return d.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,w(e,t);case 2:a.sent,n(H(e,{title:t}));case 4:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}})(xe),Be=a(56),Pe=a.n(Be),We=function(e){function t(){var e,a;Object(ee.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(te.a)(this,(e=Object(ae.a)(t)).call.apply(e,[this].concat(o)))).nextTodoListId=0,a.state={todolists:[]},a.onAddTodoListClick=function(e){a.props.addTodolistTC(e)},a.showTodolists=function(){a.props.showTodolistsAC()},a.render=function(){return a.props.initialize?a.props.isAuth?r.a.createElement("div",{className:pe.a.appWrapper},a.props.error?r.a.createElement("div",{className:pe.a.appError},"The maximum number of to-do lists is not more than 10, and tasks in the to-do list are not more than 100",r.a.createElement("button",{className:pe.a.appBtnComeBack,onClick:a.showTodolists},"Come back")):r.a.createElement("div",null,r.a.createElement("div",{className:pe.a.appHeader},r.a.createElement("h1",null,"To-do list app"),r.a.createElement(ve,{addItem:a.onAddTodoListClick,style:"addNewTodo",placeholder:"new to-do list"}),r.a.createElement("div",{className:pe.a.appUserInfo},r.a.createElement("div",null,"id: ",a.props.userId),r.a.createElement("div",null,"login: ",a.props.login),r.a.createElement("button",{onClick:a.props.logoutTC,className:pe.a.appUserInfoBtn},"Logout"))),r.a.createElement("div",{className:pe.a.appTodoWrapper},a.props.todolists.map(function(e){return r.a.createElement(Me,{key:e.id,id:e.id,title:e.title,tasks:e.tasks})})))):r.a.createElement(re.a,{to:"/login"}):r.a.createElement("img",{className:pe.a.appLoader,src:Pe.a})},a}return Object(ne.a)(t,e),Object(le.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeAppTC(),this.props.getTodolistsTC()}}]),t}(r.a.Component),Re=Object($.b)(function(e){return{todolists:e.app.todolists,error:e.app.error,isAuth:e.auth.isAuth,userId:e.auth.userId,login:e.auth.login,initialize:e.auth.initialize}},{getTodolistsTC:function(){return function(){var e=Object(p.a)(d.a.mark(function e(t){var a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:a=e.sent,t({type:"Todolist/TodoLists/SET_TODOLISTS",todolists:a.data});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},addTodolistTC:function(e){return function(){var t=Object(p.a)(d.a.mark(function t(a){var n,r;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(e);case 2:n=t.sent,r=n.data.data.item,1===n.data.resultCode?a({type:"Todolist/TodoLists/SHOW_ERROR"}):a(B(r));case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},showTodolistsAC:function(){return{type:"Todolist/TodoLists/SHOW_TODOLISTS"}},logoutTC:function(){return function(){var e=Object(p.a)(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:0===e.sent.data.resultCode&&t(J(null,null,null,!1));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},initializeAppTC:function(){return function(){var e=Object(p.a)(d.a.mark(function e(t){var a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(Y());case 2:a=e.sent,Promise.all([a]),t({type:"Todolist/AuthReducer/INITIALIZE_SUCCESS"});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(We),He=function(e){function t(){var e,a;Object(ee.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(te.a)(this,(e=Object(ae.a)(t)).call.apply(e,[this].concat(o)))).render=function(){return r.a.createElement("div",null,r.a.createElement(re.b,{path:"/login",component:ce}),r.a.createElement(re.b,{exact:!0,path:"/",component:Re}))},a}return Object(ne.a)(t,e),t}(r.a.Component),Fe=a(28);s.a.render(r.a.createElement(Fe.a,null,r.a.createElement($.a,{store:Q},r.a.createElement(He,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[58,1,2]]]);
//# sourceMappingURL=main.8d5d5210.chunk.js.map