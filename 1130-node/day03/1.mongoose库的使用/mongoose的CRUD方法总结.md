 -Create

	   模型对象.create(文档对象，回调函数)
	   模型对象.create(文档对象) //返回值是一个Promise对象
 -Read

	   模型对象.find(查询条件[,投影],回调函数)不管有没有数据，都返回一个数组
	   模型对象.findOne(查询条件[,投影])找到了返回一个对象，没找到返回null
 -Update

	  模型对象.updateOne(查询条件,要更新的内容[,配置对象])
	  模型对象.updateMany(查询条件,要更新的内容[,配置对象])
	  备注：存在update方法，但是即将废弃，查询条件匹配到多个时，依然只修改一个，强烈建议用updateOne或updateMany
 -Delete

	   模型对象.deleteOne(查询条件)
	   模型对象.deleteMany(查询条件)
	   备注：没有delete方法，会报错！
	   
备注：以上所有方法，都可以省略掉回调函数，但是值得注意的是，省略回调之后，会自动返回一个Promise实例。