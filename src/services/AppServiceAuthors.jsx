import axios from "axios";

export async function deleteData(id) {
  try {
    await axios.delete(`http://localhost:3000/author/${id}`);
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
}

export async function postAuthor(value) {
  try {
    const response = await axios.post(`http://localhost:3000/author`, {
      value: value.value,
      label: value.label,
      biografi: value.biografi,
    });
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
}

export async function patchAuthor(value) {
  try {
    const response = await axios.patch(
      `http://localhost:3000/books/${value.id}`,
      {
        value: value.value,
        label: value.label,
        biografi: value.biografi,
      }
    );
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
}
