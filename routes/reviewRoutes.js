const express=require('express');
const authController=require('./../Controllers/authController')
const reviewController=require('./../Controllers/reviewController')
const router=express.Router({mergeParams:true});

router.use(authController.protect)

router.route('/').get(reviewController.getAllReviews);
router.route('/').post(authController.restrictTo('user'),reviewController.setTourUserIds,reviewController.createReview)
router.route('/:id').get(reviewController.getReview).patch(authController.restrictTo('user','admin'),reviewController.updateReview).delete(authController.restrictTo('user','admin'),reviewController.deleteReview)
module.exports=router;


















