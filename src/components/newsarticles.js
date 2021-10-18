



function articleList({props}) {
    return (
      <div className="article-list">
      {props.map((article) => (
          <div className = 'article.preview'>
            <h4> {article.articleTitle}</h4>
            <h5> {article.articleSubTitle}</h5>  
          </div>
      ))}
      </div>
    );
  }
  
  export default articleList