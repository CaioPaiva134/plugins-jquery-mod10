$(document).ready(function () {

    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false,
        dots: true, 
        infinite: true
    });

    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    $('#form').validate({
        rules: {
            nome: { required: true },
            email: { required: true, email: true },
            telefone: { required: true },
            cpf: { required: true },
            endereco: { required: true },
            cep: { required: true },
            },
        messages: {
            nome: "Por favor, informe seu nome completo",
            email: "Por favor, informe um endereço de e-mail válido",
            telefone: "Por favor, informe seu telefone",
            cpf: "Por favor, informe um CPF válido",
            endereco: "Por favor, informe seu endereço completo",
            cep: "Por favor, informe um CEP válido"
        },

        submitHandler: function (form) {
            alert('Cadastro concluído com sucesso!');
            form.reset();
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incorretos ou vazios`);
            }
        },
    });
});