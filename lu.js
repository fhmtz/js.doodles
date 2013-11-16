function check(i,f){
    var result;
    
    if (f<10){
        result = true;
    }else{
        if(i == 1 && f == 10){
            result = true;
        }else{
            result = false;
        }
    }
    
    console.log('entered check with i:' + i + ' and f:' + f + ' equals: ' + result);
};

bocaRegistro = 
[0,
29.5,
29.5,
29,
28.5,
28,
27.5,
27,
26.5,
26,
29,
29,
29,
28.5,
28,
27.5,
27,
26.5,
26,
28.5,
28.5,
28.5,
28.5,
28,
27.5,
27,
26.5,
26,
28,
28,
28,
28,
28,
27.5,
27,
26.5,
26,
27.5,
27.5,
27.5,
27.5,
27.5,
27.5,
27,
26.5,
26]
;

array = [
        {'i':1,'f':10, 'cipc':27},
        {'i':10,'f':19, 'cipc':27.8},
        {'i':19,'f':18, 'cipc':27.3},
        {'i':28,'f':37, 'cipc':26.8},
        {'i':1,'f':2, 'cipc':27},
        {'i':2,'f':11, 'cipc':28.3},
        {'i':10,'f':11, 'cipc':27.8},
        {'i':11,'f':20, 'cipc':27.8},
        {'i':19,'f':20, 'cipc':27.3},
        {'i':20,'f':29, 'cipc':27.3},
        {'i':28,'f':29, 'cipc':26.8},
        {'i':29,'f':38, 'cipc':26.8},
        {'i':2,'f':3, 'cipc':27},
        {'i':3,'f':12, 'cipc':27.8},
        {'i':11,'f':12, 'cipc':27.8},
        {'i':12,'f':21, 'cipc':27.8},
        {'i':20,'f':21, 'cipc':27.3},
        {'i':21,'f':30, 'cipc':27.3},
        {'i':29,'f':30, 'cipc':26.8},
        {'i':30,'f':39, 'cipc':26.8},
        {'i':3,'f':4, 'cipc':26.5},
        {'i':4,'f':13, 'cipc':27.3},
        {'i':12,'f':13, 'cipc':27.8},
        {'i':13,'f':22, 'cipc':27.3},
        {'i':21,'f':22, 'cipc':27.3},
        {'i':22,'f':31, 'cipc':27.3},
        {'i':30,'f':31, 'cipc':26.8},
        {'i':31,'f':40, 'cipc':26.8},
        {'i':4,'f':5, 'cipc':26},
        {'i':5,'f':14, 'cipc':26.8},
        {'i':13,'f':14, 'cipc':27.3},
        {'i':14,'f':23, 'cipc':26.8},
        {'i':22,'f':23, 'cipc':27.3},
        {'i':23,'f':32, 'cipc':26.8},
        {'i':31,'f':32, 'cipc':26.8},
        {'i':32,'f':41, 'cipc':26.8},
        {'i':5,'f':6, 'cipc':25.5},
        {'i':6,'f':15, 'cipc':26.3},
        {'i':14,'f':15, 'cipc':26.8},
        {'i':15,'f':24, 'cipc':26.3},
        {'i':23,'f':24, 'cipc':26.8},
        {'i':24,'f':33, 'cipc':26.3},
        {'i':32,'f':33, 'cipc':26.8},
        {'i':33,'f':42, 'cipc':26.3},
        {'i':6,'f':7, 'cipc':25},
        {'i':7,'f':16, 'cipc':25.8},
        {'i':15,'f':16, 'cipc':26.3},
        {'i':16,'f':25, 'cipc':25.8},
        {'i':24,'f':25, 'cipc':26.3},
        {'i':25,'f':34, 'cipc':25.8},
        {'i':33,'f':34, 'cipc':26.3},
        {'i':34,'f':43, 'cipc':25.8},
        {'i':7,'f':8, 'cipc':24.5},
        {'i':8,'f':17, 'cipc':25.3},
        {'i':16,'f':17, 'cipc':25.8},
        {'i':17,'f':26, 'cipc':25.3},
        {'i':25,'f':26, 'cipc':25.8},
        {'i':26,'f':35, 'cipc':25.3},
        {'i':34,'f':35, 'cipc':25.8},
        {'i':35,'f':44, 'cipc':25.3},
        {'i':8,'f':9, 'cipc':24},
        {'i':9,'f':18, 'cipc':24.8},
        {'i':17,'f':18, 'cipc':25.3},
        {'i':18,'f':27, 'cipc':24.8},
        {'i':26,'f':27, 'cipc':25.3},
        {'i':27,'f':36, 'cipc':24.8},
        {'i':35,'f':36, 'cipc':25.3},
        {'i':36,'f':45, 'cipc':24.8},
        {'i':37,'f':38, 'cipc':25},
        {'i':38,'f':39, 'cipc':26.3},
        {'i':39,'f':40, 'cipc':26.3},
        {'i':40,'f':41, 'cipc':26.3},
        {'i':41,'f':42, 'cipc':26.3},
        {'i':42,'f':43, 'cipc':26.3},
        {'i':43,'f':44, 'cipc':25.8},
        {'i':44,'f':45, 'cipc':25.3},  
    ];

console.log('checking bocaRegistro...');
for (i = 1; i < 46; i++){
    element = bocaRegistro[i];
    console.log(i + "    " + element);
}

console.log('');
console.log('checking array...');
for (i = 0; i < array.length; i++){
    element = array[i];
    //console.log(element.i + "    " + element.f + "    " + element.cipc);
    var substract = 0;
    
    if(check(element.i, element.f)){
        substract = 2.5;
    }else{
        substract = 1.2;
    }
    
    element.cfpc = bocaRegistro[element.f] - substract;
    console.log(element.i + "    " + element.f + "    " + element.cipc + "    " + element.cfpc);

}





