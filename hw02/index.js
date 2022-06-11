

const blogs = [
  {id: 1, title: "Bringing forward the End-of-Life Date for Node.js 16", author: "Hamit"},
  {id: 2, title: "Mathematical Aspects of Division Property", author: "Bilal"},
  {id:3, title: "Working With Wifi", author: "Ayhan"}
]

const listBlogs = () => {
  blogs.map(blog => {
    console.log(blog.title);
  })
}

const addBlog = newBlog => {
  const promiseAddBlog = new Promise((resolve, reject) => {
    blogs.push(newBlog);
    resolve(blogs);
  });

  return promiseAddBlog;
}

async function showBlogs() {
  try {
    await addBlog({id: 4, title: "Advantages of Pinia vs Vuex", author: "Ahmet"});
    listBlogs();
  } catch (error) {
    console.log(error);
  }
}

showBlogs();