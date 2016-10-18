require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';



//let yeomanImage = require('../images/yeoman.png');

//ES6语法
/*class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};*/

//获取图片相关的数据
var imageDatas = resuire('../data/imageDatas.json')

//拼接图片的URL，并根据该URL将图片require进来，对于只执行一次的代码
//采用自执行代码，将图片的数据require进来
imageDatas = (function genImageURL(imageDatasArr){
	//生成图片的URL
	for(var i = 0, j = imageDatasArr.length; i < j; i++){
		var singleImageData = imageDatasArr[i];

		var temp = '../images/' + singleImageData.fileName;
		singleImageData.imageURL = require(temp);

		imageDatasArr[i] = singleImageData;
	}
	return imageDatasArr;
})(imageDatas);


//处理所有的数据
var AppComponent = React.createClass({
	render : function(){
		var controllerUnits = [],   //控制单元的个数
			imgFigures = [];        //存储图片的内容

		//遍历图片的数据，将数据传入在ImgFigure组件中，并保存在imgFigures数组中
		imageDatas.forEach(function(value){    
			var temp = <ImgFigure data = {value}/>;   //传入data变量
			imgFigures.push(temp);
		});
		return (
			//imgFigures数组中的内容最后渲染在我们的页面中
			<section className = "stage">
				<section className = "img-sec">
					{imgFigures}
				</section>
				<nav class="controller-nav">
					{controllerUnits}
				</nav>
			</section>

			/*<div className="index">
			    <img src={yeomanImage} alt="Yeoman Generator" />
			    <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
		    </div>*/
		);
	}
});
 



//build photo-gallery  ES5的语法
var ImgFigure = React.createClass({
	render : function(){
		return (
			<figure>  //通过父组件传入的props集合获取里面的数据
				<img src = {this.props.data.imageURL} alt = {this.props.data.title} />     //图片标签,h5的新标签
				<figcaption>
					<h2>{this.props.data.title}</h2>
				</figcaption>   //图片题目
			</figure>
		);
	}
});





export default AppComponent;
