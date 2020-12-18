const Bootcamp = require('../models/Bootcamp');

/**
 * @Desc     Get All Bootcamps
 * @route    GET /api/v1/bootcamps
 * @access   Public
 */
exports.getBootcamps = async (req, res, next) => {
  try{
    const bootcamps = await Bootcamp.find();

    res.status(200).json({ success : true, count:bootcamps.length, bootcamps});
  }catch(e){  
    res.status(500).json({
      success: false,
      Error: e.message
    })
  }
 }

 /**
  * @Desc   Get Single Bootcamp 
  * @Route  GET /api/v1/bootcamps/:id
  * @access Public
  */

exports.getBootcamp = async (req, res, next ) => {
  try{
    const id = req.params.id;
    const bootcamp = await Bootcamp.findById(id);

   

    res.status(200).json({ 
      bootcamp,
      success : true, 
      msg: `Show Bootcamp ${req.params.id}`,
     });

  }catch(e){
   
    res.status(400).json({
      success: false,
      Error: e
    })
  }
}

 /**
  * @Desc   Create new bootcamp 
  * @Route  POST /api/v1/bootcamps
  * @access Public
  */
exports.createBootcamp = async (req, res, next) => {

  try{
    const newBootcamp =  await Bootcamp.create(req.body);
    res.status(200).json({
      sucess: true,
      data: newBootcamp
    })
 
  }catch(e){
    res.status(500).json({
      success: false,
      Error: e.message
    })
  }
}

/**
  * @Desc   Update new bootcamp 
  * @Route  PUT /api/v1/bootcamps/:id
  * @access Public
  */
 exports.updateBootcamp = async (req, res, next) => {
   try{
      const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      })
  
      res.status(200).json({ success : true, msg: `Updating Bootcamp ${req.params.id}` });
   }catch(e){
    res.status(500).json({
      success: false,
      Error: e.message
    })
   }
 }

 /**
  * @Desc   Delete new bootcamp 
  * @Route  DELETE /api/v1/bootcamps/:id
  * @access Public
  */
 exports.deleteBootcamp = async(req, res, next) => {
  try{
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

    res.status(200).json({ success : true, msg: `Deleted Bootcamp ${req.params.id}` });
 }catch(e){
  res.status(500).json({
    success: false,
    Error: e.message
  })
 }
 }