window.onload=function edit(){
	var row=document.getElementsByClassName("row");
	var lesson=document.getElementsByClassName("lesson");
	var edit_btn=document.getElementsByClassName("edit_btn");
	for(var i=0;i<edit_btn.length;i++){
		edit_btn[i].setAttribute("index",i);		
		edit_btn[i].onclick=function(){
			var index=this.getAttribute("index");
			var initialValue=lesson[index].firstChild.nodeValue;
			row[index].innerHTML="<input class='input_lesson' type='text' value='"+initialValue+"'/>\
									<button class='save_btn'>保存</button>\
									<button class='cancel_btn'>取消</button>";
			var input_lesson=document.getElementsByClassName("input_lesson")[0];
			var save_btn=document.getElementsByClassName("save_btn")[0];
			var cancel_btn=document.getElementsByClassName("cancel_btn")[0];		
			save_btn.onclick=function(){
				row[index].innerHTML="<span class='lesson'>"+input_lesson.value+"</span>\
										<button class='edit_btn'>\
											<img class='edit_img' src='images/pen.png' alt='edit' title='点击编辑'>\
										</button>";
				edit();
			}
			cancel_btn.onclick=function(){
				row[index].innerHTML="<span class='lesson'>"+initialValue+"</span>\
										<button class='edit_btn'>\
											<img class='edit_img' src='images/pen.png' alt='edit' title='点击编辑'>\
										</button>";
				edit();
			}
		}
	}
}