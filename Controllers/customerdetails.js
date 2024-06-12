import bookings from './booking.js'

const customerdetails = [
  { id: 1, name: "robert" },
  { id: 2, name: "bruce" },
  { id: 3, name: "henry" },
];


export const persondetails=(req,res)=>{
  res.status(200).json({customerdetails})
}

export const customerbooked=(req,res)=>{
  const personid=req.params.customerid;
  
  // console.log(personid);

  const customerbooking=bookings.filter(ele=>ele.customerid==personid)
  if (!customerbooking) {
    return res.status(404).json({ message: "No booking found for this customer." });
  }
  res.status(200).json({data:customerbooking})
}