//引用2个库
var React = require('react');//核心库
var ReactDOM = require('react-dom'); //提供与 DOM 相关的功能

var QuestionApp = require('./containers/QuestionApp'); //定义模板

var mainCom = ReactDOM.render( //将模板转为 HTML 语言，并插入指定的 DOM 节点
	<QuestionApp />,
	document.getElementById('app')
);
