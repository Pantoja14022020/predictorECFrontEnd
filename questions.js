

const btn = document.getElementById("btn");
const inputEdad =  document.getElementById('edad');
const inputEdadTxt = document.querySelector('.edad-input-txt');

const btnAnalizar =  document.getElementById('btn-analizar');
const btnReiniciar =  document.getElementById('btn-reiniciar');


const questionsContainer = document.getElementsByClassName('question')

var activo;


inputEdad.addEventListener('input',e=>{
    if(e.target.value != ""){
        if(btn.classList.contains('hide-question')){
            btn.classList.remove('hide-question')
        }
    }else{
        if(!btn.classList.contains('hide-question')){
            btn.classList.add('hide-question')
        }
    }
})


const messageInputTxtEdad = document.querySelector('#message-warning');

btn.addEventListener('click',e=>{
    let txtEdad = parseInt(inputEdadTxt.value);
    if(txtEdad < 18 || txtEdad >= 100){
        messageInputTxtEdad.innerHTML = "";
        messageInputTxtEdad.innerHTML = "La edad minima es 18 años";
        messageInputTxtEdad.classList.remove('show-message');
        setTimeout(()=>{
            messageInputTxtEdad.classList.add('show-message');
        },2000);
        return;
    }

    if(activo != 20){//21
        for(let i = 0; i < questionsContainer.length; i++){
            if(!questionsContainer[i].classList.contains('hide-question')){
                activo = i;
            }
        } 
        questionsContainer[activo].classList.add('hide-question')
        questionsContainer[activo+1].classList.remove('hide-question') 
    }
    if(activo==20){//21
        btn.classList.add('hide-question')
        btnAnalizar.classList.remove('hide-question')       
    }
    
})



btnAnalizar.addEventListener('click',e=>{

    questionsContainer[questionsContainer.length-1].classList.add('hide-question')

    btnAnalizar.classList.add('hide-question')

    const i1 = parseInt( document.getElementById("edad").value);
    const i2 = parseInt(document.getElementsByClassName("2_i")[0].value);
    const i3 = parseInt(document.getElementsByClassName("3_i")[0].value);
    const i4 = parseInt(document.getElementsByClassName("4_i")[0].value);
    const i5 = parseInt(document.getElementsByClassName("5_i")[0].value);
    const i6 = parseInt(document.getElementsByClassName("6_i")[0].value);
    const i7 = parseInt(document.getElementsByClassName("7_i")[0].value);
    const i8 = parseInt(document.getElementsByClassName("8_i")[0].value);
    const i9 = parseInt(document.getElementsByClassName("9_i")[0].value);
    const i10 = parseInt(document.getElementsByClassName("10_i")[0].value);
    const i11 = parseInt(document.getElementsByClassName("11_i")[0].value);
    const i12 = parseInt(document.getElementsByClassName("12_i")[0].value);
    const i13 = parseInt(document.getElementsByClassName("13_i")[0].value);
    const i14 = parseInt(document.getElementsByClassName("14_i")[0].value);
    const i15 = parseInt(document.getElementsByClassName("15_i")[0].value);
    const i16 = parseInt(document.getElementsByClassName("16_i")[0].value);
    const i17 = parseInt(document.getElementsByClassName("17_i")[0].value);
    const i18 = parseInt(document.getElementsByClassName("18_i")[0].value);
    const i19 = parseInt(document.getElementsByClassName("19_i")[0].value);
    const i20 = parseInt(document.getElementsByClassName("20_i")[0].value);
    const i21 = parseInt(document.getElementsByClassName("21_i")[0].value);
    const i22 = parseInt(document.getElementsByClassName("22_i")[0].value);

    let entradas = {
        "edad": i1,
        "genero": i2,
        "ec": i3,
        "ocupacion": i4,
        "tresd": i5,
        "sefvr": i6,
        "ecaaqla": i7,
        "cvcspeu": i8,
        "uoafpc": i9,
        "ecarh": i10,
        "eccoccl": i11,
        "ecuoaf": i12,
        "esfhacap": i13,
        "oapb": i14,
        "oapc": i15,
        "ecraca": i16,
        "cqvuve": i17,
        "saonacctet": i18,
        "ccsa": i19,
        "hpisa": i20,
        "scmn": i21,
        "seacr": i22,
    }

    let queUrl = "";
    let queImg = "";

    if(enfermedadApredecir === "diabetes"){
        queUrl = "https://api-ec-django.onrender.com/predecirDiabetes/";
        queImg = "<img src=\"./assets/diabetes.png\" alt=\"diabetes\" width=\"100%\" height=\"30%\" />";
    }else if(enfermedadApredecir === "hipertension"){
        queUrl = "https://api-ec-django.onrender.com/predecirHipertension/";
        queImg = "<img src=\"./assets/hipertension.png\" alt=\"hipertension\" width=\"100%\" height=\"30%\" />";
    }else{//er enfermedad respiratoria
        queUrl = "https://api-ec-django.onrender.com/predecirER/";
        queImg = "<img src=\"./assets/er.png\" alt=\"er\" width=\"100%\" height=\"30%\" />";
    }

    //Mostrar el icono de spinner
    spinner.classList.remove('hide');
    
    //Mostrar mi el boton de reiniciar para comenzar de nuevo
    //btnReiniciar.classList.remove('hide-question')

    //convertimos a string el json que contienen las entradas
    entradas = JSON.stringify(entradas)

    $.ajax({
        url: queUrl,
        type: 'POST',
        data: entradas,
        success: function({prediccion}) {
          
          let p = "";

          if(prediccion == 1){
            p = "<p>Positivo</p>";
          }else{
            p = "<p>Negativo</p>";
          }

          spinner.classList.add('hide');//Esconder el spinner
          const modal = document.querySelector('#modal');
          const details = document.querySelector('#details');

          details.innerHTML = "";
          details.innerHTML = queImg + p;

          modal.classList.remove('hide-results');
        },
        error: function(xhr, status, error) {
          console.log("No se pudo hacer la peticion")
        }
      });

    /*
    async function postData(url, data) {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        return response.json();
    }

    postData("http://127.0.0.1:5000/predecir", entradas)
        .then( datos => {

            let clase_predicha = datos.clase_predicha
            let resultados = datos.resultados

            const ctx = document.getElementById('myChart');

            const data = {
                labels: ["Ninguna", "Diabetes", "Hipertensión Arterial", "Enfermedad Respiratoria"],
                datasets: [
                {
                    data: [(resultados[0]*100).toFixed(2), (resultados[1]*100).toFixed(2), (resultados[2]*100).toFixed(2), (resultados[3]*100).toFixed(2)],
                    backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0"],
                },
                ],
            };

            const options = {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                position: "bottom",
                labels: {
                    fontColor: "#333",
                    fontSize: 14,
                    boxWidth: 15,
                    usePointStyle: true,
                },
                },
            };
            
            new Chart(ctx, {
                type: "pie",
                data: data,
                options: options,
            });

        })
        .catch(error => console.error(error));*/
})


btnReiniciar.addEventListener('click',e=>{
    window.location.href = "https://idyllic-caramel-d71470.netlify.app/";
})    
