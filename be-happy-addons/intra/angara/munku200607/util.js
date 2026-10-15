/*
    util.js @ Angara.Net
 */

function popImg( s, w, h, t )
{
	var WADD = 28;
	var HADD = 24;

	if( t ) HADD += 13;

	var wnd = window.open( "", "_blank", "width="+(w+WADD)+",height="+(h+HADD)
		+",location=no,menubar=no,status=no,toolbar=no,resize=no");
	var d = wnd.document; d.open();
	d.write("<html><head><title>"+window.popupTitle+"</title></head>" );
	d.write("<body style='padding: 0px; margin: 0px; background-color: #fff;'>");
	d.write("<div style='text-align: center; padding: 10px; margin: 0px;'>" );
	d.write("<img src=../Angara_Net%20-%20&#1054;&#1090;&#1095;&#1077;&#1090;%20&#1086;%20&#1087;&#1086;&#1093;&#1086;&#1076;&#1077;%20&#1074;%20&#1088;&#1072;&#1081;&#1086;&#1085;&#1077;%20&#1052;&#1091;&#1085;&#1082;&#1091;-&#1057;&#1072;&#1088;&#1076;&#1099;&#1082;%20&#1074;%20&#1080;&#1102;&#1083;&#1077;%202006.files/%22%22+s+%22/%22 width="+w+" height="+h+" border=1 alt=\"\" onclick='window.close()' />" );
	if( t ) 
		d.write("<div style=\"font: bold 13px Verdana, sans-serif;"+
			"+"+" padding-top: 3px; color: #336666; letter-spacing: 1px;\">"
			+t+"</div>"); 
	d.write("</div></body></html>"); 
	d.close(); wnd.focus(); return false;
}

function addBookmark( url, title )
{
	if( window.sidebar ) { // Firefox
		window.sidebar.addPanel( title, url, "" );
	} 
	else if( document.all ) { // MSIE
		window.external.AddFavorite( url, title );
	}
}

/* eof */
