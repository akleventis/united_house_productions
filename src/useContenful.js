import { createClient } from "contentful";
import "./App.css";

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
        content_type: "event",
        order: '-fields.startTime'
      });
      return events.items.map((item) => {
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
          content_type: "featuredSongs",
        });
        return featuredArtists.items[0].fields.featuredSongs.map((item) => { 
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

  const getAbout = async () => {
    try {
      const about = await client.getEntries({
        content_type: "about",
      });

      return about.items[0].fields
    } catch (err) {
      console.log(err);
    }
  };

  const getAboutImages = async () => {
    try {
      const image = await client.getEntries({
        content_type: "aboutImages"
      });
      return image.includes.Asset.map((item) => {
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
  

  return { getEvents, getFeaturedArtists, getAbout, getAboutImages, getProductImages };
};

export default useContentful;
   