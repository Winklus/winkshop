import Order from "../models/orderModel.js";
import asyncHandler from "../middleWares/asyncHandler.js";
import Product from "../models/productModel.js"

// @desc    Create a New Order
// @route   Post /api/orders
// @access  Private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if(orderItems && orderItems.length === 0){
    res.status(400)
    throw new Error("No order items")
  }else{
    const order = new Order({
      orderItems: orderItems.map((x) => ({
        ...x,
        product: x._id,
        _id: undefined,
      })),
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });
    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
    // res.status(201).json({
    //   _id: createdOrder._id,  // Send back the order ID
    //   ...createdOrder.toObject(), // Send the rest of the created order details
    // });
  }

});



// @desc    Get logged in User order
// @route   Get /api/orders/mine
// @access  Private
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({user: req.user._id}).sort({ createdAt: -1 });
  res.status(200).json(orders);
});

// @desc    Get order by Id
// @route   Get /api/orders/:id
// @access  Private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate("user", "name email");
if(order){
  res.status(200).json(order)
}else{
  res.status(404);
  throw new Error("order not found");
}

});

// @desc    Update order to pay
// @route   Put /api/orders/:id/pay
// @access  Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if(order){
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    };

    const updatedOrder = await order.save();
    res.status(200).json(updatedOrder);
  }else{
    res.status(404);
    throw new Error("order not found");
  }
});


// @desc    Update order to deliver
// @route   put /api/orders/:id/deliver
// @access  Private/admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if(order){
    order.isDelivered = true;
    order.deliveredAt = Date.now();

    const updatedOrder = await order.save();
    res.status(200).json(updatedOrder);
  }
  else{
    res.status(404);
    throw new Error("order not found");
  }

});

// @desc    Get all orders
// @route   Get /api/orders
// @access  Private/admin
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({}).populate("user", "id name");
  res.status(200).json(orders);

});


export {
addOrderItems,
 getMyOrders,
 getOrderById, 
 updateOrderToPaid, 
 updateOrderToDelivered,
 getOrders};



