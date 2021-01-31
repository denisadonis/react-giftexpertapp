export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=ee0Ui6HwhIMZyggrD0G3bpdZRXRaFd3f`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifts = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
            type: img.type
        }
    });

    return gifts;
}