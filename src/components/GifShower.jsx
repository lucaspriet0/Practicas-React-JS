

export const GifShower = ({title, url, id}) => {
  
    return (
        
    <div className="card">

        <img src={url} alt={title} ></img>
        <p>{title}</p>

    </div>
    )
}
