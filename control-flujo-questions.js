const textPaecda = document.getElementsByClassName("23_i")[0].previousElementSibling.textContent;


const controlarFlujo = (activo)=>{

    const questions = document.getElementsByClassName('question');
    const sesvr = questions[5].getElementsByClassName('6_i')[0].value;
    const aqla = questions[6].getElementsByClassName('7_i')[0].parentElement;
    
    const uoacpc = questions[8].getElementsByClassName('9_i')[0].value;
    const rqh = questions[9].getElementsByClassName('10_i')[0].parentElement;

    if(activo == 5){
        if(sesvr == 0){
            activo++;
        }
    }

    if(activo == 8){
        if(uoacpc == 0){
            activo++;
        }
    }

    return activo;
}