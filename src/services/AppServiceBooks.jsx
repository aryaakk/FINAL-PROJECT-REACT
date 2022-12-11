import axios from "axios";

export async function deleteData(id) {
  try {
    await axios.delete(`http://localhost:3000/books/${id}`);
    window.location.reload()
  } catch (error) {
    console.log(error);
  }
}

export async function postBook(value) {
  const resAuth = await axios.get(
    `http://localhost:3000/author/${value.author_id}`
  );
  const nameAuthor = resAuth.data.value;
  try {
    const response = await axios.post(`http://localhost:3000/books`, {
      title: value.title,
      author: nameAuthor,
      authorId: Number(value.author_id),
      genre: value.genre,
      cover: value.cover,
      desc: value.desc,
    });
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
}

export async function patchBooks(value) {
  const resAuth = await axios.get(
    `http://localhost:3000/author/${value.author_id}`
  );
  const nameAuthor = resAuth.data.value;
  console.log(value);
  try {
    const response = await axios.patch(
      `http://localhost:3000/books/${value.id}`,
      {
        title: value.title,
        author: nameAuthor,
        authorId: Number(value.author_id),
        genre: value.genre,
        cover: value.cover,
        desc: value.desc,
      }
    );
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
}
