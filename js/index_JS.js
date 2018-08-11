function detectaUrl()
{
	//Detecção da url
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
		//Definição das Imagens - 1ª opção
		$("#pImg").attr("src","img/foto1G.jpg");
		$("#sImg").attr("src", "img/foto2P.jpeg");
		$("#tImg").attr("src", "img/foto3P.jpg");

		//definição do estilo - 1ª opção
		$(".align").css("float", "left");
		$(".align").css("padding", "1px 3px 0px 0px");
	}
	
	else if (url == 2)
	{	//Definição das Imagens - 2ª opção
		$("#pImg").attr("src", "img/foto1G.jpg");
		$("#sImg").attr("src", "img/foto2G.jpeg");
		$("#tImg").attr("src", "img/foto3G.jpg");
	}
	else if (url == 3)
	{	//Definição das Imagens - 3ª opção
		$("#pImg").attr("src", "img/foto1P.jpg");
		$("#sImg").attr("src", "img/foto2P.jpeg");
		$("#tImg").attr("src", "img/foto3P.jpg");

		//definição do estilo - 3ª opção
		$("img").css("float", "left");
		$("img").css("padding", "1px 5px 0px 5px");
	}
	
}

function opacidade()
{
	var pegaId;
	//definição de opcaidade 1ªImagem
		$("#pImg").mouseover(function(){
			$(this).css("opacity", "0.5");
			pegaId =this.id;
			setTimeout(function(){console.log(pegaId)}, 2000);
		});
		$("#pImg").mouseleave(function(){
			$(this).css("opacity", "1");
		});

	//definição de opcaidade 2ªImagem	
		$("#sImg").mouseover(function(){
			$(this).css("opacity", "0.5");
			pegaId =this.id;
			setTimeout(function(){console.log(pegaId)}, 2000);
		});
		$("#sImg").mouseleave(function(){
			$(this).css("opacity", "1");
		});

	//definição de opcaidade 3ªImagem
		$("#tImg").mouseover(function(){
			$(this).css("opacity", "0.5");
			pegaId =this.id;
			setTimeout(function(){console.log(pegaId)}, 2000);
		});
		$("#tImg").mouseleave(function(){
			$(this).css("opacity", "1");
		});

		//transição de opacidade
		$("img").css("transition-property", "opacity");
		$("img").css("transition-duration", "0.5s");
}