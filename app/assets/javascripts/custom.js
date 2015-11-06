
// Variaveis globais
var exibicao  = [],
	sequencia = [],
	temp = [],
	arraySequencia = [],
	arrayExibicao = [],
	arrayVariaveis = [],
	arrayMatematica = [
		Math.acos,
		Math.acosh,
		Math.asin,
		Math.asinh,
		Math.atan,
		Math.atan2, // x,y
		Math.atanh,
		Math.cbrt,
		Math.cos,
		Math.cosh,
		Math.erf,
		Math.erfc,
		Math.exp,
		Math.frexp,
		Math.gamma,
		Math.hypot, // x,y
		Math.exp,
		Math.ldexp, // fr, expo
		Math.lgamma,
		Math.log,
		Math.log,   // x,base
		Math.log10,
		Math.log2,
		Math.sin,
		Math.sinh,
		Math.sqrt,
		Math.tan,
		Math.tanh
	];

/* Scripts que não rodar assim que a pagina carregar*/
function onLoad(){
	//criaModal(); 	// Cria o primeiro Modal
	novaVariavel(); // Cria a primeira Variável (Jah q eh obrigatorio ter ao menos 1 variavel)
	$("#matematica").css("display","none"); // Cobre a div #Matematica (Que será do Step2)

	arraySequencia.push(new Array());
	arrayExibicao.push(new Array());
	temp.push(new Array());
}

function atualizaTexto(index){
	$("#exibeOperacao"+index).text(arrayExibicao[index].join(""));
}


/* Step 1 Stuffs */
var indexVariaveis = 0;
function removeVariavel(varIndex){
	if(indexVariaveis > 1){
		alert(""+indexVariaveis)
		// Remove o primeiro "fieldset" de Variável que estiver na div #Variaveis
		$("fieldset[data-index="+varIndex+"]").remove();
		$('#varList option[value="+varIndex+"]').empty();
		
		//indexVariaveis--; // Reduz o numero de variaveis
		arrayVariaveis.splice(varIndex,1); // Remove a variavel da arrayVariaveis
		// console.log(arrayVariaveis); // Mostra no Console (F12) a array como ficou ~DEBUG
	}
}

function novaVariavel(){
	// Constrói os novos campos
	var input = ""
	  + "<fieldset data-index='"+indexVariaveis+"'>"
	  + "  <legend> Variavel[#"+indexVariaveis+"]</legend>"
	  + "  <input type='text'   name='variavel["+indexVariaveis+"]'  placeholder='Nome'		 	required'/>"
 	  + "  <input type='number' name='valMinimo["+indexVariaveis+"]' placeholder='Valor Mínimo' required />"
 	  + "  <input type='number' name='valMaximo["+indexVariaveis+"]' placeholder='Valor Máximo' required />"
 	  + "  <button class='' type='button' onclick='removeVariavel("+indexVariaveis+")'>-</button>"
	  + "</fieldset>";

	// Adiciona os novos campos das variaveis na DIV #variaveis
	$("#variaveis").append(input);

	// Aumenta o contador de variaveis para criar os novos campos
	indexVariaveis++;
}

function addNome(object,varIndex,index){
		var option = "<option class='' value='"+object+"'>"+object.value+"</option>";
		$("#varList0").append(option); // Adiciona os campos das variaveis na Select
		variaveis = { "nome": object.value, "valMinimo": $("valMinimo["+varIndex+"]") };
}

