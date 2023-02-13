/* function primeOrNot() {
    let what_time = 0;
    let number_undecided = document.getElementById("text_box").value;
    
    for (let i = 2; i < number_undecided; i++) {

        if (number_undecided%i != 0) {
            what_time ++
            continue ;
        }

        else {
            break ;
        }
    }

    if (what_time == number_undecided-2) {
        document.getElementById("result").innerHTML = (document.getElementById('result').value, '<br>', "    It's Prime!");
    }

    else {
        document.getElementById("result").innerHTML = (document.getElementById('result').value, '<br>', "    It's not Prime...");
    }
} */




function primeOrNot(n, m) {
    if (m > 1) {
        return (n%m == 0)? false : primeOrNot(n, m-1);         
    }
    else if (m == 1) {
        return true;
    }
    else {
        return false;
    }
}

function print_result() {
    var num = document.getElementById('text_box').value;
    document.getElementById("result").innerHTML = primeOrNot(num, num-1);
}