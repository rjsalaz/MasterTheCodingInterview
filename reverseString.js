function reverse(str)
{

  if(!str || str.length < 2  || typeof str !== 'string')
  {
    return "Error"
  }

  const reversedString = []; 


  for( let i = str.length - 1; i >= 0; i--)
  {
    reversedString.push(str[i]);
  }


 return reversedString.join('');
}



reverse("Randy is cool")