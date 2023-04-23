export const getIngredients = async (image: File) => {
    let data = new FormData()
    data.append('file', image)

    const response = await fetch("http://127.0.0.1:8000/ingredient/detect", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        body: data, // body data type must match "Content-Type" header
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
}