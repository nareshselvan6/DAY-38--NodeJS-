const rooms = [
  { id: 1, seats: 5, amenties: "with ac", price: 50, booking: [] },
  { id: 2, seats: 10, amenties: "with fridge", price: 40, booking: [] },
  {
    id: 3,
    seats: 15,
    amenties: "with ac and fridge",
    price: 65,
    booking: [],
  },
  { id: 4, seats: 20, amenties: "without ac", price: 35, booking: [] },
  { id: 5, seats: 25, amenties: "with ac", price: 50, booking: [] },
  {
    id: 6,
    seats: 30,
    amenties: "with ac ,fridge and washing machine",
    price: 100,
    booking: [],
  },
];

export const createrooms = (req, res) => {
  const { seats, amenties, price } = req.body;

  const newroom = {
    id: rooms.length + 1,
    seats: seats,
    amenties: amenties,
    price: price,
  };
  rooms.push(newroom);

  res.status(200).json({ data: newroom });
};

export const getroomdetails = (req, res) => {
  res.status(200).json({ data: rooms });
};

export const roombookingdata = (req, res) => {
  const roomdetails = rooms.map((ele) => ({
    roomname: ele.id,
    bookedstatus: ele.booking.length == 0 ? "available" : "booked",
    bookings: ele.booking.value,
  }));
  console.log(roomdetails);
  res.status(200).json({ data: [roomdetails] });
};


