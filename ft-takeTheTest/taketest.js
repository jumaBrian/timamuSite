function check() {
    var c = 0
    var q1 = document.quiz.question1.value;
    var q2 = document.quiz.question2.value;
    var q3 = document.quiz.question3.value;
    var q4 = document.quiz.question4.value;
    var q5 = document.quiz.question5.value;
    var result = document.getElementById("result");
    var quiz = document.getElementById("quiz");
    // if (q1 == "Nearly every day") { c++ }
    // if (q2 == "Nearly every day") { c++ }
    // if (q3 == "Nearly every day") { c++ }
    // if (q4 == "Nearly every day") { c++ }
    // if (q5 == "Nearly every day") { c++ }
    // quiz.style.display = "none";

    function check() {
        alert(Swal.submit({
            title: 'Do you want to see a medical practitioner?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `No`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire('Congratulations!!', '', 'Email the practitioner to book appointment below')
            } else if (result.isDenied) {
                Swal.fire('Thank you for taking test.', )
            }
        }))
    }


    // if (c <= 3) {
    //     alert("Get help from a medical practitioner!!!");
    // } else {
    //     alert("Get better by going through self help materials!!!");
}