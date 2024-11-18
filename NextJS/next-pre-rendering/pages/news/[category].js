//used for ssr with dynamic parameters and getServerSide context

function ArticleListByCategory({ articles, category }){
    return (
        <>
            <h1>
                Showinf for category <i>{category}</i> 
            </h1>
            {articles.map(article => (
                <div key={article.key}>
                    <h2>
                        {article.id} {article.title} | {article.category}
                    </h2>
                    <p>{article.description}</p>
                    <hr />
                </div>
            ))}
        </>
    )
}
export default ArticleListByCategory;

export async function getServerSideProps(context){
    const { params, req, res, query } = context
    console.log(query)
    console.log(req.headers.cookie)
    res.setHeader('Set-Cookie', ['name=Leela Prasad'])

    const { category } = params
    const response = await fetch(
        `http://localhost:4000/news?category=${category}`
    )
    const data = await response.json()

    return {
        props : {
            articles : data,
            category
        },
    }
}