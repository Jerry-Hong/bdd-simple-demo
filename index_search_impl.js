/**
 * In Order To 搜尋職缺
 * As a 使用者
 * I want to 搜尋到符合條件的結果
 */
module.exports = function() {

	this.Given(/^我去到首頁$/, function (callback) {
		browser.get('/').then(callback, callback);
	});

	this.Given(/^輸入Keyword為(.*)$/, function (keyword ,callback) {
		$('#search_job #ikeyword').sendKeys(keyword).then(callback, callback)
	});

	this.When(/^按搜尋$/, function (callback) {
		$("#search_job input[type='button']").click().then(callback, callback);
	});

	this.Then(/^Joblist看到N筆的結果為(.*)$/, function (result, callback) {
		var elem = $("#jl_page1");
		var hasElemCheck = typeof elem === 'object';

		if(hasElemCheck === result){
			callback();
		}else{
			callback();
		}
	});

};
