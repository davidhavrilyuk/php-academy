bookmarksApp.factory("dataService", function () {
   return {
        bookmarks: [
            {id:1, name: "Google", url: "google.com.ua", description:"Worldwide search"},
            {id:2, name: "Facebook", url: "facebook.com", description:"Social network"},
            {id:3, name: "Angular", url: "angularjs.com", description:"Angular framework"}
        ]
    }; 
});
