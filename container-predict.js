const questionContainer = document.querySelector('#questions-container')

const diabetesContainerOption = document.querySelector('.diabetes');
const hipertensionContainerOption = document.querySelector('.hipertension');
const erContainerOption = document.querySelector('.er');

const backgroundHeader = document.querySelector('#background-header');//Seleccino el contenedor que cambia el color de fondo en el header
const formCont = document.querySelector('#form-questions');//Selecciono el formulario que contiene  las preguntas
const edadInput = document.querySelector('#edad-input');
const spinner = document.getElementById('spinner-container');

diabetesContainerOption.addEventListener('click',()=>{
    if(!questionContainer.classList.contains('hide')){
        questionContainer.classList.add('hide');
    }
    spinner.classList.remove('hide');
    setTimeout(()=>{
        spinner.classList.add('hide');
        if(questionContainer.classList.contains('hide')){
            questionContainer.classList.remove('hide');
        }
        if(activo == 0) {
            activo=1;
            questionsContainer[activo].classList.add('hide-question')
            edadInput.classList.remove('hide-question');
            activo = 0;
            inputEdad.value = "";
            btn.classList.add('hide-question')
        }
        if(activo > 0 || activo != 1){
            if(questionsContainer[activo+1]){
                questionsContainer[activo+1].classList.add('hide-question')
                edadInput.classList.remove('hide-question');
                activo = 0;
                inputEdad.value = "";
                btn.classList.add('hide-question')
                btnAnalizar.classList.add('hide-question');
            }
        }
    
        backgroundHeader.innerHTML = "";
        backgroundHeader.innerHTML = "<svg id=\"visual\" viewBox=\"0 0 2000 150\" width=\"2000\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\"><rect x=\"0\" y=\"0\" width=\"2000\" height=\"150\" fill=\"#C62368\"></rect><path d=\"M0 60L47.7 65.8C95.3 71.7 190.7 83.3 285.8 90.3C381 97.3 476 99.7 571.2 96.3C666.3 93 761.7 84 857 85.7C952.3 87.3 1047.7 99.7 1143 101C1238.3 102.3 1333.7 92.7 1428.8 91C1524 89.3 1619 95.7 1714.2 98.5C1809.3 101.3 1904.7 100.7 1952.3 100.3L2000 100L2000 151L1952.3 151C1904.7 151 1809.3 151 1714.2 151C1619 151 1524 151 1428.8 151C1333.7 151 1238.3 151 1143 151C1047.7 151 952.3 151 857 151C761.7 151 666.3 151 571.2 151C476 151 381 151 285.8 151C190.7 151 95.3 151 47.7 151L0 151Z\" fill=\"#f23882\" stroke-linecap=\"round\" stroke-linejoin=\"miter\"></path></svg>";
    },500)
    enfermedadApredecir = "diabetes";
    
    let textInitial = "";
    textInitial = textPaecda + enfermedadApredecir + "?";
    document.getElementsByClassName("23_i")[0].previousElementSibling.textContent = "";
    document.getElementsByClassName("23_i")[0].previousElementSibling.textContent = textInitial;
});
hipertensionContainerOption.addEventListener('click',()=>{
    if(!questionContainer.classList.contains('hide')){
        questionContainer.classList.add('hide');
    }
    spinner.classList.remove('hide');

    setTimeout(()=>{
        spinner.classList.add('hide');
        
        if(questionContainer.classList.contains('hide')){
            questionContainer.classList.remove('hide');
        }
        if(activo == 0) {
            activo=1;
            questionsContainer[activo].classList.add('hide-question')
            edadInput.classList.remove('hide-question');
            activo = 0;
            inputEdad.value = "";
            btn.classList.add('hide-question')
        }
        if(activo > 0 || activo != 1){
            if(questionsContainer[activo+1]){
                questionsContainer[activo+1].classList.add('hide-question')
                edadInput.classList.remove('hide-question');
                activo = 0;
                inputEdad.value = "";
                btn.classList.add('hide-question')
                btnAnalizar.classList.add('hide-question');
            }
        }
    
        backgroundHeader.innerHTML = "";
        backgroundHeader.innerHTML = "<svg id=\"visual\" viewBox=\"0 0 2000 150\" width=\"2000\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\"><rect x=\"0\" y=\"0\" width=\"2000\" height=\"150\" fill=\"#F7770F\"></rect><path d=\"M0 148L47.7 136C95.3 124 190.7 100 285.8 90.3C381 80.7 476 85.3 571.2 84.2C666.3 83 761.7 76 857 77.5C952.3 79 1047.7 89 1143 93C1238.3 97 1333.7 95 1428.8 87C1524 79 1619 65 1714.2 70C1809.3 75 1904.7 99 1952.3 111L2000 123L2000 151L1952.3 151C1904.7 151 1809.3 151 1714.2 151C1619 151 1524 151 1428.8 151C1333.7 151 1238.3 151 1143 151C1047.7 151 952.3 151 857 151C761.7 151 666.3 151 571.2 151C476 151 381 151 285.8 151C190.7 151 95.3 151 47.7 151L0 151Z\" fill=\"#ff9f0e\" stroke-linecap=\"round\" stroke-linejoin=\"miter\"></path></svg>";

    },500)
    enfermedadApredecir = "hipertension";

    let textInitial = "";
    textInitial = textPaecda + enfermedadApredecir + "?";
    document.getElementsByClassName("23_i")[0].previousElementSibling.textContent = "";
    document.getElementsByClassName("23_i")[0].previousElementSibling.textContent = textInitial;
});
erContainerOption.addEventListener('click',()=>{

    if(!questionContainer.classList.contains('hide')){
        questionContainer.classList.add('hide');
    }
    spinner.classList.remove('hide');

    setTimeout(()=>{
        spinner.classList.add('hide');

        if(questionContainer.classList.contains('hide')){
            questionContainer.classList.remove('hide');
        }

        if(activo == 0) {
            activo=1;
            questionsContainer[activo].classList.add('hide-question')
            edadInput.classList.remove('hide-question');
            activo = 0;
            inputEdad.value = "";
            btn.classList.add('hide-question')
        }
        if(activo > 0 || activo != 1){
            if(questionsContainer[activo+1]){
                questionsContainer[activo+1].classList.add('hide-question')
                edadInput.classList.remove('hide-question');
                activo = 0;
                inputEdad.value = "";
                btn.classList.add('hide-question')
                btnAnalizar.classList.add('hide-question');
            }
        }

        backgroundHeader.innerHTML = "";
        backgroundHeader.innerHTML = "<svg id=\"visual\" viewBox=\"0 0 2000 150\" width=\"2000\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\"><rect x=\"0\" y=\"0\" width=\"2000\" height=\"150\" fill=\"#135aff\"></rect><path d=\"M0 67L47.7 79.7C95.3 92.3 190.7 117.7 285.8 125.3C381 133 476 123 571.2 113.8C666.3 104.7 761.7 96.3 857 88.3C952.3 80.3 1047.7 72.7 1143 70.8C1238.3 69 1333.7 73 1428.8 70.3C1524 67.7 1619 58.3 1714.2 62.2C1809.3 66 1904.7 83 1952.3 91.5L2000 100L2000 151L1952.3 151C1904.7 151 1809.3 151 1714.2 151C1619 151 1524 151 1428.8 151C1333.7 151 1238.3 151 1143 151C1047.7 151 952.3 151 857 151C761.7 151 666.3 151 571.2 151C476 151 381 151 285.8 151C190.7 151 95.3 151 47.7 151L0 151Z\" fill=\"#4c82ff\" stroke-linecap=\"round\" stroke-linejoin=\"miter\"></path></svg>";
    },500)
    enfermedadApredecir = "enfermedad respiratoria";

    let textInitial = "";
    textInitial = textPaecda + enfermedadApredecir + "?";
    document.getElementsByClassName("23_i")[0].previousElementSibling.textContent = "";
    document.getElementsByClassName("23_i")[0].previousElementSibling.textContent = textInitial;
});