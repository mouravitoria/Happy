//create map
const map = L.map('mapid').setView([-27.222633,-49.6455874], 16);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map);

//create icon
const icon = L.icon({
    iconUrl:"/images/map-marker.svg",
    iconSize:[58, 68],
    iconAnchor:[29, 68],
})
// create and add marker
//() => {} função 'reduzida'
//code para o usuário poder marcar no mapa

let marker;

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remover icone
    marker && map.removeLayer(marker);

    //adicionar icone
    marker = L.marker([lat, lng], {icon}).addTo(map);
});

//add fotos
function addPhotoField(){
    //container #images
    const container = document.querySelector('#images');
    //duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload');
    //clone última imagem adicionada
    const cloneFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

    //verifica se tem conteúdo adicionado
    const input = cloneFieldContainer.children[0];

    if(input.value == ""){
        return
    }
    //limpar campo de add foto
    input.value = "";
    //add clone ao container de #images
    container.appendChild(cloneFieldContainer);
}

//permite que o usuário delete a foto
function deleteField(event){
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new-upload');

    if(fieldsContainer.length < 2){
        span.parentNode.children[0].value = ""
        return
    }

    span.parentNode.remove();
}

//troca sim e não
function toggleSelect(event){
    //retirar a classe .active
    document.querySelectorAll('.button-select button').forEach(function(button){
        button.classList.remove('active')
    })
    //pegar o botão clicado
    const button = event.currentTarget;
     //colocar a classe . active
    button.classList.add('active');
   
    //atualizar o input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]');

    //verificar se sim ou não
    input.value = button.dataset.value;
}