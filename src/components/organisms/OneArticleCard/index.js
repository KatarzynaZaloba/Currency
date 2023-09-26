import React, {useState} from 'react';
import "./style.css";
import Image from "../../../images/React.jpeg";

const OneArticleCard = ({picture, tag, title, avatar, authorName, date, onLoad}) => {
    // console.log("OneArticleCard is rendering");
    const tags = tag ? tag.split(", ").map(tag => tag.trim()) : [];
    // const [isImageLoading, setIsImageLoading] = useState(true);

    // const handleImageLoad = () => {
    //     setIsImageLoading(false);
    // };

    return (
        <>
            <div
                className=" sm:h-[350px] md:h-[350px] overflow-hidden border-2 rounded-md m-2 transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30">
                <div className="p-2 rounded-md">
                    {/*{isImageLoading && <div>Ładowanie...</div>} /!* Pokaż spinner lub inny komponent podczas ładowania obrazka *!/*/}
                    <img src={picture ? picture : Image}
                         alt={title}
                         className="object-contain rounded-md"
                         //onLoad={onLoad}
                         // onLoad={() => console.log('Obrazek załadowany!')}
                         // style={isImageLoading ? { display: 'none' } : {}}
                    />
                </div>
                <div className="py-2 px-4 text-left">
                    {tags && (
                        tags.map((tag, index) => (
                            <span
                                key={index}
                                className="my-2 text-work-sans rounded-md bg-emerald-100 text-emerald-500 text-sm p-1 mr-1 font-medium">
                            {tag}
                        </span>
                        ))
                    )}
                    <h3 className="mb-1 mt-2 text-work-sans font-semibold text-2xl">{title}</h3>
                </div>
                <div className="px-4 pb-4 flex justify-start items-end">
                    {/*<img src={Logo} className="rounded-full w-[36px] mr-2" alt="logo"/>*/}
                    {/*<p className="text-xs text-zinc-700 font-medium mr-2 text-work-sans p-0">Katarzyna Żałoba</p>*/}
                    <p className="text-xs text-zinc-700 text-work-sans p-0">{date}</p>
                </div>
            </div>
        </>
    )
}

export default OneArticleCard;
