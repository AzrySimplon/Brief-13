//fetch as many images as required and returns their id
async function fetchImages(nbr){
    const returnArray = [];
     return fetch(`https://picsum.photos/v2/list?page=2&limit=${nbr}`)
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                returnArray.push(element.id);
            })
            return returnArray;

        })
        .catch(error => {console.log(error)});
}

//get all images id with number of uses
export async function getArrayImagesId(nbr){
    const nbrDiffImages = nbr / 2;
    const returnArray = [];

    const idImages = await fetchImages(nbrDiffImages); //return array of images

    for (let i = 0; i < idImages.length; i++) {
        const id = idImages[i];
        returnArray.push([1, id]);
    }
    return returnArray;
}
