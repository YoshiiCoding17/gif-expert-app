

export const GifItem = ({url,title}) => {
  return (
    <div className="card">
        <a href={url}><img src={url} alt={title} /></a>
        <h3>{title}</h3>
    </div>
  )
}
