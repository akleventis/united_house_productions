import { createClient } from "contentful";
import "../App.css";

const useContentful = () => {
  const cSpace = process.env.REACT_APP_CONTENTFUL_SPACE;
  const cAPI = process.env.REACT_APP_CONTENTFUL_API;

  const client = createClient({
    space: cSpace,
    accessToken: cAPI,
  });

  const getEvents = async () => {
    try {
      const events = await client.getEntries({
        content_type: "eventList",
        include: 10 
      });
      return events.items[0].fields.events.map((item) => {
        const e = item.fields;
        return {
          ...item.fields,
          e,
        };
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getFeaturedArtists = async () => {
    try {
        const featuredArtists = await client.getEntries({ 
          content_type: "soundcloudList",
        });
        return featuredArtists.items[0].fields.artists.map((item) => { 
          const e = item.fields
          return { 
            ...item.fields,
            e
          } 
        });
      } catch (err) {
        console.log(err); 
      } 
    } 
    
    const getAboutText = async () => {
      try {
        const textFields = await client.getEntries({
          content_type: "aboutText",
        });
      return textFields.items[0].fields
    } catch (err) {
      console.log(err);
    }
  };

  const getAboutImages = async () => {
    try {
      const image = await client.getEntries({
        content_type: "aboutImages"
      });
      return image.items[0].fields.images.map((item) => {
        const e = item.fields
        return {
          ...item.fields.file,
          e
        }
      })
    } catch (err) {
      console.log(err);
    }
  }

  const getProductImages = async () => {
    try {
      const productImages = await client.getEntries({
        content_type: "merch"
      }); 
      return productImages.items.map((item) => {
        const e = item.fields
        return {
          ...item.fields,
          e
        }
      })
    } catch (err) {
      console.log(err);
    }
  } 
  

  return { getEvents, getFeaturedArtists, getAboutText, getAboutImages, getProductImages };
};

export default useContentful;
   