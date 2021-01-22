

/*******************kilometerToMeter Problem****************************/
function kilometerToMeter(meter){
    var meter , kilometer ;
    kilometer = meter * 1000 ; // 1 Kilometer is 1000 meter.

    if(kilometer > 0){  
        return kilometer ; 
    }else if(kilometer < 0){
        return "Value is Negetive";
    }else{
        return "Value is zero";
    }
    

}

kilometerToMeter(10); //Expecting value as meter for 10 kilometer.



/*******************budgetCalculator Problem****************************/
function budgetCalculator(watch , phone , laptop){
    
    var watch , phone , laptop ;

    //each value given here is price of that product..
    totalCost = (watch * 50) + (phone * 100) + (laptop * 500);  

    //condition against negetive value
    if(watch > 0 || phone > 0 || laptop > 0){  
        return totalCost ; 
    }else if(watch < 0 || phone < 0 || laptop < 0){
        return "Those things that you buying it can't be negetive";
    }else{
        return "You didn't buy anything";
    }
    


}

budgetCalculator(1,5,10);



/*******************hotelCost Problem****************************/
function hotelCost(stayDays){
    var taka  = 0 ;
    if(stayDays <= 10){
        taka = 100 * 10 ;
    }else if(stayDays > 10 && stayDays <= 20){
        var first10Days = 100 * 10 ;
        var remaining = stayDays - 10 ;
        var second10Days = remaining * 80;
        taka = first10Days +second10Days ;

    }else if(stayDays > 20){
        var first10Days = 100 * 10;
        var second10Days = 80 * 10;
        var remaining = stayDays - 20 ;
        var afterTwentyDays = remaining * 50 ;
        taka = first10Days + second10Days + afterTwentyDays;

    }

    //condition against negetive value

    if(stayDays > 0){  
        return taka ; 
    }else if(stayDays < 0){
        return "Days you are staying can't be Negetive";
    }else{
        return "You wont stay anymore!";
    }
     


}

hotelCost(26);  //Hotel cost for 26 days 


/*******************megaFriend Problem****************************/
function megaFriend(arr){
    var longest="";

    for(var i=0;i<arr.length;i++){
        //Condition for compiring length of the given name
       if (arr[i].length>longest.length){
          longest=arr[i];
       }
    } 
    return longest;
 }
 
 megaFriend(["shahin", "jonayed", "mashfeque", "messi"]);



