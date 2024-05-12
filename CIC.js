
//compound interest calculator
function calculate(){
    const totalAmount=document.getElementById("total-amount");
    const princicpalInput=document.getElementById("principal");
    const rateInput=document.getElementById("rate");
    const yearInput=document.getElementById("year");

    let principal=Number(princicpalInput.value);
    let rate=Number(rateInput.value /100);
    let year=Number(yearInput.value);
    //if you write negative inputs or not a number
    if(principal<0 || isNaN(principal)){
        principal=0;
        princicpalInput.value=0;//this will make input values =0 if you write not a number
    }
    if(rate<0 || isNaN(rate)){
        rate=0;
        rateInput.value=0;
    }
    if(year<0 || isNaN(year)){
        year=0;
        yearInput.value=0;
    }
    const result=principal * Math.pow((1+rate),year);

    totalAmount.textContent=result.toLocaleString("hi-in",{style:"currency",currency:"INR"});
}