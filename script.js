const countValue = document.querySelector('#counter');
// ye jo countValue h vo const, type ki h.. i.e ye element const type ka h, iske andar ki value ko humlog let kr rhe h and vo baad mein change ho skti h

const increment = () => {
    // get the value from UI
    let value = parseInt(countValue.innerText);
    // update the value
    value = value + 1;
    // set the value back on to the UI
    countValue.innerText = value;
};

const decrement = () => {
    let value = parseInt(countValue.innerText);
    value = value - 1;
    countValue.innerText = value;
};