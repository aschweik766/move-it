# Move-it HEP 
A Physical Therapist's Personal Exercise and Home Exercise Plan Library 

# For Users
This was developed in mind with helping a PT's ability to share exercise documentation with patients during sessions more efficient. A user can search, select, print, and favorite exercises from this current library. The library was built by myself and a friend that is a PT, as we developed some custom date on several 'top' exercises she would like to share. 

![Searched Items by Name](../move-it-frontend/src/images/searches.png)

![Favorited Items](../move-it-frontend/src/images/favorites.png)

### Working MVP
I'm currently continuing my work on the scope and functionality of this project. Right now, a user can login with google login to interact with this site. There is sample size of data, from a custom API I am currently creating with a colleague that is a PT, to document, video and describe exercises, stretches and other HEPs as they are needed during sessions or for users to view/watch for assistance in home exercise programs. Currently, a user can favorite an exercise card after search, and save to their personal library. A user can also remove favorited cards. Ultimately, a user will be able to view and expand exercises saved to the library in greater detail, as well as print an exercise card to pdf upon click for printing and dispersing as desired.

### Stretch Goals
- Finding a PDF to print React package generator and implementing it in the project.
- Use of local storage to favorite/remove saved information.
- I currently am working to enable full backend capability and CRUD to this app, so that the logged in user can customize and save their favorite exercises, as well as edit, delete and create new exercise cards within the scope of their personal library. 
- Current favoriting functionality of searchable cards is saved on the user's local storage. This could work temporarily, but for full scope functionality and larger user protected data, saving these exercises within their own exercise model on my backend application is a larger goal. 
- I would also like to create and authenticate registered users that do not login with the Google callback API at this time. 
- I need to expand the current searchable exercise cards and API.
- I need to add thumbnail images to each exercise card, beside video only for printing purposes.
- Additional folder creation for groups of exercises for personalized HEP packages. 
- Send file as an email to a user, vs. printing as PDF.



### Backend Project Repo and Deploy Links:

- [Move-it HEP Backend Deployment](https://move-it-backend-hep.herokuapp.com/)
- [Move-it HEP Backend Repo](https://github.com/aschweik766/move-it-backend)


### Resources, Tools, & Tutorials/Code Alongs:
- [Google Identity Services](https://www.youtube.com/watch?v=roxC8SMs7HU&t=2s)
- [Google Oauth2 Login](https://www.youtube.com/watch?v=7K9kDrtc4S8&t=3596s)
- [Google + Passport + React Login](https://www.youtube.com/watch?v=gV5ONnqtM8Q)
- [Google Documentation](https://developers.google.com/identity/protocols/oauth2/web-server#authorization-errors-redirect-uri-mismatch)
- [Cornell Health PT exercises & data](https://health.cornell.edu/services/physical-therapy-massage/pt-exercise-videos)