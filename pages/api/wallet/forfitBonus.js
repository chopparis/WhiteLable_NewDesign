export default async function forfitBonus(req,res) {

  let clientObj = { ...req.body.params }
  clientObj["session_id"] = req.cookies.tocken ? req.cookies.tocken : ""


   let obj = { "jsonrpc": "2.0", "id": 0, method: "forfeit_bonus", params:  {"session_id": req.cookies.tocken ? req.cookies.tocken : "" , "details": true }}
    //  console.log(obj , "______BONUS__URl_PROFILE" , process.env.NEXT_PUBLIC_BONUSES)
          const data = await fetch(`${process.env.NEXT_PUBLIC_FORFIT_BONUSE}`,{ 
            method: 'POST', 
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify(obj),
        });
       const json = await data.json();
      //  console.log(json , "____json__BONUS__URl_PROFILE" , process.env.NEXT_PUBLIC_BONUSES)
       res.send(json)

 }

 export const config = {
  api: {
    bodyParser: true,
    externalResolver: true,
  },
}