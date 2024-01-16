import { useState, useEffect } from "react";

//Components
import { NewsItem } from "./NewsItem";


export const NewsBoard = ({ category }) => {

    const [articles, setArticles] = useState([]);

    const startGetNews = async() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${ category }&apiKey=${ import.meta.env.VITE_API_KEY }`;

        const resp = await fetch(url);
        const data = await resp.json();
        //console.log( data.articles );

        setArticles( data.articles );
    }

    useEffect(() => {
        startGetNews();
    }, [ category ]);
    

    return (
        <div>
            <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
            {
                articles.map((news, index) => {
                    return (
                        <NewsItem 
                            key={ index } 
                            title={ news.title } 
                            description={ news.description } 
                            src={ news.urlToImage } 
                            url={ news.url }
                        />
                    )
                })
            }
        </div>
    )
}
