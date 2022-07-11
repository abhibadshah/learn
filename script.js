var count =0;
var flag =0;
function checkPhoneNumber(event){
	
	let l = document.getElementById("phoneNumber").value;
	if(l.length ==10 && !isNaN(l))
	{
		flag=1;
	 count =1;
	 }
else{
flag=0;
}

};

	 if(flag==0){
		 document.getElementById("phoneNumber_Warning").innerHTML = "Phone Number must be 10 digits";
	 }
function checkCardNumber(event){
	
	let l = document.getElementById("cardNumber").value;
	if(l.length ==10 && !isNaN(l))
	{
		flag=1;
	 count =1;
	 }else{
flag=0;
}
	 
};
if(flag==0){
		 document.getElementById("cardNumber_Warning").innerHTML = "Card Number must be 16 digits";
	 }