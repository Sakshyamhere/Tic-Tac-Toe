function my_func() {

    var body = document.body;
    var b1 = document.getElementById("box1").value;
    var b2 = document.getElementById('box2').value;
    var b3 = document.getElementById('box3').value;
    var b4 = document.getElementById('box4').value;
    var b5 = document.getElementById('box5').value;
    var b6 = document.getElementById('box6').value;
    var b7 = document.getElementById('box7').value;
    var b8 = document.getElementById('box8').value;
    var b9 = document.getElementById('box9').value;
    var b1btn = document.getElementById('box1');
    var b2btn = document.getElementById('box2');
    var b3btn = document.getElementById('box3');
    var b4btn = document.getElementById('box4');
    var b5btn = document.getElementById('box5');
    var b6btn = document.getElementById('box6');
    var b7btn = document.getElementById('box7');
    var b8btn = document.getElementById('box8');
    var b9btn = document.getElementById('box9');




    if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
        b2 == 'X') && (b3 == 'x' || b3 == 'X')) {

        document.getElementById('result').innerHTML = "Player X won";


        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;



        box1.style.color = 'red';
        box2.style.color = 'red';
        box3.style.color = 'red';
        result = 1;

    }
    else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
        b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
        document.getElementById('result')
            .innerHTML = "Player X won";
        b2btn.disabled = true;
        b3btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = "red";
        b4btn.style.color = "red";
        b7btn.style.color = "red";
        result = 1;
    }
    else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||
        b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('result')
            .innerHTML = "Player X won";

        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;

        b7btn.style.color = "red";
        b8btn.style.color = "red";
        b9btn.style.color = "red";
        result = 1;
    }
    else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' ||
        b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('result')
            .innerHTML = "Player X won";

        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;

        b3btn.style.color = "red";
        b6btn.style.color = "red";
        b9btn.style.color = "red";
        result = 1;
    }
    else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('result')
            .innerHTML = "Player X won";
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;

        b1btn.style.color = "red";
        b5btn.style.color = "red";
        b9btn.style.color = "red";
        result = 1;
    }
    else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
        document.getElementById('result')
            .innerHTML = "Player X won";
        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b3btn.style.color = "red";
        b5btn.style.color = "red";
        b7btn.style.color = "red";
        result = 1;
    }
    else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
        document.getElementById('result')
            .innerHTML = "Player X won";
        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b9btn.disabled = true;

        b2btn.style.color = "red";
        b5btn.style.color = "red";
        b8btn.style.color = "red";
        result = 1;
    }
    else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
        document.getElementById('result')
            .innerHTML = "Player X won";
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b4btn.style.color = "red";
        b5btn.style.color = "red";
        b6btn.style.color = "red";
        result = 1;
    }


    else if ((b1 == '0' || b1 == '0') && (b2 == '0' ||
        b2 == '0') && (b3 == '0' || b3 == '0')) {
        document.getElementById('result')
            .innerHTML = "Player 0 won";
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = "red";
        b2btn.style.color = "red";
        b3btn.style.color = "red";
        result = 1;
    }
    else if ((b1 == '0' || b1 == '0') && (b4 == '0' ||
        b4 == '0') && (b7 == '0' || b7 == '0')) {
        document.getElementById('result')
            .innerHTML = "Player 0 won";
        b2btn.disabled = true;
        b3btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = "red";
        b4btn.style.color = "red";
        b7btn.style.color = "red";
        result = 1;
    }
    else if ((b7 == '0' || b7 == '0') && (b8 == '0' ||
        b8 == '0') && (b9 == '0' || b9 == '0')) {
        document.getElementById('result')
            .innerHTML = "Player 0 won";
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;

        b7btn.style.color = "red";
        b8btn.style.color = "red";
        b9btn.style.color = "red";
        result = 1;
    }
    else if ((b3 == '0' || b3 == '0') && (b6 == '0' ||
        b6 == '0') && (b9 == '0' || b9 == '0')) {
        document.getElementById('result')
            .innerHTML = "Player 0 won";
        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b3btn.style.color = "red";
        b6btn.style.color = "red";
        b9btn.style.color = "red";
        result = 1;
    }
    else if ((b1 == '0' || b1 == '0') && (b5 == '0' ||
        b5 == '0') && (b9 == '0' || b9 == '0')) {
        document.getElementById('result')
            .innerHTML = "Player 0 won";
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;

        b1btn.style.color = "red";
        b5btn.style.color = "red";
        b9btn.style.color = "red";
        result = 1;
    }
    else if ((b3 == '0' || b3 == '0') && (b5 == '0' ||
        b5 == '0') && (b7 == '0' || b7 == '0')) {
        document.getElementById('result')
            .innerHTML = "Player 0 won";
        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b3btn.style.color = "red";
        b5btn.style.color = "red";
        b7btn.style.color = "red";
        result = 1;
    }
    else if ((b2 == '0' || b2 == '0') && (b5 == '0' ||
        b5 == '0') && (b8 == '0' || b8 == '0')) {
        document.getElementById('result')
            .innerHTML = "Player 0 won";
        b1btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b9btn.disabled = true;

        b2btn.style.color = "red";
        b5btn.style.color = "red";
        b8btn.style.color = "red";
        result = 1;
    }
    else if ((b4 == '0' || b4 == '0') && (b5 == '0' ||
        b5 == '0') && (b6 == '0' || b6 == '0')) {
        document.getElementById('result')
            .innerHTML = "Player 0 won";
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b4btn.style.color = "red";
        b5btn.style.color = "red";
        b6btn.style.color = "red";
        result = 1;
    }


    else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
        || b2 == '0') && (b3 == 'X' || b3 == '0') &&
        (b4 == 'X' || b4 == '0') && (b5 == 'X' ||
            b5 == '0') && (b6 == 'X' || b6 == '0') &&
        (b7 == 'X' || b7 == '0') && (b8 == 'X' ||
            b8 == '0') && (b9 == 'X' || b9 == '0')) {
        document.getElementById('result')
            .innerHTML = "Match Tie";
        result = 1;
    }
    else {


        if (turn == 1) {
            document.getElementById('result')
                .innerHTML = "Player X Turn";
        }
        else {
            document.getElementById('result')
                .innerHTML = "Player 0 Turn";
        }
    }

    if (result==1) {
        document.getElementById('button').innerHTML = "Restart";
        result =0;
    }
   

}

