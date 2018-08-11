function detectaUrl()
{
	var url = location.search;
	
	if (url == "?option=1")
	{
		url = 1;		
	}
	else if (url == "?option=2") 
	{
		url = 2;
	}
	else if (url == "?option=3")
	{
		url = 3;
	}
	return url;
}
function defineImagem()
{
	var url = detectaUrl();
	opacidade();

	if (url == 1)
	{
		console.log(url);
		//Definição das Imagens
		$("#pImg").attr("src","img/foto1G.jpg");
		$("#sImg").attr("src", "img/foto2P.jpeg");
		$("#tImg").attr("src", "img/foto3P.jpg");

		//definição do estilo
		$(".align").css("float", "left");
		$(".align").css("padding", "1px 3px 0px 0px");
	}
	
	else if (url == 2)
	{
		$("#pImg").attr("src", "img/foto1G.jpg");
		$("#sImg").attr("src", "img/foto2G.jpeg");
		$("#tImg").attr("src", "img/foto3G.jpg");
	}
	else if (url == 3)
	{
		$("#pImg").attr("src", "img/foto1P.jpg");
		$("#sImg").attr("src", "img/foto2P.jpeg");
		$("#tImg").attr("src", "img/foto3P.jpg");

		$("img").css("float", "left");
		$("img").css("padding", "1px 5px 0px 5px");
	}
	
}

function opacidade()
{
	//definição de opcaidade
		$("#pImg").mouseover(function(){
			$(this).css("opacity", "0.5");
			setTimeout(console.log(this.id), 2000);
		});
		$("#pImg").mouseleave(function(){
			$(this).css("opacity", "1");
		});

		$("#sImg").mouseover(function(){
			$(this).css("opacity", "0.5");
			setTimeout(console.log(this.id), 2000);
		});
		$("#sImg").mouseleave(function(){
			$(this).css("opacity", "1");
		});

		$("#tImg").mouseover(function(){
			$(this).css("opacity", "0.5");
			setTimeout(console.log(this.id), 2000);
		});
		$("#tImg").mouseleave(function(){
			$(this).css("opacity", "1");
		});

		//transição 
		$("img").css("transition-property", "opacity");
		$("img").css("transition-duration", "0.5s");
}