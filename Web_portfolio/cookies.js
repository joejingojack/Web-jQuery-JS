    
function getCookie(c_name)
{
var c_value = document.cookie;
var c_start = c_value.indexOf(" " + c_name + "=");
if (c_start == -1)
  {
  c_start = c_value.indexOf(c_name + "=");
  }
if (c_start == -1)
  {
  c_value = null;
  }
else
  {
  c_start = c_value.indexOf("=", c_start) + 1;
  var c_end = c_value.indexOf(";", c_start);
  if (c_end == -1)
    {
    c_end = c_value.length;
    }
  c_value = unescape(c_value.substring(c_start,c_end));
  }
return c_value;
}

function setCookie(c_name,value,exdays)
{
var exdate=new Date();
exdate.setDate(exdate.getDate() + exdays);
var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
document.cookie=c_name + "=" + c_value;
}
    
function checkCookie()
{
var username=getCookie("username");
if (username!=null && username!="")
  {
      var conf = confirm("Welcome again " + username + "!" + "\n\n(Press \"Cancel\" to reset your name)");
      if(conf==true)
      {
          return false;
      }
      else
      {
          setCookie("username",username,-365);
          alert("Your cookies have been reset!");
      }
  }
else 
  {
      username=prompt("Please input your name below:","");
  if (username!=null && username!="")
    {
    setCookie("username",username,365);
    }
  }
}