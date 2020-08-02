function setColor(){
  var container = document.getElementById('container'), 
    r = document.getElementById('r'),
    g = document.getElementById('g'),
    b = document.getElementById('b'),
    r_out = document.getElementById('r_out'),
    g_out = document.getElementById('g_out'),
    b_out = document.getElementById('b_out'),
    hex_out = document.getElementById('hex');
    
    r_out.innerHTML=r.value;
    g_out.innerHTML=g.value;
    b_out.innerHTML=b.value;
  var r_hex = parseInt(r.value, 10).toString(16).toUpperCase(),
      g_hex = parseInt(g.value, 10).toString(16).toUpperCase(),
      b_hex = parseInt(b.value, 10).toString(16).toUpperCase(),
      hex = "#" + pad(r_hex) + pad(g_hex) + pad(b_hex);
      var heading=document.getElementById('heading');
      
  if((r.value>220 && g.value>220) || (r.value>220 && b.value>220) || (b.value>220 && g.value>220))
  {
      heading.style.color="#000000";
      heading.style.borderBottomColor="#000000";
  }
  else
  {
      heading.style.color="#FFFFFF";
      heading.style.borderBottomColor="#FFFFFF";
  }
  container.style.background = hex;
  hex_out.value = hex;
}
function pad(x)
{
     x=x+'';
     return x.length>=2?x:new Array(2-x.length+1).join('0')+x;
}
        
