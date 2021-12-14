const postData = async (url, data) => {
   const result = await fetch(url, {
       method: 'POST',
       headers: {
        'Content-type': 'application/json'
       },
       body: JSON.stringify(data)
   })

   if (!result.ok) {
      alert('Проверьте данные ввода')
   }
   return result.json();
}

export{postData};