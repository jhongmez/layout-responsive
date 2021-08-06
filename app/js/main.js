
const contain         = document.querySelector('.content__all');
const containBranding = document.querySelector('.content__branding');
const containWeb      = document.querySelector('.content__web');
const containPhoto    = document.querySelector('.content__photo');
const containApp      = document.querySelector('.content__app');
const urlAPI          = `https://api.unsplash.com/photos`;

// Obtener todas las fotos de la API
const getAllPhotos = () => {

    const client = `${urlAPI}/?client_id=`;
    const fullURL = `${client}GQjeyiFULTNAbAtz_VFotb5oB2z3vQV7HD1GAt3Z01c`;

    fetch(`${fullURL}`)
        .then( (response) => response.json() )
        .then( (data) => {
            data.forEach( elem => {
        
                const image = document.createElement('img');
                image.className = 'img-content__width';
                image.src = elem.urls.regular;
                
                const imageTitle = document.createElement('h3');
                imageTitle.className = 'img-content__title';
                imageTitle.innerText = elem.alt_description;
                
                contain.appendChild(image);
                contain.appendChild(imageTitle);
        
            });
        })
        .catch ( err => {
            console.error(err);
        });

}
getAllPhotos();

const getBranding = () => {
    const url = `https://api.unsplash.com/search/photos`;
    const branding = `${url}?query=branding&client_id=`;
    const fullURL = `${branding}GQjeyiFULTNAbAtz_VFotb5oB2z3vQV7HD1GAt3Z01c`;

    fetch(`${fullURL}`)
        .then( (response) => response.json() )
        .then( (data) => {
            data.results.forEach( elem => {
        
                const image = document.createElement('img');
                image.className = 'img-content__width';
                image.src = elem.urls.regular;
                
                const imageTitle = document.createElement('h3');
                imageTitle.className = 'img-content__title';
                imageTitle.innerText = elem.alt_description;
                
                containBranding.appendChild(image);
                containBranding.appendChild(imageTitle);
        
            });
        })
        .catch ( err => {
            console.error(err);
        });
}
getBranding();

const getWeb = () => {
    const url = `https://api.unsplash.com/search/photos`;
    const web = `${url}?query=web&client_id=`;
    const fullURL = `${web}GQjeyiFULTNAbAtz_VFotb5oB2z3vQV7HD1GAt3Z01c`;

    fetch(`${fullURL}`)
        .then( (response) => response.json() )
        .then( (data) => {
            data.results.forEach( elem => {
        
                const image = document.createElement('img');
                image.className = 'img-content__width';
                image.src = elem.urls.regular;
                
                const imageTitle = document.createElement('h3');
                imageTitle.className = 'img-content__title';
                imageTitle.innerText = elem.alt_description;
                
                containWeb.appendChild(image);
                containWeb.appendChild(imageTitle);
        
            });
        })
        .catch ( err => {
            console.error(err);
        });
}
getWeb();

const getPhoto = () => {
    const url = `https://api.unsplash.com/search/photos`;
    const photo = `${url}?query=photo&client_id=`;
    const fullURL = `${photo}GQjeyiFULTNAbAtz_VFotb5oB2z3vQV7HD1GAt3Z01c`;

    fetch(`${fullURL}`)
        .then( (response) => response.json() )
        .then( (data) => {
            data.results.forEach( elem => {
        
                const image = document.createElement('img');
                image.className = 'img-content__width';
                image.src = elem.urls.regular;
                
                const imageTitle = document.createElement('h3');
                imageTitle.className = 'img-content__title';
                imageTitle.innerText = elem.alt_description;
                
                containPhoto.appendChild(image);
                containPhoto.appendChild(imageTitle);
        
            });
        })
        .catch ( err => {
            console.error(err);
        });
}
getPhoto();


const getApp = () => {
    const url = `https://api.unsplash.com/search/photos`;
    const app = `${url}?query=app&client_id=`;
    const fullURL = `${app}GQjeyiFULTNAbAtz_VFotb5oB2z3vQV7HD1GAt3Z01c`;

    fetch(`${fullURL}`)
        .then( (response) => response.json() )
        .then( (data) => {
            data.results.forEach( elem => {
        
                const image = document.createElement('img');
                image.className = 'img-content__width';
                image.src = elem.urls.regular;
                
                const imageTitle = document.createElement('h3');
                imageTitle.className = 'img-content__title';
                imageTitle.innerText = elem.alt_description;
                
                containApp.appendChild(image);
                containApp.appendChild(imageTitle);
        
            });
        })
        .catch ( err => {
            console.error(err);
        });
}
getApp();

function rudrSwitchTab(rudr_tab_id, rudr_tab_content) {
	// first of all we get all tab content blocks (I think the best way to get them by class names)
	var x = document.getElementsByClassName("tabcontent");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.display = 'none'; // hide all tab content
	}
	document.getElementById(rudr_tab_content).style.display = 'block'; // display the content of the tab we need
 
	// now we get all tab menu items by class names (use the next code only if you need to highlight current tab)
	var x = document.getElementsByClassName("btn btn-primary categories");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].className = 'btn btn-primary categories'; 
	}
	document.getElementById(rudr_tab_id).className = 'btn btn-primary categories active';
}