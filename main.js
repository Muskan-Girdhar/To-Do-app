 
     let add=document.getElementById("add");
   
     let textshow =document.getElementById("textshow");
    
      let itemJsonArray=[];
      let tit=""
     add.addEventListener('click',updated)
    
     


    function updated()
     {
         tit=document.getElementById('title').value;
        if(!tit)
        {
            alert("please fill out the task");
            return;
        }
        
       
        if(localStorage.getItem('itemJson')==undefined)
        {
            itemJsonArray.push(tit);
            localStorage.setItem('itemJson',JSON.stringify(itemJsonArray))
        }
        else
        {  
        itemJsonArray= localStorage.getItem('itemJson');
        itemJsonArray = JSON.parse(itemJsonArray);
        itemJsonArray.push(tit);
       
        localStorage.setItem('itemJson',JSON.stringify(itemJsonArray));
        }
        display();
    } 
        function display()
       {
        itemJsonArray=localStorage.getItem('itemJson');
        itemJsonArray = JSON.parse(itemJsonArray);
       
        let parentbody = document.getElementsByClassName('parent')[0];
        let str="";
        var a=1;
        if(itemJsonArray!=undefined){

       
        itemJsonArray.forEach((element)=>{
            
            str +=` 
            <div id="myid${a}" class="row tablebody">
            <div class="col-sm-10" id="textshow${a}">${element}</div>

                <div class="col-sm-2">
                   
                    <div class="  form-check  h-100 d-flex align-items-center">
                        <img src="https://t3.ftcdn.net/jpg/03/08/40/24/240_F_308402417_GqkJdF2DQE05p84aWzYKbbMn0IKbhQFn.jpg" height="15px" ,width="15px">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                    <button class=" but1 btn ml-1  btn-danger" onclick="deleted()">x</button>

                  </div>
                  
               </div>
              </div>`
        a++;
           
        })
        parentbody.innerHTML=str;
    }
    }
      
    function deleted(item)
    {

    }
       
function check()
{
   
    
}
display();
        
        

    
   

   