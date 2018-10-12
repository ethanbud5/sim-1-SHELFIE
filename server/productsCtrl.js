
function getAll(req,res){
    // console.log(req.app.get("db"))
    req.app
        .get("db")
        .get_inventory()
        .then(response=>{
            res.status(200).json(response)
        })
        .catch(err=>res.status(500).json(err));
}
function getOne(req,res){
    req.app
        .get("db")
        .get_item(req.params.id)
        .then(response=>{
            res.status(200).json(response)
        })
        .catch(err=>res.status(500).json(err));
}
function addItem(req,res){
    req.app
        .get("db")
        .add_item([req.body.name,
            req.body.price,
            req.body.img
        ])
        .then(response=>{
            res.sendStatus(200)
        })
    .catch(err=>{res.status(500).json(err)
        console.log(err)
    });
}
function deleteItem(req,res){
    //console.log("deleting...")
    req.app
        .get("db")
        .delete_item(req.params.id)
        .then(response=>{
            res.sendStatus(200)
        })
        .catch(err=>res.status(500).json(err));
}
function editItem(req,res){
    req.app
        .get("db")
        .edit_item([req.body.id,
            req.body.name,
            req.body.price,
            req.body.img
        ])
        .then(response=>{
            res.sendStatus(200)
        })
        .catch(err=>{res.status(500).json(err)
            console.log(err)
        });
}


module.exports = {
    getAll,
    getOne,
    addItem,
    deleteItem,
    editItem

}