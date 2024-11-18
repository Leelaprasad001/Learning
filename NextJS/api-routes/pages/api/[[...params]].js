export default function Handler(req, res){
    const params = req.query.params
    res.status(200).json(params)
}