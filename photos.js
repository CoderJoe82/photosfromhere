function illBeWatchingYou() {
    let illBeWatchingYouChecker = "";
    let everyBreathYouTakeYouTakeEveryMoveYouMake = ""
    let everyBondYouBreakEveryStepYouTake = "";

    function ohCantYouSeeYouBelongToMe(position) {
        illBeWatchingYouChecker = " you!";
        document.getElementById("whereTigerPicturesAreFrom").textContent += illBeWatchingYouChecker;
        const long = position.coords.longitude;
        const lat = position.coords.latitude;
        everyBreathYouTakeYouTakeEveryMoveYouMake = `https://shrouded-mountain-15003.herokuapp.com/https://flickr.com/services/rest/?api_key=efc5c7ce96c0bbcab3dfcfabb9143e13&format=json&nojsoncallback=1&method=flickr.photos.search&safe_search=1&per_page=5&lat=${lat}&lon=${long}&text=tigers`
        fetch(everyBreathYouTakeYouTakeEveryMoveYouMake)
            .then(res => res.json())
            .then(data => {
                function constructImageUrl(photosToView) {
                    return `https://farm${photosToView.farm}.staticflickr.com/${photosToView.server}/${photosToView.id}_${photosToView.secret}.jpg`
                }
                const firstPictureIKnowYouWant = constructImageUrl(data.photos.photo[0]);
                document.getElementById("imgSpot").src = firstPictureIKnowYouWant;
            });
    }

    function howMyPoorHeartAchesWithEveryStepYouTake(position) {
        illBeWatchingYouChecker = " Tokyo!";
        document.getElementById("whereTigerPicturesAreFrom").textContent += illBeWatchingYouChecker;
        everyBondYouBreakEveryStepYouTake = "https://shrouded-mountain-15003.herokuapp.com/https://flickr.com/services/rest/?api_key=efc5c7ce96c0bbcab3dfcfabb9143e13&format=json&nojsoncallback=1&method=flickr.photos.search&safe_search=1&per_page=5&lat=35.6895&lon=139.69171&text=tigers"
        fetch(everyBondYouBreakEveryStepYouTake)
            .then(res => res.json())
            .then(data => {
                function constructImageUrl(photosToView) {
                    return `https://farm${photosToView.farm}.staticflickr.com/${photosToView.server}/${photosToView.id}_${photosToView.secret}.jpg`
                }
                const firstPictureIKnowYouWant = constructImageUrl(data.photos.photo[0]);
                document.getElementById("imgSpot").src = firstPictureIKnowYouWant;
            });
    }
    navigator.geolocation.getCurrentPosition(ohCantYouSeeYouBelongToMe, howMyPoorHeartAchesWithEveryStepYouTake);
}
illBeWatchingYou();