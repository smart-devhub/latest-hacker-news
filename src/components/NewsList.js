import React,{useContext,useEffect} from 'react'
import { NewsContext } from '../context/NewsContext'

const NewsList = () => {
    const {getNews,getDesc,news} =useContext(NewsContext)

    useEffect(()=>{
        getNews()
    })
    return (
        <>
        <div className="list-group h-100" >
        {news.length
          ? news.map((news) => (
              <a
                key={news.id}
                href="#!"
                onClick={() => getDesc(news.id)}
                className="list-group-item list-group-item-action text-truncate"
              >
                {news.title}
              </a>
            ))
          : null}
      </div>
    </>
    )
}

export default NewsList
