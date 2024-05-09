function Course({ id, content, title, price, deleteButton }) {

  return (<div className="card">
    <h3>{title}</h3>
    <h5 className="price">{price}TL</h5>
    <p className="content">{content}</p>
    <button className="button" onClick={()=>{deleteButton(id)}}>sil</button>
  </div>);
}

export default Course;
