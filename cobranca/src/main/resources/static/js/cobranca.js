$('#confirmacaoExclusaoModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var codigoTitulo = button.data('codigo') 
  var descricaoTitulo = button.data('descricao');
  
  var modal = $(this);
  var form = modal.find('form');
  var action = form.data('url-base');
  if(!action.endsWith('/')){
	  action += '/';
  }
  form.attr('action', action + codigoTitulo);
  
  modal.find('.modal-body span').html('Tem certeza que deseja excluir o título <strong>' +descricaoTitulo+ '</strong>?');
  
});

$(function(){
	$('[rel="tooltip"]').tooltip();
	$('.js-currency').maskMoney({thousands:'.', decimal:',', allowNegative: true, allowZero: true});
	$('.js-atualizar-status').on('click', function(event){
		event.preventDefault();//não permite fazer o comportamento padrão do link
		
		var botaoReceber = $(event.currentTarget);//evento que identifica o click no link
		var urlReceber = botaoReceber.attr('href'); //recupera o valor do link do atributo href do thymeleaf
		
		//devolve um response
		//response adiciona outras funcoes
		var response = $.ajax({
			url: urlReceber, //onde envia as requisições
			type: 'PUT' //GET, POST, PUT E DELETE
		});
		
		//recebe o que voltou do servidor, no caso o titulo que foi recebido e alterado o status
		response.done(function(e){
			var codigoTitulo = botaoReceber.data('codigo');
			$('[data-role=' + codigoTitulo + ']').html('<span class="label label-success">' + e + '</span>')
			botaoReceber.hide(); //some com o bt da tela após a requisição ajax
		});
		
		//Caso falhe a requisição ajax
		response.fail(function(e){
			console.log(e);
			alert('Erro recebendo cobrança');
		});
		
		//console.log('urlReceber', urlReceber);
	})
});

