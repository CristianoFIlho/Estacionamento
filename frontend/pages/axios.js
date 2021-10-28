const getBtn = document.querySelector('.get-btn');
const postBtn = document.querySelector('.post-btn');

const getData = async () => {
    axios.get().then(respose => {});
};
const sendData = async () => {
    axios.post();
};



getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);