function goToStep2(){
	// Localiza todos os fieldsets da pagina
	$('fieldset').each(

	    function(index){
	    	// Pega o indice das variaveis
			var itemIndex = $(this).attr("data-index");

			// Captura os valores do campo anterior
			var varNome = $("[name='variavel["+itemIndex+"]']").val(),
				varMin = $("[name='valMinimo["+itemIndex+"]']").val(),
				varMax = $("[name='valMaximo["+itemIndex+"]']").val();

			if(varNome==="" || varMin==="" || varMax===""){
				alert("Todos os campos são obrigatórios.");
				return false;
			}
			

			// Constrói o Objeto da "Variavel"
			var objVariavel = { "nome" : varNome , "minimo" : varMin , "maximo" : varMax , "valor" : 0 };
			console.log(JSON.stringify(objVariavel)); // Mostra o Objeto no Console (F12) ~DEBUG

			// Guarda em uma Array para uso futuro
			arrayVariaveis.push(objVariavel);
			// console.log(arrayVariaveis); // Mostra a array se formando no Console (F12) ~DEBUG
		}
	);

	$.each(arrayVariaveis, function( varIndex, obj ) {
		// Monta a lista de variaveis para a operação matematica
		var option = "<option class='' value='"+varIndex+"'>"+obj.nome+"</option>";
		$("#varList0").append(option); // Adiciona os campos das variaveis na DIV
	});
	

	// Esconde os campos de variaveis para evitar erro humano
	$("#variaveis").css("display","none");
	// Exibe os campos das operações matematicas
	$("#matematica").css("display","block");
}

/* Step 2 Stuffs */
function backToStep1(){
	$("#variaveis").css("display","block");
	$("#matematica").css("display","none");

	// Limpa sequencia matematica
	while(arraySequencia.length){ arraySequencia.pop(); }
	while(arrayExibicao.length) { arrayExibicao.pop();  }
	$("#exibeOperacao").text("");
}



function remSequencia(index){
	// arraySequencia[index].pop();

	var poped = arrayExibicao[index].pop();
	if(poped==")"||poped=="]"||poped=="}"){
		arrayExibicao[index].pop(); // Remove o Valor
		arrayExibicao[index].pop(); // Remove a Operação
	}
	atualizaTexto(index);
}








function addVariavel(index){
	var value = $("#varList"+index).val();
	var operacao = { "operador": "", "operando": value };
	switch(operacao.operando){
		case undefined:
			alert("Selecione uma Variavel");
			break;

		case "π":
			// arraySequencia[index].push(operacao);
			arrayExibicao[index].push(value);
			atualizaTexto(index);
			break;

		case "E":
			// arraySequencia[index].push(operacao);
			arrayExibicao[index].push(value);
			atualizaTexto(index);
			break;

		default:
			// arraySequencia[index].push(operacao);
			arrayExibicao[index].push(arrayVariaveis[value].nome);
			atualizaTexto(index);
			break;
	}
}

function addOperacao(index){
	var value = $("#mathList"+index).val(),
		txt = $("#mathList"+index).find(":selected").text(),
		operacao = { "operador": value, "operando1": "", "operando2": "" };
		txt = txt.substring(0, txt.length - 2);

	// Algo deu errado ou nada foi selecionado
	if(operacao.operador === undefined){
		alert("Selecione uma Operacao");

	// É uma operação matemática complexa
	} else if (!isNaN(operacao.operador)) {
		criaModal(operacao.operador,txt+"x)",index,"");
		// sequencia.push(operacao);
		arrayExibicao[index].push(txt);
		atualizaTexto(index);

	// É uma operação prioritaria
	} else if (operacao.operador=="()" || operacao.operador=="[]" || operacao.operador=="{}") {
		criaModal(operacao.operador,txt,index,operacao.operador.charAt(operacao.operador.length-1));
		// sequencia.push(operacao);
		arrayExibicao[index].push(operacao.operador.charAt(operacao.operador.length-2,1));
		atualizaTexto(index);

	// É uma operação matemática básica	
	} else {
		// sequencia.push(operacao);
		arrayExibicao[index].push(operacao.operador);
		atualizaTexto(index);
	}
}

function addValor(index){
	var value = $("#valorLivre"+index).val(),
		operacao = { "operador": "", "operando1": value, "operando2": "" };

	// arraySequencia[index].push(operacao);
	arrayExibicao[index].push(operacao.operando1);
	atualizaTexto(index);
}











