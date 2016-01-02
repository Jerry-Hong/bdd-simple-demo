Feature: 首頁搜尋
	In Order To 搜尋職缺
	As a 使用者
	I want to 搜尋到符合條件的結果

	@rex
	Scenario Outline: 看到資料結果
		Given 我去到首頁
		Given 輸入Keyword為<keyword>
		When 按搜尋
		Then Joblist看到N筆的結果為<result>

	Examples:
	|	keyword		|	result	|
	|	java			|	true	|
	|	護士		|	true	|
	|	查無資料	|	false	|
