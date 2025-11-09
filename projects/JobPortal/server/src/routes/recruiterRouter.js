import express from 'express';
import { isRecruiter, Protect } from '../middlewares/authmiddle.js';
import { GetPostedJobs ,AddNewJobs } from '../controller/recruitercontroller.js';
// import AddNewJobs from '../controller/recruitercontroller.js';


const router = express.Router();

router.post('/add-new-job', Protect, isRecruiter, AddNewJobs);
router.get('/get-posted-jobs', Protect, isRecruiter, GetPostedJobs);


export default router;