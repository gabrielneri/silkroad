function getTotal() {
    let total = 0;
    const valores = document.querySelectorAll('.valor');
    const subTot = document.querySelectorAll('.subtotal');
    const qtd = document.querySelectorAll('.input-qtd');
    for(let i = 0; i < valores.length; i++) {
        let thestring = valores[i].innerHTML;
        let thenum = thestring.replace( /^\D+/g, ''); 
        let num = parseFloat(thenum) * qtd[i].value;
        subTot[i].textContent = "R$" + num.toFixed(2);
        total += num;
    }
    return total.toFixed(2);
}

function updateTotal() {
    document.getElementById("total-price").textContent = "Total: R$" + getTotal();
}

const produtos = document.querySelectorAll('.produto-cart');
const remover = document.querySelectorAll('.remove');
for(let i = 0; i < remover.length; i++) {
    remover[i].addEventListener('click', function() {
        produtos[i].remove();
        updateTotal();
    });
}

/*
function sendForm() {
    let form = document.createElement("form");
    let inputTotal = document.createElement("input"); 
    let  = document.createElement("input");  
    form.method = "POST";
    form.action = "";   
    inputTotal.value =
    element1.name="un";
    form.appendChild(element1);  

    element2.value=pw;
    element2.name="pw";
    form.appendChild(element2);

    form.submit();
}
*/