let result = 0;

function my_reset() {
    turn = 1;

    document.getElementById('box1').value = '';
    document.getElementById('box1').disabled = false;

    document.getElementById('box2').value = '';
    document.getElementById('box2').disabled = false;

    document.getElementById('box3').value = '';
    document.getElementById('box3').disabled = false;

    document.getElementById('box4').value = '';
    document.getElementById('box4').disabled = false;

    document.getElementById('box5').value = '';
    document.getElementById('box5').disabled = false;

    document.getElementById('box6').value = '';
    document.getElementById('box6').disabled = false;

    document.getElementById('box7').value = '';
    document.getElementById('box7').disabled = false;

    document.getElementById('box8').value = '';
    document.getElementById('box8').disabled = false;

    document.getElementById('box9').value = '';
    document.getElementById('box9').disabled = false;

    document.getElementById('box1').style.color = 'white';
    document.getElementById('box2').style.color = 'white';
    document.getElementById('box3').style.color = 'white';
    document.getElementById('box4').style.color = 'white';
    document.getElementById('box5').style.color = 'white';
    document.getElementById('box6').style.color = 'white';
    document.getElementById('box7').style.color = 'white';
    document.getElementById('box8').style.color = 'white';
    document.getElementById('box9').style.color = 'white';

    document.getElementById('result').innerHTML = "Player X Turn";

    if(result==0) {
        document.getElementById('button').innerHTML = "Reset";
    }

}

let turn = 1;

function my_func1() {
    if (turn == 1) {

        document.getElementById('box1').value = 'X';
        document.getElementById('box1').disabled = true;
        turn = 0;
    } else {
        document.getElementById('box1').value = '0';
        document.getElementById('box1').disabled = true;
        turn = 1;
    }

}

function my_func2() {
    if (turn == 1) {
        document.getElementById('box2').value = 'X';
        document.getElementById('box2').disabled = true;
        turn = 0;
    } else {
        document.getElementById('box2').value = '0';
        document.getElementById('box2').disabled = true;
        turn = 1;
    }

}

function my_func3() {
    if (turn == 1) {
        document.getElementById('box3').value = 'X';
        document.getElementById('box3').disabled = true;
        turn = 0;
    } else {
        document.getElementById('box3').value = '0';
        document.getElementById('box3').disabled = true;
        turn = 1;
    }

}

function my_func4() {
    if (turn == 1) {
        document.getElementById('box4').value = 'X';
        document.getElementById('box4').disabled = true;
        turn = 0;
    } else {
        document.getElementById('box4').value = '0';
        document.getElementById('box4').disabled = true;
        turn = 1;
    }

}

function my_func5() {
    if (turn == 1) {
        document.getElementById('box5').value = 'X';
        document.getElementById('box5').disabled = true;
        turn = 0;
    } else {
        document.getElementById('box5').value = '0';
        document.getElementById('box5').disabled = true;
        turn = 1;
    }

}

function my_func6() {
    if (turn == 1) {
        document.getElementById('box6').value = 'X';
        document.getElementById('box6').disabled = true;
        turn = 0;
    } else {
        document.getElementById('box6').value = '0';
        document.getElementById('box6').disabled = true;
        turn = 1;
    }

}

function my_func7() {
    if (turn == 1) {
        document.getElementById('box7').value = 'X';
        document.getElementById('box7').disabled = true;
        turn = 0;
    } else {
        document.getElementById('box7').value = '0';
        document.getElementById('box7').disabled = true;
        turn = 1;
    }

}

function my_func8() {
    if (turn == 1) {
        document.getElementById('box8').value = 'X';
        document.getElementById('box8').disabled = true;
        turn = 0;
    } else {
        document.getElementById('box8').value = '0';
        document.getElementById('box8').disabled = true;
        turn = 1;
    }

}

function my_func9() {
    if (turn == 1) {
        document.getElementById('box9').value = 'X';
        document.getElementById('box9').disabled = true;
        turn = 0;
    } else {
        document.getElementById('box9').value = '0';
        document.getElementById('box9').disabled = true;
        turn = 1;
    }

}