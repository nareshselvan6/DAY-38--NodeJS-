
const bookings=[
    {id:1,customername: "robert" , customerid: 1,bookingdate: "01.06.2024",starttime: "12am", endtime:"3pm" ,roomid:1, bookingstatus:"booked" },
    {id:2,customername: "bruce", customerid:2,bookingdate: "01.06.2024",starttime: "1pm", endtime: "5pm" ,roomid:2 , bookingstatus:"booked" },
    {id:3,customername: "henry",customerid: 3,bookingdate: "01.06.2024",starttime: "2pm ", endtime:"6pm " ,roomid:3 , bookingstatus:"booked" },
    {id:4,customername: "robert" ,customerid: 1,bookingdate: "05.06.2024",starttime: "1pm", endtime:"3pm" ,roomid:1, bookingstatus:"booked" },
]


export const newbooking=(req,res)=>{
    const{customername,date,starttime,endtime,roomid,bookingstatus}=req.body;

    const booking={
        customername:customername,
        date:date,
        starttime:starttime,
        endtime:endtime,
        roomid:roomid,
        bookingstatus:bookingstatus

    }
    bookings.push(booking)


    res.status(200).json({message:"booking completed",data:booking})
}

export const listallcustomers=(req,res)=>{

    const allbookings=bookings.map(ele=>({
        customername: ele.customername,
        roomname: ele.roomid,
        date: ele.date,
        starttime: ele.starttime,
        endtime: ele.endtime
    }))

    res.status(200).json({data:allbookings})
}

export default bookings;