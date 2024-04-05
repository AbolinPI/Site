const Professions = [
	{Name:"Копирайтер", Link:"/copywriter.html"},
	{Name:"Back-end разработчик", Link:"/backend.html"},
	{Name:"Специалист по кибербезопасности", Link:"/cybersafety.html"},
	{Name:"Администратор баз данных", Link:"/dataadmin.html"},
	{Name:"Front-end разработчик", Link:"/frontend.html"},
	{Name:"Специалист по машинному обучению", Link:"/machinelearning.html"},
	{Name:"Оператор ЭВМ", Link:"/operator.html"},
	{Name:"Разработчик роботов", Link:"/robottechnician.html"},
	{Name:"Системный администратор", Link:"/sysadmin.html"},
	{Name:"Наладчик программного и аппаратного обеспечения", Link:"/technician.html"},
	{Name:"Тестировщик", Link:"/tester.html"},
	{Name:"Веб-дизайнер", Link:"/webdesigner.html"},
	]

SearchResult = document.getElementById("search-list");

function searchProfessions(SearchedProfession)
{
	SearchResult.innerHTML = "";
	if (SearchedProfession == "")
	{
		for (Profession of Professions)
		{
			SearchResult.innerHTML = SearchResult.innerHTML +
			`<a href=${"./pages"+Profession.Link}>${Profession.Name}</a>`
		}
	}
	else
	{
		for (Profession of Professions)
		{
			if (Profession.Name.includes(SearchedProfession))
			{
				SearchResult.innerHTML = SearchResult.innerHTML +
				`<a href=${"./pages"+Profession.Link}>${Profession.Name}</a>`
			}
		}
	}
}

searchProfessions("");
