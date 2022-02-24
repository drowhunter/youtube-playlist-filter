class PlaylistFilter {
    constructor() {
      this.playlist = null;
      this.observer = null;
    }

    attachNav (html) {
        document.querySelector(this.navParentSelector).insertAdjacentHTML(this.navPosition, html);        
    }  
    
    doFilter(text) {
        if(!this.playlist) {
            return;
        }
        
        const rgx = new RegExp(text, 'i'); 
        
        const playlists = [...this.playlist.querySelectorAll('div[id=playlists] > *')];
        
        playlists.forEach(item => { 
            const title = this.getTitle(item);
            if(rgx.test( title )){
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }    
        });        
    }

    getTitle(item) {
        return item.querySelector('yt-formatted-string[id=label]').innerText;
    }    

    addFilterTextInput(){
        var headerTitle = this.playlist.querySelector('div[id=header] > div[id=title]');
        headerTitle.innerHTML = '';

        var filterBox = document.createElement('input');
        filterBox.placeholder = "Save to...";        
        const self = this;
        filterBox.addEventListener('input', function(evt){
            self.doFilter(this.value);
        });
        
        headerTitle.appendChild(filterBox);
    }

    waitForPlaylistCreationAsync() {
        return new Promise((resolve, reject) => {
            
            if(this.observer) {
                reject("Already watching");
            } 

            this.observer = new MutationObserver(records => {
                
                const popup = records[1].target;

                this.playlist = popup.querySelector('ytd-add-to-playlist-renderer');
                
                if (playlist) {
                    this.observer.disconnect();
                    this.observer = null;
                   
                    this.addFilterTextInput();

                    resolve();
                } else {
                    reject("playlist not found");
                }
                
            });

            const par = document.querySelector('ytd-popup-container');
            if(par) {
                this.observer.observe(par, { childList: true, subtree: false });
            } else {
                throw new Error("ytd-popup-container not found")
            }
            
        });
    }
}


(async function()
{
    const playlistFilter = new PlaylistFilter();
    try{
        await playlistFilter.waitForPlaylistCreationAsync();
    } catch(err) {
        console.error(err);
    }    
})();