function register(){
    const name = document.getElementById("name").value;


    if(name.length < 3){
        console.error("atleast 3 character ");
    }else{
        console.log(name);
        
    }


    // if( name ==  ){
    //     console.error("your name contain numbers ");
    // }else{
    //     console.log(name);
        
    // }



    name.forEach(element => {
        if(element==1){
           console.log("name conatins number ");
           
        }
    });




    // for(let check = 0 ; check  < name.length; check++){

    //     if ( check == 1 ){
    //         // console.log("your name is smaller than 3 character ");
    //         console.error(" your name contain numbers ");
    //         return 

    //     }else{
    //         console.log(name);
            
    //     }
    // }



    // console.log(name);
    
    

}