const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '3f08a29b',
            s: searchTerm,
        }
    });

    return response.data.Search;
};

const input = document.querySelector('input');

const onInput = async event => {
    const movies = await fetchData(event.target.value);
    
};
input.addEventListener('input', debounce(onInput, 500));