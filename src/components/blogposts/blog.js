const BlogList = document.querySelector('#blog-list');



function renderBlog(doc){
    let parentdiv = document.createElement('div');
    let titlediv = document.createElement('div');
    let authordiv = document.createElement('div');
    let contentdiv = document.createElement('div');
    let articlebutton = document.createElement('button');

    titlediv.textContent = doc.data().title;
    authordiv.textContent = doc.data().author;
    contentdiv.textContent = doc.data().content;
    articlebutton.textContent = 'To Article';

    parentdiv.appendChild(titlediv);
    parentdiv.appendChild(authordiv);
    parentdiv.appendChild(contentdiv);
    parentdiv.appendChild(articlebutton);
    BlogList.appendChild(parentdiv);
}

    db.collection('blogposts').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            renderBlog(doc);
        })
    })