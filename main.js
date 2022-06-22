/* Programa para calcular el presupuesto de una partida, en el cual se pretende estimar 
el gasto futuro de energía eléctrica que se consumirá en un año, en este momento no se dispone 
de la cantidad de KWH que se consumen mes a mes, pero el proyecto final va a tener la posibilidad de 
cargar los datos y estimar un presupuesto anual, semestral o por cualquier periodo,
actualmente el programa me permite elegir un mes de inicio y otro de finalización, en el que suma 
el consumo mensual de cada uno y lo multiplica por valor=2 que sería el valor del kilowatt hora*/ 



let eneroKwh=1000;
let febreroKwh=2000;
let marzoKwh=3000;
let abrilKwh=4000;
let mayoKwh=5000;
let junioKwh=6000;





const inicio = () =>{
    let desdePeriodoKwh=parseInt(prompt("ingrese mes de inicio de periodo \n1)enero\n2)febrero\n3)marzo\n4)abril\n5)mayo\n6)junio"))
    switch (desdePeriodoKwh) {
        case 1:
        return eneroKwh;       
        case 2:
        return febreroKwh;
        case 3:
        return marzoKwh;       
        case 4:
        return abrilKwh;       
        case 5:
        return mayoKwh;      
        case 6:
        return junioKwh; ;
        };
    };


    function fin(){
    let hastaPeriodoKwh=parseInt(prompt("ingrese mes de fin de periodo \n1)enero\n2)febrero\n3)marzo\n4)abril\n5)mayo\n6)junio"))
    switch (hastaPeriodoKwh) {
        case 1:
        return eneroKwh;
        case 2:
        return febreroKwh;
        case 3:
        return marzoKwh;
        case 4:
        return abrilKwh;
        case 5:
        return mayoKwh;
        case 6:
        return junioKwh;
        
    };
    };
   
    const presupuestoTotal=(a,b,c)=>{ 
    let presupuesto;
    if(inicio1==eneroKwh && fin1==eneroKwh){presupuesto=(eneroKwh)*valor}
    if(inicio1==eneroKwh && fin1==febreroKwh){presupuesto=(eneroKwh+febreroKwh)*valor}
    if(inicio1==eneroKwh && fin1==marzoKwh){presupuesto=(eneroKwh+febreroKwh+marzoKwh)*valor}
    if(inicio1==eneroKwh && fin1==abrilKwh){presupuesto=(eneroKwh+febreroKwh+marzoKwh+abrilKwh)*valor}
    if(inicio1==eneroKwh && fin1==mayoKwh){presupuesto=(eneroKwh+febreroKwh+marzoKwh+abrilKwh+mayoKwh)*valor}
    if(inicio1==eneroKwh && fin1==junioKwh){presupuesto=(eneroKwh+febreroKwh+marzoKwh+abrilKwh+mayoKwh+junioKwh)*valor};
    
    if(inicio1==febreroKwh && fin1==febreroKwh){presupuesto=(febreroKwh)*valor}
    if(inicio1==febreroKwh && fin1==marzoKwh){presupuesto=(febreroKwh+marzoKwh)*valor}
    if(inicio1==febreroKwh && fin1==abrilKwh){presupuesto=(febreroKwh+marzoKwh+abrilKwh)*valor}
    if(inicio1==febreroKwh && fin1==mayoKwh){presupuesto=(febreroKwh+marzoKwh+abrilKwh+mayoKwh)*valor}
    if(inicio1==febreroKwh && fin1==junioKwh){presupuesto=(febreroKwh+marzoKwh+abrilKwh+mayoKwh+junioKwh)*valor};
   
    if(inicio1==marzoKwh && fin1==marzoKwh){presupuesto=(marzoKwh)*valor}
    if(inicio1==marzoKwh && fin1==abrilKwh){presupuesto=(marzoKwh+abrilKwh)*valor}
    if(inicio1==marzoKwh && fin1==mayoKwh){presupuesto=(marzoKwh+abrilKwh+mayoKwh)*valor}
    if(inicio1==marzoKwh && fin1==junioKwh){presupuesto=(marzoKwh+abrilKwh+mayoKwh+junioKwh)*valor};
    
    if(inicio1==abrilKwh && fin1==abrilKwh){presupuesto=(abrilKwh)*valor}
    if(inicio1==abrilKwh && fin1==mayoKwh){presupuesto=(abrilKwh+mayoKwh)*valor}
    if(inicio1==abrilKwh && fin1==junioKwh){presupuesto=(abrilKwh+mayoKwh+junioKwh)*valor};

    if(inicio1==mayoKwh && fin1==mayoKwh){presupuesto=(mayoKwh)*valor}
    if(inicio1==mayoKwh && fin1==junioKwh){presupuesto=(mayoKwh+junioKwh)*valor};

    if(inicio1==junioKwh && fin1==junioKwh){presupuesto=(junioKwh)*valor}
 
    return presupuesto;
    };
    
    
    let inicio1=inicio();
    let fin1=fin(); 
    let valor=2;
    alert(presupuestoTotal(inicio1,fin1,valor) );
    





