function make_footer()
{
    window.alert("Loading footer");
    var footer = document.createElement("footer");
 
    document.body.appendChild(footer);
}

// the footer's contents will be loaded from a JSON file, so
// we initialize a list here:
function FooterColumn(title, links)
{
    this.title = title;
    this.links = links;
}

window.alert("Attempt to load footer ... ");
var footer_contents = [new FooterColumn("About", ["Profile", "History"]),
		       new FooterColumn("Sport", ["Gymnastics", "Football", "Basket Ball"]),
		       new FooterColumn("Teaching", ["New Teacher", "Existing Teacher"]),
		       new FooterColumn("Student", ["New Student", "Existing Teacher"]),
		       new FooterColumn("Parent", ["Student info", "Meetings", "Participate"])
		      ];

make_footer(footer_contents);
