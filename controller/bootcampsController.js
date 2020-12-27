const Bootcamp = require('../models/Bootcamp');
const AppError = require('../utils/errorResponse');
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
    next(e)
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


   if(Bootcamp){
    res.status(200).json({ 
      bootcamp,
      success : true, 
      msg: `Show Bootcamp ${req.params.id}`,
     });

  }

    
  }catch(e){
  next(e)
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
      success: true,
      data: newBootcamp
    })
 
  }catch(e){
      next(e)
   
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
    next(e)
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
    // if(bootcamp) {
    //   res.status(200).json({ success : true, msg: `Deleted Bootcamp ${req.params.id}` });
    // }else{
    //   next(new AppError('Not found!', 404))
    // }
      
      
      bootcamp ? res.status(200).json({ success : true, msg: `Deleted Bootcamp ${req.params.id}` }) : next(new AppError('Not found!', 404))
 }catch(e){
   next(e)
 }
}