/**
 * @Desc     Get All Bootcamps
 * @route    GET /api/v1/bootcamps
 * @access   Public
 */
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ success : true, msg: 'Show All Bootcamps'});
 }

 /**
  * @Desc   Get Single Bootcamp 
  * @Route  GET /api/v1/bootcamps/:id
  * @access Public
  */

exports.getBootcamp = (req, res, next ) => {
    res.status(200).json({ success : true, msg: `Show Bootcamp ${req.params.id}` });
}

 /**
  * @Desc   Create new bootcamp 
  * @Route  POST /api/v1/bootcamps
  * @access Public
  */
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({ success: true , msg: 'Create new bootcamp'})
}

/**
  * @Desc   Update new bootcamp 
  * @Route  PUT /api/v1/bootcamps/:id
  * @access Public
  */
 exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({ success : true, msg: `Updating Bootcamp ${req.params.id}` });
 }

 /**
  * @Desc   Delete new bootcamp 
  * @Route  DELETE /api/v1/bootcamps/:id
  * @access Public
  */
 exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ success : true, msg: `Delete Bootcamp ${req.params.id}` });
 }