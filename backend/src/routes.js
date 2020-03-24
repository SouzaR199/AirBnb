const express = require("express");
const multer = require("multer");
const uploadConfig = require('./config/upload');

const SessionControler = require("./controllers/SessionController");
const SpotController = require("./controllers/SpotController");
const DashboardController = require("./controllers/DashboardController");
const BookingController = require("./controllers/BookingController");
const ApprovalControlller = require("./controllers/ApprovalController");
const RejectionController = require("./controllers/RejectionController");


const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionControler.store);

routes.get('/spots', SpotController.index);
routes.post('/spots',upload.single('thumbnail'), SpotController.store);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store); 

routes.post('/bookings/:booking_id/approvals', ApprovalControlller.store);
routes.post('/bookings/:booking_id/rejections', RejectionController.store);


module.exports = routes;  