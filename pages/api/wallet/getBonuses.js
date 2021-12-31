export default async function getBonuses(req,res) {

   let obj = { "jsonrpc": "2.0", "id": 0, method: "get_bonuses", params:  {"session_id": req.cookies.tocken ? req.cookies.tocken : "" , "details": true }}
    //  console.log(obj , "______BONUS__URl_PROFILE" , process.env.NEXT_PUBLIC_BONUSES)
          const data = await fetch(`${process.env.NEXT_PUBLIC_BONUSES}`,{ 
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