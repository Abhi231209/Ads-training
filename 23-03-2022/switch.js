let num=8;
switch(num){
    case 1:
        console.log("num is smaller than 5")
      break;
    case 3:
    case 4:      
    case 2:
        console.log("num is smaller than 5")
        break;

    case 5:
         console.log("num is equal to 5")
       break;
    case 7:
    case 8:
    case 9:
    case 10:               
    case 6:
        console.log('num is greater than 5')
        break;
     default:
         console.log("write number from 0 to 10")
         break;   
}