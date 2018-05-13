function make_footer(contents)
{
    var footer = document.createElement("footer");
    contents.forEach(function(col) {
	var container = document.createElement("div");
	var title = document.createElement("h1");
	title.appendChild(document.createTextNode(col.title));
	container.appendChild(title);
	var ul = document.createElement("ul");
	col.links.forEach(function(lnk) {
	    var li = document.createElement("li");
	    li.innerHTML = "<a href='#'>" + lnk + "</a>";
	    ul.appendChild(li);
	});
	container.appendChild(ul);
	footer.appendChild(container);
    });

    // attach the footer to the body:
    document.body.appendChild(footer);
}

// the footer's contents will be loaded from a JSON file, so
// we initialize a list here:
function FooterColumn(title, links)
{
    this.title = title;
    this.links = links;
}

var footer_contents = [new FooterColumn("About", ["Profile", "History"]),
		       new FooterColumn("Sport", ["Gymnastics", "Football", "Basket Ball"]),
		       new FooterColumn("Teaching", ["New Teacher", "Existing Teacher"]),
		       new FooterColumn("Student", ["New Student", "Existing Teacher"]),
		       new FooterColumn("Parent", ["Student info", "Meetings", "Participate"])
		      ];

make_footer(footer_contents);
