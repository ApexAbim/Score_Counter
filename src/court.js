    var homepts=0;  
    var awaypts=0;
    
    function three()
        {
            homepts+=3;
            document.getElementById("hpts").innerHTML=homepts;
        }

    function two()
        {
            homepts+=2;
            document.getElementById("hpts").innerHTML=homepts;
        }


    function one()
        {
            homepts+=1;
            document.getElementById("hpts").innerHTML=homepts;
        }

function threee()
        {
            awaypts+=3;
            document.getElementById("apts").innerHTML=awaypts;
        }

    function twoo()
        {
            awaypts+=2;
            document.getElementById("apts").innerHTML=awaypts;
        }


    function onee()
        {
            awaypts+=1;
            document.getElementById("apts").innerHTML=awaypts;
        }


function result()
        {
            if(homepts>awaypts)
                {
                    var result1="HOME TEAM WINS"
                    document.getElementById("results").innerHTML=result1;
                }
            else if(homepts==awaypts)
                {
                    var result1="IT'S A TIE"
                    document.getElementById("results").innerHTML=result1;
                }
            else
            {
                var result1="AWAY TEAM WINS"
                    document.getElementById("results").innerHTML=result1;
            }
        }

function reset()
    {
        document.getElementById("hpts").innerHTML=0;
        document.getElementById("apts").innerHTML=0;
        document.getElementById("results").innerHTML="";
        homepts=0;
        awaypts=0;
        
    }
