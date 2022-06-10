Webcam.set({ //Webcam.set - é uma função de webcam.js para observar as propriedades para a visualização da webcam
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

  camera = document.getElementById("camera"); // obtemos o elemento HTML, no qual queremos mostrar a visualização da webcam e armazená-lo dentro de uma variável

Webcam.attach( '#camera' ); //Passaremos a variável camera (que possui a div HTML) dentro de Webcam.attach().
      //assim que a página é carregada, a webcam será acionada, e receberá um popup pedindo por permissão.
function takeSnapshot()

{
    Webcam.snap(function(data_uri) {
      /* Webcam.snap() é uma função predefinida de webcam.js utilizada para obter imagens de uma webcam; essa função contém data_uri que pode ser 
utilizada para mostrar a pré-visualização de uma imagem que está sendo gerada após a captura.

Escreva a função dentro de Webcam.snap(), e passe data_uri dentro dela. E, utilizaremos
data_uri para exibir a imagem*/

        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
        //variáveis não podem ser escritas dentro de aspas simples, por isso as aspas duplas por fora.
/*● Defina a tag img
● Em seguida, fornecemos uma id a essa tag img .
Fornecemos uma id a tag img para que, depois, possamos obter a imagem dessa tag img
e utilizá-la para comparação com a do modelo.
● Agora, em src da tag img, passamos data_uri. Para que essa imagem seja atualizada
com a captura realizada e seja exibida.*/

    });
}

  console.log('ml5 version:', ml5.version); //escreva uma mensagem em console para testar se ml5.js está funcionando

  /*ml5.js auxilia no manuseio de diferentes modelos e realiza uma comparação entre o que
inserimos (imagem, áudio etc.) com o modelo e fornece o resultado.*/

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Suxq1HVkL/model.json',modelLoaded);

/*● Primeiro, definimos uma variável
● Em seguida, escrevemos o nome da biblioteca ml5.js
● Depois, escrevemos imageClassifier -
- imageClassifier é uma função predefinida de ml5.js utilizada para acionar a
função de classificação de imagem ml5.js.
● Precisamos passar dois parâmetros dentro dessa função.
- Primeiro, o link do modelo.

■ model é o modelo que criamos no teachable machine.
■ json - JavaScript Object Notation é um formato de arquivo de padrão
aberto utilizado para conter dados em um formato object. Você se
lembra de que durante as aulas de API visitamos o arquivo JSON em
Json Viewer.
■ Portanto, estamos adicionando isso ao final do link, pois, queremos
acessar apenas o modelo criado no teachable machine e nada mais
do modelo criado.

- Em seguida, um função modeLoaded para iniciar a classificação de imagem ml5.*/


  function modelLoaded() {
    console.log('Model Loaded!');
  }

  function check()
  {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
  }


function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    document.getElementById("resultObjectName").innerHTML = results[0].label;
    document.getElementById("resultObjectAccuracy").innerHTML = results[0].confidence.toFixed(3);
  }
}

/* RESUMO:
DEFINIR A CAMERA
ATIVAR A CAMERA
CAPTURAR A IMAGEM
ENVIAR PRA BIBLIOTECA RECONHECER A IMAGEM 
EXIBIR O RESULTADO DE ACORDO COM A PORCENTAGEM

*/