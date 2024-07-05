function formatThousand(x)
{
   x = x.toString();
   var pattern = /(-?\d+)(\d{3})/;
   while(pattern.test(x))
     x = x.replace(pattern, "$1,$2");
     return x;
   
}

console.log(formatThousand(100000));