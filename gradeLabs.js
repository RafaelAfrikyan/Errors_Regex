let studentLabs2 = [
    {
    student: "Blake",
    myCode: function (num) {
    return Math.pow(num, num);
    },
},
    {
    student: "Jessica",
    runLab: function (num) {
    return Math.pow(num, num);
    },
},
    {
    student: "Mya",
    runLab: function (num) {
    return num * num;
    },
},
    ];


    function gradeLabs (studentLabs2) {
    try{
        for(let i = 0; i<studentLabs2.length; i++){
            let lab = studentLabs2[i];
            let result = lab.runLab(4);
            console.log(`${lab.student} code work: result === ${result}`)
        }
    }
    catch (err) {
        console.log( `You have a ${err.name}, ${err.message}`)
    }
}
gradeLabs(studentLabs2)

