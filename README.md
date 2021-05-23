# Interview-Tracker
It's a web app where one has to register himself/herself on the server by giving his/her details, after which they can practice problems under different tags related to cp.They can also read intern experience of various students and can upload the their own experience also if they want.

Dependencies used:
   * [Admin-bro](https://adminbro.com/section-modules.html)
   * [Express](http://expressjs.com/)
   * [Passport](http://www.passportjs.org/docs/)
   * [Mongoose](https://mongoosejs.com/docs/)
   * [Multer](https://www.npmjs.com/package/multer)

 
## Welcome page



## Signin/signup page
*You have to first register on this site after that you will be able to access all services.*


## User Panel(Programming-Practice)
*You can practice under all the topics mentioned. Happy coding XD
By the way if you want , you can also contribute by adding questions that you think would be helpful for others*


## Companies
*You can share your experience regarding your interview in one of these DREAM COMPANIES*


## Admin auth



## Admin panel
*We have used admin-bro library for making an iteractive admin panel. You can control who can use your site services and many other things.* 



## Interview experience
*This is how your shared experience will look like on website. We are still working on frontend though, so that it looks more RAVISHING!!!*

Inorder to run the website locally on your computer , follow the steps given below:

* Download the files from the github repo.
* Go into the downloaded folder and run the command 

`npm install`

* The above command will install all the required packages and dependencies required for the project 
* The final step is to run the following command

`npm run dev`

 After doing the above steps go to your browser and type localhost:5000.
 
 Before that you have to make a keys.js file in config folder which contain your database details like this:
 `module.exports = {
    MongoURI : 'mongodb+srv://<user>:password@cluster08451.am7f4.mongodb.net/<name of database>?retryWrites=true&w=majority'
}`
