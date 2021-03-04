function login()
	{
		var uname = document.getElementById("email").value;
		var pwd = document.getElementById("pwd1").value;
        
        if (uname == "admin" && pwd == "admin") {
          
            window.open('table_dashboard.html')
        }
        else if(uname=='')
		{
        	alert("enter the username");
		}
		else if(pwd=='')
		{
			alert("enter the password");
		}
        else {
            alert("Enter valid user and password")
        }
	
	}	