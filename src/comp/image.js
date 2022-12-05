import React, { useState } from 'react';

const Image = ({imgs = [{url: ""}]}) => {
    const [image , setimage] = useState(imgs[0].url);
    

    const mainimage = (url)=>{
        setimage(url);
    }


  return (
    <div className='row'>
        <div className='col-4'>
    {imgs.map((img , index)=>{
        return (
        <div className="row">
            <div className="col">
                <figure>
                    <img src={img.url} alt={img.filename} key={index} style={{width:"100%"}} onClick={()=>mainimage(img.url)}/>
                    {/* <figcaption>{img.filename}</figcaption> */}
                </figure>
            </div>
        </div>
        )
    })}
    </div>
    
    <div className='col-7'>
        <img src={image} alt={""} style={{width:"100%",justifyContent: "space-evenly",alignItems: "center",border: "1rem solid #f4f4f4"}}/>
    </div>
    </div>
  )
  
}

export default Image;