var modalIndex = 1;
var modalOperacoes = [];
var quemChamou = [];
function criaModal(operacao, texto, indexAnterior, prioritaria){
	quemChamou.push(indexAnterior);
	// arraySequencia.push(new Array());
	arrayExibicao.push(new Array());
	if(prioritaria===")") prioritaria = 1;
	else if(prioritaria==="]") prioritaria = 2;
	else if(prioritaria==="}") prioritaria = 3;
	else prioritaria = 0;

	var modal = ''+
		'<div class="window" id="window'+modalIndex+'">'+
		'   <h4>'+texto+'</h4>'+
		'   <p>Construa a operacao que sera processada em x de '+texto+'</p>'+
		''+
		'	<select class="" name="varList'+modalIndex+'" id="varList'+modalIndex+'"></select>'+
		'	<button class="" type="button" onclick="addVariavel('+modalIndex+')">+</button><br />'+
		''+
		'	<select class="" name="mathList'+modalIndex+'" id="mathList'+modalIndex+'""></select>'+
		'	<button class="" type="button" onclick="addOperacao('+modalIndex+')">+</button><br />'+
		''+
		'	<input class="" type="number" id="valorLivre'+modalIndex+'" placeholder="Valor Livre" />'+
		'	<button class="" type="button" onclick="addValor('+modalIndex+')">+</button><br />'+
		''+
		'	<br />'+
		'	<span class="" id="exibeOperacao'+modalIndex+'"></span>'+
		'	<button class="" type="button" onclick="remSequencia('+modalIndex+')"><</button>'+
		'	<hr />'+
		'	<button class="" type="button" onclick="fechaModal('+modalIndex+')" style="float:left">Cancelar</button>'+
		'	<button class="" type="button" onclick="salvaModal('+modalIndex+','+prioritaria+')" style="float:right">Salvar</button>'+
		'</div>'+
		'<div class="mascara" id="mascara'+modalIndex+'" onclick="fechaModal('+modalIndex+')">'+modalIndex+'</div>';

		$('body').append(modal); // Coloca o modal no código HTML da Página (dentro do Body)

	$("#mathList"+modalIndex).html($("#mathList0").html());
	$("#varList"+modalIndex).html($("#varList0").html());

	$('.window').css("display","none");

    var alturaTela = $(document).height();
    var larguraTela = $(window).width();
 
    //colocando o fundo preto
    $('#mascara'+modalIndex).css({'width':larguraTela,'height':alturaTela});
    $('#mascara'+modalIndex).fadeIn(1000); 
    $('#mascara'+modalIndex).fadeTo("slow",0.8);

    var left = ($(window).width() / 2)-($("#window"+modalIndex).width()  / 2);
    var top = ($(window).height() / 2)-($("#window"+modalIndex).height() / 2);
 
    $("#window"+modalIndex).css({'top':top,'left':left});
    $("#window"+modalIndex).show();


    $("#mascara"+modalIndex).click( function(){
        $(this).hide();
        $("#window"+modalIndex).hide();
    });

    modalIndex++;

    // return retorno;
}

function fechaModal(modalID){
	var quem = quemChamou.pop();
	arrayExibicao[quem].pop();

	$("#mascara"+modalID+"").hide();
	$("#window"+modalID+"").hide();
	if(quem!=0){ $("#window"+quem+"").show(); }

	atualizaTexto(quem);
}

function salvaModal(modalID,prioritaria){
	var quem = quemChamou.pop();
	if(prioritaria===1) prioritaria = ")";
	else if(prioritaria===2) prioritaria = "]";
	else if(prioritaria===3) prioritaria = "}";

	arrayExibicao[quem].push(arrayExibicao[modalID].join(""));
	if(prioritaria===0) { arrayExibicao[quem].push(")"); }
	else { arrayExibicao[quem].push(prioritaria); }

	$("#mascara"+modalID+"").hide();
	$("#window"+modalID+"").hide();
	if(quem!=0){ $("#window"+quem+"").show(); }

	while(temp.length){ temp.pop(); }
	atualizaTexto(quem);
}