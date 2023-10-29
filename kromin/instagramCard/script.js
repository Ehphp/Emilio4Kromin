const usersPromise = axios.get("http://dms.cyberdelia.eu/api/v1/user");
const postsPromise = axios.get("http://dms.cyberdelia.eu/api/v1/post");
const mainContent = document.querySelector(".main-content");
displayLoginForm() 
Promise.all([usersPromise, postsPromise])
    .then(([usersResponse, postsResponse]) => {
        const usersData = usersResponse.data;
        const postsData = postsResponse.data;

        usersData.forEach(user => {

            postsData.forEach(post => {
                if (user.id === post.ownerId) {
                    const userPostsArray = [];
                    userPostsArray.push(post);
                    renderUserData(user, userPostsArray)
                    // renderNavbar(usersData)
                }
            })

        });
    })
    .catch(error => {
        console.error("CATCH", error);
    });

function renderUserData(user, userPosts) {
    // console.log(userPosts)


    const userCard = document.createElement('div');
    userCard.classList.add('user-card');
    const headerPosts = document.createElement('div');
    headerPosts.classList.add('header-posts');
    userCard.appendChild(headerPosts);
    const userImageContainer = document.createElement('div');
    headerPosts.appendChild(userImageContainer);
    userImageContainer.classList.add('user-image-container');
    const userImage = document.createElement('img');
    userImage.classList.add('user-image');
    userImage.src = user.imgSrc;
    userImageContainer.appendChild(userImage);

    const userName = document.createElement('p');
    userName.textContent = user.firstname + ' ' + user.lastname;
    headerPosts.appendChild(userName);
    userPosts.forEach(post => {
        const ownerId = post.ownerId;
        if (ownerId === user.id) {

        }
        const postCard = document.createElement('div');
        postCard.classList.add('post-card');

        const postImage = document.createElement('img');
        postImage.src = post.imgSrc;
        postCard.appendChild(postImage);
        const postAuthorDiv = document.createElement('div');
        postAuthorDiv.classList.add('post-author-div');
        postCard.appendChild(postAuthorDiv);
        const postTitle = document.createElement('p');
        postTitle.textContent = post.title;
        postAuthorDiv.appendChild(postTitle);



        const postAuthor = document.createElement('p');
        postAuthor.textContent = `Autore: ${user.firstname} ${user.lastname}`;
        postAuthorDiv.appendChild(postAuthor);

        userCard.appendChild(postCard);
    });

    mainContent.appendChild(userCard);
}

function displayLoginForm() {
 
    const formLoginDiv = document.createElement('div');
    formLoginDiv.classList.add('form-login-div');
    mainContent.appendChild(formLoginDiv);
    const formLogin = document.createElement('form');
    formLogin.classList.add('form-login');
    formLoginDiv.appendChild(formLogin);
    const inputNome = document.createElement('input');
    inputNome.type = 'text';
    
    const inputCognome = document.createElement('input');
    inputCognome.type = 'text';

    formLogin.appendChild(inputNome);
    formLogin.appendChild(inputCognome);
    const buttonLogin = document.createElement('button');
    buttonLogin.textContent = 'Login';
    formLogin.appendChild(buttonLogin);
    buttonLogin.addEventListener('click', () => {
        login(nome, cognome)
    })

}