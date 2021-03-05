export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'

export const MAGIC_PUBLIC_KEY = process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || 'pk_test_82FD48F7D6D88565'
export const STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PK || 'pk_test_51IOo4kC0cjeh0Su7eO9RbTGHcJh631Wpf2gLOWdUJy8KOI3vp9WQgWSg6Ewfy30EJhLmUbuiSpB5znFyiOWLP2CY00uC3ezSwC'


/**
 * Given an image return the Url
 * Works for local and deployed strapis
 * @param {any} image
 */

 export  const fromImageToUrl = (image) => {
    if (!image) {
        return "/vercel.svg";
    }
    // else

    if (image.url.indexOf("/") === 0 ) 
    {
        return `${API_URL}${image.url}`;
    }

    return image.url
 }